import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.scss'],
})
export class InternPageComponent implements OnInit {
  title = 'Du suchst noch ein Praktikum?';
  subtitle =
    'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.\n Lerne in der Akadmie die Grundlagen, setze dein eigenes Projekt um und arbeite mit an unseren Projekten.';
  imageUrl = '../../assets/images/entry-point-images/praktikant.svg';
  constructor() {}

  sendApplication(): void {
    window.open('mailto:bewerbung@lenne.tech');
  }

  ngOnInit(): void {}
}
