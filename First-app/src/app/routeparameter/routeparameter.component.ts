import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-routeparameter',
  templateUrl: './routeparameter.component.html',
  styleUrls: ['./routeparameter.component.css']
})
export class RouteparameterComponent implements OnInit {
employee:any;
  constructor(public route:ActivatedRoute,public dataservice:DataService) { }

  ngOnInit(): void {
    
     let id=this.route.snapshot.params['id'];
     
     
    this.dataservice.getUser(id).subscribe(u=>{
      console.log(u);
      this.employee=u;
  });
  }

}
 