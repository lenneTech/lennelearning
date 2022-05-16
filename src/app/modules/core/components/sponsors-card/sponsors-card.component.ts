import { Component, Input } from '@angular/core';
import { Sponsor } from '../../interfaces/sponsor.interface';

@Component({
  selector: 'app-sponsors-card',
  templateUrl: './sponsors-card.component.html',
  styleUrls: ['./sponsors-card.component.scss'],
})
export class SponsorsCardComponent {
  @Input() sponsor: Sponsor;
}
