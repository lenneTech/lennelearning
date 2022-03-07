import { Component, Input } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  @Input() imageUrl = '../../assets/images/banner-images/features.svg';
  @Input() features: TextImageInterface[] = [
    {
      title: 'Betreuung',
      text: 'Die Teilnehmenden werden individuell durch unsere erfahrenen und qualifizierten Tutor:innen betreut. Offene Fragen werden beantwortet und Blockaden gemeinsam beseitigt.',
      iconClass: 'bi-person-fill',
    },
    {
      title: 'Lernpfade',
      text: 'Zusätzlich zu den Videokursen fertigen wir auf den jeweiligen Lernpfad abgestimmte Aufgabenkataloge, Tipps und Musterlösungen an, um die Teilnehmenden optimal zu unterstützen.',
      iconClass: 'bi-layout-text-sidebar-reverse',
    },
    {
      title: 'Wochenmeeting',
      text: 'Wöchentliche Akademietreffen für Q&A, Lernstandspräsentation und Impulsfragen der Tutor:innen. ',
      iconClass: 'bi-calendar-week',
    },
    {
      title: 'Netzwerk',
      text: 'Weiterempfehlung erfolgreicher Absolvent:innen an Unternehmen in unserem Netzwerk.',
      iconClass: 'bi-globe',
    },
    {
      title: 'Community',
      text: '(Digitaler) Austausch innerhalb der Community der Absolvent:innen und Teilnehmenden.',
      iconClass: 'bi-people-fill',
    },
  ];

  constructor() {}
}
