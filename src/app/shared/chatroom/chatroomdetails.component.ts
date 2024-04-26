import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonButtons, IonBackButton, IonInput,IonItem, IonFooter, IonLabel, IonList} from '@ionic/angular/standalone';
import { getDatabase, ref, onValue, push } from 'firebase/database';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/authentication/authservice';

@Component({
  selector: 'app-chatroom-details',
  templateUrl: './chatroomdetails.component.html',
  styleUrls: ['./chatroomdetails.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonContent, IonTitle, IonButton, IonButtons, IonBackButton, IonInput,IonItem, IonFooter, IonLabel, IonList ]
})
export class ChatroomDetailsComponent implements OnInit {
  chatroomId: string | null = null; // Initialize chatroomId with null
  chatroomTitle: string | null = null; 
  message: string = ''; 
  messages: any[] = []; 
  authService!: AuthService;

  constructor(private route: ActivatedRoute,  authService: AuthService) {
    this.authService = authService;
  }

  ngOnInit(): void {
    this.chatroomId = this.route.snapshot.paramMap.get('id');
    this.retrieveChatroomTitle();
    this.retrieveMessages();
  }

  retrieveChatroomTitle(): void {
    const db = getDatabase();
    const chatroomTitleRef = ref(db, `tab2/chatrooms/${this.chatroomId}/title`);
  
    onValue(chatroomTitleRef, (snapshot) => {
      this.chatroomTitle = snapshot.val();
    });
  }

  retrieveMessages(): void {
    const db = getDatabase();
    const messagesRef = ref(db, `tab2/chatrooms/${this.chatroomId}/messages`);
  
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.messages = Object.values(data); // Convert object to array
      } else {
        this.messages = [];
      }
    });
  }

  sendMessage(): void {
    if (!this.message.trim()) {
      return;
    }

    const db = getDatabase();
    const messagesRef = ref(db, `tab2/chatrooms/${this.chatroomId}/messages`);
    const currentUserUID = this.authService.userUID;

    push(messagesRef, {
      content: this.message,
      timestamp: new Date().toISOString(),
      sentBy: currentUserUID
    }).then(() => {
      console.log('Message sent successfully');
      this.message = '';
    }).catch((error) => {
      console.error('Error sending message:', error);
    });
  }

}
  // Add methods for retrieving chatroom details from database (using ID)
  // ...

  // Add methods for displaying chatroom details and messages (optional)
  // ...
