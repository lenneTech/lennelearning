import { Component, Input } from '@angular/core';
import { DialogModeEnum } from '../../enumerators/dialog-mode.enum';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent {
  @Input() title: string;
  @Input() cardWidth: string;
  @Input() cardHeight: string;

  DialogModeEnum = DialogModeEnum;
  constructor() {}
}
