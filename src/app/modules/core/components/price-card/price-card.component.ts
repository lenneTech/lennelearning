import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogService } from '../../../../modules/core/services/dialog.service';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {
  @Input() cardPreTitle: string;
  @Input() cardTitle: string;
  @Input() cardDescription: string;
  @Input() cardImageUrl: string;
  @Input() cardPrice: string;
  @Input() cardPriceDetails: string;
  @Input() cardSpecifics: string[];
  @Input() cardRoute: string;
  @Input() subscriptionType: string;

  constructor(private dialogService: DialogService) {}

  openInquiry(): void {
    this.dialogService.openInquiryDialog(this.subscriptionType);
  }
}
