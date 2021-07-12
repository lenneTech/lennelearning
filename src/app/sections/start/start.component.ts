import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { SEOService } from '@lenne.tech/ng-base';

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

  openMail(): void {
    window.open('mailto:info@lenne.tech');
  }
}
