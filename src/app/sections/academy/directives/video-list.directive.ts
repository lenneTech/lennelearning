import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[videolist]',
})
export class VideoListDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('videolist');
  }
}
