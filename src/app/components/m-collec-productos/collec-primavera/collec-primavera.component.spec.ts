import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollecPrimaveraComponent } from './collec-primavera.component';

describe('CollecPrimaveraComponent', () => {
  let component: CollecPrimaveraComponent;
  let fixture: ComponentFixture<CollecPrimaveraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollecPrimaveraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollecPrimaveraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
