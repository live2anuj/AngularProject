import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthService) { }
  model: any = {};
  email:string;
  password:string;


  onSignIn(email,Password){

    this.email= email.model;
    this.password= Password.model;
   
     
   this.auth.signInuser(this.email,this.password);
   //console.log ("Token: "+ this.auth.getToekn())
   
   
   
    
   
   
   }
  ngOnInit() {
  }

}
