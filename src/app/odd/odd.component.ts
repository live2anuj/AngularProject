import { Component, OnInit , Output, EventEmitter} from '@angular/core';

//import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import {DataService} from '../data.service'

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  

    
  title = 'Getting data from firbase';
  
 
  itemValue = '';
  items: Observable<any[]>;
  Data=[]

 
  constructor( private dataservice:DataService) {
    
    //Gettig data from firebase
    //this.items = db.list('items').valueChanges();

    //Getting data from a service
    this.items=dataservice.getData();

  }
  
  onSubmit() {

    this.dataservice.AddData(this.itemValue);
//    this.db.list('/items').push({ content: this.itemValue });
  //  this.itemValue = '';
   
  }

  ngOnInit() {

  }

}
