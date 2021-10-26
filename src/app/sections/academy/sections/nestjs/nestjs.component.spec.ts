/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NestjsComponent } from './nestjs.component';

describe('NestjsComponent', () => {
  let component: NestjsComponent;
  let fixture: ComponentFixture<NestjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NestjsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
