import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

    items: Observable<any[]>;
    
    itemValue = '';

  constructor(public db: AngularFireDatabase) {

    //Gettig data from firebase
    this.items = db.list('items').valueChanges();
    


   }
getData()
{
  return this.items;

}
AddData(items:string) {
  this.itemValue=items;
  this.db.list('/items').push({ content: this.itemValue });
  this.itemValue = '';
 
}
deleteRecord(item: string)
{
  this.db.list("/items").remove(item);
  

}

}
