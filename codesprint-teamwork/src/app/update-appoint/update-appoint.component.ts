import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appoint } from '../model/appointment.model';
import { AppointmentserviceService } from '../services/appointmentservice.service';

@Component({
  selector: 'update-appoint',
  templateUrl: './update-appoint.component.html',
  styleUrls: ['./update-appoint.component.css']
})
export class UpdateAppointComponent implements OnInit {

  appointid: number;
  appoint: Appoint;

  // dependecy on appointment  Data Service
  constructor(public activatedRoute: ActivatedRoute, public appointService: AppointmentserviceService, public router: Router) {
    // need to get the id from url
    this.activatedRoute.params.subscribe((parameter) => this.appointid = parameter.appointid);
  }

  ngOnInit() {
    // need to fetch data of a given id
    this.appointService.getOneAppoint(this.appointid).subscribe((response: any) => this.appoint = response);
  }



  updateAppoint(txtName: HTMLInputElement, txtAddress: HTMLInputElement, txtPackagetype: HTMLInputElement, txtCity: HTMLInputElement, txtTrainerpreference: HTMLInputElement, txtPhone: HTMLInputElement): void {

    // create a product object of updated info
    const appoint = new Appoint(txtName.value, txtAddress.value, txtPackagetype.value, txtCity.value, txtTrainerpreference.value, txtPhone.value);

    // need to send it to server using product Data Service
    this.appointService.updateAppoint(this.appointid, appoint).subscribe(
      (response) => {
        console.log(response);
        // navigate to product-list
        alert('data updated successfully');
        this.router.navigate(['/view-appointment']);
      });



}

}
