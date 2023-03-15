import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdShortsComponent } from './prod-shorts.component';

describe('ProdShortsComponent', () => {
  let component: ProdShortsComponent;
  let fixture: ComponentFixture<ProdShortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdShortsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
