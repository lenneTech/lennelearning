import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorCardsComponent } from './tutor-cards.component';

describe('TutorCardsComponent', () => {
  let component: TutorCardsComponent;
  let fixture: ComponentFixture<TutorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
