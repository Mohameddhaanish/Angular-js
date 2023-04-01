import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
    name:'age',
    
})
export class CustomPipe implements PipeTransform{
    transform(value: any):any {
      let currentDate:any=new Date().getFullYear();
      let userbirthyear:any=new Date(value).getFullYear();
      let userage=currentDate-userbirthyear;
      return userage;
    }
}
