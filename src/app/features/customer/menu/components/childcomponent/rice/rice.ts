import { Component } from '@angular/core';
import { allFoods } from '../../../../../../core/food-data/all-foods';
import { CategoryFood } from "../../category-food/category-food";

@Component({
  selector: 'app-rice',
  imports: [CategoryFood],
  templateUrl: './rice.html',
  styleUrl: './rice.css',
})

export class Rice {
  rices=allFoods.filter(food=>food.category === "Rice")
}
