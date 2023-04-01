import { Injectable} from '@angular/core';
import { Foods } from '../shared/model/foods';
import { Tag } from '../shared/model/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodByTag(tags:string):Foods[]
  {
    return tags == "all"?
    this.getAllFoods() : this.getAllFoods().filter(food => food.tags?.includes(tags));
  }
  getFoodById(id:number):Foods
  {
    return this.getAllFoods().find(food =>food.id == id)!;
  }
getAllTag():Tag[]
{
  return [
    {name:'all',count:6},
    {name:'chicken',count:1},
    {name:'fastfood',count:1},
    {name:'southindian',count:1},
    {name:'northindian',count:1},
    {name:'rice',count:2},
    {name:'dinner',count:1},
   
  ]
}

getAllFoods():Foods[]
{
  return [
{
  id:1,
  name:"Meals",
  price:"140",
  cooktime:"10-20",
  favourite:false,
  origin:['Indian'],
  star:3.8,
  imageUrl:"./assets/food1.jpg",
  tags:["rice"]
},
{
  id:2,
  name:"Aloo Parotta ",
  price:"80",
  cooktime:"15-25",
  favourite:true,
  origin:['Italy'],
  star:4.8,
  imageUrl:"./assets/food2.jpg",
  tags:["fastfood"]
},
{
  id:3,
  name:"Chicken Briyani",
  price:"150",
  cooktime:"20-30",
  favourite:false,
  origin:['Indian'],
  star:4.1,
  imageUrl:"./assets/food3.jpg",
  tags:["chicken"]
},
{
  id:4,
  name:"Paneer Butter Masala",
  price:"180",
  cooktime:"30-35",
  favourite:true,
  origin:['Canadian'],
  star:3.5,
  imageUrl:"./assets/food4.jpg",
  tags:["dinner"]
},
{
  id:5,
  name:"Sambar Sadham",
  price:"40",
  cooktime:"10-20",
  favourite:false,
  origin:['Indian'],
  star:4.2,
  imageUrl:"./assets/food5.jpg",
  tags:["southindian","rice"]
},
{
  id:6,
  name:"Chappati masala",
  price:"240",
  cooktime:"15-25",
  favourite:true,
  origin:['Pakistani'],
  star:3.8,
  imageUrl:"./assets/food6.jpg",
  tags:["northindian"]
}
  ]
}
}
