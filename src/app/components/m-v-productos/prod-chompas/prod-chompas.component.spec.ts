import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdChompasComponent } from './prod-chompas.component';

describe('ProdChompasComponent', () => {
  let component: ProdChompasComponent;
  let fixture: ComponentFixture<ProdChompasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdChompasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdChompasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
