import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
@Input()  visible:boolean=false;
@Input() notfoundmessage:string="Nothing found!";
@Input() resetlinktext:string="Reset";
@Input() resetlinkroute:string="/";

  constructor() { }

  ngOnInit(): void {
  }

}
