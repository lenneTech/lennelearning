import { Component, Input } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  @Input() steps: TextImageInterface[] = [
    {
      title: 'Grundlagen',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommen die Teilnehmenden einen Einstieg in die Grundlagen der App- & Webentwicklung. Die Lerncommunity und erfahrene Tutor:innen unterstützen sie dabei.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Bild von einem Menschen, der auf Büchern steht.',
    },
    {
      title: 'Eigenes Projekt',
      text: 'Nachdem sie sich die Grundlagen angeeignet haben, erstellen sie mit dem erlangten Wissen ein erstes vollständiges Projekt. Es handelt sich dabei nicht um ein Schubladenprojekt, sondern es wird in der Praxis eingesetzt.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
      imageAlt: 'Bild von einem Menschen, der sein eine Applikation konzipiert.',
    },
    {
      title: 'Kooperation',
      text: 'Hier lernen die Teilnehmenden zusammen mit dem lenne.Learning-Team, wie gemeinsam an Quellcode gearbeitet wird, den Code zu testen, wie sich Verbesserungsvorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
      imageAlt: 'Bild von Menschen, die Puzzleteile miteinander verbinden.',
    },
  ];

  constructor() {}
}
