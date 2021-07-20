import { Injectable } from '@angular/core';
import { Sections } from '../interfaces/sections.interface';
import { Task } from '../interfaces/task.interface';
import { Tasks } from '../interfaces/tasks.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  currTask: Task;
  currSection;
  constructor() {}

  /**
   * @param id e.g 'task-1'
   * @param section e.g 'html'
   * Stores the completed Tasks in local storage
   */
  completeTask(id, section) {
    let sections: Sections[] = JSON.parse(localStorage.getItem('sections'));

    if (!sections) {
      // if there is no section at all
      sections = [{ [section]: [{ [id]: { completed: true, completedAt: new Date() } }] }];
    } else {
      sections.forEach((element) => {
        if (element[section]) {
          // if the section already exists

          element[section].forEach((tasks) => {
            if (tasks[id]) {
              // if the task already exists

              this.currTask = tasks[id];
            } else {
              // if the task does not exists

              this.currSection = element;
            }
          });
        }
      });

      if (this.currTask) {
        // if the task already exists
        this.currTask.completed = true;
        this.currTask.completedAt = new Date();
      } else if (!this.currTask && this.currSection) {
        // if the task does not exists
        this.currSection[section].push({ [id]: { completed: true, completedAt: new Date() } });
      } else if (!this.currSection) {
        // if the section does not exists
        sections.push({ [section]: [{ [id]: { completed: true, completedAt: new Date() } }] });
      }
    }

    localStorage.setItem('sections', JSON.stringify(sections));
  }

  uncompleteTask(id, section) {
    let sections: Sections[] = JSON.parse(localStorage.getItem('sections'));
    sections.forEach((element) => {
      if (element[section]) {
        element[section].forEach((tasks) => {
          if (tasks[id]) {
            this.currTask = tasks[id];
          }
        });
      }
    });

    this.currTask.completed = false;
    localStorage.setItem('sections', JSON.stringify(sections));
  }
}
