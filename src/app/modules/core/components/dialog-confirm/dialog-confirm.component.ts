import { Component, Input } from '@angular/core';
import { DialogBtnOptionsEnum } from '../../enumerators/dialog-btn-options.enum';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent {
  @Input() title: string;
  @Input() cardWidth: string;
  @Input() cardHeight: string;

  DialogBtnOptionsEnum = DialogBtnOptionsEnum;
  constructor() {}
}
