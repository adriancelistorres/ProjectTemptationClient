import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecInviernoComponent } from './collec-invierno.component';

describe('CollecInviernoComponent', () => {
  let component: CollecInviernoComponent;
  let fixture: ComponentFixture<CollecInviernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollecInviernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollecInviernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
