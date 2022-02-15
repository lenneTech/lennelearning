import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  title = 'App- und Webentwicklung für verschiedenste unternehmerische Bedürfnisse';
  subtitle =
    'Wir bieten Unternehmer:innen und Gründer:innen die Möglichkeit sich selbst ein technisches Basisverständnis anzueignen, um die Eignung potenzieller Mitarbeiter:innen oder Dienstleister:innen besser einschätzen und mit Ihnen kommunizieren zu können. \n\n    Für Praktikant:innen, Werkstudent:innen und Auszubildende können wir das Onboarding, die Aus- und Weiterbildung sowie bei Bedarf die Evaluation begleiten. \n\n        Ebenso profitieren Berufsanfänger:innen von unseren verschiedenen Angeboten. Sie erlangen eine solide Wissensbasis und sammeln praktische Erfahrungen, denn neben den technischen Grundlagen spielen eigenen Projekte sowie das gemeinsame Arbeiten an einem größeren Projekt eine zentrale Rolle. \n\n        Erfahrenere Entwickler:innen können Grundlagen wieder auffrischen und andere Bereiche vertiefen.    ';
  imageUrl = '../../assets/images/entry-point-images/company.svg';
  steps: TextImageInterface[] = [
    {
      title: 'Vorbereitung',
      text: 'Wir bereiten optimal auf die späteren Einsatzbereiche und  Aufgaben vor. Dies kann die Suche nach passenden IT-Dienstleistungen sein, ein Praktikum oder der direkte Einstieg in ein Entwicklungs-Team sein, sodass jeder schnellstmöglich produktiv mitarbeiten kann.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Bild von einem Menschen der auf Büchern steht.',
    },
    {
      title: 'Evaluation',
      text: 'Durch die persönliche Betreuung, die wöchentlichen Meetings sowie den Fortschritt in der Akademie und der Bearbeitung praktischer Projekte, können wir die Teilnehmenden für Dich  evaluieren. Diese Evaluation umfasst eine Einschätzung bzgl. des technischen Grundverständnisses, der Eigeninitiative, der Motivation, des Engagement, sowie der Kommunikations- und Teamfähigkeit der Teilnehmenden.',
      imageUrl: '../../assets/images/explanation-images/strategy.svg',
      imageAlt: 'Bild von zwei diskutierenden Menschen.',
    },
    {
      title: 'Weiterbildung',
      text: 'Neben den technsichen Grundlagen und den Erfahrungen in eigenen Projekten und der Arbeit in einem größeren Projektteam bietet lenne.Learning darüber hinaus die Möglichkeit Wissen aufzufrischen und sich in speziellen Bereichen stetig weiterzubilden.',
      imageUrl: '../../assets/images/explanation-images/community.svg',
      imageAlt: 'Bild von Menschen die Blöcke in einem Smartphone aufbauen.',
    },
  ];
  features: TextImageInterface[] = [
    {
      title: 'Einfach',
      text: 'Wir übernehmen die Vorbereitung auf das Praktikum oder den direkten Einstieg ins Team für dich. So kannst du Zeit sparen und dich aufs Wesentliche konzentrieren.',
      iconClass: 'bi-x-diamond-fill',
    },
    {
      title: 'Individuell',
      text: 'Wir erstellen auch individuell Kurse für die Technologien, mit denen ihr arbeitet. So werden die Lernpläne der Kandidaten auf deine Ziele zugeschnitten.',
      iconClass: 'bi-person-lines-fill',
    },
    {
      title: 'Flexibel',
      text: 'Die Akademie ist monatlich kündbar. So kannst du schon frühzeitig Kandidaten ins Team überführen, sobald sie bereit sind.',
      iconClass: 'bi-calendar2-week-fill',
    },
    {
      title: 'Ausbildung',
      text: 'Wir bilden unabhängig von der Akademie auch im Bereich der Anwendungsentwicklung aus. Wenn dein Unternehmen Fachinformatiker benötigt, können wir die Ausbildung begleiten.',
      iconClass: 'bi-briefcase-fill',
    },
    {
      title: 'Kooperation',
      text: 'Bleibe auch in Zukunft mit uns in Kontakt und arbeite mit uns an spannenden Projekten. Wir unterstützen dich gerne!',
      iconClass: 'bi-people-fill',
    },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'lenne.Learning - Du suchst fähige Entwickler für dein Unternehmen?',
      'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.'
    );
  }

  sendOffer(): void {
    window.open('mailto:info@lenne.tech');
  }
}
