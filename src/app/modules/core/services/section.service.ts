import { ElementRef, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@lenne.tech/ng-base';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';
import { Section } from '../interfaces/section.interface';
import { Tasks } from '../interfaces/tasks.interface';

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
    'git-experte',
    'typescript',
    'angular',
    'ionic',
    'nestjs',
    'packages',
  ];
  private _currentSectionMenuItems: BehaviorSubject<NbMenuItem[]> = new BehaviorSubject<NbMenuItem[]>(null);
  currentSection: string;
  mileStoneCheck = true;
  currentMileStone = new BehaviorSubject('');

  constructor(private router: Router, private storageService: StorageService) {}

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

  checkMileStone(): boolean {
    if (this.currentSectionMenuItems) {
      const sections: Section[] = this.storageService.load('sections');
      if (sections) {
        const currSection = sections.find((oneSection: Section) => oneSection[this.currentSection]);
        if (currSection && currSection[this.currentSection].length === this.currentSectionMenuItems.length) {
          this.mileStoneCheck = true;
          currSection[this.currentSection].find((task: Tasks, index) => {
            if (task[`task-${index + 1}`] && task[`task-${index + 1}`].completed === false) {
              this.mileStoneCheck = false;
            }
          });
          return this.mileStoneCheck;
        }
      }
    }
  }

  setCurrentMileStone(section: string): boolean {
    this.currentMileStone.next(section);
    return true;
  }
}
