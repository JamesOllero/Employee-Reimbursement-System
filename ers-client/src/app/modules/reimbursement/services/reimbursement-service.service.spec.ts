import { TestBed } from '@angular/core/testing';

import { ReimbursementServiceService } from './reimbursement-service.service';

describe('ReimbursementServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReimbursementServiceService = TestBed.get(ReimbursementServiceService);
    expect(service).toBeTruthy();
  });
});
