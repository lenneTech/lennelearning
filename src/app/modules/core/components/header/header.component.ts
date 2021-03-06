import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  openDropdown = false;
  currentRoute: string;
  constructor(private router: Router) {}

  switch(): void {
    this.openDropdown = !this.openDropdown;
  }

  getCurrentRoute(): string {
    return this.router.url;
  }
}
