import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntryPoint } from 'src/app/modules/core/interfaces/entry-point.interface';
import { EntryPointService } from 'src/app/modules/core/services/entry-point.service';

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
    'Bist Du schon ziemlich erfahren oder stehst Du noch ganz am Anfang deiner Karriere als Entwickler:in \n Bei lenne.Learning findest Du das passende Angebot. Wähle einfach den Lernpfad aus, der am besten zu Dir passt und starte durch!';
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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllEntryPoints();
    this.getRecommendation();
    this.getRedirectionLink();
    this.onButtonClicked(EntryPointMode.ALL);
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
  onButtonClicked(mode: EntryPointMode) {
    this.mode = mode;
    console.log(this.entryPoints);
    this.filteredArray = this.entryPoints.filter((el) => {
      console.log(el.tag.includes(mode));
      if (el.tag.includes(mode)) return el;
    });
    console.log(this.filteredArray);
  }
}
