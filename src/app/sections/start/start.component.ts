import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { SEOService } from '@lenne.tech/ng-base';
import { Review } from '../../modules/core/interfaces/review.interface';

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
