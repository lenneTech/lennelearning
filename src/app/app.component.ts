import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from 'sinsunsan-ngx-matomo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private matomoTracker: MatomoTracker) {}

  ngOnInit() {
    this.matomoTracker.disableCookies();
  }
}
