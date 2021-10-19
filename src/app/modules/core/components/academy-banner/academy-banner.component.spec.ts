/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcademyBannerComponent } from './academy-banner.component';

describe('AcademyBannerComponent', () => {
  let component: AcademyBannerComponent;
  let fixture: ComponentFixture<AcademyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcademyBannerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
