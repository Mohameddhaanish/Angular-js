import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food service/food.service';
import { Foods } from '../shared/model/foods';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Foods[]=  [];
  constructor(public fs:FoodService,public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      {this.foods=this.fs.getAllFoods().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()) )}
      else if(params['tags'])
      {this.foods=this.fs.getFoodByTag(params['tags'])}
      else{this.foods=this.fs.getAllFoods();}
    })
  }
  currentRating=2.5;
}
