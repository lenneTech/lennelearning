import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[title]',
})
export class TitleDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('title');
  }
}
