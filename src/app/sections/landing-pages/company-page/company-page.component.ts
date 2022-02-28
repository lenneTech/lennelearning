import { Component, Input, OnInit } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';
import { Review } from 'src/app/modules/core/interfaces/review.interface';
@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  title = 'App- und Webentwicklung für verschiedenste unternehmerische Bedürfnisse';
  subtitle =
    'Wir bieten Unternehmer:innen und Gründer:innen die Möglichkeit sich selbst ein technisches Basisverständnis anzueignen, um die Eignung potenzieller Mitarbeiter:innen oder Dienstleister:innen besser einschätzen und mit Ihnen kommunizieren zu können. \n\n    Für Praktikant:innen, Werkstudent:innen und Auszubildende können wir das Onboarding, die Aus- und Weiterbildung sowie bei Bedarf die Evaluation begleiten. \n\n        Ebenso profitieren Berufsanfänger:innen von unseren verschiedenen Angeboten. Sie erlangen eine solide Wissensbasis und sammeln praktische Erfahrungen, denn neben den technischen Grundlagen spielen eigene Projekte sowie das gemeinsame Arbeiten an einem größeren Projekt eine zentrale Rolle. \n\n        Erfahrenere Entwickler:innen können Grundlagen wieder auffrischen und andere Bereiche vertiefen.    ';
  imageUrl = '../../assets/images/entry-point-images/company.svg';
  steps: TextImageInterface[] = [
    {
      title: 'Vorbereitung',
      text: 'Wir bereiten optimal auf die späteren Einsatzbereiche und  Aufgaben vor. Dies kann die Suche nach passenden IT-Dienstleistungen sein, ein Praktikum oder der direkte Einstieg in ein Entwicklungsteam sein, sodass jeder schnellstmöglich produktiv mitarbeiten kann.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Bild von einem Menschen der auf Büchern steht.',
    },
    {
      title: 'Evaluation',
      text: 'Durch die persönliche Betreuung, die wöchentlichen Meetings sowie den Fortschritt in der Akademie und der Bearbeitung praktischer Projekte können wir die Teilnehmenden für Dich evaluieren. Diese Evaluation umfasst eine Einschätzung bzgl. des technischen Grundverständnisses, der Eigeninitiative, der Motivation, des Engagements sowie der Kommunikations- und Teamfähigkeit der Teilnehmenden.',
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
      text: 'Wir übernehmen für Dich die Einarbeitung, Betreuung, Weiterbildung  oder die Evaluation. Wir klären offene  Fragen und unterstützen die  Teilnehmenden bei der Arbeit an realen Projekten.',
      iconClass: 'bi-x-diamond-fill',
    },
    {
      title: 'Individuell',
      text: 'Wir erstellen je nach Möglichkeit auch individuelle Kurse für die Technologien, mit denen Ihr arbeitet. So werden die Lernpläne der Kandidaten auf die Ziele Deines Unternehmens zugeschnitten. ',
      iconClass: 'bi-person-lines-fill',
    },
    {
      title: 'Flexibel',
      text: 'Die lenne.Learning ist monatlich kündbar und kann flexibel gestaltet werden: Verschieden Lernpfade, persönliche Sprechstunden, individuelle Projekte und viel mehr ...',
      iconClass: 'bi-calendar2-week-fill',
    },
  ];
  review: Review = {
    text: 'Was uns an lenne.Tech und der Akademie besonders beeindruckt hat, ist die Effektivität in der Umsetzung. Die natürliche Auslese beim Durchlaufen der Akademie sorgt für den höchstmöglichen Eignungsgrad der Bewerber:innen. Wir haben uns so nicht nur etliche Stunden Aufwand bei der Evaluierung von Bewerbern gespart, sondern auch jede Menge Nerven beim Onboarding.',
    reviewerTitle: 'Christopher Klein & Jens Helbig \n Gründer und Geschäftsführer',
    reviewerSubtitle: 'Buuk GmbH',
  };
  review_two: Review = {
    text: 'Ich arbeite seit mehreren Monaten mit den Jungs zusammen. Zu Beginn haben wir über mein App-Design gesprochen. Mittlerweile gehe ich die ganze Akademie im Schnelldurchlauf durch mithilfe des schnellen Pfades für Start-Ups und erhalte so in kurzer Zeit einen Einblick in alle technischen Themen. Im Gegensatz zu anderen, vorgefertigten Programmen wird hier bei der lenne.Learning jeder individuell nach vorne gebracht.',
    reviewerTitle: 'Julian Kutza \n Gründer und Geschäftsführer',
    reviewerSubtitle: 'Firework Network UG',
  };

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
