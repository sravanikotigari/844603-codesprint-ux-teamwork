import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { UpdateAppointComponent } from './update-appoint/update-appoint.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { TopNaviagtionBarComponent } from './top-naviagtion-bar/top-naviagtion-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewAppointmentComponent,
    AppointmentComponent,
     IndexPageComponent,
     TopNaviagtionBarComponent,
     SideBarComponent,

    ContactUsComponent,

    UpdateAppointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
