import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}
}
