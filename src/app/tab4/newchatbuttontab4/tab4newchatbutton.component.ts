import { Component, OnInit } from '@angular/core';
import {  IonIcon, IonFab, IonFabButton, IonButton, IonButtons} from '@ionic/angular/standalone';
import {AlertController} from '@ionic/angular'
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { getDatabase, ref, set , DatabaseReference, child, push} from "firebase/database";
import { AuthService } from 'src/app/authentication/authservice';

@Component({
  selector: 'app-tab4-new-chat-button',
  templateUrl: './tab4newchatbutton.component.html',
  styleUrls: ['./tab4newchatbutton.component.scss'],
  
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton,IonButton,IonButtons]
})
export class NewChatButtonComponent4 {
  

  constructor(private alertController: AlertController, private authService: AuthService) {
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
              const userUID = this.authService.userUID; // Get the user UID from AuthService
              if (!userUID) {
                console.error('User UID is missing');
                return;
              }
              
              const db = getDatabase(); // Get database instance
              const databaseRef = ref(db, '/tab4/chatrooms'); // Reference to the database node

              // Ensure that data.alertInput is not empty or undefined
              if (!data.alertInput) {
                console.error('Input data is empty');
                return;
              }
              
              const now = new Date();
              const timestamp = now.getTime();    

              // Save data to the database with the current ID
              const newPostRef = push(databaseRef);
              await set(newPostRef, {
                title: data.alertInput,
                createdBy: userUID, // Include the userUID in createdBy field
                timestamp: timestamp
              });

             // console.log('Data saved successfully');

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