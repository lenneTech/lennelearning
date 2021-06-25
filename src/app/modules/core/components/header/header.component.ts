import { Component, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '@lenne.tech/ng-base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuIds: string[] = ['home'];
  activeId = null;
  collapse = false;

  @ViewChild('navBar') navBar;
  @ViewChild('navButton') navButton;

  constructor(private router: Router, private scrollService: ScrollService) {
    router.events.subscribe((val) => {
      this.activeId = /^\/(#.*)?$/.test(this.router.url) ? 'home' : null;
    });
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside =
      this.navBar.nativeElement.contains(targetElement) || this.navButton.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.collapse = false;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.activeId = this.scrollService.getLastActiveElement(this.menuIds);
  }

  scrollTo(id: string) {
    this.scrollService.scrollTo(id);
    this.collapse = false;
  }
}
