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
      id: 'berufsinteressierte',
      title: 'Berufsfelderkundung',
      address: 'Beruf',
      description:
        'Du interessierst Dich für App- und Webtechnologien, weißt aber noch nicht, was Dich in diesem Berufsfeld erwartet? Wähle diesen Pfad aus, um mehr zu erfahren.',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'git-basics', 'javascript'],
      tag: ['ALL', 'JOB_INTERESTED', 'INTERN'],
    },
    {
      id: 'praktikanten',
      title: 'Praktikum',
      address: 'Praktikum',
      description:
        'Du bist Schüler:in, Student:in, nimmst an einer Weiterbildungsmaßnahme teil oder absolvierst bzw. suchst aus anderen Gründen ein Praktikum? Dieser Lernpfad hilft Dir weiter.',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      sections: [
        'beruf',
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'javascript',
        'typescript',
        'prototyping',
        'angular',
        'packages',
        'docker-basics',
        'nestjs',
      ],
      tag: ['ALL', 'INTERN'],
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      address: 'Unternehmen',
      description:
        'Dein Unternehmen sucht fähige App- und Webentwickler:innen? Oder Ihr möchtet gerne Anwendungsentwickler:innen ausbilden? Dann ist dieser Lernpfad die richtige Wahl.',
      image: '../../assets/images/entry-point-images/company.svg',
      sections: [
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'javascript',
        'typescript',
        'prototyping',
        'angular',
        'automatisierte-tests',
        'packages',
        'ionic',
        'docker-basics',
        'nestjs',
      ],
      tag: ['ALL', 'COMPANY'],
    },
    {
      id: 'sprint',
      title: 'Sprint',
      address: 'Sprint',
      description:
        'Du möchtest nicht vollkommen ins Detail gehen, aber mitreden können, wenn es um Webdevelopment geht? Dann ist dieser Pfad der richtige für Dich.',
      image: '../../assets/images/explanation-images/strategy.svg',
      sections: ['html', 'css', 'bootstrap', 'git-basics', 'javascript', 'typescript', 'angular', 'ionic', 'nestjs'],
      tag: ['ALL', 'INTERN', 'COMPANY'],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      address: 'Frontend',
      description: 'Frontend ist Dein Ding und hier willst Du Neues lernen? Wähle diesen Lernpfad aus.',
      image: '../../assets/images/explanation-images/community.svg',
      sections: [
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'arbeitsmethoden',
        'javascript',
        'typescript',
        'angular',
        'automatisierte-tests',
        'packages',
        'ionic',
      ],
      tag: ['ALL', 'INTERN', 'COMPANY'],
    },
    {
      id: 'backend',
      title: 'Backend',
      address: 'Backend',
      description:
        'Du möchtest Dich größtenteils im Bereich Backend weiterbilden? Dann ist dieser Lernpfad der richtige.',
      image: '../../assets/images/explanation-images/build_product.svg',
      sections: [
        'javascript',
        'git-basics',
        'teamwork',
        'typescript',
        'docker-basics',
        'nestjs',
        'packages',
        'automatisierte-tests',
      ],
      tag: ['ALL', 'INTERN', 'COMPANY'],
    },

    // this section is not a duplicate but is unique to the company-section to give it a meaningful order. Without it, the entrypoint "Praktikum" would appear first in the list
    {
      id: 'praktikanten',
      title: 'Praktikum',
      address: 'Praktikum',
      description:
        'Du bist Schüler:in, Student:in, nimmst an einer Weiterbildungsmaßnahme teil oder absolvierst bzw. suchst aus anderen Gründen ein Praktikum? Dieser Lernpfad hilft Dir weiter.',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      sections: [
        'beruf',
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'javascript',
        'typescript',
        'prototyping',
        'angular',
        'packages',
        'docker-basics',
        'nestjs',
      ],
      tag: ['COMPANY'],
    },

    {
      id: 'standard',
      title: 'Standard',
      address: 'Standard',
      description:
        'Das hier ist der Standard-Einstiegspunkt. Wenn Du Dir nicht sicher bist, was genau Dich interessiert oder ob einer der anderen Pfade zu Dir passt, dann wähle diesen Lernpfad. Hier wird Dir alles gezeigt.',
      image: '../../assets/images/explanation-images/discovery.svg',
      sections: [
        'beruf',
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'arbeitsmethoden',
        'javascript',
        'typescript',
        'prototyping',
        'angular',
        'automatisierte-tests',
        'packages',
        'ionic',
        'docker-basics',
        'nestjs',
      ],
      tag: ['ALL', 'INTERN'],
    },
    {
      id: 'nachwuchskräfte',
      title: 'Nachwuchskräfte',
      address: 'Nachwuchs',
      description: 'Platzhalter Text. To be changed.',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      sections: [
        'html',
        'css',
        'design',
        'bootstrap',
        'git-basics',
        'teamwork',
        'arbeitsmethoden',
        'javascript',
        'typescript',
        'prototyping',
        'angular',
        'automatisierte-tests',
        'packages',
        'ionic',
        'docker-basics',
        'nestjs',
      ],
      tag: ['ALL', 'COMPANY'],
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
