import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(protected dialogRef: NbDialogRef<any>) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }
}
