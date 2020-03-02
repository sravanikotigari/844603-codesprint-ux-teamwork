import { Component, OnInit } from '@angular/core';
import { Appoint } from '../model/appointment.model';
import { AppointmentserviceService } from '../services/appointmentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  appoints: Array<Appoint>;

  // will be initilized from data coming from server
  // dependent on product-data-service
  constructor(private appointService: AppointmentserviceService, private router: Router) {


  }

  addNewAppoint() {

    // navigate to product-add component
    this.router.navigate(['/appointment']);
  }

  updateAppoint(id: number) {
    // navigate to update Component (associate id also)
    this.router.navigate(['/update-appoint/' + id]);
  }

  deleteAppoint(id: number) {
    // call product data service to delete
    this.appointService.deleteAppoint(id).subscribe((response) => {
        console.log(response);
        // call getAllProducts (selective loading)
        this.appointService.getAllAppoint().subscribe(( response: any) => this.appoints = response);

        // navigate to same component (caching issues)
        // this.router.navigate(['/product']);
    });
  }



  ngOnInit() {
    // load data from server on initialization
    // need to call getAllProducts() method of ProductDataService
    // this.products = this.productService.getAll-Products();
    // response : response data from server : Array of products
    this.appointService.getAllAppoint().subscribe((response: any) => this.appoints = response);

    console.log(this.appoints);
  }

}
