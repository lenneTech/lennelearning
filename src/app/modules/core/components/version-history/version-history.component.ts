import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import packageInfo from '../../../../../../package.json';
import { VersionHistory } from '../../interfaces/version-history.interface';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.scss'],
})
export class VersionHistoryComponent {
  version: string = packageInfo.version;
  versions: VersionHistory[] = [
    {
      version: this.version, // the newest version and its changes is set right here
      changes: ['Workshops-Seite hinzugefügt', 'Kleinere Anpassungen und Optimierungen'],
    },
    {
      version: '1.6.0',
      changes: [
        'Textanpassungen',
        'Visuelles Highlighting beim Scrolling durch die Lernpfade',
        'Reihenfolge der Sektionen innerhalb der Lernpfade angepasst',
        'Kleinere Fehler wurden behoben',
        'Weitere Optimierungen',
      ],
    },
    {
      version: '1.5.0',
      changes: [
        'Visuelle und textuelle Anpassungen',
        'Genutzte Pakete aktualisiert',
        'Seite "Kontakt" hinzugefügt',
        'Seite "Team" hinzugefügt',
        'Seite "Abos & Aktionen" hinzugefügt',
      ],
    },
    {
      version: '1.4.0',
      changes: [
        'Textkorrektur',
        'Navigationsleiste hinzugefügt',
        'Lernpfadunterteilungen erstellt',
        'Rezensionen hinzugefügt',
        'Slider für Rezensionen hinzugefügt',
      ],
    },
    {
      version: '1.3.3',
      changes: ['Größtenteils Textanpassungen'],
    },
    {
      version: '1.3.2',
      changes: [
        'Diverse Wordings angepasst',
        'TypeScript Sektion neu strukturiert',
        'Teamwork Sektion ergänzt und inhaltlich erweitert',
        'Nützliche Links in den Sektionen erweitert',
        'Metadaten aktualisiert',
        'Version History hinzugefügt',
      ],
    },
    {
      version: '1.3.1',
      changes: [
        'Sektion Arbeitsmethoden hinzugefügt',
        'Sektion Bootstrap um Punkte über Responsive Design und UX Design erweitert',
        'Git-Experte ist nun „Teamwork“, erweitert um Arbeiten als Team, Workflow und Schnittstellen',
        'Sektion Prototyping hinzugefügt',
        'Sektion automatisierte Tests hinzugefügt',
        'Rebranding zu lenne.Learning',
      ],
    },
    {
      version: '1.2.0',
      changes: [
        'Änderungen an Meta Tags',
        'Navigationskonflikte gelöst',
        'Diverse Responsiveness Fehler gefixt',
        'Fortschritt Reset Option hinzugefügt',
        'Von tslint zu eslint migriert',
        'Farben für vorgeschlagenen Entrypoint geändert',
      ],
    },
    {
      version: '1.1.0',
      changes: [
        'Docker Sektion hinzugefügt',
        'Cypress Sektion hinzugefügt',
        'TypeScript Sektion erweitert',
        'Docker von Nestjs entfernt',
        'Bildquellen hinzugefügt',
      ],
    },
  ];
  constructor(protected dialogRef: NbDialogRef<any>) {}

  onAbortBtnClick(): void {
    this.dialogRef.close(false);
  }
}
