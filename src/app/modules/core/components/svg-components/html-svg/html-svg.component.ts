import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-svg',
  templateUrl: './html.svg',
})
export class HtmlSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
