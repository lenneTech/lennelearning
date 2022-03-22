import { Component } from '@angular/core';
import { SEOService } from '@lenne.tech/ng-base';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  title = 'Willkommen bei lenne.Learning';
  subtitle =
    'In unserer ganzheitlichen Akademie bieten wir Lernangebote aus den Bereichen Konzeption, Design und Entwicklung für Webinteressierte, Schüler:innen, Student:innen bis hin zu Berufserfahrenen. Wir bringen unsere Teilnehmenden von 0 auf 100. Vorwissen ist nicht nötig! Es gibt verschiedene Lernpfade, die auf die individuellen Bedürfnisse der Zielgruppen abgestimmt sind.\n\n Die Akademie ist außerdem ein <a href="https://github.com/lenneTech/academy" target="_blank">Open Source Projekt</a> und wir freuen uns über alle, die mal vorbeischauen oder sich beteiligen möchten.';
  imageUrl = '../../assets/images/banner-images/start-banner.svg';
  landingPages = [
    {
      id: 'berufserkunder',
      title: 'Berufsinteressierte',
      address: 'Berufsinteressierter',
      description:
        'Du interessierst Dich für App- und Webtechnologien und möchtest die entsprechenden Berufsfelder erkunden, oder bist Du Student:in, möchtest aber schon Praxiserfahrung in der Softwareentwicklung sammeln?',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      text: 'Dieser Kurs ist für alle die sich für die Web- und Appentwicklung interessieren und einen Einblick in die Berufswelt von Softwareentwicklern bekommen wollen. Der Kurs beginnt dabei mit einer Berufsfeldserkundung, in der Dir zunächst die verschiedenen Berufe rund um die Softwareentwiclkung sowie deren Berufslltag und Aufgabenfelder vorgestellt werden. Danach lernst Du schon die Grundlagen der Webentwicklung, um schon eigene Webseiten erstellen zu können',
      landingRoute: '/berufsinteressierte',
    },
    {
      id: 'praktikant',
      title: 'Praktikant:innen',
      address: 'Praktikant',
      description:
        'Du bist Schüler:in, Student:in, nimmst an einer Weiterbildungsmaßnahme teil oder absolvierst bzw. suchst aus anderen Gründen ein Praktikum?',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      text: 'Wir bieten Dir die Möglichkeit in bis zu 12 Wochen die Web- und Appentwicklung in der Praxis kennenzulernen. Zunächst arbeitest Du in einer Vorbereitungsphase unsere Kurse durch, um im Praktikum direkt mit Deinem eigenen Projekt durchstarten zu können. Wenn Du schon Vorkenntnisse hast, kannst Du natürlich unter Absprache verschiedene Teile überspringen und sofort loslegen.',
      landingRoute: '/praktikanten',
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      address: 'Unternehmer',
      description:
        'Euer Unternehmen sucht fähige App- und Webentwickler:innen oder Ihr wollt Eure Mitarbeiter:innen aus- und weiterbilden?',
      image: '../../assets/images/entry-point-images/company.svg',
      text: 'Wir bieten Deinem Unternehmen Weiterbildungsmöglichkeiten in der App- und Webentwicklung. Dabei bieten wir eine umfassende Betreuung mit wöchentlichen Meetings an. Dabei schätzen wir ebenso das Potenzial der einzelnen Akademie Teilnehmer ein, um die bestmöglichen Webentwickler für Dein Unternehmen zu finden.',
      landingRoute: '/unternehmen',
    },
  ];
  constructor(private seoService: SEOService, private metaService: MetaService) {
    this.seoService.initPageForSEO({
      title: 'lenne.Learning - Die online Akademie für Webtechnologien',
      description: 'Die online Akademie für Webtechnologien',
      keywords: 'academy, online, akademie, web, learning',
    });

    this.metaService.updateMetaTags(
      'lenne.Learning - Die online Akademie für Webtechnologien',
      'Die online Akademie für Webtechnologien'
    );
  }
}
