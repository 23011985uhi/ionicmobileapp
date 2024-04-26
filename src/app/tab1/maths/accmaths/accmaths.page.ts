import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { getDatabase, ref, onValue } from 'firebase/database';
import { HeaderComponent } from '../../../shared/header/header.component';
import { NewChatButtonComponent1 } from '../../newchatbuttontab1/tab1newchatbutton.component';
import { firebaseApp } from '../../../shared/firebaseconfig'


@Component({
  selector: 'accmaths',
  templateUrl: 'accmaths.page.html',
  styleUrls: ['accmaths.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonHeader, IonToolbar, IonTitle, IonContent,IonIcon, HeaderComponent, NewChatButtonComponent1, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid]
})
export class AccMathsPage implements OnInit{
  pageTitle: string = 'Accounting & Mathematics';
  chatrooms: any[] = []; 
  constructor() {}
  
  ngOnInit(): void {
    const db = getDatabase(firebaseApp);
    const chatsRef = ref(db, 'tab1/maths/accmaths/chatrooms'); // Updated path to the chatrooms
  
    onValue(chatsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        this.chatrooms = Object.keys(data)
          .map(key => ({
            id: key,
            title: data[key].title,
            timestamp: new Date(data[key].timestamp), // Convert timestamp to Date object
            formattedTimestamp: this.formatTimestamp(new Date(data[key].timestamp)) // Format timestamp
          }))
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()); // Sort by timestamp in descending order
      } else {
        this.chatrooms = [];
      }
     // console.log('Chats:', this.chatrooms);
    }, (error) => {
      console.error('Failed to fetch data:', error);
    });
  }

  // Function to format timestamp into desired format
  formatTimestamp(timestamp: Date): string {
    let hours: number = timestamp.getHours();
    const minutes = timestamp.getMinutes().toString().padStart(2, '0');
    const day = timestamp.getDate().toString().padStart(2, '0');
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = timestamp.getFullYear().toString();
  
    let amPm = 'AM';
    if (hours >= 12) {
      amPm = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    }
    if (hours === 0) {
      hours = 12;
    }
  
    return `${hours}:${minutes} ${amPm} ${day}/${month}/${year}`;
  }
}