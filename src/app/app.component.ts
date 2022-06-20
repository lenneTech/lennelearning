import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatomoTracker } from 'sinsunsan-ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  lastUrl: string;
  constructor(private matomoTracker: MatomoTracker, private router: Router) {}

  ngOnInit() {
    this.matomoTracker.disableCookies();
  }
}
