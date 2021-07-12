import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-svg',
  templateUrl: './angular.svg',
})
export class AngularSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
