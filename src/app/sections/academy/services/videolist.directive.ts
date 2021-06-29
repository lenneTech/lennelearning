import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[videolist]',
})
export class VideolistDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('videolist');
  }
}
