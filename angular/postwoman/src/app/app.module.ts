import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RequestFormComponent } from './request-form/request-form.component';

// angular material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule
  ],
  declarations: [
    AppComponent,
    RequestFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
