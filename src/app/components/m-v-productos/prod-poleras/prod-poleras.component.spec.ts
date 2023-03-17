import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPolerasComponent } from './prod-poleras.component';

describe('ProdPolerasComponent', () => {
  let component: ProdPolerasComponent;
  let fixture: ComponentFixture<ProdPolerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPolerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdPolerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
