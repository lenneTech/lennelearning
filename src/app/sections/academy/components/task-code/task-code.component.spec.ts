/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskCodeComponent } from './task-code.component';

describe('TaskCodeComponent', () => {
  let component: TaskCodeComponent;
  let fixture: ComponentFixture<TaskCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskCodeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
