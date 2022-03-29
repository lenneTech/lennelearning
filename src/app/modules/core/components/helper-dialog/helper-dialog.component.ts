import { Component, Input } from '@angular/core';
import { DialogModeEnum } from '../../enumerators/dialog-mode.enum';

@Component({
  selector: 'app-helper-dialog',
  templateUrl: './helper-dialog.component.html',
  styleUrls: ['./helper-dialog.component.scss'],
})
export class HelperDialogComponent {
  @Input() title: string;
  @Input() cardWidth: string;
  @Input() cardHeight: string;
  @Input() videoReference?: string;
  @Input() hint?: string;
  @Input() solutionLink?: string;
  DialogModeEnum = DialogModeEnum;

  constructor() {}
}
