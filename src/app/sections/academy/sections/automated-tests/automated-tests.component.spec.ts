/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AutomatedTestsComponent } from './automated-tests.component';

describe('AutomatedTestsComponent', () => {
  let component: AutomatedTestsComponent;
  let fixture: ComponentFixture<AutomatedTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AutomatedTestsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
