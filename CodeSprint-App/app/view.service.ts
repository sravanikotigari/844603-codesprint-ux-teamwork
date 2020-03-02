import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemsmodel } from './items';
import { ContactDetails } from './contactus';
@Injectable({
  providedIn: 'root'
})
export class viewcomponentService {
    constructor(private httpClient: HttpClient) { }
  private baseUrl = 'http://localhost:3000/viewappointment';
  
  getitembyname(): Observable<any> {
    //console.log(itemName);
    console.log("in service");
    return this.httpClient.get(`${this.baseUrl}`);
  }
  postview(itemsmodel:object): Observable<any> {
    console.log(itemsmodel);
    console.log("in service post");
    return this.httpClient.post(`${this.baseUrl}`,itemsmodel);
  }
  addContactDetails(ContactDetails:object): Observable<any> {
    console.log(itemsmodel);
    console.log("in service post");
    return this.httpClient.post(`${this.baseUrl}`,ContactDetails);
  }
}
