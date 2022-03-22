import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  constructor() {}
}
