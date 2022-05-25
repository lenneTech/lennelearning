/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SponsorsPageComponent } from './sponsors-page.component';

describe('SponsorsPageComponent', () => {
  let component: SponsorsPageComponent;
  let fixture: ComponentFixture<SponsorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
