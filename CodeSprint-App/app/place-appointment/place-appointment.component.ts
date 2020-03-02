import { Component, OnInit } from '@angular/core';
import { viewcomponentService } from '../view.service';
import { itemsmodel } from '../items';
@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {

  name:String;
  Addresss:String;
  city:String;
  package:String="premium";
  trainerreference:String="srvani";
  phone:number;
  itemsmodels:itemsmodel[];
  items = new itemsmodel();
  itemsmode:itemsmodel[];
  constructor(private dataservic:viewcomponentService){}

  ngOnInit(): void {
  }
  addcom()
{ 
  console.log("in placecom");

  this.items.name=this.name;
  this.items.Addresss=this.Addresss;
  this.items.city=this.city;
  this.items.package=this.package;
  this.items.trainerreference=this.trainerreference;
  this.items.phone=this.phone;
  this.dataservic.postview(this.items).subscribe(itemsmodel=>this.itemsmode=itemsmodel);
}

}
