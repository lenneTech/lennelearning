import { Injectable } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HelperDialogComponent } from '../components/helper-dialog/helper-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private nbDialogService: NbDialogService) {}

  openDialog() {
    this.nbDialogService.open(DialogComponent, { closeOnBackdropClick: true });
  }

  openHelperDialog(title: string, hint?: string, videoReference?: string) {
    const dialog = this.nbDialogService.open(HelperDialogComponent, { closeOnBackdropClick: true });
    const instance = dialog.componentRef.instance;
    instance.title = title;
    instance.videoReference = videoReference;
  }
}
