/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GitBasicsComponent } from './git-basics.component';

describe('GitBasicsComponent', () => {
  let component: GitBasicsComponent;
  let fixture: ComponentFixture<GitBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GitBasicsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
