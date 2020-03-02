import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appoint } from '../model/appointment.model';



const API_URL = 'http://localhost:3000/Appoint'; // url of server

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

 // recieve the Http Service injected
 constructor(public http: HttpClient) {

}

// gets product list from server and returns back
getAllAppoint() {
  // send request to server to get all products

  // this.http.post(API_URL);
  // will send a request to API_URL with http verb GET(retrieval)
  // method will wait for data to receive
  // return data back to component
  return this.http.get(API_URL);
}

// method to send new object(data) to server
addNewApoint(appoint: Appoint) {
  // POST http verb
  return this.http.post(API_URL, appoint);
}

// methid to get single record of given id
getOneAppoint(id: number) {
  // GET http verb
  return this.http.get(API_URL + '/' + id);

}

// method to send updated object(product) to server
updateAppoint(id: number, appoint: Appoint) {
  // PUT http verb
  console.log('hiii ');
  return this.http.put(API_URL + '/' + id, appoint);
}

// method to delete single record of given id
deleteAppoint(id: number) {
  // DELETE http verb
  return this.http.delete(API_URL + '/' + id);

}

}
