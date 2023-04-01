import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/model/tag';
import { FoodService } from '../food service/food.service';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
tags:Tag[] =[];
  constructor(public fs:FoodService) { }

  ngOnInit(): void {
    this.tags=this.fs.getAllTag();
  }

}
