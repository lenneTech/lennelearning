import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  completed = false;
  constructor() {}

  ngOnInit(): void {}

  onComplete(): void {
    this.completed = !this.completed;
  }
}