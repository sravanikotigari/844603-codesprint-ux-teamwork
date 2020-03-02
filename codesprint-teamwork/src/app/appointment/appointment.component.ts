import { Component, OnInit } from '@angular/core';
import { AppointmentserviceService } from '../services/appointmentservice.service';
import { Router } from '@angular/router';
import { Appoint } from '../model/appointment.model';
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  username: string;
  add: string;
  pack: string;
citys: string;
trainers: string;
phoneno: string;
usname: string;
  myFormGroup: FormGroup;
  constructor(public appointservice: AppointmentserviceService, public router: Router, public formBuilder: FormBuilder) {
    console.log('saving....');
    this.myFormGroup = formBuilder.group({
      name: new FormControl(''),
      address: new FormControl(''),
      packagetype: new FormControl(''),
      city: new FormControl(''),
      trainerpreference: new FormControl(''),
      phone: new FormControl(''),
      name1: new FormControl(''),

    });

   }


  save() {

    this.usname = this.myFormGroup.controls.name.value;

    this.add = this.myFormGroup.controls.address.value;
    this.pack = this.myFormGroup.controls.packagetype.value;
    this.citys = this.myFormGroup.controls.city.value;
    this.trainers = this.myFormGroup.controls.trainerpreference.value;
    this.phoneno = this.myFormGroup.controls.phone.value;
    this.username = this.myFormGroup.controls.name.value + this.myFormGroup.controls.name1.value;
    this.router.navigate(['/view-appointment']);




    console.log('recieved');
    // let appoint = new Appoint (txtName.value,txtAddress.value,txtPackagetype.value,txtCity.value,txtTrainer.value,txtphone.value);
    const appoint = new Appoint(this.username, this.add, this.pack, this.citys, this.trainers, this.phoneno);
    this.appointservice.addNewApoint(appoint).subscribe((response) => console.log(response));

    console.log('recieved');
 // this.router.navigate(['/view-appointment']);
    // need to send it to server using product Data Service
   // this.appointservice.addNewApoint(appoint).subscribe(
      // (response) => {
       // console.log(response);
        // navigate to product-list
      // this.router.navigate(['/view-appointment']);
    // });


    // reset the form


}
ngOnInit() {
}

}
