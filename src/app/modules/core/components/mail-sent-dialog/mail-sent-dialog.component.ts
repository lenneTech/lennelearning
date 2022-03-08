import { Component } from '@angular/core';
import { DialogBtnOptionsEnum } from '../../enumerators/dialog-btn-options.enum';

@Component({
  selector: 'app-mail-sent-dialog',
  templateUrl: './mail-sent-dialog.component.html',
  styleUrls: ['./mail-sent-dialog.component.scss'],
})
export class MailSentDialogComponent {
  DialogBtnOptionsEnum = DialogBtnOptionsEnum;
  constructor() {}
}
