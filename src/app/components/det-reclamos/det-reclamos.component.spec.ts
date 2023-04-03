import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetReclamosComponent } from './det-reclamos.component';

describe('DetReclamosComponent', () => {
  let component: DetReclamosComponent;
  let fixture: ComponentFixture<DetReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetReclamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
