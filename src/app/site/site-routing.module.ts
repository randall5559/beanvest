import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaitingListComponent } from './containers/waiting-list/waiting-list.component';
import { LandingComponent } from './containers/landing/landing.component';
import { environment } from '../../environments/environment';


const routes: Routes = (environment.production) ?
  [
    {
      path: '',
      component: WaitingListComponent
    }
  ] :
  [
    {
      path: '',
      component: WaitingListComponent
    },
    {
      path: 'landing',
      component: LandingComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
