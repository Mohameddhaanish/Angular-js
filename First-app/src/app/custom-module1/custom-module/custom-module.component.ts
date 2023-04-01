import { Component, OnInit,Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-custom-module',
  templateUrl: './custom-module.component.html',
  styleUrls: ['./custom-module.component.css']
})
export class CustomModuleComponent implements OnInit {
showmessage:any;
@Input() prod:any;

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
this.dataservice.notification.subscribe(d=>
  this.showmessage=d);
}

}
