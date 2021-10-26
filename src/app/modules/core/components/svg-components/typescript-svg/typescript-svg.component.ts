import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-svg',
  templateUrl: './typescript.svg',
})
export class TypescriptSvgComponent {
  @Input() iconOnly: boolean;

  constructor() {}
}
