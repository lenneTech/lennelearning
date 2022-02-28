/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnderlineAnimationComponent } from './underline-animation.component';

describe('UnderlineAnimationComponent', () => {
  let component: UnderlineAnimationComponent;
  let fixture: ComponentFixture<UnderlineAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UnderlineAnimationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderlineAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
