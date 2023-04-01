import { CartItem } from "./cartitem";

export class Cart{
items:CartItem[]=[];

get totalprice():number
{
    let totalprice=0;
    this.items.forEach(item=>{
        totalprice=totalprice+item.price;
    })
    return totalprice;
}
}