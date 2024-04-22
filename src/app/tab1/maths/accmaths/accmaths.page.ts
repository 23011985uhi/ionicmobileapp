import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { getDatabase, ref, onValue } from 'firebase/database';
import { HeaderComponent } from '../../../shared/header/header.component';
import { NewChatButtonComponent } from '../../../shared/newchatbutton/newchatbutton.component';
import { firebaseApp } from '../../../shared/firebaseconfig'


@Component({
  selector: 'accmaths',
  templateUrl: 'accmaths.page.html',
  styleUrls: ['accmaths.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent,IonIcon, HeaderComponent, NewChatButtonComponent, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid]
})
export class AccMathsPage implements OnInit{
  pageTitle: string = 'Accounting & Mathematics';
  chats: any[] = []; 
  

  constructor() {}
  
  ngOnInit(): void {
    // Firebase being initialised in firebaseconfig.ts

    // Access Firebase database
    const db = getDatabase(firebaseApp);
    const chatsRef = ref(db, 'tab1/maths/accmaths/chats');

    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.chats = Object.keys(data).map(key => ({
          id: key,
          title: data[key].title
        }));
      }
      console.log('Chats:', this.chats);
    }, (error) => {
      console.error('Failed to fetch data:', error);
    });
  }
}