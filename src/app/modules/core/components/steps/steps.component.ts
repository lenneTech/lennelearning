import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {
  @Input() steps: TextImageInterface[] = [
    {
      title: 'Akademie',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst du einen Einstieg in die Grundlagen der App- & Webentwicklung. Die Lern-Community und erfahrene Tutoren unterstützen dich dabei.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      alt: 'Bild von einem Menschen der auf Büchern steht.',
    },
    {
      title: 'Eigenes Projekt',
      text: 'Nachdem du dir die Grundlagen angeeignet hast, erstellst du mit dem erlangten Wissen dein erstes vollständiges Projekt. Es handelt sich dabei um kein Schubladenprojekt, sondern du bekommst echte Nutzer.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
      alt: 'Bild von zwei diskutierenden Menschen am Tisch',
    },
    {
      title: 'Kooperation',
      text: 'Hier lernst du zusammen mit uns, wie man gemeinsam an einem Quellcode arbeitet, Code testet, wie sich Verbesserungsvorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
      alt: 'Bild von Menschen die Puzzleteile vor einem großen Smartphone halten.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
