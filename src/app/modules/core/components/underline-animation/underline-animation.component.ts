import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-underline-animation',
  templateUrl: './underline-animation.component.html',
  styleUrls: ['./underline-animation.component.scss'],
})
export class UnderlineAnimationComponent implements AfterViewInit {
  @Input() currentRoute: boolean;
  @ViewChild('lineLeft') lineLeft: ElementRef<HTMLDivElement>;
  @ViewChild('lineRight') lineRight: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.currentRoute.toString() === 'true') {
      //This timeout is set to run the animation properly - due to performance-issues after reloading the page its currently set to 700ms
      setTimeout(() => {
        this.lineLeft.nativeElement.classList.add('line-left-expanded');
        this.lineRight.nativeElement.classList.add('line-right-expanded');
      }, 700);
    }
  }
}
