import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";


@Injectable()
export class DataService
{

  constructor(public http:HttpClient)
  {

  }
getUsers()
{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
}
getUser(id:number)
{
  return this.http.get('https://jsonplaceholder.typicode.com/users/'+id);
}
public notification=new Subject();
sendnotification(data:any)
{
  this.notification.next(data);
}

}