import { TestBed, async, inject } from '@angular/core/testing';

import { UnavailableGuard } from './unavailable.guard';

describe('UnavailableGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnavailableGuard]
    });
  });

  it('should ...', inject([UnavailableGuard], (guard: UnavailableGuard) => {
    expect(guard).toBeTruthy();
  }));
});
