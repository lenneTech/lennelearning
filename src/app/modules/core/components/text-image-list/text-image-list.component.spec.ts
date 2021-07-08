import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageListComponent } from './text-image-list.component';

describe('TextImageListComponent', () => {
  let component: TextImageListComponent;
  let fixture: ComponentFixture<TextImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextImageListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
