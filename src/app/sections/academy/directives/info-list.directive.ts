import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[infolist]',
})
export class InfoListDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('infolist');
  }
}
