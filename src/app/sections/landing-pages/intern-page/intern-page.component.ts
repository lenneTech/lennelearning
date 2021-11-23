import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Review } from '../../../modules/core/interfaces/review.interface';

@Component({
  selector: 'app-intern-page',
  templateUrl: './intern-page.component.html',
  styleUrls: ['./intern-page.component.scss'],
})
export class InternPageComponent implements OnInit {
  title = 'Du suchst noch ein Praktikum?';
  subtitle =
    'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.\n\n Lerne in der Akademie die Grundlagen, setze dein eigenes Projekt um und arbeite mit an unseren Projekten.';
  imageUrl = '../../assets/images/entry-point-images/praktikant.svg';
  review: Review = {
    imageUrl: '../../../assets/images/people-images/daniel_review.jpg',
    text: 'Im Praktikum habe ich einen sehr guten Einblick in den Beruf eines Webentwicklers bekommen. Ich bekam die Chance, an einem eigenen Projekt zu arbeiten, bei dem mich die Mitarbeiter täglich unterstützt haben. Auch bei unternehmensinternen Projekten durfte ich mitentwickeln und meine Meinung einbringen. Das Arbeiten im Team war super angenehm und offen, gerade vor Ort im Büro. Mir hat es sehr viel Spaß gemacht und ich konnte viele Erfahrungen sammeln.',
    reviewerTitle: 'Daniel König',
    reviewerSubtitle: 'Praktikant - lenne.Tech GmbH',
  };

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
      content: 'ltakademie - Du suchst noch ein Praktikum?',
    });
    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'ltakademie - Du suchst noch ein Praktikum?',
    });
    this.metaTagService.updateTag({
      property: 'twitter:title',
      content: 'ltakademie - Du suchst noch ein Praktikum?',
    });
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content:
        'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
    });
    this.metaTagService.updateTag({
      property: 'twitter:description',
      content:
        'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
    });
  }

  addMetaTags(): void {
    this.metaTagService.addTags([
      { name: 'title', content: 'ltakademie - Du suchst noch ein Praktikum?' },
      {
        name: 'description',
        content:
          'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:title', content: 'ltakademie - Du suchst noch ein Praktikum?' },
      {
        property: 'og:image',
        content:
          window.location.href.slice(0, window.location.href.lastIndexOf('/')) +
          '/assets/images/banner-images/ltakademie.png',
      },
      {
        property: 'og:description',
        content:
          'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
      },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:url', content: window.location.href },
      { property: 'twitter:title', content: 'ltakademie - Du suchst noch ein Praktikum?' },
      { property: 'twitter:site', content: '@lenneTech' },
      {
        property: 'twitter:description',
        content:
          'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
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

  sendApplication(): void {
    window.open('mailto:info@lenne.tech');
  }
}
