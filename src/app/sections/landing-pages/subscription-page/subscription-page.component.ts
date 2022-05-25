import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/modules/core/interfaces/subscription.interface';
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
  imageUrl = '../../assets/images/banner-images/analytics.svg';
  isAboActive = true;
  subscriptions: Subscription[] = [
    {
      title: 'Free',
      description:
        'Erste Einblicke in das Berufsfeld und Elemente der Softwareentwicklung im Rahmen des Lernpfades Berufsfelderkundung.',
      price: '0 €',
      specifics: ['Texte, Aufgabenkatalog & Tipps zum Lernpfad Berufsfelderkundung'],
      imageUrl: '../../assets/images/entry-point-images/berufsinteressent.svg',
    },
    {
      title: 'Praktikum',
      description:
        'Je nach Art und Dauer des Praktikums sowie den jeweiligen Vorkenntnissen der Praktikant:innen können unterschiedliche Lernpfade geeignet sein: Berufsfeld, Praktikum, Sprint, Frontend, Backend oder Standard.',
      price: '0 € / kostenpflichtig',
      priceDetails: '0 € für unsere eigenen Praktikant:innen, kostenpflichtig für externe Praktikant:innen.',
      specifics: [
        'Onlinevideos',
        'Aufgabenkatalog, Musterlösungen und Tipps zu allen Lernpfaden',
        'Sprechstunde Q&A',
        'Wochenmeeting',
        'Weiterempfehlung in unserem Unternehmensnetzwerk**',
      ],
      imageUrl: '../../assets/images/entry-point-images/praktikant.svg',
    },
    {
      title: 'Unternehmen',
      description:
        'Für alle, die sich oder ihre Unternehmensangehörigen weiterbilden möchten: Je nach Zielsetzung und Vorwissen können unterschiedliche Lernpfade gewählt werden:  Sprint, Praktikum, Unternehmen, Frontend, Backend oder Standard.',
      price: 'kostenpflichtig',
      priceDetails: 'für Unternehmer:innen, Gründer:innen, Auszubildende, Werkstudent:innen und Mitarbeiter:innen.',
      specifics: [
        'Berücksichtigung des jeweiligen Unternehmenskontexts (Technologien, Zeiten, Projekte)',
        'Individuelle Betreuung',
        'Zugang zur Community',
        'Wochenmeeting',
        'Aufgabenkatalog, Musterlösungen und Tipps zu allen Lernpfaden',
      ],
      imageUrl: '../../assets/images/entry-point-images/company.svg',
    },
  ];
  actions: Subscription[] = [
    {
      preTitle: 'Unser Angebot für Dein Unternehmen',
      title: 'Azubi Sommercamp 2022',
      description:
        'In einem vierwöchigen Intensivtraining vom 27.06 - 22.07.2022 bereiten wir angehende Auszubildende im Entwicklungsbereich auf die Unternehmenspraxis vor.',
      price: '2000 €',
      priceDetails: 'Pro Person',
      specifics: [
        'Tägliches vierstündiges Intensivtraining mit individueller tutorieller Betreuung in unseren Schulungsräumlichkeiten (Mo. - Fr.)',
        'Begleitmaterial für das Selbststudium: Onlinevideos, Aufgabenkataloge, Tipps und Musterlösungen',
      ],
      imageUrl: '../../assets/images/banner-images/getstarted.svg',
    },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'Alles rund um die Abos und Aktionen bei lenne.Learning!',
      'Dein Unternehmen sucht nach Weiterbildungsmöglichkeiten rund um das Thema Softwareentwicklung? Kein Problem, wir haben die passendenden Abos und Aktionen.',
      'lenne.learning, lennelearning, aktionen, academy, online, akademie, web, abo'
    );
    this.mobile = window.innerWidth < 992;
  }
}
