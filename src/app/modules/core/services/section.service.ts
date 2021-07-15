import { ElementRef, Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  // #######################################################
  // If you got a new section, add it to the _sections-array
  // #######################################################
  private _sections: string[] = [
    'beruf',
    'html',
    'css',
    'bootstrap',
    'gitbasics',
    'javascript',
    'typescript',
    'gitexpert',
    'angular',
    'ionic',
    'nestjs',
  ];
  private _currentSectionMenuItems: BehaviorSubject<NbMenuItem[]> = new BehaviorSubject<NbMenuItem[]>(null);
  currentSection: string;

  constructor() {}

  get sections(): string[] {
    return this._sections;
  }

  get currentSectionMenuItems(): NbMenuItem[] {
    return this._currentSectionMenuItems.value;
  }

  set currentSectionMenuItems(value: NbMenuItem[]) {
    this._currentSectionMenuItems.next(value);
  }

  get currentSectionMenuItemsObservable(): Observable<NbMenuItem[]> {
    return this._currentSectionMenuItems.asObservable();
  }

  initSection(sectionRef: ElementRef): void {
    const result: NbMenuItem[] = [];

    if (!sectionRef || !sectionRef.nativeElement.querySelectorAll('[id^=task-]')?.length) {
      this.currentSectionMenuItems = null;
      return;
    }

    sectionRef.nativeElement.querySelectorAll('[id^=task-]').forEach((node) => {
      let taskTitle;

      // Checks if there is a explicit sidebar-title to put inside the menu
      if (node.querySelector('.sidebar-title')) {
        taskTitle = node.querySelector('.sidebar-title').textContent;
      } else {
        taskTitle = node.querySelector('.task-title').textContent;
      }

      const color = this.getTaskType(node);

      // Generates the sub-items for the sections
      result.push({
        title: taskTitle,
        link: `/lernpfad/${this.currentSection}`,
        fragment: node.id,
        badge: {
          dotMode: true,
          status: color,
        },
      });
    });

    this.currentSectionMenuItems = result;
  }

  /**
   * Checks which tasktype is used and generates a specific color for it
   */
  getTaskType(node): string {
    if (node.querySelectorAll('task-text')[0]) {
      return 'success';
    } else if (node.querySelectorAll('task-video')[0]) {
      return 'info';
    } else if (node.querySelectorAll('task-questions')[0]) {
      return 'primary';
    } else if (node.querySelectorAll('task-code')[0]) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  setCurrentSection(section: string): boolean {
    this.currentSection = section;
    return true;
  }
}
