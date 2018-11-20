import {Pipe,PipeTransform} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({

    name: 'nameTitle'

})

export class studentPipe implements PipeTransform{

    transform(value:string,gender:string):string{

        if (gender.toLowerCase()=="male")
        {

            return "Mr. "+value;
        }
        else{

            return "Miss. "+value;
        }
    }

}