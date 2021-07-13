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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://lenne.tech/assets/images/team/kai.png',
      contact: 'kai.haase@lenne.tech',
    },
    {
      title: 'Pascal Klesse',
      subtitle: 'CTO lenne.Tech GmbH',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://lenne.tech/assets/images/team/pascal-klesse.png',
      contact: 'pascal.klesse@lenne.tech',
    },
    {
      title: 'Florian Steinhanses',
      subtitle: 'Werkstudent lenne.Tech GmbH',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: 'https://lenne.tech/assets/images/team/florian-steinhanses.png',
      contact: 'florian.steinhanses@lenne.tech',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
