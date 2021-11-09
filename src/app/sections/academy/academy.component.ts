import { AfterContentChecked, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { SectionService } from '../../modules/core/services/section.service';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { Subscription } from 'rxjs';
import { NbSidebarService } from '@nebular/theme';
import { DialogService } from 'src/app/modules/core/services/dialog.service';
import { Meta } from '@angular/platform-browser';

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
  entryPoints: EntryPoint[];

  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private sectionService: SectionService,
    private sidebarService: NbSidebarService,
    private ref: ChangeDetectorRef,
    private dialogService: DialogService,
    private metaTagService: Meta
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
        // Timingproblem with loading from localstorage (when reloading the page) - 1ms Timeout works
        if (this.sectionService.checkMileStone()) {
          this.sectionService.setCurrentMileStone(this.sectionService.currentSection);
        } else {
          this.currentMileStoneUrl = '';
        }
        // Refresh items and reset old children
        this.setSections();
        if (!items) {
          return;
        }

        const menuItem = this.setMenuItem(items);

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
    this.subscriptions.add(
      this.entryPointService.selectedEntryPointObservable.subscribe(() => {
        const items = this.setSections();
        this.router.navigate([`${items[0].link}`]);
      })
    );
    this.setSections();
    if (!window.location.href.includes('/lernpfad/')) {
      this.router.navigate([`/lernpfad/${this.sections[0]}`]);
    }
    this.entryPoints = this.entryPointService.entryPoints();
    this.checkEntryPoint();

    this.metaTagService.addTags([
      { property: 'og:url', content: 'https://akademie.lenne.tech/' },
      { property: 'og:image', content: '/assets/images/banner-images/ltakademie.png' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@lenneTech' },
      { property: 'twitter:creator', content: '@lenneTech' },
    ]);
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

  setSections(): NbMenuItem[] {
    this.sections = this.entryPointService.selectedEntryPointSections();
    this.items = [];

    if (this.sections) {
      for (const section of this.sections) {
        this.items.push({
          title: section,
          link: `/lernpfad/${section}`,
          expanded: true,
        });
      }
    }

    return this.items;
  }

  setMenuItem(items: NbMenuItem[]): NbMenuItem {
    const menuItem: NbMenuItem = this.items.find((item) => item.title === this.sectionService.currentSection);
    if (menuItem && window.screen.width >= 768) {
      menuItem.children = items;
      return menuItem;
    }
  }

  checkEntryPoint(): void {
    //If there is no Entrypoint, navigate to the selectionpage
    if (!this.currentEntryPoint) {
      this.router.navigate([`/lernpfade`]);
    }
    this.imgAlt = this.currentEntryPoint.description;
    this.imgSrc = this.currentEntryPoint.image;
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

  checkBottomNavbar() {
    return !window.location.href.includes('meilenstein');
  }

  switchEntryPoint(entryPoint: EntryPoint): void {
    this.entryPointService.selectedEntryPoint = entryPoint;
    this.setMenuItem(this.sectionService.currentSectionMenuItems);
  }
}
