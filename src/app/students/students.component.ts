import { Component, OnInit , Output, EventEmitter  } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { NgModel } from '@angular/forms';
//import * as firebase from 'firebase';

import {PrintService} from '../print.service'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  
 
  NumberOfRecordToShow:number=10;
  
  Students: Observable<any[]>;
 
  constructor(public db: AngularFireDatabase, private printService: PrintService) {
    this.Students = db.list('Students').valueChanges();
    
    
  }
  
  deleteObject(itemKey) {
    //this.Students.remove(itemKey);
   // this.db.object('/Students/' + itemKey).remove();
   }
  ngOnInit() {

  }
    goodToAddNewRecord:boolean=true;
   
    model: any = {};
    
    editModeEnabled:boolean=false;
    MyInput=""

    OnAddButtonClick()
    {
      this.editModeEnabled=!this.editModeEnabled;
    }

      ResetInput(MyInput){
      
        MyInput=""
      }
      Arr=[]
      cnt=0;
      AddServer()
      {
       this.Arr.push(this.cnt)
       this.cnt+=1;

      }


      onDelete(i:number)
      {
          //this.Students.splice(i,1);
         //this.db.list('/Students').remove({ Empid: "Emp101"});

      }
      OnAddNewRecord(EmpId,Name,Age,Gender,City)
      {
      /*
        for (var x=0;x<this.Students.length;x++)
        {
          
          if (EmpId.model.toLowerCase()==this.Students[x].Empid.toLowerCase())
          {
            alert("Please enter a unique student id.")
            this.goodToAddNewRecord=false;
            break;

          }
          else{

            this.goodToAddNewRecord=true;
          }

        }*/
       
          if(this.goodToAddNewRecord){
            
    this.db.list('/Students').push({ Empid:EmpId.model,Name:Name.model,Age:Age.model,Gender:Gender.model,City:City.model });
   
            alert("Record successfully added!")
            this.editModeEnabled=!this.editModeEnabled;
            
         
            





            
          }
        
      }

}
