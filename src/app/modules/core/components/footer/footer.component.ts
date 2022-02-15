import { Component } from '@angular/core';
import packageInfo from '../../../../../../package.json';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  version: string = packageInfo.version;
  constructor(private dialogService: DialogService) {}

  openVersionHistory() {
    this.dialogService.openVersionDialog();
  }
}
