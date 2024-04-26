import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonText, IonTitle, IonContent,IonInput, IonItem, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { AuthService } from '../authentication/authservice'; // Adjust the path as needed
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss'],
  standalone: true,
  imports : [CommonModule,FormsModule,  IonHeader, IonToolbar, IonText, IonTitle, IonContent,IonInput, IonItem, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid]
})
export class SignupPage {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async signUp() {
    try {
      await this.authService.signUp(this.email, this.password);
    } catch (error:any) {
      // Handle error
      this.errorMessage = error.message;
    }
  }
}