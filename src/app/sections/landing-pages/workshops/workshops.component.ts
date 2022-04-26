import { Component, OnInit } from '@angular/core';
import { TextImageInterface } from 'src/app/modules/core/interfaces/text-image.interface';
import { MetaService } from 'src/app/modules/core/services/meta.service';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent implements OnInit {
  title = 'Workshops';
  subtitle =
    'Auf der Suche nach Workshops rund um die Themen agile Methoden, Softwareentwicklung und Fachkräftesicherung? \n \n Dann bist Du auf dieser Seite richtig. Schau Dir unsere aktuellen Workshopsbeschreibungen an und werde fündig. Für individuellere Themen, Fragen und Wünsche kontaktiere uns gerne direkt.';
  imageUrl = '../../assets/images/explanation-images/kooperation.svg';

  listElements: TextImageInterface[] = [
    {
      title: 'Fachkräftesicherung durch digitale Aus- und Weiterbildung',
      text: 'Der Fokus dieses Workshops liegt auf der digitalen Aus- und Weiterbildung am Beispiel von Softwareentwicklung und IT sowie den notwendigen Tools und Arbeitsbedingungen. Gerade in diesem Bereich fehlt es in in vielen Regionen aktuell an Fachkräften. Die vorhandenen Fachkräfte zu binden und weiterzubilden ist die eine Herausforderung, die andere besteht darin, junge Menschen für diese Themen zu interessieren und sie entsprechend frühzeitig zu motivieren und auszubilden. <br> <br> Digitale Aus- und Weiterbildung <ul> <li> Für wen, warum und wie? </li> <li>  Inhouse Akademie vs. externe Angebote</li> <li>  Praxisbeispiel lenne.Learning</li> <li>  How-To</li> </ul> Für Wen? <ul> <li> Geschäftsführende, HR-Verantwortliche</li> <li>  max. 10-15 Teilnehmende</li>  </ul>  Dauer? <ul> <li>  1 Stunde </li> </ul> Wo? <ul> <li> Vor Ort </li> <li>  Digital </li>  </ul>',
      imageUrl: '../../assets/images/banner-images/Analytics.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
      showBtn: true,
      subscriptionType: 'Workshop - Fachkräftesicherung durch digitale Aus- und Weiterbildung',
    },
    {
      title: 'Praxis meets Wissenschaft - Agile Methoden für den Hochschulkontext',
      text: 'Mit OKR, Scrum und den passenden Werkzeugen machen wir Dich fit für Deine Projekte. In unseren zwei- bis vierstündigen Workshops vermitteln wir die theoretischen Grundlagen, üben an Praxisbeispielen und klären Fragen. In Einzelgesprächen gehen wir anschließend auf die individuellen Projekte ein. <br> <br>     Anwendung agiler Methoden im Kontext von <ul> <li>  Seminar- und Abschlussarbeiten</li> <li>  Doktorarbeiten</li> <li>     Publikationen (Paper, Chapter und Bücher)</li> <li>    Fördermittelanträge</li><li>    Forschungsprojekte</li> </ul> Für Wen? <ul> <li>   Studierende, Doktorand:innen, Postdocs, Professor:innen</li> <li>    Einzelpersonen, Teams oder Organisationen</li> <li> max. 10-15 Teilnehmende</li> </ul>  Dauer? <ul> <li>     2 - 4 Stunden </li> <li>       Individuelle Angebote auf Anfrage</li> </ul> Wo? <ul> <li> Vor Ort </li><li> Digital </li>  </ul>',
      imageUrl: '../../assets/images/banner-images/getstarted-inverted.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
      showBtn: true,
      subscriptionType: 'Workshop - Praxis meets Wissenschaft - Agile Methoden für den Hochschulkontext',
    },
  ];

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    // will be submitted later (LTAK-65)
    this.metaService.updateMetaTags(
      'Du suchst ein Praktikum im Bereich Softwareentwicklung?',
      'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
      'praktikum, softwareentwicklung, academy, online, akademie, web, internship'
    );
  }
}
