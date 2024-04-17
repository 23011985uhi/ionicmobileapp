import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';

import { HeaderComponent } from '../shared/header/header.component';
import { NewChatButtonComponent } from '../shared/newchatbutton/newchatbutton.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonIcon, HeaderComponent, NewChatButtonComponent]
})
export class Tab2Page {
  pageTitle: string = 'Sports';
  constructor() {}

}
