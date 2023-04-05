import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodopagoComponent } from './metodopago.component';

describe('MetodopagoComponent', () => {
  let component: MetodopagoComponent;
  let fixture: ComponentFixture<MetodopagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetodopagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetodopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
