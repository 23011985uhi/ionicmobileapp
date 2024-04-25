import { Component, OnInit } from '@angular/core';
import {  IonIcon, IonFab, IonFabButton, IonButton, IonButtons} from '@ionic/angular/standalone';
import {AlertController} from '@ionic/angular'
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { getDatabase, ref, set , DatabaseReference, child, push} from "firebase/database";
import { firebaseApp } from '../../shared/firebaseconfig'

@Component({
  selector: 'app-tab3-new-chat-button',
  templateUrl: './tab3newchatbutton.component.html',
  styleUrls: ['./tab3newchatbutton.component.scss'],
  
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton,IonButton,IonButtons]
})
export class NewChatButtonComponent3 {
  

  constructor(private alertController: AlertController) {
    addIcons({ add })
  }
  
  heading = 'Enter a title for the chatroom';
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.heading,
      inputs: [
        {
          name: 'alertInput',
          placeholder: 'Enter title here...',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Submit',
          handler: async (data) => {
            try {
                const db = getDatabase(firebaseApp); // Get database instance
                const databaseRef = ref(db, '/tab3/chatrooms'); // Reference to the database node
                console.log('Database reference:', databaseRef); // Log the reference
                
                // Ensure that data.alertInput is not empty or undefined
                if (!data.alertInput) {
                    console.error('Input data is empty');
                    return; // Exit the function if input data is missing
                }
                const now = new Date();
                const timestamp = now.getTime(); 
                // Save data to the database with the current ID
                const newPostRef = push(databaseRef);
                // Save data to the database with the current ID
                   await set(newPostRef, {
                   title: data.alertInput,
                   timestamp: timestamp
                 });
        
                console.log('Data saved successfully');
                console.log('Submitted data:', data.alertInput);
        
                
                
            } catch (error) {
                console.error('Error saving data:', error);
            }
        },
        },
      ],
    });
    await alert.present();
  }
}