import { Component } from '@angular/core';
import { SEOService } from '@lenne.tech/ng-base';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
  title = 'Willkommen bei lenne.Learning!';
  subtitle =
    'In unserer ganzheitlichen Akademie für Softwareentwicklung bieten wir Lernangebote aus den Bereichen Konzeption, Design und Entwicklung für Webinteressierte, Schüler, Studenten bis hin zu Berufserfahrenen.\n Wir bringen dich von 0 auf 100, du benötigst kein Vorwissen!\n Such dir den Lernpfad aus, der am besten zu dir passt.';
  imageUrl = '../../assets/images/banner-images/start-banner.svg';
  landingPages = [
    {
      id: 'berufserkunder',
      title: 'Berufsinteressierte',
      address: 'Berufsinteressierter',
      description:
        'Du interessierst dich für Web- und Apptechnologien, weißt aber noch nicht, was dich im Beruf erwartet?',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      text: 'Dieser Kurs ist für alle die sich für die Web- und Appentwicklung interessieren und einen Einblick in die Berufswelt von Softwareentwicklern bekommen wollen. Der Kurs beginnt dabei mit einer Berufsfeldserkundung, in der dir zunächst die verschiedenen Berufe rund um die Softwareentwiclkung sowie deren Berufslltag und Aufgabenfelder vorgestellt werden. Danach lernst du schon die Grundlagen der Webentwicklung, um schon eigene Webseiten erstellen zu können',
      landingRoute: '/berufsinteressierte',
    },
    {
      id: 'praktikant',
      title: 'Praktikanten',
      address: 'Praktikant',
      description:
        'Du bist Schüler, Student, befindest dich in einer Weiterbildung oder suchst aus anderen Gründen noch ein Praktikum?',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      text: 'Wir bieten dir die Möglichkeit in bis zu 12 Wochen die Web- und Appentwicklung in der Praxis kennenzulernen. Zunächst arbeitest du in einer Vorbereitungsphase unsere Kurse durch, um im Praktikum direkt mit deinem eigenen Projekt durchstarten zu können. Wenn du schon Vorkenntnisse hast, kannst du natürlich unter Absprache verschiedene Teile überspringen und sofort loslegen.',
      landingRoute: '/praktikanten',
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      address: 'Unternehmer',
      description:
        'Dein Unternehmen sucht fähige App- und Webentwickler? Oder ihr möchtet gerne Anwendungsentwickler ausbilden?',
      image: '../../assets/images/entry-point-images/company.svg',
      text: 'Wir bieten deinem Unternehmen Weiterbildungsmöglichkeiten in der App- und Webentwicklung. Dabei bieten wir eine umfassende Betreuung mit wöchentlichen Meetings an. Dabei schätzen wir ebenso das Potenzial der einzelnen Akademie Teilnehmer ein, um die bestmöglichen Webentwickler für dein Unternehmen zu finden.',
      landingRoute: '/unternehmen',
    },
  ];
  constructor(private seoService: SEOService, private metaService: MetaService) {
    this.seoService.initPageForSEO(
      'lenne.Learning - Die online Akademie für Webtechnologien',
      'Die online Akademie für Webtechnologien',
      'academy, online, akademie, web, learning'
    );

    this.metaService.updateMetaTags(
      'lenne.Learning - Die online Akademie für Webtechnologien',
      'Die online Akademie für Webtechnologien'
    );
  }

  openMail(): void {
    window.open('mailto:info@lenne.tech');
  }
}
