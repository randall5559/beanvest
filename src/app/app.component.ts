import { Component, OnInit } from '@angular/core';
import { ActivateUpdateService } from './shared/services/activate-update.service';
import { SWPushSubscriptionService } from './shared/services/sw-push-subscription.service';

@Component({
  selector: 'bv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private activateUpdate: ActivateUpdateService,
    private swPushSubscription: SWPushSubscriptionService
  ) { }

  ngOnInit() {
    this.activateUpdate.execute();
    this.swPushSubscription.saveSubscription();
  }


}
