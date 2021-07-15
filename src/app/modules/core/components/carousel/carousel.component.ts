import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() reviews: Review[] = [
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua',
      reviewerTitle: 'Marie Musterfrau',
      reviewerSubtitle: 'CEO - Muster GmbH',
    },
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua',
      reviewerTitle: 'Marie Musterfrau',
      reviewerSubtitle: 'CEO - Muster GmbH',
    },
  ];
  @Input() imageWidth = '150px';
  @Input() imageHeight = '150px';
  @Input() imageAsCircle: boolean;

  constructor() {}

  ngOnInit(): void {}
}
