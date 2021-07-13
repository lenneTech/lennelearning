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
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam',
      iconClass: 'bi-person-fill',
    },
    {
      title: 'Community',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam',
      iconClass: 'bi-people-fill',
    },
    {
      title: 'MeetUps',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam',
      iconClass: 'bi-calendar-week',
    },
    {
      title: 'Lernplan',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        'labore et dolore magna aliqua. Ut enim ad minim veniam',
      iconClass: 'bi-layout-text-sidebar-reverse',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
