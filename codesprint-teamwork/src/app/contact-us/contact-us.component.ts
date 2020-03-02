import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form: FormGroup;
  name: String;
  email: String;
  rating: String;
  feedback: String;
  constructor(FormBuilder: FormBuilder, public router: Router) {
     this.form = FormBuilder.group({
       name: new FormControl('', Validators.required),
       email: new FormControl('', [Validators.required, Validators.email]),
       rating: new FormControl(''),
       feedback: new FormControl('', Validators.required),

       });
  }

  ngOnInit(): void {
  }

  display(): void {
    console.log('Thank You for ur feedback !!!');
    alert('thanks for feedback');
     // alert("Successfully Submitted !!!");
  }



}
