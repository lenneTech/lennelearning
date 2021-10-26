import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry-point-card',
  templateUrl: './entry-point-card.component.html',
  styleUrls: ['./entry-point-card.component.scss'],
})
export class EntryPointCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;
  @Input() showMoreRoute: string;
  @Input() route: string;
  @Output() linkClickEvent = new EventEmitter<boolean>();

  constructor() {}

  onLinkClicked(): void {
    this.linkClickEvent.emit(true);
  }
}
