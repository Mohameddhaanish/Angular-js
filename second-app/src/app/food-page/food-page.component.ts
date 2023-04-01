import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from '../cartService/cart-service.service';
import { FoodService } from '../food service/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
food:any;
  constructor(public activatedroouter:ActivatedRoute,public foodservice:FoodService,private cartservice:CartServiceService,public router:Router) {
    this.activatedroouter.params.subscribe(params=>{
      if(params['id'])
      {
        this.food=foodservice.getFoodById(params['id']);
      }
    })
   }

  ngOnInit(): void {
  }

  currentRating = 3;
  addToCart()
  {
    this.cartservice.addToCart(this.food);
    this.router.navigateByUrl('/cartpage');
  }
}
