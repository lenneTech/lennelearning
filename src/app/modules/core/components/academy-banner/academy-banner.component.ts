import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EntryPointService } from '../../services/entry-point.service';

@Component({
  selector: 'app-academy-banner',
  templateUrl: './academy-banner.component.html',
  styleUrls: ['./academy-banner.component.scss'],
})
export class AcademyBannerComponent {
  @Input() entryPointId: string;
  @Input() title: string;
  @Input() text: string;

  constructor(private entryPointService: EntryPointService, private router: Router) {}

  setSelectedEntryPoint(): void {
    this.entryPointService.setEntryPointById(this.entryPointId);
  }

  setRecommendation(): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/lernpfade'], {
        queryParams: { empfehlung: this.router.url.slice(1) },
      });
    } else {
      this.router.navigate(['/lernpfade']);
    }
  }
}
