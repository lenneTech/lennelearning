import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { VersionHistoryComponent } from 'src/app/modules/core/components/version-history/version-history.component';
import { DialogConfirmComponent } from '../components/dialog-confirm/dialog-confirm.component';
import { HelperDialogComponent } from '../components/helper-dialog/helper-dialog.component';
import { InquiryComponent } from '../components/inquiry/inquiry.component';
import { MailSentDialogComponent } from '../components/mail-sent-dialog/mail-sent-dialog.component';
import { SolutionDialogComponent } from '../components/solution-dialog/solution-dialog.component';
import { EntryPointService } from './entry-point.service';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  defaultModalOptions = { closeOnBackdropClick: true, autoFocus: false };
  constructor(
    private nbDialogService: NbDialogService,
    private entryPointService: EntryPointService,
    private router: Router
  ) {}

  openVersionDialog(): void {
    this.nbDialogService.open(VersionHistoryComponent, this.defaultModalOptions);
  }

  openHelperDialog(
    title: string,
    hint?: string,
    videoReference?: string,
    solutionLink?: string,
    width?: string,
    height?: string
  ): void {
    const dialog = this.nbDialogService.open(HelperDialogComponent, this.defaultModalOptions);
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
    const dialog = this.nbDialogService.open(SolutionDialogComponent, this.defaultModalOptions);
    const instance = dialog.componentRef.instance;
    instance.title = title;
    instance.solutionLink = solutionLink;
    instance.cardWidth = width;
    instance.cardHeight = height;
    instance.task = task;
    instance.id = id;
    instance.section = section;
  }

  openConfirmDialog(): void {
    this.nbDialogService.open(DialogConfirmComponent, this.defaultModalOptions).onClose.subscribe(
      (confirmed) => {
        if (confirmed) {
          this.entryPointService.reset();
          this.router.navigate(['/lernpfade']);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openMailSentDialog(): void {
    this.nbDialogService.open(MailSentDialogComponent, {
      ...this.defaultModalOptions,
      ...{
        hasScroll: true,
      },
    });
  }

  openInquiryDialog(subscription: string): void {
    const dialog = this.nbDialogService.open(InquiryComponent, {
      ...this.defaultModalOptions,
      ...{
        hasScroll: true,
      },
    });
    const instance = dialog.componentRef.instance;

    instance.subscription = subscription;
  }
}
