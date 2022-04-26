import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-text-image-list',
  templateUrl: './text-image-list.component.html',
  styleUrls: ['./text-image-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextImageListComponent {
  @Input() listElements: TextImageInterface[];

  constructor() {}
}
