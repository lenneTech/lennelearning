import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-banner',
  templateUrl: './price-banner.component.html',
  styleUrls: ['./price-banner.component.scss'],
})
export class PriceBannerComponent {
  @Input() textBanner: string;
  @Input() titleBanner: string;
  @Input() imageHeight: string;
}
