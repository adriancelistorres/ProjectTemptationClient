import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamosComponent } from './add-reclamos.component';

describe('AddReclamosComponent', () => {
  let component: AddReclamosComponent;
  let fixture: ComponentFixture<AddReclamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReclamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
