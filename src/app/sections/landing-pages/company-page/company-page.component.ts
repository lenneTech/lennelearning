import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  title = 'Du suchst fähige Entwickler für dein Unternehmen?';
  subtitle =
    'Wir betreuen und evaluieren deine potenziellen Entwickler im Web und App Bereich.\n In unserer Akademie lernen sie wie man mit aktuellen Technologien agile Web- und Appanwendungen entwickelt.';
  imageUrl = '../../assets/images/entry-point-images/company.svg';

  constructor() {}

  sendOffer(): void {
    window.open('mailto:info@lenne.tech');
  }

  ngOnInit(): void {}
}
