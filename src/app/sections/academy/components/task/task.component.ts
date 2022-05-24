import { animate, AUTO_STYLE, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '@lenne.tech/ng-base/shared';
import { SectionService } from 'src/app/modules/core/services/section.service';
import { TaskService } from 'src/app/modules/core/services/task.service';
import { DialogService } from '../../../../modules/core/services/dialog.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(`${400}ms ease-in`)),
      transition('true => false', animate(`${400}ms ease-out`)),
    ]),
  ],
})
export class TaskComponent implements OnInit {
  @Input() hint?: string;
  @Input() videoReference?: string;
  @Input() solutionLink?: string;
  @Input() id: string;
  @Input() section: string;
  @Input() image: { url: string; alt: string; reference?: string };
  @ViewChild('popLink') popLink: ElementRef;

  completed = false;
  check = false;

  constructor(
    private dialogService: DialogService,
    private taskService: TaskService,
    private storageService: StorageService,
    private sectionService: SectionService
  ) {}

  ngOnInit(): void {
    const sections = this.storageService.load('sections');

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

  onComplete() {
    if (!this.completed) {
      this.taskService.completeTask(this.id, this.section);
      if (this.sectionService.checkMileStone()) {
        this.showMilestoneBtn();
      }
    } else {
      this.taskService.uncompleteTask(this.id, this.section);
    }
    this.completed = !this.completed;
  }

  openHelp(): void {
    this.dialogService.openHelperDialog('Hilfe', this.hint, this.videoReference, this.solutionLink);
  }

  openSolution(): void {
    const task = `${window.location.href.split('#')[0]}#${this.id}`;

    this.dialogService.openSolutionDialog('Lösung', this.solutionLink, task, this.id, this.section);
  }

  showMilestoneBtn(): void {
    this.sectionService.setCurrentMileStone(this.section);
  }

  share() {
    const shareUrl = `${window.location.href.split('#')[0]}#${this.id}`;
    this.popLink.nativeElement.style.display = 'block';
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = shareUrl;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.check = true;
    setTimeout(() => {
      this.check = false;
      this.popLink.nativeElement.style.display = 'none';
    }, 5000);
  }
}
