import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { HeaderComponent } from '../shared/header/header.component';
import { NewChatButtonComponent } from '../shared/newchatbutton/newchatbutton.component';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, NewChatButtonComponent],
})
export class Tab3Page {
  pageTitle: string = 'Hobbies';
  constructor() {}
}
