import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PriceBannerComponent } from './price-banner.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PriceBannerComponent', () => {
  let fixture: ComponentFixture<PriceBannerComponent>;
  let component: PriceBannerComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [],
      declarations: [PriceBannerComponent],
    });

    fixture = TestBed.createComponent(PriceBannerComponent);
    component = fixture.componentInstance;
  });

  it('should be able to create component instance', () => {
    expect(component).toBeDefined();
  });
});
