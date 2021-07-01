import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[taskLink]',
})
export class LinkDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('link');
    el.nativeElement.target = '_blank';
  }
}
