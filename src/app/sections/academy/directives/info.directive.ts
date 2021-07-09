import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[info]',
})
export class InfoDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('info');
  }
}
