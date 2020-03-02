import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAppointComponent } from './update-appoint/update-appoint.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { componentFactoryName } from '@angular/compiler';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', redirectTo : 'index-page', pathMatch: 'full'},
  { path: 'update-appoint/:appointid', component: UpdateAppointComponent},
  {path: 'view-appointment', component: ViewAppointmentComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'index-page', component: IndexPageComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
