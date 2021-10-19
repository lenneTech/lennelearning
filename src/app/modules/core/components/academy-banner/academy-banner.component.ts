import { Component, Input, OnInit } from '@angular/core';
import { EntryPointService } from '../../services/entry-point.service';

@Component({
  selector: 'app-academy-banner',
  templateUrl: './academy-banner.component.html',
  styleUrls: ['./academy-banner.component.scss'],
})
export class AcademyBannerComponent implements OnInit {
  @Input() entryPointId: string;
  constructor(private entryPointService: EntryPointService) {}
  setSelectedEntryPoint() {
    this.entryPointService.setEntryPointById(this.entryPointId);
  }
  ngOnInit() {}
}
