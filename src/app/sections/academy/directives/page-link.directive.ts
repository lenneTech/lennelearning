import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pageLink]',
})
export class PageLinkDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('link');
  }
}
