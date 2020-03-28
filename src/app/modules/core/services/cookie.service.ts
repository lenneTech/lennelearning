import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  isLoaded = false;
  gtmId = 'UA-XXXXXXXXX-X';

  constructor(@Inject(PLATFORM_ID) private platformId: object, private router: Router) {}

  get cookiePrivacyAccepted(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const state = localStorage.getItem(environment.prefix + '-cookie-privacy-accepted');

      if (state) {
        const boolState = JSON.parse(state);

        return boolState;
      }
    }
    return null;
  }

  set cookiePrivacyAccepted(flag: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(environment.prefix + '-cookie-privacy-accepted', JSON.stringify(flag));

      if (flag) {
        this.loadAnalyticsScript();
      }
    }
  }

  /**
   * Add script to DOM if user accepted cookie privacy
   * https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18
   */
  public loadAnalyticsScript() {
    // Only run on client side
    if (isPlatformBrowser(this.platformId)) {
      // Not added on dev environment and not if user denied
      if (environment.name !== 'prod' || !this.cookiePrivacyAccepted) {
        return;
      }

      // Check if analyticsId is set and if not already run
      if (this.gtmId === '' || this.isLoaded) {
        return;
      }

      // Create script tag
      const analyticsScript = document.createElement('script');
      analyticsScript.innerText =
        '(function(i, s, o, g, r, a, m) {i["GoogleAnalyticsObject"] = r;i[r] = i[r] || ' +
        'function() {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o),' +
        'm = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)})(window, document, ' +
        '"script", "https://www.google-analytics.com/analytics.js", "ga");ga("create", "' +
        this.gtmId +
        '", "auto");ga("send", "pageview");';
      document.documentElement.firstChild.appendChild(analyticsScript);

      // Set flag
      this.isLoaded = true;

      this.submitRoutesForAnalytics();
    }
  }

  /**
   * Subscribe to routes and refresh Google Analytics
   * https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18
   */
  private submitRoutesForAnalytics() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        (window as any).ga('set', 'page', event.urlAfterRedirects);
        (window as any).ga('send', 'pageview');
      }
    });
  }
}
