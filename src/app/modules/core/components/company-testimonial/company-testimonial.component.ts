import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-company-testimonial',
  templateUrl: './company-testimonial.component.html',
  styleUrls: ['./company-testimonial.component.scss'],
})
export class CompanyTestimonialComponent {
  @Input() review: Review;
}
