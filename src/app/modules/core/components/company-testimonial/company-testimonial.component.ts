import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-company-testimonial',
  templateUrl: './company-testimonial.component.html',
  styleUrls: ['./company-testimonial.component.scss'],
})
export class CompanyTestimonialComponent implements OnInit {
  @Input() review: Review = {
    imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua',
    reviewerTitle: 'Marie Musterfrau',
    reviewerSubtitle: 'CEO - Muster GmbH',
  };

  constructor() {}

  ngOnInit(): void {}
}
