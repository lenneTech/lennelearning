import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-tutor-cards',
  templateUrl: './tutor-cards.component.html',
  styleUrls: ['./tutor-cards.component.scss'],
})
export class TutorCardsComponent implements OnInit {
  @Input() tutors: TextImageInterface[] = [
    {
      title: 'Kai Haase',
      subtitle: 'CEO lenne.Tech GmbH',
      text: 'Als Full-Stack Entwickler bewege ich mich am Liebsten zwischen Client und Server. Dabei fokussiere ich mich auf Business Logic und Architektur.',
      imageUrl: 'https://lenne.tech/assets/images/team/kai.png',
      alt: 'Bild von Kai Haase',
      contact: 'kai.haase@lenne.tech',
    },
    {
      title: 'Pascal Klesse',
      subtitle: 'CTO lenne.Tech GmbH',
      text: 'Morgens flirte ich mit CSS/SCSS, in der Nacht kuschel ich mit Ubuntu und denke dabei an Angular.',
      imageUrl: 'https://lenne.tech/assets/images/team/pascal-klesse.png',
      alt: 'Bild von Pascal Klesse',
      contact: 'pascal.klesse@lenne.tech',
    },
    {
      title: 'Florian Steinhanses',
      subtitle: 'Werkstudent lenne.Tech GmbH',
      text: 'Ich begeistere mich für die Entwicklung von Usability Komponenten und dabei insbesondere für mobile Applikationen mit minimalistischem Design.',
      imageUrl: 'https://lenne.tech/assets/images/team/florian-steinhanses.png',
      alt: 'Bild von Florian Steinhanses',
      contact: 'florian.steinhanses@lenne.tech',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
