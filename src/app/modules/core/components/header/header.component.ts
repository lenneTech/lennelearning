import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openDropdown = false;
  activatedRoute = false;
  constructor(private router: Router) {
    console.log(this.router.url);
    if (
      this.router.url === '/berufsinteressierte' ||
      this.router.url === '/praktikanten' ||
      this.router.url === '/unternehmen'
    ) {
      this.activatedRoute = true;
    }
  }

  switch() {
    this.openDropdown = !this.openDropdown;
  }
}
