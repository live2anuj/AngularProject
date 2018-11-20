import { Component, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']


})
export class EmployeeComponent {

    Employee=[
    {Empid:"Emp101",Name: "Anuj",Age:27,Gender: "Male", City: "Delhi"},
    {Empid:"Emp102",Name: "David",Age:23,Gender: "Male", City: "Dellas"},
    {Empid:"Emp103",Name: "Robert",Age:44,Gender: "Male", City: "New York"},
    {Empid:"Emp104",Name: "Leah",Age:54,Gender: "Male", City: "Noida"},
    {Empid:"Emp105",Name: "Steven",Age:32,Gender: "Male", City: "Mexico"},
    {Empid:"Emp106",Name: "John",Age:65,Gender: "Male", City: "London"}
    ]
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
          this.Employee.splice(i,1);

      }
      OnAddNewRecord(EmpId,Name,Age,Gender,City)
      {
      
        for (var x=0;x<this.Employee.length;x++)
        {
          
          if (EmpId.model.toLowerCase()==this.Employee[x].Empid.toLowerCase())
          {
            alert("Please enter a unique employee id.")
            this.goodToAddNewRecord=false;
            break;

          }
          else{

            this.goodToAddNewRecord=true;
          }

        }
       
          if(this.goodToAddNewRecord){
            this.Employee.push({Empid:EmpId.model,Name:Name.model,Age:Age.model,Gender:Gender.model,City:City.model});
            alert("Record successfully added!")
            this.editModeEnabled=!this.editModeEnabled;
            
         
            





            
          }
        
      }


}
