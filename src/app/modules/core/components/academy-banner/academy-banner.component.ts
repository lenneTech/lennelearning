import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base';
import { EntryPointService } from '../../services/entry-point.service';

@Component({
  selector: 'app-academy-banner',
  templateUrl: './academy-banner.component.html',
  styleUrls: ['./academy-banner.component.scss'],
})
export class AcademyBannerComponent {
  @Input() entryPointId: string;
  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private storageService: StorageService
  ) {}
  setSelectedEntryPoint() {
    this.entryPointService.setEntryPointById(this.entryPointId);
  }

  onClick() {
    if (this.router.url !== '/') {
      this.storageService.remove('landingpage');
      this.storageService.save('landingpage', this.router.url.slice(1));
    }
  }
}
