import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, User, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../shared/firebaseconfig';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth;
  user: User | null = null;

  constructor(private router: Router) {
    const firebaseApp = initializeApp(firebaseConfig);
    this.auth = getAuth(); // Initialize Firebase Auth

    // Listen for authentication state changes
    onAuthStateChanged(this.auth, (user) => {
      this.user = user;
    });
  }

  async signIn(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.user = userCredential.user;
      this.router.navigateByUrl('/tabs/tab1'); // Redirect to tabs/tab1 page when signed in
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error; // Propagate the error to the caller
    }
  }

  async signOut() {
    try {
      await signOut(this.auth);
      this.user = null;
      this.router.navigateByUrl('/login'); // Redirect on successful sign-out
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  }

  // Add other authentication methods as needed
}