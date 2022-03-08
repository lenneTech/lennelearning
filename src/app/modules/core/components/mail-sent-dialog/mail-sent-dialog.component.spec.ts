/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MailSentDialogComponent } from './mail-sent-dialog.component';

describe('MailSentDialogComponent', () => {
  let component: MailSentDialogComponent;
  let fixture: ComponentFixture<MailSentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MailSentDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
