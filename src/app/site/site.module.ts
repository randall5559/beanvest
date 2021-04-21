import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialDesignModule } from '../material-design/material-design.module';
import { SiteRoutingModule } from './site-routing.module';
import { WaitingListComponent } from './containers/waiting-list/waiting-list.component';
import { LandingComponent } from './containers/landing/landing.component';
import { RateCompareComponent } from './components/rate-compare/rate-compare.component';
import { RateBlockComponent } from './components/rate-block/rate-block.component';


@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    MaterialDesignModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    WaitingListComponent,
    RateCompareComponent,
    RateBlockComponent,
    LandingComponent
  ]
})
export class SiteModule { }
