import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';
import { Foods } from '../shared/model/foods'; 
@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart:Cart=new Cart();

addToCart(food:Foods):void
{
  let cartItem=this.cart.items.find(item=>item.foods.id === food.id);
  if(cartItem)
  {
    this.changeQuantity(food.id, cartItem.quantity +1);
    return;
  }
  this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.foods.id !=foodId);
  }
  changeQuantity(quantity:number,foodId:number)
  {
    let cartItem=this.cart.items.find(item=>item.foods.id === foodId);
    if(!cartItem)return;
    cartItem.quantity=quantity;
  }
  getCart():Cart
  {
    return this.cart;
  }
}
