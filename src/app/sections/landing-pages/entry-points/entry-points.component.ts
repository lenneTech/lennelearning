import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base';
import { Subscription } from 'rxjs';
import { EntryPoint } from 'src/app/modules/core/interfaces/entry-point.interface';
import { EntryPointService } from 'src/app/modules/core/services/entry-point.service';

@Component({
  selector: 'app-entry-points',
  templateUrl: './entry-points.component.html',
  styleUrls: ['./entry-points.component.scss'],
})
export class EntryPointsComponent implements OnInit {
  title = 'Die Lernpfade';
  subtitle =
    'Bist du schon ziemlich erfahren oder noch ganz am Anfang deiner Karriere als Webentwickler?\n Hier in der Akademie ist das vollkommen egal. Wähle einfach den Lernpfad aus, der zu dir passt und starte mit deiner (Weiter)-Bildung in der Webentwicklung!';
  imageUrl = '../../assets/images/explanation-images/projekt.svg';
  entryPoints: EntryPoint[] = [];
  landingPage: string;
  routeSub: Subscription;

  constructor(private entryPointService: EntryPointService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllEntryPoints();
    this.getLandingPage();
  }

  getAllEntryPoints(): void {
    this.entryPoints = this.entryPointService.entryPoints();
  }

  setSelectedEntryPoint(entryPoint: EntryPoint): void {
    this.entryPointService.selectedEntryPoint = entryPoint;
  }

  getLandingPage() {
    this.routeSub = this.activatedRoute.paramMap.subscribe((params) => {
      this.landingPage = params.get('id');
    });
  }
}
