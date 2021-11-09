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
    this.metaTagService.addTags([
      { property: 'og:url', content: 'https://akademie.lenne.tech/praktikanten' },
      { property: 'og:image', content: '/assets/images/banner-images/ltakademie.png' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@lenneTech' },
      { property: 'twitter:creator', content: '@lenneTech' },
    ]);
    this.metaTagService.updateTag({
      property: 'og:title',
      content: 'ltakademie - Du suchst noch ein Praktikum?',
    });
    this.metaTagService.updateTag({
      property: 'og:description',
      content:
        'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
    });
    this.metaTagService.updateTag({
      property: 'twitter:title',
      content: 'ltakadmie - Du suchst noch ein Praktikum?',
    });
    this.metaTagService.updateTag({
      property: 'twitter:description',
      content:
        'Wir bieten Schülern, Studenten oder Webinteressierten die Möglichkeit, Web- und Appentwicklung in der Praxis zu erleben und mitzugestalten.',
    });
  }

  sendApplication(): void {
    window.open('mailto:info@lenne.tech');
  }
}
