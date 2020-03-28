import { Component, OnInit } from '@angular/core';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.scss'],
})
export class CookieInfoComponent implements OnInit {
  public showCookiePrivacyInfo: boolean;

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    if (this.cookieService.cookiePrivacyAccepted === null) {
      this.showCookiePrivacyInfo = true;
    }
  }

  public changeCookiePrivacy(flag: boolean) {
    this.cookieService.cookiePrivacyAccepted = flag;
    this.showCookiePrivacyInfo = false;
  }
}
