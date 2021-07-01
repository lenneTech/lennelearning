import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskVideoComponent } from './task-video.component';

describe('VideoComponent', () => {
  let component: TaskVideoComponent;
  let fixture: ComponentFixture<TaskVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskVideoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
