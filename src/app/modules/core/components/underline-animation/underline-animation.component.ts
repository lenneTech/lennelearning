import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { Subscription } from 'rxjs';

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
      setTimeout(() => {
        this.lineLeft.nativeElement.classList.add('line-left-expanded');
        this.lineRight.nativeElement.classList.add('line-right-expanded');
      }, 100);
    }
  }
}
