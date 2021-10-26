import { Review } from './../../interfaces/review.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: Review;
  @Input() reversed: boolean;

  constructor() {}
}
