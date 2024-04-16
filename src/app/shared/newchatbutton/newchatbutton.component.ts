import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

@Component({
  selector: 'app-new-chat-button',
  templateUrl: './newchatbutton.component.html',
  styleUrls: ['./newchatbutton.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon]
})
export class NewChatButtonComponent implements OnInit {

  constructor() { 
    addIcons({ addCircle });
  }

  ngOnInit() {}

  createNewChat() {
    console.log('Create new chat clicked!');
    
  }
}