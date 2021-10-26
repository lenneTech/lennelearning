import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '@lenne.tech/ng-base';
import { EntryPoint } from '../interfaces/entry-point.interface';
import { SectionService } from './section.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EntryPointService {
  private _selectedEntryPoint: BehaviorSubject<EntryPoint> = new BehaviorSubject<EntryPoint>(null);

  // #################################################################################
  // If you got a new section, add it to the sections-array in the wanted entryPoints
  // #################################################################################
  private _entryPoints: EntryPoint[] = [
    {
      id: 'standard',
      title: 'Standard',
      address: 'Nutzer',
      description:
        'Das hier ist der Standard-Einstiegspunkt. Wenn du nicht weißt, was auf dich zukommt oder was dich interessiert, wähle diesen Lernpfad. Hier wird dir alles gezeigt.',
      image: '../../assets/images/explanation-images/discovery.svg',
      sections: [
        'html',
        'css',
        'bootstrap',
        'git-basics',
        'javascript',
        'git-experte',
        'typescript',
        'angular',
        'ionic',
        'docker-basics',
        'nestjs',
        'packages',
        'design',
        'cypress',
      ],
    },
    {
      id: 'berufserkunder',
      title: 'Berufsinteressierte',
      address: 'Berufsinteressierter',
      description:
        'Du interessierst dich für Web- und Apptechnologien, weißt aber noch nicht, was dich im Beruf erwartet?',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'git-basics', 'javascript'],
    },
    {
      id: 'praktikant',
      title: 'Praktikanten',
      address: 'Praktikant',
      description:
        'Du bist Schüler, Student, befindest dich in einer Weiterbildung und willst ein Praktikum bei uns machen? Dieser Lernpfad bereitet dich bestens darauf vor.',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      sections: [
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
        'docker-basics',
        'nestjs',
        'packages',
        'design',
        'cypress',
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      address: 'Frontend-Entwickler',
      description: 'Frontend ist dein Ding und hier willst du Neues lernen? Wähle diesen Lernpfad aus.',
      image: '../../assets/images/explanation-images/community.svg',
      sections: [
        'html',
        'css',
        'bootstrap',
        'git-basics',
        'javascript',
        'git-experte',
        'typescript',
        'angular',
        'ionic',
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      address: 'Backend-Entwickler',
      description: 'Du möchtest dich größtenteils im Bereich Backend weiterbilden. Dann wähle diesen Lernpfad aus.',
      image: '../../assets/images/entry-point-images/company.svg',
      sections: ['git-basics', 'git-experte', 'docker-basics', 'nestjs', 'packages', 'cypress'],
    },
    {
      id: 'sprint',
      title: 'Sprint',
      address: 'Sprinter',
      description:
        'Du möchtest nicht vollkommen ins Detail gehen aber mitreden können, wenn es um Webdevelopement geht.',
      image: '../../assets/images/explanation-images/strategy.svg',
      sections: ['html', 'css', 'bootstrap', 'git-basics', 'javascript', 'typescript', 'angular', 'ionic', 'nestjs'],
    },
  ];

  constructor(private storageService: StorageService, private sectionService: SectionService, private router: Router) {
    this.selectedEntryPoint = this.storageService.load('selectedEntryPoint') as EntryPoint;
  }

  // #################################################################
  // EntryPoints
  // #################################################################
  entryPoints(): EntryPoint[] {
    return this._entryPoints;
  }

  // #################################################################
  // SelectedEntryPoint
  // #################################################################
  get selectedEntryPoint(): EntryPoint {
    return this._selectedEntryPoint.value;
  }

  set selectedEntryPoint(value: EntryPoint) {
    if (this.selectedEntryPoint) {
      this.storageService.remove('sections');
    }
    this._selectedEntryPoint.next(value);
    this.storageService.save('selectedEntryPoint', value);
  }

  get selectedEntryPointObservable(): Observable<EntryPoint> {
    return this._selectedEntryPoint.asObservable();
  }

  setEntryPointById(id: string): void {
    const entryPoint = this.entryPoints().find((element) => element.id === id);
    if (entryPoint) {
      this.selectedEntryPoint = entryPoint;
    }
  }

  selectedEntryPointSections(): string[] {
    return this.selectedEntryPoint?.sections ? this.selectedEntryPoint?.sections : this.sectionService.sections;
  }

  reset(): void {
    this.storageService.remove('selectedEntryPoint');
    this.storageService.remove('sections');
  }

  getPrevSectionByEntryPoint(): string {
    let prevSection;
    if (this.sectionService.currentSection === 'meilenstein/:id') {
      const url = this.router.url;

      const section = url.substring(url.lastIndexOf('/') + 1, url.length);

      prevSection = this.selectedEntryPoint.sections[this.selectedEntryPoint.sections.indexOf(section) - 1];
    } else {
      prevSection =
        this.selectedEntryPoint.sections[
          this.selectedEntryPoint.sections.indexOf(this.sectionService.currentSection) - 1
        ];
    }

    return prevSection ? prevSection : null;
  }

  getNextSectionByEntryPoint(): string {
    let nextSection;
    if (this.sectionService.currentSection === 'meilenstein/:id') {
      const url = this.router.url;

      const section = url.substring(url.lastIndexOf('/') + 1, url.length);

      nextSection = this.selectedEntryPoint.sections[this.selectedEntryPoint.sections.indexOf(section) + 1];
    } else {
      nextSection =
        this.selectedEntryPoint.sections[
          this.selectedEntryPoint.sections.indexOf(this.sectionService.currentSection) + 1
        ];
    }

    return nextSection ? nextSection : null;
  }
}
