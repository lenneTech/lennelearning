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

  onComplete() {
    this.completed = !this.completed;
    console.log(this.completed);
  }
}
