/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CypressComponent } from './cypress.component';

describe('CypressComponent', () => {
  let component: CypressComponent;
  let fixture: ComponentFixture<CypressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CypressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CypressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
