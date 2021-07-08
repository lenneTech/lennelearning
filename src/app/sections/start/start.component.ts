import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { SEOService } from '@lenne.tech/ng-base';
import { Review } from '../../modules/core/interfaces/review.interface';
import { TextImageInterface } from '../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  title = 'Willkommen in der lenne.Tech Academy';
  subtitle =
    'Wir bieten Lernangebote für Webinteressierte, Schüler, Studenten bishin zu Berufserfahrenen.\n Schau welches unserer Profile am besten auf dich zutrifft und beginne deinen Lernpfad.';
  imageUrl = '../../assets/images/banner-images/start-banner.svg';
  entryPoints: EntryPoint[] = [];
  academyExplanations: TextImageInterface[] = [
    {
      title: 'Akademie',
      text:
        'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen Einstieg in die Grundlagen der App- & Webentwicklung:\n' +
        'Unterstütze uns und werde Mitautor in der Akademie!\n' +
        'Es wäre toll, wenn du uns beim inhaltlichen Aufbau unserer Akademie unterstützen würdest. Lass dich dabei von den vorhandenen Quellen inspirieren, aber bitte kopiere nichts. Auch wenn viele Dinge im Internet frei zugänglich sind, unterliegen sie dennoch dem Urheberrecht und dürfen nicht einfach auf anderen Seiten übernommen werden. Dies gilt für Bilder, Texte, Videos und andere urheberrechtlich geschützte Inhalte. Es gibt einige Seiten, die Inhalte zur freien Verwendung zur Verfügung stellen (z.B. Unsplash). Bitte prüfe bevor du diese Inhalte nutzt die Lizenzbedingungen. Wenn du dir unsicher bist, frage zuerst deinen Tutor.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
    },
    {
      title: 'Eigenes Projekt',
      text:
        'Nachdem du dir die Grundlagen angeeignet hast, erstellst du mit dem erlangten Wissen dein erstes vollständiges Projekt.\n' +
        'Dabei wirst du sowohl einen Client als auch einen Server bauen und diese miteinander verbinden.\n' +
        'Wichtige Bedingung: Es wird kein „Schubladenprojekt“. Daher suche dir ein Projekt aus, das für eine reale Zielgruppe einen echten Mehrwert bietet.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
    },
    {
      title: 'Kooperation',
      text: 'Sobald du die ersten beiden Schritte erfolgreich gegangen bist, integrieren wir dich in ein aktives Team, so dass du auch Erfahrung in der Entwicklung größerer Projekte zusammen mit anderen sammeln kannst. Hier lernst du wie man gemeinsam an einem Quellcode arbeitet, was Level 2 und Level 3 Tests sind, wie sich Verbesserungs- vorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
    },
  ];
  studentReviews: Review[] = [
    {
      imageUrl: '../../../assets/images/people-images/daniel_review.jpg',
      text: 'Ich hatte schon ein wenig Vorwissen und konnte somit die ersten Kurse überspringen. Wenn ich schwierigere Fragen hatte, die ich nicht alleine mit Google lösen konnte, bekam ich schnell Hilfe von meinem Tutor und wir konnten das Problem gemeinsam lösen. Mir hat die Akademie sehr viel gebracht und ich kann sie jedem, der sich für das Web und dessen Technologien interessiert, nur empfehlen.',
      reviewerTitle: 'Daniel König',
      reviewerSubtitle: 'Praktikant - lenne.Tech GmbH',
    },
    {
      imageUrl: 'https://lenne.tech/assets/images/team/florian-steinhanses.png',
      text: 'Ich hatte schon ein wenig Vorwissen und konnte somit die ersten Kurse überspringen. Wenn ich schwierigere Fragen hatte, die ich nicht alleine mit Google lösen konnte, bekam ich schnell Hilfe von meinem Tutor und wir konnten das Problem gemeinsam lösen. Mir hat die Akademie sehr viel gebracht und ich kann sie jedem, der sich für das Web und dessen Technologien interessiert, nur empfehlen.',
      reviewerTitle: 'Florian Steinhanses',
      reviewerSubtitle: 'Werkstudent - lenne.Tech GmbH',
    },
  ];
  companyReviews: Review[] = [
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua',
      reviewerTitle: 'Marie Musterfrau',
      reviewerSubtitle: 'CEO - Muster GmbH',
    },
    {
      imageUrl: 'https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916_960_720.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua',
      reviewerTitle: 'Marie Musterfrau',
      reviewerSubtitle: 'CEO - Muster GmbH',
    },
  ];

  constructor(private entryPointService: EntryPointService, private seoService: SEOService) {
    this.seoService.initPageForSEO(
      'ltacademy - Die online Akademie für Webtechnologien',
      'Die online Akademie für Webtechnologien',
      'academy, online, akademie, web, ltacademy'
    );
  }

  ngOnInit(): void {
    this.getAllEntryPoints();
  }

  getAllEntryPoints(): void {
    this.entryPoints = this.entryPointService.entryPoints();
  }

  setSelectedEntryPoint(entryPoint: EntryPoint): void {
    this.entryPointService.selectedEntryPoint = entryPoint;
  }
}
