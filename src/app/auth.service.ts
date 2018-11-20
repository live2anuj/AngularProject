import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { tokenName } from '../../node_modules/@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token='';

  signUpuser(email: string, password:string)
  {
    firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
      error=> console.log(error)
  )

  }

  signInuser(email: string, password: string)
{
 firebase.auth().signInWithEmailAndPassword(email,password)
 .then(
  response=> {
      firebase.auth().currentUser.getIdToken()
      .then(
        
        (token:string) =>  this.token=token
     
        
      )

  }

 ).catch(

  error=> console.log(error)
 )

}

signOutUser()
{

  firebase.auth().signOut();
  this.token='';
}
getToken(){

  firebase.auth().currentUser.getIdToken()
  .then(
    (token:string) =>  this.token=token
  );
 
}

isAuthenticated()
{

  if(this.token!='')
  {

      return true;
  }
  else{

    return false;
  }

}
  constructor() { }
}
