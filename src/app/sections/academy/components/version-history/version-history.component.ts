import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { DialogBtnOptionsEnum } from 'src/app/modules/core/enumerators/dialog-btn-options.enum';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.scss'],
})
export class VersionHistoryComponent {
  constructor(protected dialogRef: NbDialogRef<any>) {}

  onAbortBtnClick() {
    this.dialogRef.close(false);
  }
}
