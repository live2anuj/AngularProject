import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

interface mydata
{
  obj: Object

}

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private jData : HttpClient) { 

    
   }
   getData()
   {
    return this.jData.get<mydata>('http://localhost:4200/EmpData.php');
    
    

   }
}
