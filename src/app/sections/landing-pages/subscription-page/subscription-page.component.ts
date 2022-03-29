import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-subscription-page',
  templateUrl: './subscription-page.component.html',
  styleUrls: ['./subscription-page.component.scss'],
})
export class SubscriptionPageComponent implements OnInit {
  mobile: boolean;
  title = 'Abos und Aktionen';
  subtitle =
    'Du willst nur mal reinschnuppern? Du möchtest Dich neben Schule, Studium oder Beruf weiterbilden? Du suchst die passende Betreuung und Weiterbildung im unternehmerischen Kontext?   \n \n    Kein Problem, wir haben die passendenden Aktionen, Angebote und Abomodelle. Für individuellere Fragen und Wünsche kontaktiere uns gerne direkt.';
  imageUrl = '../../assets/images/banner-images/Analytics.svg';
  isAboActive = true;
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
  specificsCamp: string[] = [
    'Tägliches 4-stündiges Intensivtraining mit individueller tutorieller Betreuung in unseren Schulungsräumlichkeiten (Mo-Fr)',
    'Begleitmaterial für das Selbststudium: Onlinevideos, Aufgabenkataloge, Tipps und Musterlösungen',
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'lenne.Learning - Du interessierst Dich für App- und Webentwicklung?',
      'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.'
    );
    this.mobile = window.innerWidth < 992;
  }
}
