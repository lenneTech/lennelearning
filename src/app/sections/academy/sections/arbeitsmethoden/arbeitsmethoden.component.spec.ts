/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArbeitsmethodenComponent } from './arbeitsmethoden.component';

describe('ArbeitsmethodenComponent', () => {
  let component: ArbeitsmethodenComponent;
  let fixture: ComponentFixture<ArbeitsmethodenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArbeitsmethodenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbeitsmethodenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
