import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent {
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
  @Input() buttonText: string;
  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() {}

  onButtonClicked(): void {
    this.buttonClicked.emit(true);
  }
}
