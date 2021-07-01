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
      title: 'Berufserkunder/in',
      cardBackTitle: 'Was machen Webentwickler?',
      image: '../../assets/images/berufserkunder.png',
      description:
        'An alle die sich für die Web- und Appentwicklung interessieren und einen Einblick in die Berufswelt von Softwareentwicklern bekommen wollen. Der Kurs beginnt dabei mit einer Berufsfeldserkundung, in der dir zunächst die verschiedenen Berufe rund um die Softwareentwiclkung sowie deren Berufslltag und Aufgabenfelder vorgestellt werden. Danach lernst du schon die Grundlagen der Webentwicklung, um schon eigene Webseiten erstellen zu können',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'javascript'],
    },
    {
      id: 'schulpraktikant',
      title: 'Schulpraktikant/in',
      cardBackTitle: 'Du bist Schüler/in?',
      image: '../../assets/images/schulpraktikant.png',
      description:
        'Du bist Schüler/in und suchst noch ein Praktikum? Wir helfen dir gerne einen praktischen Einblick in die Web- und Appentwicklung zu bekommen. Dabei wirst du in unseren Kursen die grundlegenden Konzepte der Webentwicklung lernen, um so schon erste eigene Webseiten programmieren zu können. Das Praktikum geht dabei 2-3 Wochen, meld dich gerne bei uns!',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'javascript'],
    },
    {
      id: 'praktikant',
      title: 'Praktikant/in',
      cardBackTitle: 'Du suchst ein Praktikum?',
      image: '../../assets/images/praktikant.png',
      description:
        'Du bist Student, befindest dich in einer Weiterbildung oder suchst aus anderen Gründen noch ein Praktikum? Wir bieten dir die Möglichkeit in bis zu 12 Wochen die Web- und Appentwicklung in der Praxis kennenzulernen. Zunächst arbeitest du in einer Vorbereitungsphase unsere Kurse durch, um im Praktikum direkt mit deinem eigenen Projekt durchstarten zu können. Wenn du schon Vorkenntnisse hast, kannst du natürlich unter Absprache verschiedene Teile überspringen und sofort loslegen.',
      sections: ['beruf', 'html', 'css', 'bootstrap', 'javascript', 'typescript', 'angular', 'ionic'],
    },
    {
      id: 'dojo',
      title: 'Dojo Mitglied',
      cardBackTitle: 'Tritt unserem Coding-Dojo bei!',
      image: '../../assets/images/dojo.png',
      description:
        'Du interessierst dich privat für Web- und Appentwicklung oder generell für neue Technologien und möchtest dich austauschen? Dann tritt unserem Coding Dojo bei. Lass uns zusammen in Workshops, Hackathons oder im wöchentlichen Treffen über Ideen, neue Technologien, Projekte, etc sprechen und neue Innovationen ausprobieren.',
      sections: ['html', 'css', 'bootstrap', 'javascript', 'typescript', 'angular', 'ionic'],
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
