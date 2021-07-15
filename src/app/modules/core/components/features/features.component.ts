import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() imageUrl = '../../assets/images/banner-images/features.svg';
  @Input() features: TextImageInterface[] = [
    {
      title: 'Betreuung',
      text: 'Als Mitglied unserer Akademie bekommst du eine individuelle Betreuung von unseren Tutoren. Wir helfen dir gerne, wenn du mal nicht weiterkommst oder Fragen hast.',
      iconClass: 'bi-person-fill',
    },
    {
      title: 'Community',
      text: 'Tausche dich mit anderen Teilnehmern oder Absolventen der Akademie aus, entwickelt gemeinsam Ideen und unterstützt euch gegenseitig.',
      iconClass: 'bi-people-fill',
    },
    {
      title: 'MeetUps',
      text: 'Im wöchentlichen Akademietreffen kannst du deinen derzeitigen Lernstand vorstellen, Probleme und Fragen ansprechen und dich inspirieren lassen.',
      iconClass: 'bi-calendar-week',
    },
    {
      title: 'Lernpfad',
      text: 'Zusätzlich zu den Videokursen, haben wir einen eigenen Aufgabenkatalog mit Tipps und Musterlösungen angefertigt, um dich auf deinen Lernpfad noch besser zu unterstützen.',
      iconClass: 'bi-layout-text-sidebar-reverse',
    },
    {
      title: 'Netzwerk',
      text: 'In den letzten Jahren konnten wir mit einigen Unternehmen zusammenarbeiten und unser Netzwerk erweitern. Wenn du in der Akademie erfolgreich bist, empfehlen wir dich gerne in unserer Kooperative.',
      iconClass: 'bi-globe',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
