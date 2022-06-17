import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  logo: string = './assets/logo.png';
  routesNav: string[] = ['home', 'work', 'about', 'blog', 'services', 'contact']
}

