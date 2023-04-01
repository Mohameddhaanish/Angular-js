import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

c:any;
f:any;
e:any;
n:any;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(value:any,type:any)
  {
    if(value===null)
    {
      this.c='';
      this.f='';
      return; }
      const temperature=Number(value);
      if(type === 'c')
      {
        this.f =((temperature *9)/5 +32);
      }
      else
      {
        this.c=((temperature - 32)*5)/9;
      }
    }
    testing(value:any,type:any)
    {
       if(value === null)
       {
        this.e='';
        return;
       }
       else
       {
        const temp=Number(value);
       this.n=temp*81.35;
       }
    }
   
   
   
  
   
  }

 



