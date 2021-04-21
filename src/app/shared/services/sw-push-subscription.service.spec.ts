import { TestBed, inject } from '@angular/core/testing';

import { SWPushSubscriptionService } from './sw-push-subscription.service';

describe('RequestSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SWPushSubscriptionService]
    });
  });

  it('should be created', inject([SWPushSubscriptionService], (service: SWPushSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
