import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pageLink]',
})
export class PageLinkDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('link');
  }

  @HostListener('click') onClick(): void {
    const parent = this.el.nativeElement.parentNode;
    const classList = parent.classList.value;

    if (classList.includes('exercise-done')) {
      parent.classList.remove('exercise-done');
    } else {
      parent.classList.add('exercise-done');
    }
  }
}
