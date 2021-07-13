import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternPageComponent } from './intern-page.component';

describe('InternPageComponent', () => {
  let component: InternPageComponent;
  let fixture: ComponentFixture<InternPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
