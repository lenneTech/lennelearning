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
  title = 'Willkommen in der lenne.Tech Akademie';
  subtitle =
    'Wir bieten Lernangebote für Webinteressierte, Schüler, Studenten bis hin zu Berufserfahrenen.\n Wir bringen dich von 0 auf 100, du benötigst kein Vorwissen!\n Such dir den Lernpfad aus, der am besten zu dir passt.';
  imageUrl = '../../assets/images/banner-images/start-banner.svg';
  entryPoints: EntryPoint[] = [];

  constructor(private entryPointService: EntryPointService, private seoService: SEOService) {
    this.seoService.initPageForSEO(
      'ltakademie - Die online Akademie für Webtechnologien',
      'Die online Akademie für Webtechnologien',
      'academy, online, akademie, web, ltakademie'
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
