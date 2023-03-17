import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdPolosComponent } from './prod-polos.component';

describe('ProdPolosComponent', () => {
  let component: ProdPolosComponent;
  let fixture: ComponentFixture<ProdPolosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdPolosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdPolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
