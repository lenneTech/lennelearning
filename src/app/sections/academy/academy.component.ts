import { AfterContentChecked, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { SectionService } from '../../modules/core/services/section.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { Subscription } from 'rxjs';
import { NbSidebarService } from '@nebular/theme';
import { DialogService } from 'src/app/modules/core/services/dialog.service';

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
  onlyParentRoute: boolean;
  imgSrc: string;
  imgAlt: string;
  prevSection: string;
  nextSection: string;
  currentMileStoneUrl: string;

  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private sectionService: SectionService,
    private sidebarService: NbSidebarService,
    private ref: ChangeDetectorRef,
    private dialogService: DialogService
  ) {
    // Get current entry point
    this.subscriptions.add(
      this.entryPointService.selectedEntryPointObservable.subscribe((entrypoint) => {
        this.currentEntryPoint = entrypoint;
      })
    );

    this.subscriptions.add(
      this.sectionService.currentMileStone.subscribe((item) => {
        if (item) {
          this.currentMileStoneUrl = `/lernpfad/meilenstein/${item}`;
        }
      })
    );

    // Listen to menu changes and set task in menu
    this.subscriptions.add(
      this.sectionService.currentSectionMenuItemsObservable.subscribe((items) => {
        this.prevSection = this.entryPointService.getPrevSectionByEntryPoint();
        this.nextSection = this.entryPointService.getNextSectionByEntryPoint();
        // Timingproblem beim Laden aus Local-Storage (bei Reload der Seite) - mit 1ms Timeout funktionierts
        setTimeout(() => {
          if (this.sectionService.checkMileStone()) {
            this.sectionService.setCurrentMileStone(this.sectionService.currentSection);
          }
        }, 1);
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

    this.checkEntryPoint();
  }

  ngAfterContentChecked(): void {
    this.ref.detectChanges();
    this.onlyParentRoute = window.location.href.endsWith('lernpfad');
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

  checkEntryPoint(): void {
    switch (this.currentEntryPoint.id) {
      case 'praktikant':
        this.imgAlt = 'Illustration für Praktikanten';
        this.imgSrc = '../../../assets/images/entry-point-images/praktikant.svg';
        break;

      case 'berufserkunder':
        this.imgAlt = 'Illustration für Berufsinteressierte';
        this.imgSrc = '../../../assets/images/entry-point-images/berufsinteressent.svg';
        break;

      case 'unternehmen':
        this.imgAlt = 'Illustration für Unternehmen';
        this.imgSrc = '../../../assets/images/entry-point-images/company.svg';
        break;

      default:
        break;
    }
  }

  resetEntryPoint(): void {
    const confirm = this.dialogService.openConfirmDialog();
  }

  initSidebarCollapse(): void {
    // closed on mobile
    this.sidebarCollapsed = false;
    if (window.screen.width < 768) {
      this.closeSidebar();
    }
  }

  onForward() {
    this.router.navigate([`/lernpfad/${this.nextSection}`]);
  }

  onBack() {
    this.router.navigate([`/lernpfad/${this.prevSection}`]);
  }

  onMileStone() {
    this.router.navigate([this.currentMileStoneUrl]);
    this.currentMileStoneUrl = '';
  }
}
