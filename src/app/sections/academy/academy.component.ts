import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss'],
})
export class AcademyComponent implements OnInit {
  sections: string[] = [];

  constructor(private entryPointService: EntryPointService) {}

  ngOnInit(): void {
    this.sections = this.entryPointService.selectedEntryPointSections();
  }
}
