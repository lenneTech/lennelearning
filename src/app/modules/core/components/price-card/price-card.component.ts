import { Component, Input } from '@angular/core';
import { DialogService } from '../../../../modules/core/services/dialog.service';
import { Subscription } from '../../interfaces/subscription.interface';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {
  @Input() isActionCard: boolean;
  @Input() subscription: Subscription;

  constructor(private dialogService: DialogService) {}

  openInquiry(): void {
    this.dialogService.openInquiryDialog(this.subscription.title);
  }
}
