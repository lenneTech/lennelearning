import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-svg',
  templateUrl: './javascript.svg',
})
export class JavascriptSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
