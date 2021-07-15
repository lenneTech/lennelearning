import { AfterContentChecked, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { SectionService } from '../../modules/core/services/section.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { Subscription } from 'rxjs';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss'],
})
export class AcademyComponent implements OnInit, OnDestroy, AfterContentChecked {
  sections: string[] = [];
  items: NbMenuItem[] = [];
  currentEntryPoint: EntryPoint;
  subscriptions = new Subscription();
  sidebarCollapsed = false;

  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private sectionService: SectionService,
    private sidebarService: NbSidebarService,
    private ref: ChangeDetectorRef
  ) {
    // Get current entry point
    this.subscriptions.add(
      this.entryPointService.selectedEntryPointObservable.subscribe((entrypoint) => {
        this.currentEntryPoint = entrypoint;
      })
    );

    // Listen to menu changes and set task in menu
    this.subscriptions.add(
      this.sectionService.currentSectionMenuItemsObservable.subscribe((items) => {
        // Refresh items and reset old children
        this.setSections();
        if (!items) {
          return;
        }
        const menuItem: NbMenuItem = this.items.find((item) => item.title === this.sectionService.currentSection);
        if (menuItem && window.screen.width >= 768) {
          menuItem.children = items;
        }
        this.initSidebarCollapse();
      })
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth > 768) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }

  ngOnInit(): void {
    this.setSections();
    if (!window.location.href.includes('/lernpfad/')) {
      this.router.navigate([`/lernpfad/${this.sections[0]}`]);
    }
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  toggleSidebar(): void {
    this.sidebarService.toggle(false, 'left');
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  closeSidebar(): void {
    this.sidebarService.collapse();
    this.sidebarCollapsed = true;
  }

  openSidebar(): void {
    this.sidebarService.expand();
    this.sidebarCollapsed = false;
  }

  setSections(): void {
    this.sections = this.entryPointService.selectedEntryPointSections();
    this.items = [];

    for (const section of this.sections) {
      this.items.push({
        title: section,
        link: `/lernpfad/${section}`,
        expanded: true,
      });
    }
  }

  resetEntryPoint(): void {
    this.entryPointService.reset();
    this.router.navigate(['/']);
  }

  initSidebarCollapse(): void {
    // closed on mobile
    this.sidebarCollapsed = false;
    if (window.screen.width < 768) {
      this.closeSidebar();
    }
  }
}
