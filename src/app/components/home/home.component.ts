import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  storageImg: string[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i: number = 1; i <= 16; i++) {
      let img: string = `./assets/main_works/${i}.jpg`;
      this.storageImg.push(img);
    }
  }

}
