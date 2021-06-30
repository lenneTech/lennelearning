import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[description]',
})
export class DescriptionDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('description');
  }
}
