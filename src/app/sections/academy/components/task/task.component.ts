import { Component, Input, OnInit } from '@angular/core';
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

  completed = false;
  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  onComplete(): void {
    this.completed = !this.completed;
  }

  openHelp(): void {
    this.dialogService.openHelperDialog('Hilfe', this.hint, this.videoReference, this.solutionLink);
  }
}
