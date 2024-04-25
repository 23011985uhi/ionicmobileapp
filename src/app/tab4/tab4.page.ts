import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { NewChatButtonComponent4 } from './newchatbuttontab4/tab4newchatbutton.component';
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from '../shared/firebaseconfig';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, HeaderComponent, NewChatButtonComponent4, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid ],
})
export class Tab4Page {
  pageTitle: string = 'Events';
  chatrooms: any[] = [];
  constructor() {}

  ngOnInit(): void {
    const db = getDatabase(firebaseApp);
    const chatsRef = ref(db, 'tab4/chatrooms'); // Updated path to the chatrooms
  
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
      console.log('Chats:', this.chatrooms);
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
