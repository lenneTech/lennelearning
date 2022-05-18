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

  ngAfterViewInit(): void {
    if (this.currentRoute.toString() === 'true') {
      //This timeout is set to run the animation properly
      setTimeout(() => {
        this.lineLeft.nativeElement.classList.add('line-left-expanded');
        this.lineRight.nativeElement.classList.add('line-right-expanded');
      }, 200);
    }
  }
}
