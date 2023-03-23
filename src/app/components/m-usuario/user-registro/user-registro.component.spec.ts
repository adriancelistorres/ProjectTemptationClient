import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistroComponent } from './user-registro.component';

describe('UserRegistroComponent', () => {
  let component: UserRegistroComponent;
  let fixture: ComponentFixture<UserRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
