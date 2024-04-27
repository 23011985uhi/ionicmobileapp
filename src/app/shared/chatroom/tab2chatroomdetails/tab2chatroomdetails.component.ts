import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonButtons, IonBackButton, IonInput,IonItem, IonFooter, IonLabel, IonList} from '@ionic/angular/standalone';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/authentication/authservice';

@Component({
  selector: 'app-chatroom-details',
  templateUrl: './tab2chatroomdetails.component.html',
  styleUrls: ['./tab2chatroomdetails.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonButtons, IonBackButton, IonInput,IonItem, IonFooter, IonLabel, IonList ]
})
export class Tab2ChatroomDetailsComponent implements OnInit {
  chatroomId: string | null = null; // Initialise all variables with types for typescript
  chatroomTitle: string | null = null; 
  message: string = ''; 
  messages: any[] = []; 
  authService!: AuthService;         // UserUID taken from authservice from signin/signup

  constructor(private route: ActivatedRoute,  authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.chatroomId = this.route.snapshot.paramMap.get('id');   //
    this.retrieveChatroomTitle();
    this.retrieveMessages();
  }

  retrieveChatroomTitle(): void {              //Retrieving title from the chatroom by ID
    const db = getDatabase();
    const chatroomTitleRef = ref(db, `tab2/chatrooms/${this.chatroomId}/title`);
  
    onValue(chatroomTitleRef, (snapshot) => {
      this.chatroomTitle = snapshot.val();
    });
  }

  retrieveMessages(): void {               // Retrieving messages from chatroom by ID
    const db = getDatabase();
    const messagesRef = ref(db, `tab2/chatrooms/${this.chatroomId}/messages`);
  
    onValue(messagesRef, (snapshot) => {       // taking snapshot of the data to display messages in the component
      const data = snapshot.val();
      if (data) {
        this.messages = Object.values(data); 
      } else {
        this.messages = [];
      }
    });
  }

  sendMessage(): void {
    if (!this.message.trim()) {
      return;
    }

    const db = getDatabase();                                                    // pushing messages data to the db by db ID
    const messagesRef = ref(db, `tab2/chatrooms/${this.chatroomId}/messages`);
    const currentUserUID = this.authService.userUID;

    push(messagesRef, {
      content: this.message,
      timestamp: new Date().toISOString(),                // Push messages, userUID and timestampt to db 
      sentBy: currentUserUID
    }).then(() => {
      console.log('Message sent successfully');
      this.message = '';
    }).catch((error) => {
      console.error('Error sending message:', error);
    });
  }

}
  
