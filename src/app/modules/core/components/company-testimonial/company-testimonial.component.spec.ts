import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyTestimonialComponent } from './company-testimonial.component';

describe('CompanyTestimonialComponent', () => {
  let component: CompanyTestimonialComponent;
  let fixture: ComponentFixture<CompanyTestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanyTestimonialComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyTestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
