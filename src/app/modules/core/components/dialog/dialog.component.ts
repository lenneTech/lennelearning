import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogModeEnum } from '../../enumerators/dialog-mode.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Input() title;
  @Input() cardWidth;
  @Input() cardHeight;
  @Input() hideCloseButton = false;
  @Input() dialogMode: DialogModeEnum;
  @Output() acceptBtnClicked = new EventEmitter<boolean>();
  @Output() abortBtnClicked = new EventEmitter<boolean>();
  DialogBntOptionsEnum = DialogModeEnum;

  constructor(protected dialogRef: NbDialogRef<any>) {}

  onAcceptBtnClick() {
    this.acceptBtnClicked.emit(true);
    this.dialogRef.close(true);
  }

  onAbortBtnClick() {
    this.abortBtnClicked.emit(true);
    this.dialogRef.close(false);
  }

  close() {
    this.dialogRef.close(false);
  }
}
