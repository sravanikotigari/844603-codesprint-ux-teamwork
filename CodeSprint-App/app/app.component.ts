import { Component } from '@angular/core';
import { itemsmodel } from './items';
import { viewcomponentService } from './view.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'project';
  itemsmodels:itemsmodel[];
  itemsmode:itemsmodel[];
  items = new itemsmodel();
  constructor(private dataservic:viewcomponentService){}
  viewcom()
  {
    console.log("in viewcom");
  this.dataservic.getitembyname().subscribe(itemsmodel=>this.itemsmodels=itemsmodel);
}
addcom()
{
  console.log("in addcom");

  this.items.name="sravani";
  this.items.Addresss="khamam";
  this.items.city="khamam";
  this.items.package="premium";
  this.items.trainerreference="chandrakumar";
  this.items.phone=100;
this.dataservic.postview(this.items).subscribe(itemsmodel=>this.itemsmode=itemsmodel);
}
}
