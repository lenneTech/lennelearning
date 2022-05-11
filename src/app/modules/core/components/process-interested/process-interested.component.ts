import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-process-interested',
  templateUrl: './process-interested.component.html',
  styleUrls: ['./process-interested.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProcessInterestedComponent {
  @Input() listElements: TextImageInterface[] = [
    {
      title: 'Ablauf',
      text: 'Durch Tutorials in Form von Texten, Videokursen und Spielen bekommst Du einen Überblick über die Grundlagen der App- und Webentwicklung.',
      imageUrl: '../../assets/images/explanation-images/academy.svg',
      imageAlt: 'Illustration eines Mannes der auf Büchern steht.',
    },
  ];
}
