import { Injectable } from '@angular/core';
import { StorageService } from '@lenne.tech/ng-base';
import { Section } from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storageService: StorageService) {}

  /**
   * @param id e.g 'task-1'
   * @param section e.g 'html'
   * Stores the completed Tasks in local storage
   */
  completeTask(id, section): void {
    let sections = this.storageService.load('sections');

    if (!sections) {
      // if there is no section at all
      sections = [{ [section]: [{ [id]: { completed: true, completedAt: new Date() } }] }];
    } else {
      const currSection = sections.find((oneSection: Section) => oneSection[section]);

      if (currSection) {
        // if the section already exists
        const currTask = currSection[section].find((oneTask) => oneTask[id]);

        if (currTask) {
          // if the task already exists
          currTask[id].completed = true;
          currTask[id].completedAt = new Date();
        } else {
          // if the task does not exists
          currSection[section].push({ [id]: { completed: true, completedAt: new Date() } });
        }
      } else {
        // if the section does not exists
        sections.push({ [section]: [{ [id]: { completed: true, completedAt: new Date() } }] });
      }
    }
    this.storageService.save('sections', sections);
  }

  uncompleteTask(id, section): void {
    const sections = this.storageService.load('sections');
    const currSection = sections.find((oneSection) => oneSection[section]);

    if (currSection) {
      const currTask = currSection[section].find((oneTask) => oneTask[id]);

      if (currTask) {
        currTask[id].completed = false;
        this.storageService.save('sections', sections);
      }
    }
  }
}
