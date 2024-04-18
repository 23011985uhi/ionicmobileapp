import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonIcon,IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonRow, IonGrid, HeaderComponent, RouterLink],
})
export class Tab1Page {
  pageTitle: string = 'Subjects';
  constructor() {
    
  }
}
