import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestFormComponent } from './request-form/request-form.component';
import { ResponseSummaryComponent } from './response-summary/response-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: 'form', component: RequestFormComponent },
  { path: 'share', component: ResponseSummaryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
