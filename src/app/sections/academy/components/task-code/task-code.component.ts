import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task-code',
  templateUrl: './task-code.component.html',
  styleUrls: ['./task-code.component.scss'],
})
export class TaskCodeComponent implements OnInit {
  @Input() url: string;
  snippetUrl: string;

  ngOnInit() {
    this.snippetUrl = window.location.origin + this.url;
  }
}
