import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student-dash.model';
@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.css']
})
export class StudentDashComponent implements OnInit {
formvalue!:FormGroup;
studentModelObj:StudentModel=new StudentModel();
studentData!:any;
showAdd!:boolean;
showUpdate!:boolean;
  constructor(private frombuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formvalue=this.frombuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      fees:[''],
    })
    this.getAllStudents()
     
  }

  clickAddStudents()
  {
    this.formvalue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
postStudentsDetails()
{
  this.studentModelObj.name=this.formvalue.value.name;
  this.studentModelObj.email=this.formvalue.value.email;
  this.studentModelObj.mobile=this.formvalue.value.mobile;
  this.studentModelObj.fees=this.formvalue.value.fees;

  this.api.postStudents(this.studentModelObj).subscribe(res=>{
    console.log(res);
    alert("Students Record Added Successfully")
    // let ref=document.getElementById('cancel')
    // ref?.click();
    // this.formvalue.reset();
    // this.getAllStudents();
  },
  err=>{
    alert("something went wrong ,Please check agin")
  })
}
getAllStudents()
{
  this.api.getStudents().subscribe(res=>{
    this.studentData=res;
  })
}
deleteStudents(stu:any)
{
 this.api.deleteStudents(stu.id).subscribe(res=>{
  alert('Student records deleted successfully')
  this.getAllStudents()
 })
}
onEdit(stu:any)
{
  this.showAdd=false;
  this.showUpdate=true;
  this.studentModelObj.id=stu.id;

 this.formvalue.controls['name'].setValue(stu.name);
 this.formvalue.controls['email'].setValue(stu.email);
 this.formvalue.controls['mobile'].setValue(stu.mobile);
 this.formvalue.controls['fees'].setValue(stu.fees);
}
updateStudentsDetails()
{


  this.studentModelObj.name=this.formvalue.value.name;
  this.studentModelObj.email=this.formvalue.value.email;
  this.studentModelObj.mobile=this.formvalue.value.mobile;
  this.studentModelObj.fees=this.formvalue.value.fees;
  
  this.api.updateStudents(this.studentModelObj,this.studentModelObj.id).subscribe(res=>{
    alert("Student record updated");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formvalue.reset();
    this.getAllStudents();
  })
}
}
