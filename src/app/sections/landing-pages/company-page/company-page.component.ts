import { Component, OnInit } from '@angular/core';
import { TextImageInterface } from '../../../modules/core/interfaces/text-image.interface';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  title = 'Ihr sucht fähige Entwickler für euer Unternehmen?';
  subtitle =
    'Wir betreuen und evaluieren eure potenziellen Entwickler im Web und App Bereich.\n In unserer Akademie lernen sie wie man mit aktuellen Technologien agile Web- und Appanwendungen entwickelt.';
  imageUrl = '../../assets/images/entry-point-images/company.svg';
  steps: TextImageInterface[] = [
    {
      title: 'Vorbereitung',
      text: 'Im Rahmen der Akademie bereiten wir eure Kandidaten optimal auf ihr Praktikum vor, sodass sie euch schnellstmöglich bei euren Projekten unterstützen können.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      alt: 'Bild von einem Menschen der auf Büchern steht.',
    },
    {
      title: 'Evaluation',
      text: 'Durch die persönliche Betreuung und die wöchentlichen Meetings können wir den Lernstand der Akademie Teilnehmer gut einschätzen und evaluieren, inwiefern sich ein Kandidat für euer Unternehmen eignet.',
      imageUrl: '../../assets/images/explanation-images/strategy.svg',
      alt: 'Bild von zwei diskutierenden Menschen.',
    },
    {
      title: 'Übernahme',
      text: 'Auch nach der Übernahme in euer Unternehmen können die Absolventen Teil der Community bleiben und unsere Akademie nutzen. Wir bleiben gerne in Kontakt und helfen euch bei euren Projekten.',
      imageUrl: '../../assets/images/explanation-images/community.svg',
      alt: 'Bild von Menschen die Blöcke in einem Smartphone aufbauen.',
    },
  ];
  features: TextImageInterface[] = [
    {
      title: 'Einfach',
      text: 'Wir übernehmen die Vorbereitung auf das Praktikum für euch. So könnt ihr Zeit sparen und euch aufs Wesentliche konzentrieren.',
      iconClass: 'bi-x-diamond-fill',
    },
    {
      title: 'Individuell',
      text: 'Wir erstellen auch individuell Kurse für die Technologien mit denen ihr arbeitet. So werden die Lernpläne der Kandidaten für eure Ziele zugeschnitten.',
      iconClass: 'bi-person-lines-fill',
    },
    {
      title: 'Flexibel',
      text: 'Die Akademie ist monatlich kündbar. So könnt ihr auch schon vorzeitig Kandidaten ins Praktikum überführen, wenn sie vom Lernstand bereit sind.',
      iconClass: 'bi-calendar2-week-fill',
    },
    {
      title: 'Ausbildung',
      text: 'Wir bilden unabhängig von der Akademie auch im Bereich der Anwendungsentwicklung aus. Wenn euer Unternehmen Fachinformatiker benötigt, können wir die Ausbildung übernehmen.',
      iconClass: 'bi-briefcase-fill',
    },
    {
      title: 'Kooperation',
      text: 'Bleibt auch in Zukunft mit uns in Kontakt und arbeitet mit uns an spannenden Projekten. Wir unterstützen euch gerne!',
      iconClass: 'bi-people-fill',
    },
  ];

  constructor() {}

  sendOffer(): void {
    window.open('mailto:info@lenne.tech');
  }

  ngOnInit(): void {}
}
