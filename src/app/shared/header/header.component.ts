import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'HeaderComponent',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonItem, IonList]
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit() {}

}
