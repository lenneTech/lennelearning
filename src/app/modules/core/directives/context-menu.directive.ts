import { Directive, ElementRef, Input, OnInit, Output } from '@angular/core';

/**
 * Directive vor context menu
 * See https://stackblitz.com/edit/angular-custom-context-menu
 */
@Directive({
  selector: '[appContextMenu]',
  exportAs: 'contextMenuData',
})
export class ContextMenuDirective implements OnInit {
  @Input() contextMenuData?: any;
  @Input() appContextMenu: HTMLElement;
  @Input() xGap = 0;
  @Input() yGap = 0;
  @Input() overflowSpace = 10;
  @Input() selectors = '*';
  @Output() clickedElement: Element = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Add a click listener to the window,
    // so that we can close the context menu on left click
    window.addEventListener('click', () => {
      this.showContextMenu(null, false);
    });

    // Close context menu when escape is pressed
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.showContextMenu(null, false);
      }
    });

    // Add an event listener to listen to the 'contextmenu' event
    this.el.nativeElement.addEventListener('contextmenu', (e) => {
      // Prevent the default context menu to popup
      if (e.preventDefault) {
        e.preventDefault();
      }
      // Shows our own context menu
      this.showContextMenu(e, true);
    });
  }

  // Shows or hides our custom context menu, which is specified as a input
  showContextMenu(event, show: boolean) {
    const cm = this.appContextMenu;
    if (cm) {
      // Try to open context menu
      if (show && event && event instanceof MouseEvent) {
        // Get valid clicked element
        const clickedElement = (event?.target as HTMLElement)?.closest(this.selectors);
        if (clickedElement) {
          // Set clicked element
          this.clickedElement = clickedElement;

          setTimeout(() => {
            // Calculate top position
            let top = event.y + this.yGap;
            if (top + cm.offsetHeight + 10 > document.documentElement.clientHeight) {
              top = document.documentElement.clientHeight - cm.offsetHeight - this.overflowSpace;
            }

            // Calculate left position
            let left = event.x + this.xGap;
            if (left + cm.offsetWidth + 10 > document.documentElement.clientWidth) {
              left = document.documentElement.clientWidth - cm.offsetWidth - this.overflowSpace;
            }

            // Set position
            cm.style.top = top + 'px';
            cm.style.left = left + 'px';

            // Show
            cm.style.opacity = '100%';
            cm.style['pointer-events'] = 'auto';
          }, 1);

          return;
        }
      }

      // Close context menu
      this.clickedElement = null;
      cm.style.opacity = '0.01%';
      cm.style['pointer-events'] = 'none';
    }
  }
}
