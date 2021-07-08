import { Component, Input, OnInit } from '@angular/core';
import { TextImageInterface } from '../../interfaces/text-image.interface';

@Component({
  selector: 'app-text-image-list',
  templateUrl: './text-image-list.component.html',
  styleUrls: ['./text-image-list.component.scss'],
})
export class TextImageListComponent implements OnInit {
  @Input() listElements: TextImageInterface[];

  constructor() {}

  ngOnInit(): void {}
}
