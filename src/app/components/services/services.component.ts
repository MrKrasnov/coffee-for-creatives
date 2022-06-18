import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit, OnDestroy {
  cvlogo: string = './assets/serviceLogo/cvLogo.png';
  gitlogo: string = './assets/serviceLogo/githubLogo.png';
  linkedInlogo: string = './assets/serviceLogo/linkedinLogo.png';

  gitClass: string = 'left';
  cvClass: string = 'center';
  inClass: string = 'right';
  autoSlider: any;

  constructor() { }

  changeClass() {
    this.autoSlider = interval(2500).subscribe(() => {
      let isRightIn: boolean = this.inClass == 'right',
        isLeftIn: boolean = this.inClass == 'left',
        isCenterIn: boolean = this.inClass == 'center';

      switch (true) {
        case isRightIn:
          this.inClass = 'left';
          this.gitClass = 'center';
          this.cvClass = 'right';
          break;
        case isLeftIn:
          this.inClass = 'center';
          this.gitClass = 'right';
          this.cvClass = 'left';
          break;
        case isCenterIn:
          this.inClass = 'right';
          this.gitClass = 'left';
          this.cvClass = 'center';
          break;
      }
    })
  }

  removeChangeClass() {
    this.autoSlider.unsubscribe();
  }

  ngOnInit(): void {
    this.changeClass()
  }

  ngOnDestroy(): void {
    this.removeChangeClass()
  }

}
