import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  @Input() listElements: TextImageInterface[] = [
    {
      title: 'Persönliche Betreuung',
      text: '',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
    },
    {
      title: 'Wöchentliche Meetings',
      text: '',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
    },
    {
      title: 'Lorem Ipsum',
      text: '',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
