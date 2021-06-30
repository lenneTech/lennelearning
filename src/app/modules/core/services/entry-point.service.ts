import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '@lenne.tech/ng-base';
import { EntryPoint } from '../interfaces/entry-point.interface';

@Injectable({
  providedIn: 'root',
})
export class EntryPointService {
  private _selectedEntryPoint: BehaviorSubject<EntryPoint> = new BehaviorSubject<EntryPoint>(null);
  private _entryPoints: EntryPoint[] = [
    {
      id: 'berufserkunder',
      title: 'Berufserkunder',
      image: '',
      description: 'Für alle Berufseinsteiger die gerne mal in den Beruf reinschnuppern wollen.',
      sections: ['html', 'css', 'javascript'],
    },
    {
      id: 'schulpraktikant',
      title: 'Schulpraktikant',
      image: '',
      description: 'Für alle Schüler die gerne mal programmieren möchte.',
      sections: ['html', 'css', 'javascript', 'typescript'],
    },
    {
      id: 'bootcamp',
      title: 'Bootcamp Hero',
      image: '',
      description: 'Teilnehmer des Bootcamps',
      sections: ['html', 'css', 'javascript', 'typescript', 'angular', 'ionic'],
    },
    {
      id: 'dojo',
      title: 'Dojo Mitglied',
      image: '',
      description: 'Teilnehmer des Coding Dojos',
      sections: ['html', 'css', 'javascript', 'typescript', 'angular', 'ionic'],
    },
  ];

  constructor(private storageService: StorageService) {
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
    // if no entryPoint is selected, return all sections (later)
    return this.selectedEntryPoint?.sections ? this.selectedEntryPoint?.sections : [];
  }
}
