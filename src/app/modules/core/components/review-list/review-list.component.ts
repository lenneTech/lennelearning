import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit {
  @Input() reviews: Review[] = [
    {
      imageUrl: '../../../assets/images/people-images/daniel_review.jpg',
      text: 'Ich hatte schon ein wenig Vorwissen und konnte somit die ersten Kurse überspringen. Wenn ich schwierigere Fragen hatte, die ich nicht alleine mit Google lösen konnte, bekam ich schnell Hilfe von meinem Tutor und wir konnten das Problem gemeinsam lösen. Mir hat die Akademie sehr viel gebracht und ich kann sie jedem, der sich für das Web und dessen Technologien interessiert, nur empfehlen.',
      reviewerTitle: 'Daniel König',
      reviewerSubtitle: 'Praktikant - lenne.Tech GmbH',
    },
    {
      imageUrl: 'https://lenne.tech/assets/images/team/florian-steinhanses.png',
      text: 'Ich hatte schon ein wenig Vorwissen und konnte somit die ersten Kurse überspringen. Wenn ich schwierigere Fragen hatte, die ich nicht alleine mit Google lösen konnte, bekam ich schnell Hilfe von meinem Tutor und wir konnten das Problem gemeinsam lösen. Mir hat die Akademie sehr viel gebracht und ich kann sie jedem, der sich für das Web und dessen Technologien interessiert, nur empfehlen.',
      reviewerTitle: 'Florian Steinhanses',
      reviewerSubtitle: 'Werkstudent - lenne.Tech GmbH',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
