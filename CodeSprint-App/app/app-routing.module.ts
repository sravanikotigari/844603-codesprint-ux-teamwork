import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeeComponent } from './homee/homee.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewappointmentComponent } from './viewappointment/viewappointment.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'Home',component: HomeeComponent},
  {path:'Place Appointment',component: PlaceAppointmentComponent},
  {path:'View Appointment',component:ViewappointmentComponent },
  {path:'Contact Us',component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
