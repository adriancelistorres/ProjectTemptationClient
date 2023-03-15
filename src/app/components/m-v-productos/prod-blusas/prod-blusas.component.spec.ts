import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBlusasComponent } from './prod-blusas.component';

describe('ProdBlusasComponent', () => {
  let component: ProdBlusasComponent;
  let fixture: ComponentFixture<ProdBlusasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBlusasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBlusasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
