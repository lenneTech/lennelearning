import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '@lenne.tech/ng-base';
import { EntryPoint } from '../interfaces/entry-point.interface';
import { SectionService } from './section.service';

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
      id: 'berufserkunder',
      title: 'Berufsinteressierte',
      address: 'Berufsinteressierter',
      description:
        'Du interessierst dich für Web- und Apptechnologien, weißt aber noch nicht, was dich im Beruf erwartet?',
      image: '../../assets/images/entry-point-images/berufsinteressent.svg',
      text: 'Dieser Kurs ist für alle die sich für die Web- und Appentwicklung interessieren und einen Einblick in die Berufswelt von Softwareentwicklern bekommen wollen. Der Kurs beginnt dabei mit einer Berufsfeldserkundung, in der dir zunächst die verschiedenen Berufe rund um die Softwareentwiclkung sowie deren Berufslltag und Aufgabenfelder vorgestellt werden. Danach lernst du schon die Grundlagen der Webentwicklung, um schon eigene Webseiten erstellen zu können',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'git-basics', 'javascript'],
      landingRoute: '/berufsinteressierte',
    },
    {
      id: 'praktikant',
      title: 'Praktikanten',
      address: 'Praktikant',
      description:
        'Du bist Schüler, Student, befindest dich in einer Weiterbildung oder suchst aus anderen Gründen noch ein Praktikum?',
      image: '../../assets/images/entry-point-images/praktikant.svg',
      text: 'Wir bieten dir die Möglichkeit in bis zu 12 Wochen die Web- und Appentwicklung in der Praxis kennenzulernen. Zunächst arbeitest du in einer Vorbereitungsphase unsere Kurse durch, um im Praktikum direkt mit deinem eigenen Projekt durchstarten zu können. Wenn du schon Vorkenntnisse hast, kannst du natürlich unter Absprache verschiedene Teile überspringen und sofort loslegen.',
      sections: [
        'beruf',
        'html',
        'css',
        'bootstrap',
        'git-basics',
        'javascript',
        'typescript',
        'git-experte',
        'angular',
        'nestjs',
      ],
      landingRoute: '/praktikanten',
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      address: 'Unternehmer',
      description:
        'Dein Unternehmen sucht fähige App- und Webentwickler? Oder ihr möchtet gerne Anwendungsentwickler ausbilden?',
      image: '../../assets/images/entry-point-images/company.svg',
      text: 'Wir bieten deinem Unternehmen Weiterbildungsmöglichkeiten in der App- und Webentwicklung. Dabei bieten wir eine umfassende Betreuung mit wöchentlichen Meetings an. Dabei schätzen wir ebenso das Potenzial der einzelnen Akademie Teilnehmer ein, um die bestmöglichen Webentwickler für dein Unternehmen zu finden.',
      sections: [
        'html',
        'css',
        'bootstrap',
        'git-basics',
        'javascript',
        'typescript',
        'git-experte',
        'angular',
        'nestjs',
      ],
      landingRoute: '/unternehmen',
    },
  ];

  constructor(private storageService: StorageService, private sectionService: SectionService) {
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
  }
}
