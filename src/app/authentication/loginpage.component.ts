import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonText, IonTitle, IonContent,IonInput, IonItem, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { AuthService } from './authservice';
import { RouterModule } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../shared/firebaseconfig';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  standalone: true,
  imports: [CommonModule,FormsModule, RouterModule, IonHeader, IonToolbar, IonText, IonTitle, IonContent,IonInput, IonItem, IonIcon, IonButton, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid]
})
export class LoginPage {
  
 email: string = '';
 password: string = '';
 
 loginError: boolean = false;

 constructor(private authService: AuthService) {}

  async signIn() {
    try {
      await this.authService.signIn(this.email, this.password);
    } catch (error) {
      console.error('Sign-in error:', error);
      this.loginError = true;
    }
  }
}