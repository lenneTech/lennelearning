/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrototypingComponent } from './prototyping.component';

describe('PrototypingComponent', () => {
  let component: PrototypingComponent;
  let fixture: ComponentFixture<PrototypingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrototypingComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrototypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
