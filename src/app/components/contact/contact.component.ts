import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  title: string = 'Small Web Studio'
  content: string = 'Outsource web studio specializes in creating interesting web solutions. We can create perfect site for your product.'
  logo: string = './assets/logo.png';
  constructor() { }

  ngOnInit(): void {
  }

}
