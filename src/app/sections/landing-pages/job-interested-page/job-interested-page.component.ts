import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-job-interested-page',
  templateUrl: './job-interested-page.component.html',
  styleUrls: ['./job-interested-page.component.scss'],
})
export class JobInterestedPageComponent implements OnInit {
  title = 'Du interessierst dich für App- und Web&shy;entwicklung?';
  subtitle =
    'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.\n\n Gewinne in deinem Praktikum einen Einblick in den Berufsalltag im Bereich der Softwareentwicklung und entdecke dabei die grundlegenden Aspekte der Webentwicklung.';
  imageUrl = '../../assets/images/entry-point-images/berufsinteressent.svg';
  @Input() steps: TextImageInterface[] = [
    {
      title: 'Berufsalltag',
      text: 'Erlebe den Berufsalltag in der Softwareentwicklung in Aktion. Komm für ein kurzes Praktikum vorbei und schau dir an, wie Softwareentwickler, Designer und Projektleiter an Webanwendungen arbeiten.',
      imageUrl: '../../assets/images/explanation-images/explore.svg',
      alt: 'Bild von zwei Menschen, die die Natur erkunden.',
    },
    {
      title: 'Technologien',
      text: 'Bekomme einen Einblick in den Grundlagen der modernen Webentwicklung und entwickle mit HTML und CSS schon deine eigene kleine Website.',
      imageUrl: '../../assets/images/explanation-images/discovery.svg',
      alt: 'Bild von zwei Menschen mit Laborwerkzeug.',
    },
    {
      title: 'Projekte',
      text: 'Wir zeigen dir, an welchen Projekten wir aktuell arbeiten und wie kooperative Zusammenarbeit bei uns aussieht.',
      imageUrl: '../../assets/images/explanation-images/build_product.svg',
      alt: 'Bild von Menschen die einen Turm aus Bausteinen bauen.',
    },
  ];
  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      { property: 'og:url', content: 'https://akademie.lenne.tech/berufsinteressierte' },
      { property: 'og:image', content: '/assets/images/banner-images/ltakademie.png' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@lenneTech' },
      { property: 'twitter:creator', content: '@lenneTech' },
    ]);
    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'ltakademie - Du interessierst dich für App- und Webentwicklung?',
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content: 'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.',
    });
    this.metaTagService.updateTag({
      property: 'twitter:title',
      content: 'ltakadmie - Du interessierst dich für App- und Webentwicklung?',
    });
    this.metaTagService.updateTag({
      property: 'twitter:description',
      content: 'Lerne bei uns die Berufsfelder rund um die Entwicklung von modernen Anwendungen kennen.',
    });
  }

  sendApplication(): void {
    window.open('mailto:info@lenne.tech');
  }
}
