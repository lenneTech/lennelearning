import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/modules/core/interfaces/sponsor.interface';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-sponsors-page',
  templateUrl: './sponsors-page.component.html',
  styleUrls: ['./sponsors-page.component.scss'],
})
export class SponsorsPageComponent implements OnInit {
  title = 'Unternehmensnetzwerk';
  subtitle =
    'In unserem Unternehmensnetzwerk kommen die Unternehmen zusammen, die lenne.Learning aktiv nutzen oder unterstützen.\n\nGemeinsam fördern wir in unserer Region die Aus- und Weiterbildung sowie die Fachkräftesicherung im Bereich der Softwareentwicklung.\n\nWenn auch Du Dich beteiligen möchtest, nimm Kontakt mit uns auf!';
  imageUrl = '../../assets/images/banner-images/hero_getstarted.svg';

  sponsors: Sponsor[] = [
    {
      imageUrl: '../../assets/images/sponsor-images/tracto.svg',
      imageAlt: 'Logo von Tracto',
      title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
      careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen'],
      link: 'https://karriere.tracto.com/',
      statement:
        'Statement warum Aus- und Weiterbildung und Fachkräftesicherung im Bereich der Softwareentwicklung wichtig ist.',
      isOnlySponsor: false,
    },
    {
      imageUrl: '../../assets/images/sponsor-images/mennekes.svg',
      imageAlt: 'Logo von Mennekes',
      title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
      careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen'],
      link: 'https://www.mennekes.de/karriere/ueberblick/',
      statement:
        'Statement warum Aus- und Weiterbildung und Fachkräftesicherung im Bereich der Softwareentwicklung wichtig ist.',
      isOnlySponsor: false,
    },
    {
      imageUrl: '../../assets/images/sponsor-images/ontavio.svg',
      imageAlt: 'Logo von Ontavio',
      title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
      careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen'],
      link: 'https://www.ontavio.de/karriere',
      statement:
        'Statement warum Aus- und Weiterbildung und Fachkräftesicherung im Bereich der Softwareentwicklung wichtig ist.',
      isOnlySponsor: true,
    },
  ];
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    //MetaTags will be updated due to LTAK-77
    this.metaService.updateMetaTags(
      'lenne.Learning - Du interessierst Dich für App- und Webentwicklung?',
      'Wir bieten Berufsinteressierten, Schülern, Hobbyentwicklern und Quereinsteigern Einblicke in verschiedene Berufsfelder und Anforderungen der Softwareentwicklung.',
      'lenne.learning, lennelearning, beruf, academy, online, akademie, web, interested'
    );
  }
}
