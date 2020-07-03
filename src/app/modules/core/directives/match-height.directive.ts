import { AfterViewChecked, Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMatchHeight]',
})
export class MatchHeightDirective implements AfterViewChecked {
  // class name to match height
  @Input()
  appMatchHeight: string | string[];

  constructor(private el: ElementRef) {}

  ngAfterViewChecked() {
    this.matchHeight(this.el.nativeElement, this.appMatchHeight);
  }

  @HostListener('window:resize')
  onResize() {
    this.matchHeight(this.el.nativeElement, this.appMatchHeight);
  }

  matchHeight(parent: HTMLElement, target: string | string[]) {
    if (!parent) {
      return;
    }

    let classNames;
    if (!Array.isArray(target)) {
      classNames = [target];
    } else {
      classNames = target;
    }

    classNames.forEach((className) => {
      // find all child elements with the selected class name
      const children = parent.getElementsByClassName(className);

      if (!children) {
        return;
      }

      // reset all children height
      Array.from(children).forEach((x: HTMLElement) => {
        x.style.height = 'initial';
      });

      // get all the child elements heights
      const itemHeights = Array.from(children).map((x) => x.getBoundingClientRect().height);

      // find out the tallest one
      const maxHeight = itemHeights.reduce((prev, curr) => {
        return curr > prev ? curr : prev;
      }, 0);

      // update the child elements height to the tallest one
      Array.from(children).forEach((x: HTMLElement) => (x.style.height = `${maxHeight}px`));
    });
  }
}
