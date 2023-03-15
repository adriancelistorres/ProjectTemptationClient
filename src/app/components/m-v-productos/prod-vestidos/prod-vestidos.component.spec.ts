import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdVestidosComponent } from './prod-vestidos.component';

describe('ProdVestidosComponent', () => {
  let component: ProdVestidosComponent;
  let fixture: ComponentFixture<ProdVestidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdVestidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdVestidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
