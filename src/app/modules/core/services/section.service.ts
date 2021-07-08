import { ElementRef, Injectable } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionService {
  private _sections: string[] = [
    'beruf',
    'html',
    'css',
    'bootstrap',
    'gitbasics',
    'javascript',
    'typescript',
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
      const taskTitle = node.querySelector('.task-title').textContent;
      result.push({
        title: taskTitle,
        link: `/academy/${this.currentSection}`,
        fragment: node.id,
        badge: {
          dotMode: true,
          status: 'primary',
        },
      });
    });

    this.currentSectionMenuItems = result;
  }

  setCurrentSection(section: string): boolean {
    this.currentSection = section;
    return true;
  }
}
