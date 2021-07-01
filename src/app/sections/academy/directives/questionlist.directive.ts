import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[questionlist]' })
export class QuestionListDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('questionlist');

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
