import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { NgModule } from '@angular/core';
import { viewcomponentService } from './view.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { HomeeComponent } from './homee/homee.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceAppointmentComponent,
    ViewappointmentComponent,
    HomeeComponent,
    NavbarComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [viewcomponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
