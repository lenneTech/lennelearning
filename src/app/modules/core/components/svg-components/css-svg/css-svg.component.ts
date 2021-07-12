import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-svg',
  templateUrl: './css.svg',
})
export class CssSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
