import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-point-card',
  templateUrl: './entry-point-card.component.html',
  styleUrls: ['./entry-point-card.component.scss'],
})
export class EntryPointCardComponent implements OnInit {
  @Input() title: string;
  @Input() backTitle: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() linkText: string;
  @Input() route: string;

  constructor() {}

  ngOnInit(): void {}
}
