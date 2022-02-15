import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-text-image-list',
  templateUrl: './text-image-list.component.html',
  styleUrls: ['./text-image-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextImageListComponent {
  @Input() listElements: TextImageInterface[] = [
    {
      title: 'Akademie',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen ersten Einstieg in die Grundlagen der App- und Webentwicklung. \n\nUnser Anliegen ist es, mit der Akademie allen Interessierten einen idealen Einstiegspunkt in den Bereich der Softwareentwicklung bieten zu können. Ob mit oder ohne Vorkenntnisse. \n\nUm dieses Ziel zu erreichen, entwickeln wir die Akademie ständig weiter und freuen uns auf Dein Feedback.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
    },
    {
      title: 'Eigenes Projekt',
      text: 'Nachdem Du Dir die Grundlagen angeeignet hast, erstellst Du basierend auf Deinem neuen Wissen Dein erstes eigenes und vollständiges Projekt. Dabei wirst Du sowohl einen Client als auch einen Server bauen und diese miteinander verbinden. Wichtige Bedingung: Es wird kein „Schubladenprojekt“. Daher such Dir ein Projekt aus, das für eine reale Zielgruppe einen echten Mehrwert bietet.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
      imageAlt: 'Illustration eines Mannes der malt.',
    },
    {
      title: 'Teamarbeit',
      text: 'Sofern die Dauer des Praktikums es zulässt und Du die ersten beiden Schritte erfolgreich gegangen bist, integrieren wir Dich in ein aktives Projektteam. So sammelst Du Erfahrungen im Rahmen größerer Entwicklungsprojekte mit mehreren Beteiligten. Hier lernst Du z. B. wie gemeinsam an einem Quellcode gearbeitet wird, was Level 2 und Level 3 Tests sind, wie sich Verbesserungsvorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
      imageAlt: 'Illustration eines Mannes und einer Frau die Puzzleteile halten.',
    },
  ];

  constructor() {}
}
