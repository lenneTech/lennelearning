import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTextComponent } from './task-text.component';

describe('TextComponent', () => {
  let component: TaskTextComponent;
  let fixture: ComponentFixture<TaskTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
