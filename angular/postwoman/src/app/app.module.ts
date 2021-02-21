import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ResponseSummaryComponent } from './response-summary/response-summary.component';
import { NgxGaugeModule } from 'ngx-gauge';

// angular material - not used
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    NgxGaugeModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    RequestFormComponent,
    ResponseSummaryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
