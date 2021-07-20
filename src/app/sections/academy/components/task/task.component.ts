import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/modules/core/services/task.service';
import { DialogService } from '../../../../modules/core/services/dialog.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() hint?: string;
  @Input() videoReference?: string;
  @Input() solutionLink?: string;
  @Input() id: string;
  @Input() section: string;

  completed = false;

  constructor(private dialogService: DialogService, private taskService: TaskService) {}

  ngOnInit(): void {
    const sections = JSON.parse(localStorage.getItem('sections'));

    if (sections) {
      sections.forEach((element) => {
        if (element[this.section]) {
          const sectionTasks = element[this.section];
          if (sectionTasks) {
            sectionTasks.forEach((tasks) => {
              if (tasks[this.id]?.completed) {
                this.completed = true;
              }
            });
          }
        }
      });
    }
  }

  onComplete(): void {
    if (!this.completed) {
      this.taskService.completeTask(this.id, this.section);
    } else {
      this.taskService.uncompleteTask(this.id, this.section);
    }
    this.completed = !this.completed;
  }

  openHelp(): void {
    this.dialogService.openHelperDialog('Hilfe', this.hint, this.videoReference, this.solutionLink);
  }
}
