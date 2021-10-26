import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private entryPointService: EntryPointService) {}

  setSelectedEntryPoint() {
    this.entryPointService.setEntryPointById(this.entryPointId);
  }
}
