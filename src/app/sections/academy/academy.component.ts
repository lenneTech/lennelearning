import { AfterContentChecked, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbSidebarService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DialogService } from 'src/app/modules/core/services/dialog.service';
import { ScrollService, StorageService } from '@lenne.tech/ng-base';
import { Section } from 'src/app/modules/core/interfaces/section.interface';
import { EntryPoint } from '../../modules/core/interfaces/entry-point.interface';
import { EntryPointService } from '../../modules/core/services/entry-point.service';
import { SectionService } from '../../modules/core/services/section.service';

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss'],
})
export class AcademyComponent implements OnInit, OnDestroy, AfterContentChecked {
  sections: string[] = [];
  items: NbMenuItem[] = [];
  currentEntryPoint: EntryPoint;
  oldEntryPoint: EntryPoint;
  subscriptions = new Subscription();
  sidebarCollapsed = false;
  onlyParentRoute: boolean;
  imgSrc: string;
  imgAlt: string;
  prevSection: string;
  nextSection: string;
  currentMileStoneUrl: string;
  entryPoints: EntryPoint[];
  recievedUrl: string;
  previousUrl: string = null;
  currentUrl: string = null;
  activeId = null;
  menuIds: string[] = [];
  children = null;
  clickedOnMenuItem = false;
  private timeout: any;

  constructor(
    private entryPointService: EntryPointService,
    private router: Router,
    private sectionService: SectionService,
    private sidebarService: NbSidebarService,
    private ref: ChangeDetectorRef,
    private dialogService: DialogService,
    private storageService: StorageService,
    private menu: NbMenuService,
    private scorllService: ScrollService
  ) {
    menu.onItemClick().subscribe((value) => {
      // only if the menuitem is a task, this value gets changed
      if (value.item.fragment) {
        this.clickedOnMenuItem = true;
      }
      // does not get activated on resize but thats not necessary imo
      if (window.innerWidth < 768) {
        this.closeSidebar();
      }
    });

    // Handling if you want to go back to the selectionpage
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.previousUrl = this.currentUrl;
      this.currentUrl = event.url;
      if (this.previousUrl && this.previousUrl.includes('lernpfad/') && this.currentUrl === '/lernpfad') {
        this.router.navigateByUrl('/lernpfade');
      }
    });

    // When you visit the academy through an task-link withoud selected an entrypoint, this Url gets stored and you get redirected after selecting an entrypoint
    this.recievedUrl = router.url;

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

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // if the menuitem gets clicked u automatically sroll to the corresponding content. When its finished scrolling the value resets and the other case gets launched
    if (this.clickedOnMenuItem) {
      const y = window.scrollY;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (y === window.scrollY) {
          this.clickedOnMenuItem = false;
        }
      }, 30);
    } else {
      this.activeId = this.scorllService.getLastActiveElement(this.menuIds);
      this.children.forEach((childElement) => {
        if (this.scorllService.getLastActiveElement(this.menuIds) === childElement.fragment) {
          childElement.selected = true;
        } else {
          childElement.selected = false;
        }
      });
    }
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.entryPointService.selectedEntryPointObservable.subscribe((entryPoint) => {
        const items = this.setSections();
        if (this.oldEntryPoint !== undefined && entryPoint !== this.oldEntryPoint) {
          this.router.navigate([`${items[0].link}`]);
        }
        this.oldEntryPoint = entryPoint;
      })
    );
    this.setSections();
    if (!window.location.href.includes('/lernpfad/')) {
      this.router.navigate([`/lernpfad/${this.sections[0]}`]);
    }
    this.entryPoints = this.entryPointService.entryPoints();
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

  setSections(): NbMenuItem[] {
    this.sections = this.entryPointService.selectedEntryPointSections();
    this.items = [];
    const sectionArray: Section[] = this.storageService.load('sections');
    if (this.sections) {
      for (const section of this.sections) {
        let sectionStarted = false;
        if (sectionArray) {
          const currSection: Section = sectionArray.find((oneSection: Section) => oneSection[section]);
          if (currSection) {
            for (let i = 1; i <= currSection[section].length; i++) {
              currSection[section].find((oneTask) => {
                const taskId = Object.keys(oneTask).toString().substring(5, 6);

                if (oneTask[`task-${taskId}`] && oneTask[`task-${taskId}`].completed) {
                  sectionStarted = true;
                }
              });
            }
          }
        }
        if (sectionStarted) {
          this.items.push({
            title: section,
            link: `/lernpfad/${section}`,
            expanded: true,
            badge: {
              dotMode: true,
              status: 'primary',
            },
          });
        } else {
          this.items.push({
            title: section,
            link: `/lernpfad/${section}`,
            expanded: true,
          });
        }
      }
    }
    return this.items;
  }

  setMenuItem(items: NbMenuItem[]): NbMenuItem {
    const menuItem: NbMenuItem = this.items.find((item) => item.title === this.sectionService.currentSection);
    if (menuItem && window.screen.width >= 768) {
      menuItem.children = items;
      this.children = menuItem.children;
      this.menuIds = [];

      menuItem.children.forEach((element) => {
        this.menuIds.push(element.fragment);
      });

      return menuItem;
    }
  }

  checkEntryPoint(): void {
    //If there is no Entrypoint, navigate to the selectionpage
    if (!this.currentEntryPoint) {
      this.router.navigate([`/lernpfade`], {
        queryParams: { redirectTo: this.recievedUrl },
      });
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
    if (window.innerWidth < 768) {
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
