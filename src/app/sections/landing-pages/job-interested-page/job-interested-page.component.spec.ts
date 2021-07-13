import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInterestedPageComponent } from './job-interested-page.component';

describe('JobInterestedPageComponent', () => {
  let component: JobInterestedPageComponent;
  let fixture: ComponentFixture<JobInterestedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobInterestedPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInterestedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
