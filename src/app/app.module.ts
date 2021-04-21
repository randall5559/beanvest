import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { MaterialDesignModule } from './material-design/material-design.module';
import { AppComponent } from './app.component';
import { ErrorsComponent } from './shared/components/errors/errors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ErrorsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      { enabled: environment.production }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
