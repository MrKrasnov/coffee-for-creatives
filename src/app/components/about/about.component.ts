import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {
  hat: string = './assets/about/bob-dylan1976.jpg'
  bio: string = `Bob Dylan was born on May 24, 1941 in Duluth, Minnesota. He grew up in the city of Hibbing. As a teenager, he played in various bands and with time his interest in music deepened, with a particular passion for American folk music and blues. One of his idols was the folk singer Woody Guthrie. He was also influenced by the early authors of the Beat Generation, as well as by modernist poets.

  Dylan moved to New York City in 1961 and began to perform in clubs and cafés in Greenwich Village. He met the record producer John Hammond, with whom he signed a contract for his debut album, Bob Dylan (1962). In the following years, he recorded a number of albums which have had a tremendous impact on popular music: Bringing It All Back Home and Highway 61 Revisited in 1965, Blonde On Blonde in 1966 and Blood On The Tracks in 1975. His productivity continued in the following decades, resulting in masterpieces like Oh Mercy (1989), Time Out of Mind (1997) and Modern Times (2006).`;



  constructor() { }

  ngOnInit(): void {
  }

}
