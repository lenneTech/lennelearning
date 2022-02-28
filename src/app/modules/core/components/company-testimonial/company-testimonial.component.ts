import { Component, Input } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-company-testimonial',
  templateUrl: './company-testimonial.component.html',
  styleUrls: ['./company-testimonial.component.scss'],
})
export class CompanyTestimonialComponent {
  @Input() review: Review = {
    imageUrl: '',
    text: 'Was uns an lenne.Tech und der Akademie besonders beeindruckt hat, ist die Effektivität in der Umsetzung. Die natürliche Auslese beim Durchlaufen der Akademie sorgt für den höchstmöglichen Eignungsgrad der Bewerber:innen. Wir haben uns so nicht nur etliche Stunden Aufwand bei der Evaluierung von Bewerbern gespart, sondern auch jede Menge Nerven beim Onboarding.',
    reviewerTitle: 'Christopher Klein & Jens Helbig \n Gründer und Geschäftsführer',
    reviewerSubtitle: 'Buuk GmbH',
  };
  @Input() review_two: Review = {
    imageUrl: '',
    text: 'Ich arbeite seit mehreren Monaten mit den Jungs zusammen. Zu Beginn haben wir über mein App-Design gesprochen. Mittlerweile gehe ich die ganze Akademie im Schnelldurchlauf durch mithilfe des schnellen Pfades für Start-Ups und erhalte so in kurzer Zeit einen Einblick in alle technischen Themen. Im Gegensatz zu anderen, vorgefertigten Programmen wird hier bei der lenne.Learning jeder individuell nach vorne gebracht',
    reviewerTitle: 'Julian Kutza \n Gründer und Geschäftsführer',
    reviewerSubtitle: 'Firework Network UG',
  };
  constructor() {}
}
