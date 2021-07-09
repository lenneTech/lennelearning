import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-text-image-list',
  templateUrl: './text-image-list.component.html',
  styleUrls: ['./text-image-list.component.scss'],
})
export class TextImageListComponent implements OnInit {
  @Input() listElements: TextImageInterface[] = [
    {
      title: 'Akademie',
      text:
        'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen Einstieg in die Grundlagen der App- & Webentwicklung:\n' +
        'Unterstütze uns und werde Mitautor in der Akademie!\n' +
        'Es wäre toll, wenn du uns beim inhaltlichen Aufbau unserer Akademie unterstützen würdest. Lass dich dabei von den vorhandenen Quellen inspirieren, aber bitte kopiere nichts. Auch wenn viele Dinge im Internet frei zugänglich sind, unterliegen sie dennoch dem Urheberrecht und dürfen nicht einfach auf anderen Seiten übernommen werden. Dies gilt für Bilder, Texte, Videos und andere urheberrechtlich geschützte Inhalte. Es gibt einige Seiten, die Inhalte zur freien Verwendung zur Verfügung stellen (z.B. Unsplash). Bitte prüfe bevor du diese Inhalte nutzt die Lizenzbedingungen. Wenn du dir unsicher bist, frage zuerst deinen Tutor.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      alt: 'Illustration eines Mannes der auf Büchern steht.',
    },
    {
      title: 'Eigenes Projekt',
      text:
        'Nachdem du dir die Grundlagen angeeignet hast, erstellst du mit dem erlangten Wissen dein erstes vollständiges Projekt.\n' +
        'Dabei wirst du sowohl einen Client als auch einen Server bauen und diese miteinander verbinden.\n' +
        'Wichtige Bedingung: Es wird kein „Schubladenprojekt“. Daher suche dir ein Projekt aus, das für eine reale Zielgruppe einen echten Mehrwert bietet.',
      imageUrl: '../../assets/images/explanation-images/projekt.svg',
      alt: 'Illustration eines Mannes der malt.',
    },
    {
      title: 'Kooperation',
      text: 'Sobald du die ersten beiden Schritte erfolgreich gegangen bist, integrieren wir dich in ein aktives Team, so dass du auch Erfahrung in der Entwicklung größerer Projekte zusammen mit anderen sammeln kannst. Hier lernst du wie man gemeinsam an einem Quellcode arbeitet, was Level 2 und Level 3 Tests sind, wie sich Verbesserungs- vorschläge konstruktiv einbringen lassen und vieles mehr.',
      imageUrl: '../../assets/images/explanation-images/kooperation.svg',
      alt: 'Illustration eines Mannes und einer Frau die Puzzleteile halten.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
