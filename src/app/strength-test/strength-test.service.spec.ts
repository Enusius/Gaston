import { TestBed, inject } from '@angular/core/testing';

import { StrengthTestService } from './strength-test.service';

describe('StrengthTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StrengthTestService]
    });
  });

  it('should be created', inject([StrengthTestService], (service: StrengthTestService) => {
    expect(service).toBeTruthy();
  }));
});
