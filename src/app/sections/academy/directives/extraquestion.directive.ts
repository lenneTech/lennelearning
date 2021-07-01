import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[extraquestion]' })
export class ExtraQuestionDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('extraquestion');

  }

  @HostListener('click') onClick() {
    const classList = this.el.nativeElement.classList.value;
    if (classList.includes("question-done")) {
      this.el.nativeElement.classList.remove('question-done')
    } else {
      this.el.nativeElement.classList.add('question-done');
    }

  }


}
