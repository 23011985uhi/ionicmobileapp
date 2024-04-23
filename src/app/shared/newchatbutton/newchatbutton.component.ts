import { Component, OnInit } from '@angular/core';
import {  IonIcon, IonFab, IonFabButton} from '@ionic/angular/standalone';
import { NewChatModalComponent } from '../newchatmodal/newchatmodal.component';
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-new-chat-button',
  templateUrl: './newchatbutton.component.html',
  styleUrls: ['./newchatbutton.component.scss'],
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton, NewChatModalComponent]
})
export class NewChatButtonComponent {

  constructor() {
    addIcons({ add })
  }

 
}