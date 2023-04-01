
import {Component, Input,OnInit,ContentChild,ElementRef,AfterContentInit} from '@angular/core';
import { DataService } from './services/data.service';
@Component(
{
selector:'hello',
templateUrl:'./hello.component.html'
})
export class HelloComponent implements OnInit,AfterContentInit{
@Input() test:any;
  @ContentChild("head")
  contentchild!: ElementRef;
data:any;
users: any; 
constructor(public dataservice:DataService)
{
}
ngAfterContentInit(): void {
  console.log(this.contentchild);
  this.contentchild.nativeElement.setAttribute('style','color:red');
  
}
ngOnInit(): void {
  this.dataservice.getUsers().subscribe((data: any)=>
  this.users=data);
}
sendmessage(data:any)
{
this.dataservice.sendnotification(data.value);
}


}