import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';
import { Review } from '../../../modules/core/interfaces/review.interface';
import { TextImageInterface } from 'src/app/modules/core/interfaces/text-image.interface';
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.scss'],
})
export class InternPageComponent implements OnInit {
  title = 'Du suchst nach einem Praktikum?';
  subtitle =
    'Wir bieten Schüler:innen, Student:innen, Umschüler:innen und anderen Interessierten die Möglichkeit im Rahmen eines Praktikums App- und Webentwicklung in der Praxis zu erleben und mitzugestalten.    Außerdem betreuen wir auch Praktikant:innen anderer Unternehmen.    \n\n  Erlerne in der Akademie die Grundlagen und setze dann Dein eigenes Projekt um. Je nach Dauer des Praktikums wirst Du in ein bestehendes Team integriert und arbeitest aktiv an einem Projekt mit.';
  imageUrl = '../../assets/images/entry-point-images/praktikant.svg';
  review: Review = {
    text: 'Im Praktikum habe ich einen sehr guten Einblick in den Beruf eines Webentwicklers bekommen. Ich bekam die Chance, an einem eigenen Projekt zu arbeiten, bei dem mich die Mitarbeiter täglich unterstützt haben. Auch bei unternehmensinternen Projekten durfte ich mitentwickeln und meine Meinung einbringen. Das Arbeiten im Team war super angenehm und offen, gerade vor Ort im Büro. Mir hat es sehr viel Spaß gemacht und ich konnte viele Erfahrungen sammeln.',
    reviewerTitle: 'Daniel König',
    reviewerSubtitle: 'Praktikant',
  };
  review_two: Review = {
    text: 'Im Rahmen meiner Bachelorarbeit habe ich zusammen mit lenne.Tech eine App zur Erfassung von Wissensinhalten in der Softwareentwicklung entwickelt. Ich hatte vor allem im Frontend Bereich schon Vorwissen, aber mir fehlte die praktische Erfahrung, um das Projekt eigenständig umzusetzen. An der Stelle haben mich Kai und Pascal hervorragend betreut und mir gezeigt wie man strukturiert an umfangreicheren Anwendungen arbeitet. Darüber hinaus wurde mir auch im wissenschaftlichen Bereich der Arbeit und bei der Vorbereitung auf das Kolloquium sehr gut geholfen. Nach meiner Bachelorarbeit wurde ich als Werkstudent übernommen und arbeite nun mit ihnen im Team zusammen.',
    reviewerTitle: 'Florian Steinhanses',
    reviewerSubtitle: 'Praktikant und Abschlussarbeitskandidat',
  };

  listElements: TextImageInterface[] = [
    {
      title: 'Akademie',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen ersten Einstieg in die Grundlagen der App- und Webentwicklung. \n\nUnser Anliegen ist es, mit der Akademie allen Interessierten einen idealen Einstiegspunkt in den Bereich der Softwareentwicklung bieten zu können. Ob mit oder ohne Vorkenntnisse. \n\nUm dieses Ziel zu erreichen, entwickeln wir die Akademie ständig weiter und freuen uns auf Dein Feedback.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
    },
    {
      title: 'Eigenes Projekt',
      text: 'Nachdem Du Dir die Grundlagen angeeignet hast, erstellst Du basierend auf Deinem neuen Wissen Dein erstes eigenes und vollständiges Projekt. Dabei wirst Du sowohl einen Client als auch einen Server bauen und diese miteinander verbinden. Wichtige Bedingung: Es wird kein „Schubladenprojekt“. Daher such Dir ein Projekt aus, das für eine reale Zielgruppe einen echten Mehrwert bietet.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
      imageAlt: 'Illustration eines Mannes der malt.',
    },
    {
      title: 'Teamarbeit',
      text: 'Sofern die Dauer des Praktikums es zulässt und Du die ersten beiden Schritte erfolgreich gegangen bist, integrieren wir Dich in ein aktives Projektteam. So sammelst Du Erfahrungen im Rahmen größerer Entwicklungsprojekte mit mehreren Beteiligten. Hier lernst Du z. B. wie gemeinsam an einem Quellcode gearbeitet wird, was Level 2 und Level 3 Tests sind, wie sich Verbesserungsvorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
      imageAlt: 'Illustration eines Mannes und einer Frau die Puzzleteile halten.',
    },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'Du suchst ein Praktikum im Bereich Softwareentwicklung?',
      'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
      'praktikum, softwareentwicklung, academy, online, akademie, web, internship'
    );
  }
}
