import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {
  @Input() cardTitle: string;
  @Input() cardDescription: string;
  @Input() cardImageUrl: string;
  @Input() cardPrice: string;
  @Input() cardPriceDetails: string;
  @Input() cardSpecifics: string[];
  @Input() cardRoute: string;

  @Output() linkClickEvent = new EventEmitter<boolean>();

  constructor() {}
  onLinkClicked(): void {
    this.linkClickEvent.emit(true);
  }
  onButtonClicked(): void {
    window.open('mailto:info@lenne.tech');
  }
}
