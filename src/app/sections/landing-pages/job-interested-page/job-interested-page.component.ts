import { Component, Input, OnInit } from '@angular/core';
import { MetaService } from 'src/app/modules/core/services/meta.service';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-job-interested-page',
  templateUrl: './job-interested-page.component.html',
  styleUrls: ['./job-interested-page.component.scss'],
})
export class JobInterestedPageComponent implements OnInit {
  title = 'Du interessierst Dich für App- und Web&shy;entwicklung?';
  subtitle =
    'Wir bieten Berufsinteressierten wie Schüler:innen, Hobbyentwickler:innen und potenziellen Quereinsteiger:innen die Möglichkeit einen Einblick in die verschiedenen Berufsfelder und Anforderungen der Softwareentwicklung zu gewinnen.';
  imageUrl = '../../assets/images/entry-point-images/berufsinteressent.svg';
  @Input() steps: TextImageInterface[] = [
    {
      title: 'Berufsalltag',
      text: 'Erlebe den Berufsalltag in der Softwareentwicklung in Aktion. Komm für ein kurzes Praktikum vorbei und schau Dir an, wie Softwareentwickler, Designer und Projektleiter an Webanwendungen arbeiten.',
      imageUrl: '../../assets/images/explanation-images/explore.svg',
      imageAlt: 'Bild von zwei Menschen, die die Natur erkunden.',
    },
    {
      title: 'Technologien',
      text: 'Bekomme einen Einblick in den Grundlagen der modernen Webentwicklung und entwickle mit HTML und CSS schon Deine eigene kleine Website.',
      imageUrl: '../../assets/images/explanation-images/discovery.svg',
      imageAlt: 'Bild von zwei Menschen mit Laborwerkzeug.',
    },
    {
      title: 'Projekte',
      text: 'Wir zeigen Dir, an welchen Projekten wir aktuell arbeiten und wie kooperative Zusammenarbeit bei uns aussieht.',
      imageUrl: '../../assets/images/explanation-images/build_product.svg',
      imageAlt: 'Bild von Menschen die einen Turm aus Bausteinen bauen.',
    },
  ];
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'lenne.Learning - Du interessierst Dich für App- und Webentwicklung?',
      'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.',
      'academy, online, akademie, web, interested'
    );
  }
}
