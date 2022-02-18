/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProcessInterestedComponent } from './process-interested.component';

describe('ProcessInterestedComponent', () => {
  let component: ProcessInterestedComponent;
  let fixture: ComponentFixture<ProcessInterestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessInterestedComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
