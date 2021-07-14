import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[sidebarTitle]',
})
export class SidebarTitleDirective {
  constructor(el: ElementRef) {
    el.nativeElement.classList.add('sidebar-title');
  }
}
