import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.sass']
})
export class ErrorPageComponent implements OnInit {
  logo: string = './assets/404.png'

  constructor() { }

  ngOnInit(): void {
  }

}
