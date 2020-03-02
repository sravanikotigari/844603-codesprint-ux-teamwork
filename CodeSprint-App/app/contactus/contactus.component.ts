import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../contactus';
import { viewcomponentService } from '../view.service';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from './contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
 
  name : string;
  email : string;
  message:string;
  trainer:string;
  errtext : string='';
  sucesstxt:string;
  myFormGroup : FormGroup;
   Naming: String;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
      // the short way
      this.myForm = this._fb.group({
          name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
          email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
          moblie: ['', [<any>Validators.required, <any>Validators.minLength(10)]],
      });
  }
  save(model: Contact, isValid: boolean) {
      this.submitted = true;
      this.Naming=this.name + ",thank you for submitting";
      console.log(model, isValid);
  }
}
