import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    'git-basics',
    'javascript',
    'typescript',
    'git-experte',
    'angular',
    'ionic',
    'nestjs',
  ];
  private _currentSectionMenuItems: BehaviorSubject<NbMenuItem[]> = new BehaviorSubject<NbMenuItem[]>(null);
  currentSection: string;

  constructor(private router: Router) {}

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

      // Generates the sub-items for the sections
      result.push({
        title: taskTitle,
        link: `/lernpfad/${this.currentSection}`,
        fragment: node.id,
      });
    });

    this.currentSectionMenuItems = result;
  }

  setCurrentSection(section: string): boolean {
    this.currentSection = section;
    return true;
  }

  getPrevSection(): string {
    const prevSection = this.sections[this.sections.indexOf(this.currentSection) - 1];
    return prevSection ? prevSection : null;
  }

  getNextSection(): string {
    const nextSection = this.sections[this.sections.indexOf(this.currentSection) + 1];
    return nextSection ? nextSection : null;
  }
}
