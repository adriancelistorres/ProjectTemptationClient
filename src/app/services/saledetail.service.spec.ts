import { TestBed } from '@angular/core/testing';

import { SaledetailService } from './saledetail.service';

describe('SaledetailService', () => {
  let service: SaledetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaledetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
