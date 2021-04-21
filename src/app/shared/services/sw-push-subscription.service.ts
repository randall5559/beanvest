import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SWPushSubscriptionService {
  readonly VAPID_PUBLIC_KEY = environment.swPushInfo.VAPID_PUBLIC_KEY;

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private http: HttpClient
  ) { }

  public async getSubscription(): Promise<PushSubscription> {
    if (this.swUpdate.isEnabled) {
      try {
        return await this.swPush.requestSubscription({
          serverPublicKey: this.VAPID_PUBLIC_KEY
        });

      } catch (error) {
        console.error('Could not subscribe to notifications', error);
      }
    }
  }

  public async saveSubscription() {
    if (this.swUpdate.isEnabled) {
      try {
        const subscription = await this.getSubscription();

        await this.http.post('https://beanvest-web-notification.glitch.me/api/saveSubscription', JSON.stringify(subscription), {
          headers: { 'Content-Type': 'application/json' }
        }).toPromise();

      } catch (error) {
        console.error('Could not save notification subscription', error);
      }
    }
  }
}
