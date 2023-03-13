import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetProductoComponent } from './det-producto.component';

describe('DetProductoComponent', () => {
  let component: DetProductoComponent;
  let fixture: ComponentFixture<DetProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
