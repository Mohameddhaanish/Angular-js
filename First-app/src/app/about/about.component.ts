import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm,NgModel } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
countrylist:any[]=["India","UK","Ireland"]
  constructor() {

   }

  ngOnInit(): void {    
 
  }
  onSubmit(data:NgForm)
  {
    console.log(data.value);
    
  }

}
