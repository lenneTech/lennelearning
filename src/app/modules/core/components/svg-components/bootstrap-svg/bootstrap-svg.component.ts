import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-svg',
  templateUrl: './bootstrap.svg',
})
export class BootstrapSvgComponent implements OnInit {
  @Input() iconOnly: boolean;
  constructor() {}

  ngOnInit(): void {}
}
