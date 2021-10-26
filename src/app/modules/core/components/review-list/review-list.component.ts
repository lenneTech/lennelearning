import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../interfaces/review.interface';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent {
  @Input() reviews: Review[] = [
    {
      imageUrl: '../../../assets/images/people-images/daniel_review.jpg',
      text: 'Ich hatte schon ein wenig Vorwissen und konnte somit die ersten Kurse überspringen. Wenn ich schwierigere Fragen hatte, die ich nicht alleine mit Google lösen konnte, bekam ich schnell Hilfe von meinem Tutor und wir konnten das Problem gemeinsam lösen. Mir hat die Akademie sehr viel gebracht und ich kann sie jedem, der sich für das Web und dessen Technologien interessiert, nur empfehlen.',
      reviewerTitle: 'Daniel König',
      reviewerSubtitle: 'Praktikant - lenne.Tech GmbH',
    },
    {
      imageUrl: 'https://lenne.tech/assets/images/team/florian-steinhanses.png',
      text: 'Im Rahmen meiner Bachelorarbeit habe ich zusammen mit lenne.Tech eine App zur Erfassung von Wissensinhalten in der Softwareentwicklung entwickelt. Ich hatte vor allem im Frontend Bereich schon Vorwissen, aber mir fehlte die praktische Erfahrung, um das Projekt eigenständig umzusetzen. An der Stelle haben mich Kai und Pascal hervorragend betreut und mir gezeigt wie man strukturiert an umfangreicheren Anwendungen arbeitet. Darüber hinaus wurde mir auch im wissenschaftlichen Bereich der Arbeit und bei der Vorbereitung auf das Kolloquium sehr gut geholfen. Nach meiner Bachelorarbeit wurde ich als Werkstudent übernommen und arbeite nun mit ihnen im Team zusammen.',
      reviewerTitle: 'Florian Steinhanses',
      reviewerSubtitle: 'Werkstudent - lenne.Tech GmbH',
    },
  ];

  constructor() {}
}
