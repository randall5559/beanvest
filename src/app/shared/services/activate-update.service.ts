import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ActivateUpdateService {

  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) { }

  public execute() {
    this.swUpdate.available.subscribe(event => {
      console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
      const snackBarRef = this.snackBar.open('Newer version of the app is available', 'Refresh');

      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
