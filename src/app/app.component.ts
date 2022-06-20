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
    //startEdit
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log(event.url);
        console.log(event.url.slice(0, event.url.indexOf('#')));
        console.log(this.lastUrl);

        if (event.url.slice(0, event.url.indexOf('#')) !== this.lastUrl.slice(0, event.url.indexOf('#'))) {
          console.log('top');

          window.scrollTo({ left: 0, top: 0, behavior: 'auto' });
        } else {
          console.log('nav');
        }

        // if (event.url.includes('#')) {
        //   document.getElementById(event.url.slice(event.url.indexOf('#'))).scrollIntoView({ behavior: 'smooth' });
        // }
        this.lastUrl = event.url;
      }
    });
    //endEdit
  }
}
