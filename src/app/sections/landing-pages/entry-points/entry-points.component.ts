import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntryPoint } from 'src/app/modules/core/interfaces/entry-point.interface';
import { EntryPointService } from 'src/app/modules/core/services/entry-point.service';
import { MetaService } from 'src/app/modules/core/services/meta.service';

enum EntryPointMode {
  ALL = 'ALL',
  JOB_INTERESTED = 'JOB_INTERESTED',
  INTERN = 'INTERN',
  COMPANY = 'COMPANY',
}

@Component({
  selector: 'app-entry-points',
  templateUrl: './entry-points.component.html',
  styleUrls: ['./entry-points.component.scss'],
})
export class EntryPointsComponent implements OnInit {
  title = 'Die Lernpfade';
  subtitle =
    'Bist Du schon ziemlich erfahren oder stehst Du noch ganz am Anfang Deiner Karriere als Entwickler:in? \n Bei lenne.Learning findest Du das passende Angebot. Wähle einfach den Lernpfad aus, der am besten zu Dir passt und starte durch!';
  imageUrl = '../../assets/images/banner-images/SETTINGS.svg';
  entryPoints: EntryPoint[] = [];
  recommendation: string;
  redirectionLink: string;
  routeSub: Subscription;
  mode: EntryPointMode = EntryPointMode.ALL;
  EntryPointMode = EntryPointMode;
  filteredArray: EntryPoint[] = [];

  constructor(
    private entryPointService: EntryPointService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private metaService: MetaService
  ) {}

  ngOnInit(): void {
    this.getAllEntryPoints();
    this.getRecommendation();
    this.getRedirectionLink();
    this.onSwitchSelection();
    this.metaService.updateMetaTags(
      'Die Lernpfade - Wähle den Pfad, der am besten zu Dir passt!',
      'Bist Du schon ziemlich erfahren oder stehst Du als Entwickler noch ganz am Anfang? Wähle einfach den Lernpfad aus, der am besten zu Dir passt und starte durch!',
      'lenne.learning, lennelearning, academy, online, akademie, web, lernpfade'
    );
  }

  getAllEntryPoints(): void {
    this.entryPoints = this.entryPointService.entryPoints();
  }

  setSelectedEntryPoint(entryPoint: EntryPoint): void {
    this.entryPointService.selectedEntryPoint = entryPoint;
    if (this.redirectionLink) {
      this.router.navigateByUrl(this.redirectionLink);
    }
  }

  getRecommendation() {
    this.activatedRoute.queryParams.subscribe((value) => (this.recommendation = value.empfehlung));
  }

  getRedirectionLink() {
    this.activatedRoute.queryParams.subscribe((value) => {
      this.redirectionLink = value.redirectTo;
    });
  }
  onSwitchSelection(mode?: EntryPointMode) {
    if (mode) {
      this.mode = mode;
    } else if (this.recommendation) {
      switch (this.recommendation) {
        case 'berufsinteressierte':
          this.mode = EntryPointMode.JOB_INTERESTED;

          break;
        case 'praktikanten':
          this.mode = EntryPointMode.INTERN;

          break;
        case 'unternehmen':
          this.mode = EntryPointMode.COMPANY;

          break;

        default:
          this.mode = EntryPointMode.ALL;
          break;
      }
    }

    this.filteredArray = this.entryPoints.filter((el) => {
      if (el.tag.includes(this.mode)) return el;
    });
  }
}
