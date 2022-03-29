import { Component } from '@angular/core';
import { DialogModeEnum } from '../../enumerators/dialog-mode.enum';

@Component({
  selector: 'app-mail-sent-dialog',
  templateUrl: './mail-sent-dialog.component.html',
  styleUrls: ['./mail-sent-dialog.component.scss'],
})
export class MailSentDialogComponent {
  DialogModeEnum = DialogModeEnum;
  constructor() {}
}
