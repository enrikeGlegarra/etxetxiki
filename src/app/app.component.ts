import { Component } from '@angular/core';
import {SplashScreenPage} from "./splash-screen/splash-screen.page";
import {today} from "ionicons/icons";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Stock', url: '/stock/', icon: 'albums' },
    { title: 'Pedidos', url: '/folder/outbox', icon: 'alarm' },
    { title: 'Clientes', url: '/folder/favorites', icon: 'bug' }
  ];
  rootPage: any = SplashScreenPage; // Reemplaza con el nombre correcto de tu página de carga
  date = new Date();
  constructor() {
  }

}
