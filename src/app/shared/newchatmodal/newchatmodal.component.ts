import { Component } from '@angular/core';
import {IonButton, IonContent, IonAlert} from '@ionic/angular/standalone'
@Component({
  selector: 'app-example',
  templateUrl: 'newchatmodal.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonAlert],
})
export class NewChatModalComponent {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Name',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },
  ];
}