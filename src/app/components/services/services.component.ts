import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit, OnDestroy {
  public cvlogo: string = './assets/serviceLogo/cvLogo.png';
  public gitlogo: string = './assets/serviceLogo/githubLogo.png';
  public linkedInlogo: string = './assets/serviceLogo/linkedinLogo.png';
  public linkGit: string = 'https://github.com/MrKrasnov';
  public linkLinkedin: string = 'https://www.linkedin.com/in/yuri-krasnov-9468b019b/';
  public linkCV: string = 'http://mrkrasnov.zzz.com.ua/';

  public gitClass: string = 'left';
  public cvClass: string = 'center';
  public inClass: string = 'right';
  private autoSlider: any;

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
