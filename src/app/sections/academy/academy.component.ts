import { Component, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { SectionService } from '../../modules/core/services/section.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss'],
})
export class AcademyComponent implements OnInit {
  sections: string[] = [];
  items: NbMenuItem[] = [];

  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private sectionService: SectionService
  ) {
    this.sectionService.currentSectionMenuItemsObservable.subscribe((items) => {
      // Refresh items and reset old children
      this.setSections();

      if (!items) {
        return;
      }

      const menuItem: NbMenuItem = this.items.find((item) => item.title === this.sectionService.currentSection);
      if (menuItem) {
        menuItem.children = items;
      }
    });
  }

  ngOnInit(): void {
    this.setSections();

    if (!window.location.href.includes('/academy/')) {
      this.router.navigate([`/academy/${this.sections[0]}`]);
    }
  }

  setSections(): void {
    this.sections = this.entryPointService.selectedEntryPointSections();
    this.items = [];

    for (const section of this.sections) {
      this.items.push({
        title: section,
        link: `/academy/${section}`,
        expanded: true,
      });
    }
  }
}
