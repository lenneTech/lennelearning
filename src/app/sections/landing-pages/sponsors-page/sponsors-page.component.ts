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
  mobile: boolean;
  sponsors: Sponsor[] = [
    {
      imageUrl: '../../assets/images/sponsor-images/tracto.svg',
      imageAlt: 'Logo von Tracto',
      title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
      careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen'],
      careerLink: 'https://karriere.tracto.com/',
      mainPageLink: 'https://tracto.com/de#gref',
      statement:
        'Wir erleben bei Tracto tagtäglich welchen immer größeren Stellenwert Software auf unseren Maschinen, aber auch bei angeschlossenen Dienste einnimmt. Eine entsprechende Aus- und Weiterbildung in dem Bereich ist für unsere Mitarbeiter daher unabdingbar.',
      isOnlySponsor: false,
    },
    // {
    //   imageUrl: '../../assets/images/sponsor-images/mennekes.svg',
    //   imageAlt: 'Logo von Mennekes',
    //   title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
    //   careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen'],
    //   careerLink: 'https://www.mennekes.de/karriere/ueberblick/',
    //   mainPageLink: 'https://www.mennekes.de/',
    //   statement:
    //     'Statement warum Aus- und Weiterbildung und Fachkräftesicherung im Bereich der Softwareentwicklung wichtig ist.',
    //   isOnlySponsor: false,
    // },
    {
      imageUrl: '../../assets/images/sponsor-images/ontavio.svg',
      imageAlt: 'Logo von Ontavio',
      title: 'Wir suchen Nachwuchs im Bereich Entwicklung',
      careerType: ['Werkstudierende', 'Auszubildende', 'Praktikant:innen', 'Trainees', 'Juniorentwickler:innen'],
      careerLink: 'https://www.ontavio.de/karriere',
      mainPageLink: 'https://www.ontavio.de/',
      statement:
        'Durch unseren Software-Stack aus modernen Web-Technologien ist es heute deutlich anspruchsvoller, qualifizierte Fachkräfte mit passendem Background zu finden. Ein fundiertes Onboarding, interne Traineeprogramme sowie fortlaufende Aus- und Weiterbildungsmaßnahmen sind deshalb elementar für uns, um eine gleichbleibend hohe Teamqualität zu gewährleisten.',
      isOnlySponsor: true,
    },
  ];
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'Das lenne.Learning Unternehmensnetzwerk - sei dabei!',
      'Gemeinsam fördern die beteiligten Unternehmen in unserer Region die Aus- und Weiterbildung sowie die Fachkräftesicherung im Bereich der Softwareentwicklung.',
      'Unternehmensnetzwerk, Softwareentwicklung, Ausbildung, Weiterbildung, Wissenschaft, Fachkräftesicherung, Nachwuchs'
    );
    this.mobile = window.innerWidth < 992;
  }
}
