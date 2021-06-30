import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[exerciselist]' })
export class ExerciseListDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('exerciselist');
  }
}
