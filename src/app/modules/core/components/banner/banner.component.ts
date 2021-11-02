import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base';
import { EntryPointService } from '../../services/entry-point.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() showAcademyBtn: boolean;
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
