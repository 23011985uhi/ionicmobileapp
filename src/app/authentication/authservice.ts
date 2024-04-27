import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../shared/firebaseconfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;
  user: User | null = null;
  userUID: string | null = null; 

  constructor(private router: Router) {
    const firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(); // Initialize Firebase Auth

    // Listen for auth state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
      this.userUID = user ? user.uid : null;
    });
  }

  async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.user = userCredential.user;
      this.userUID = userCredential.user.uid;
      //console.log(this.userUID)
      this.router.navigateByUrl('/tabs/tab1'); // Redirect to tabs/tab1 page when signed in
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error; // Show error
    }
  }
  async signUp(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      this.user = userCredential.user;
      this.userUID = userCredential.user.uid;
      this.router.navigateByUrl('/tabs/tab1'); // Redirect to tabs/tab1 page when signed up
    } catch (error) {
      console.error('Sign-up error:', error);
      throw error; // Show error in nav
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.user = null;
      this.userUID = null; 
      this.router.navigateByUrl('/login'); // Redirect on successful sign-out
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  }

  
}