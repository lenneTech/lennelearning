/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GitExpertComponent } from './git-expert.component';

describe('GitExpertComponent', () => {
  let component: GitExpertComponent;
  let fixture: ComponentFixture<GitExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitExpertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
