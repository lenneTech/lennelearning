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
  private _entryPoints: EntryPoint[] = [
    {
      id: 'berufserkunder',
      title: 'Berufsinteressierte',
      cardBackTitle: 'Was machen Webentwickler?',
      image: '../../assets/images/entry-point-images/berufseinsteiger.svg',
      description:
        'An alle die sich für die Web- und Appentwicklung interessieren und einen Einblick in die Berufswelt von Softwareentwicklern bekommen wollen. Der Kurs beginnt dabei mit einer Berufsfeldserkundung, in der dir zunächst die verschiedenen Berufe rund um die Softwareentwiclkung sowie deren Berufslltag und Aufgabenfelder vorgestellt werden. Danach lernst du schon die Grundlagen der Webentwicklung, um schon eigene Webseiten erstellen zu können',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'gitbasics', 'javascript'],
    },
    {
      id: 'praktikant',
      title: 'Praktikanten',
      cardBackTitle: 'Du suchst ein Praktikum?',
      image: '../../assets/images/entry-point-images/praktikant.svg', // identify customers
      description:
        'Du bist Schüler, Student, befindest dich in einer Weiterbildung oder suchst aus anderen Gründen noch ein Praktikum? Wir bieten dir die Möglichkeit in bis zu 12 Wochen die Web- und Appentwicklung in der Praxis kennenzulernen. Zunächst arbeitest du in einer Vorbereitungsphase unsere Kurse durch, um im Praktikum direkt mit deinem eigenen Projekt durchstarten zu können. Wenn du schon Vorkenntnisse hast, kannst du natürlich unter Absprache verschiedene Teile überspringen und sofort loslegen.',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'gitbasics', 'javascript', 'typescript', 'angular', 'ionic', 'nestjs'],
    },
    {
      id: 'unternehmen',
      title: 'Unternehmen',
      cardBackTitle: 'Dein Unternehmen braucht fähige Webentwickler?',
      image: '../../assets/images/entry-point-images/company.svg', // data modern illustrations
      description:
        'Wir bieten deinem Unternehmen Weiterbildungsmöglichkeiten in der App- und Webentwicklung. Dabei bieten wir eine umfassende Betreuung mit wöchentlichen Meetings an. Dabei schätzen wir ebenso das Potenzial der einzelnen Akademie Teilnehmer ein, um die bestmöglichen Webentwickler für dein Unternehmen zu finden.',
      sections: ['html', 'css', 'bootstrap', 'gitbasics', 'javascript', 'typescript', 'angular', 'ionic', 'nestjs'],
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

  selectedEntryPointSections(): string[] {
    return this.selectedEntryPoint?.sections ? this.selectedEntryPoint?.sections : this.sectionService.sections;
  }
}
