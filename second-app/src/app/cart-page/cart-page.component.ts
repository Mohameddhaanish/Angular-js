import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cartService/cart-service.service';
import { FoodService } from '../food service/food.service';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';
import { Foods } from '../shared/model/foods';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart:any= Cart ;

  constructor(public cartservice:CartServiceService) 
  { 
  this.setcart();
  }
  ngOnInit(): void {}
  setcart()
  {
    this.cart=this.cartservice.getCart();
  }
  removeFromCart(cartItem:CartItem)
  {
    this.cartservice.removeFromCart(cartItem.foods.id);
    this.setcart();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string)
  {
    const quantity=parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.foods.id,quantity);
    this.setcart();
  }


}
