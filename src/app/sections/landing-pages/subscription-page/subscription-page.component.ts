import { Component, Input, OnInit } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit {
  title = 'Abos und Aktionen';
  subtitle =
    'Du willst nur mal reinschnuppern? Du möchtest Dich neben Schule, Studium oder Beruf weiterbilden? Du suchst die passende Betreuung und Weiterbildung im unternehmerischen Kontext?   \n \n    Kein Problem, wir haben die passendenden Aktionen, Angebote und Abomodelle. Für individuellere Fragen und Wünsche kontaktiere uns gerne direkt.';
  imageUrl = '../../assets/images/banner-images/Analytics.svg';
  specificsIntern: string[] = [
    'Onlinevideos',
    'Aufgabenkatalog, Musterlösungen und Tipps zu allen Lernpfaden',
    'Sprechstunde Q&A',
    'Wochenmeeting',
    'Weiterempfehlung in unserem Unternehmensnetzwerk**',
  ];
  specificsCompany: string[] = [
    'Berücksichtigung des jeweiligen Unternehmenskontexts (Technologien, Zeiten, Projekte)',
    'Individuelle Betreuung',
    'Zugang zur Community',
    'Wochenmeeting',
    'Aufgabenkatalog, Musterlösungen und Tipps zu allen Lernpfaden',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'lenne.Learning - Du interessierst Dich für App- und Webentwicklung?',
      'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.'
    );
  }

  sendApplication(): void {
    window.open('mailto:info@lenne.tech');
  }
}
