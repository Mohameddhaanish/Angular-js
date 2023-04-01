import { Component,ViewChild,ElementRef,OnInit,AfterViewInit,ViewChildren, QueryList} from '@angular/core';
import { HelloComponent } from './hello.component';
import { Observable, from, Subject, BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 })
export class AppComponent implements OnInit {
name:string="Angular";
display:any=true;


ngOnInit(): void {


}



// ngAfterViewInit(): void {
//  this.marker.first.nativeElement.style.color='red';
//  this.marker.last.nativeElement.style.color='green'; 
// }
// @ViewChildren("highlight")
//   marker!:QueryList<any>;
// @ViewChild("childview")child!:myField;
// inc()
// {
//   this.child.increament();
// }
// dec()
// {
//   this.child.decreament();
// }
  constructor()
{



}

// addUser(value:any)
// {
// this.users=[...this.users, {name:value}];
// }

// addAge(value:any)
// {
//   this.users=[...this.users, {age:value}];
// }



// isShowing:any=true;
// check()
// {
//   this.isShowing = !this.isShowing;
// }




}
