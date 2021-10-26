/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcademyPictureComponent } from './academy-picture.component';

describe('AcademyPictureComponent', () => {
  let component: AcademyPictureComponent;
  let fixture: ComponentFixture<AcademyPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcademyPictureComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
