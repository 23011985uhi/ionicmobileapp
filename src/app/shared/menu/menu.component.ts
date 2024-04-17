import { Component, OnInit, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonMenuToggle, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'MenuComponent',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonMenuButton, IonButtons, IonMenuToggle, IonItem, IonList]
})
export class MenuComponent  implements OnInit {
  @Input() title: string = '';
  constructor() { }

  ngOnInit() {}

}