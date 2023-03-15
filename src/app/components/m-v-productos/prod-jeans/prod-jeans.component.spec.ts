import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdJeansComponent } from './prod-jeans.component';

describe('ProdJeansComponent', () => {
  let component: ProdJeansComponent;
  let fixture: ComponentFixture<ProdJeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdJeansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
