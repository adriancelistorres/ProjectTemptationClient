import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecFallComponent } from './collec-fall.component';

describe('CollecFallComponent', () => {
  let component: CollecFallComponent;
  let fixture: ComponentFixture<CollecFallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollecFallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollecFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
