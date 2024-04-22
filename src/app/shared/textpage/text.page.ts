import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {AutosizeModule} from 'ngx-autosize'

@Component({
  selector: 'app-textpage',
  templateUrl: 'text.page.html',
  styleUrls: ['text.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, HeaderComponent, RouterLink, AutosizeModule],
})
export class TextPage {
  pageTitle: string = 'Replace with user title';
  constructor() {}

  messages = [
    {
      user: "simon",
      text: "Hey there",
      timestamp: new Date()
    },
    {
      user: "greg",
      text: "I am replying",
      timestamp: new Date()
    },
    {
      user: "david",
      text: "where to buy cheese?",
      timestamp: new Date()
    }
  ]
}