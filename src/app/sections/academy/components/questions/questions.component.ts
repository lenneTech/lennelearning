import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'task-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent {
  @ViewChild('extraQuestion') extraQuestion;
}
