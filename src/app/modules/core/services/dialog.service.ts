import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from '../components/dialog-confirm/dialog-confirm.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { HelperDialogComponent } from '../components/helper-dialog/helper-dialog.component';
import { SolutionDialogComponent } from '../components/solution-dialog/solution-dialog.component';
import { EntryPointService } from './entry-point.service';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private nbDialogService: NbDialogService,
    private entryPointService: EntryPointService,
    private router: Router
  ) {}

  openDialog(): void {
    this.nbDialogService.open(DialogComponent, { closeOnBackdropClick: true });
  }

  openHelperDialog(
    title: string,
    hint?: string,
    videoReference?: string,
    solutionLink?: string,
    width?: string,
    height?: string
  ): void {
    const dialog = this.nbDialogService.open(HelperDialogComponent, { closeOnBackdropClick: true });
    const instance = dialog.componentRef.instance;
    instance.title = title;
    instance.videoReference = videoReference;
    instance.hint = hint;
    instance.solutionLink = solutionLink;
    instance.cardWidth = width;
    instance.cardHeight = height;
  }

  openSolutionDialog(
    title: string,
    solutionLink: string,
    task: string,
    id: string,
    section: string,
    width?: string,
    height?: string
  ): void {
    const dialog = this.nbDialogService.open(SolutionDialogComponent, { closeOnBackdropClick: true });
    const instance = dialog.componentRef.instance;
    instance.title = title;
    instance.solutionLink = solutionLink;
    instance.cardWidth = width;
    instance.cardHeight = height;
    instance.task = task;
    instance.id = id;
    instance.section = section;
  }

  openConfirmDialog() {
    this.nbDialogService.open(DialogConfirmComponent, { closeOnBackdropClick: true }).onClose.subscribe(
      (confirmed) => {
        if (confirmed) {
          this.entryPointService.reset();
          this.router.navigate(['/']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
