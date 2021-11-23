import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  title = 'Du suchst fähige Entwickler für dein Unter&shy;nehmen?';
  subtitle =
    'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.\n\n In unserer Akademie lernen sie, wie man mit aktuellen Technologien agile Web- und Appanwendungen professionell entwickelt und im Team effizient zusammenarbeitet.';
  imageUrl = '../../assets/images/entry-point-images/company.svg';
  steps: TextImageInterface[] = [
    {
      title: 'Vorbereitung',
      text: 'Im Rahmen der Akademie bereiten wir deine Kandidaten optimal auf ihr Praktikum oder den direkten Einstieg ins Team vor, sodass sie dich schnellstmöglich bei deinen Projekten unterstützen können.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      alt: 'Bild von einem Menschen der auf Büchern steht.',
    },
    {
      title: 'Evaluation',
      text: 'Durch die persönliche Betreuung und die wöchentlichen Meetings können wir den Lernstand der Akademie Teilnehmer gut einschätzen und evaluieren, inwiefern sich ein Kandidat für dein Unternehmen eignet.',
      imageUrl: '../../assets/images/explanation-images/strategy.svg',
      alt: 'Bild von zwei diskutierenden Menschen.',
    },
    {
      title: 'Übernahme',
      text: 'Auch nach der Übernahme in dein Unternehmen können die Absolventen Teil der Community bleiben und unsere Akademie nutzen. Wir bleiben gerne in Kontakt und unterstützen euch bei euren Projekten.',
      imageUrl: '../../assets/images/explanation-images/community.svg',
      alt: 'Bild von Menschen die Blöcke in einem Smartphone aufbauen.',
    },
  ];
  features: TextImageInterface[] = [
    {
      title: 'Einfach',
      text: 'Wir übernehmen die Vorbereitung auf das Praktikum oder den direkten Einstieg ins Team für dich. So kannst du Zeit sparen und dich aufs Wesentliche konzentrieren.',
      iconClass: 'bi-x-diamond-fill',
    },
    {
      title: 'Individuell',
      text: 'Wir erstellen auch individuell Kurse für die Technologien, mit denen ihr arbeitet. So werden die Lernpläne der Kandidaten auf deine Ziele zugeschnitten.',
      iconClass: 'bi-person-lines-fill',
    },
    {
      title: 'Flexibel',
      text: 'Die Akademie ist monatlich kündbar. So kannst du schon frühzeitig Kandidaten ins Team überführen, sobald sie bereit sind.',
      iconClass: 'bi-calendar2-week-fill',
    },
    {
      title: 'Ausbildung',
      text: 'Wir bilden unabhängig von der Akademie auch im Bereich der Anwendungsentwicklung aus. Wenn dein Unternehmen Fachinformatiker benötigt, können wir die Ausbildung begleiten.',
      iconClass: 'bi-briefcase-fill',
    },
    {
      title: 'Kooperation',
      text: 'Bleibe auch in Zukunft mit uns in Kontakt und arbeite mit uns an spannenden Projekten. Wir unterstützen dich gerne!',
      iconClass: 'bi-people-fill',
    },
  ];

  constructor(private metaTagService: Meta) {}

  ngOnInit(): void {
    const imageMetaTag = this.metaTagService.getTag("property='og:image'");
    if (imageMetaTag) {
      this.updateMetaTags();
    } else {
      this.addMetaTags();
    }
  }

  updateMetaTags(): void {
    this.metaTagService.updateTag({
      name: 'title',
      content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?',
    });
    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?',
    });
    this.metaTagService.updateTag({
      property: 'twitter:title',
      content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content:
        'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
    });
    this.metaTagService.updateTag({
      property: 'twitter:description',
      content:
        'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
    });
  }

  addMetaTags(): void {
    this.metaTagService.addTags([
      { name: 'title', content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?' },
      {
        name: 'description',
        content:
          'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:title', content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?' },
      {
        property: 'og:image',
        content:
          window.location.href.slice(0, window.location.href.lastIndexOf('/')) +
          '/assets/images/banner-images/ltakademie.png',
      },
      {
        property: 'og:description',
        content:
          'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:url', content: window.location.href },
      { property: 'twitter:title', content: 'ltakadmie - Du suchst fähige Entwickler für dein Unternehmen?' },
      { property: 'twitter:site', content: '@lenneTech' },
      {
        property: 'twitter:description',
        content:
          'Wir betreuen und evaluieren deine potenziellen Softwareentwickler im Web und App Bereich oder fördern dein Start-up.',
      },
      { property: 'twitter:creator', content: '@lenneTech' },
      {
        property: 'twitter:image',
        content:
          window.location.href.slice(0, window.location.href.lastIndexOf('/')) +
          '/assets/images/banner-images/ltakademie.png',
      },
    ]);
  }

  sendOffer(): void {
    window.open('mailto:info@lenne.tech');
  }
}
