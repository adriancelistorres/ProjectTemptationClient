import { TestBed } from '@angular/core/testing';

import { CargarscriptService } from './cargarscript.service';

describe('CargarscriptService', () => {
  let service: CargarscriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargarscriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
