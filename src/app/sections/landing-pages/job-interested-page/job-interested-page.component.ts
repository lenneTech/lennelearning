import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-interested-page',
  templateUrl: './job-interested-page.component.html',
  styleUrls: ['./job-interested-page.component.scss'],
})
export class JobInterestedPageComponent implements OnInit {
  title = 'Du interessierst dich für App- und Webentwicklung?';
  subtitle =
    'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.\n Gewinne einen Einblick in den Berufsalltag eines Entwicklers, Designers oder Projektleiters und lerne dabei schonmal grundlegende Aspekte der Webentwicklung kennen.';
  imageUrl = '../../assets/images/entry-point-images/berufsinteressent.svg';
  constructor() {}

  ngOnInit(): void {}

  sendApplication(): void {
    window.open('mailto:bewerbung@lenne.tech');
  }
}
