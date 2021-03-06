import { Component, OnInit } from '@angular/core';
import { TextImageInterface } from 'src/app/modules/core/interfaces/text-image.interface';
import { MetaService } from 'src/app/modules/core/services/meta.service';

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
  listElements: TextImageInterface[] = [
    {
      title: 'Ablauf',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen Überblick über die Grundlagen der App- und Webentwicklung.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
    },
  ];
  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.updateMetaTags(
      'lenne.Learning - Du interessierst Dich für App- und Webentwicklung?',
      'Wir bieten Berufsinteressierten, Schülern, Hobbyentwicklern und Quereinsteigern Einblicke in verschiedene Berufsfelder und Anforderungen der Softwareentwicklung.',
      'lenne.learning, lennelearning, beruf, academy, online, akademie, web, interested'
    );
  }
}
