import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[taskLink]',
})
export class LinkDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('link');
    el.nativeElement.target = '_blank';
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
