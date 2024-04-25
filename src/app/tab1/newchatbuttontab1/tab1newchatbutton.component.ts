import { Component, OnInit } from '@angular/core';
import {  IonIcon, IonFab, IonFabButton, IonButton, IonButtons} from '@ionic/angular/standalone';
import {AlertController} from '@ionic/angular'
import { add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { getDatabase, ref, set , DatabaseReference, child} from "firebase/database";
import { firebaseApp } from '../../shared/firebaseconfig'

@Component({
  selector: 'app-tab1-new-chat-button',
  templateUrl: './tab1newchatbutton.component.html',
  styleUrls: ['./tab1newchatbutton.component.scss'],
  
  standalone: true,
  imports: [IonIcon, IonFab, IonFabButton,IonButton,IonButtons]
})
export class NewChatButtonComponent1 {
  currentId = 1;

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
                const databaseRef = ref(db, '/tab1/maths/accmaths/chats'); // Reference to the database node
                console.log('Database reference:', databaseRef); // Log the reference
                
                // Ensure that data.alertInput is not empty or undefined
                if (!data.alertInput) {
                    console.error('Input data is empty');
                    return; // Exit the function if input data is missing
                }
        
                // Save data to the database with the current ID
                await set(child(databaseRef, `${this.currentId}`), {
                    title: data.alertInput, // Set "title" property with user input
                });
        
                console.log('Data saved successfully');
                console.log('Submitted data:', data.alertInput);
        
                // Increment the current ID for the next input
                this.currentId++;
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
 