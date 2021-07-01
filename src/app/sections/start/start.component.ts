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
}
