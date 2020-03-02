import { Component, OnInit } from '@angular/core';
import { itemsmodel } from '../items';
import { viewcomponentService } from '../view.service';
@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
  itemsmodels:itemsmodel[];
  constructor(private dataservic:viewcomponentService){}

  ngOnInit(): void {
  }
  viewcom()
  {
    console.log("in viewcom");
  this.dataservic.getitembyname().subscribe(itemsmodel=>this.itemsmodels=itemsmodel);
}
}
