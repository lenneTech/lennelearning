/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntryPointsComponent } from './entry-points.component';

describe('EntryPointsComponent', () => {
  let component: EntryPointsComponent;
  let fixture: ComponentFixture<EntryPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EntryPointsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
