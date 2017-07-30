import { TestBed, inject } from '@angular/core/testing';

import { CustomerSharedService } from './customer-shared.service';

describe('CustomerSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerSharedService]
    });
  });

  it('should be created', inject([CustomerSharedService], (service: CustomerSharedService) => {
    expect(service).toBeTruthy();
  }));
});
