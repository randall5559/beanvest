import { TestBed, inject } from '@angular/core/testing';

import { ActivateUpdateService } from './activate-update.service';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

describe('ActivateUpdateService', () => {
  let service: ActivateUpdateService;
  let swUpdate: SwUpdate;
  let snackBar: MatSnackBar;
  const swUpdateAvail$ = new BehaviorSubject(null);
  const onAction$ = new BehaviorSubject(null);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateUpdateService]
    });
    service = TestBed.get(ActivateUpdateService);
    swUpdate = TestBed.get(SwUpdate);
    snackBar = TestBed.get(MatSnackBar);

    spyOn(swUpdate.available, 'subscribe').and.callThrough();
    spyOn(swUpdate, 'available').and.callFake(() => swUpdateAvail$);
    spyOn(snackBar, 'open').and.callFake(() => onAction$);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
