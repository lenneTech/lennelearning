import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() reviews: Review[];
  @Input() fontColor: string;
  @Input() imageWidth: string;
  @Input() imageHeight: string;
  @Input() imageAsCircle: boolean;

  constructor() {}

  ngOnInit(): void {}
}
