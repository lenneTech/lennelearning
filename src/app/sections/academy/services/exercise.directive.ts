import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[exercise]' })
export class ExerciseDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('exercise');
  }
}
