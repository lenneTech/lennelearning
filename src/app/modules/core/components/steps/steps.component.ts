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
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen Einstieg in die Grundlagen der App- & Webentwicklung',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
    },
    {
      title: 'Eigenes Projekt',
      text: 'Nachdem du dir die Grundlagen angeeignet hast, erstellst du mit dem erlangten Wissen dein erstes vollständiges Projekt.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
    },
    {
      title: 'Kooperation',
      text: 'Hier lernst du zusammen mit uns wie man gemeinsam an einem Quellcode arbeitet, Code testet, wie sich Verbesserungsvorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
