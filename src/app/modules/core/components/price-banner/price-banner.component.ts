import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntryPointService } from '../../services/entry-point.service';

@Component({
  selector: 'app-price-banner',
  templateUrl: './price-banner.component.html',
  styleUrls: ['./price-banner.component.scss'],
})
export class PriceBannerComponent {
  @Input() textBanner: string;
  @Input() titleBanner: string;

  constructor(private entryPointService: EntryPointService, private router: Router) {}
  onButtonClicked(): void {
    window.open('mailto:info@lenne.tech');
  }
}
