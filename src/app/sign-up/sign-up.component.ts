import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  model: any = {};
  email:string;
  password:string;
  constructor(private auth:AuthService) { 


  }

  ngOnInit() {

  }
onSignUp(email,Password){

 this.email= email.model;
 this.password= Password.model;

  
this.auth.signUpuser(this.email,this.password);



  


}
}
