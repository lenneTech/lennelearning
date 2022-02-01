/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TeamWorkComponent } from './teamwork.component';

describe('TeamWorkComponent', () => {
  let component: TeamWorkComponent;
  let fixture: ComponentFixture<TeamWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TeamWorkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
