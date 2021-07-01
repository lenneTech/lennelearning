import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogBtnOptionsEnum } from '../../enumerators/dialog-btn-options.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Input() title;
  @Input() cardWidth;
  @Input() cardHeight;
  @Input() dialogBtnOptions: DialogBtnOptionsEnum;
  @Output() acceptBtnClicked = new EventEmitter<boolean>();
  @Output() abortBtnClicked = new EventEmitter<boolean>();
  DialogBntOptionsEnum = DialogBtnOptionsEnum;

  constructor(protected dialogRef: NbDialogRef<any>) {}

  ngOnInit(): void {}

  onAcceptBtnClick() {
    this.acceptBtnClicked.emit(true);
  }

  onAbortBtnClick() {
    this.abortBtnClicked.emit(true);
  }

  close() {
    this.dialogRef.close();
  }
}
