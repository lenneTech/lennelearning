import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-helper-dialog',
  templateUrl: './helper-dialog.component.html',
  styleUrls: ['./helper-dialog.component.scss'],
})
export class HelperDialogComponent implements OnInit {
  @Input() test: any;

  constructor() {}

  ngOnInit(): void {}
}
