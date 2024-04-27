import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { HeaderComponent } from '../shared/header/header.component';
import { NewChatButtonComponent3 } from './newchatbuttontab3/tab3newchatbutton.component';
import { getDatabase, ref, onValue } from "firebase/database";
import { firebaseApp } from '../shared/firebaseconfig';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid , HeaderComponent, NewChatButtonComponent3],
})
export class Tab3Page {
  pageTitle: string = 'Hobbies';
  chatrooms: any[] = [];
  constructor() {}

  ngOnInit(): void {
    const db = getDatabase(firebaseApp);
    const chatsRef = ref(db, 'tab3/chatrooms'); // Updated path to the chatrooms
  
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
    const month = (timestamp.getMonth() + 1).toString().padStart(2, '0'); 
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