import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecVeranoComponent } from './collec-verano.component';

describe('CollecVeranoComponent', () => {
  let component: CollecVeranoComponent;
  let fixture: ComponentFixture<CollecVeranoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollecVeranoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollecVeranoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
