import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishVentaComponent } from './finish-venta.component';

describe('FinishVentaComponent', () => {
  let component: FinishVentaComponent;
  let fixture: ComponentFixture<FinishVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
