/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DockerBasicsComponent } from './docker-basics.component';

describe('DockerBasicsComponent', () => {
  let component: DockerBasicsComponent;
  let fixture: ComponentFixture<DockerBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DockerBasicsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
