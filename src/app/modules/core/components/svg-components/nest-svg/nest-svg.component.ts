import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nest-svg',
  templateUrl: './nest.svg',
})
export class NestSvgComponent implements OnInit {
  @Input() iconOnly: boolean;

  constructor() {}

  ngOnInit(): void {}
}
