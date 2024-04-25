import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons,IonButton, IonMenuToggle, IonItem, IonList } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/authentication/authservice';

@Component({
  selector: 'MenuComponent',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonButton, IonMenuToggle, IonItem, IonList]
})
export class MenuComponent  {
  constructor(private authService: AuthService) {}

  signOut() {
    this.authService.signOut();
  }
}