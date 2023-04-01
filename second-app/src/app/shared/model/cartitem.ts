import { Foods } from "./foods";
export class CartItem
{
foods: Foods;
quantity:number=1;
constructor(foods:Foods)
{
    this.foods=foods;
}
get price():number{
return this.foods.price*this.quantity;
}
}