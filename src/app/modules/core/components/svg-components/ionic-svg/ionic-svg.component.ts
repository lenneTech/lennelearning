import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ionic-svg',
  templateUrl: './ionic.svg',
})
export class IonicSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
