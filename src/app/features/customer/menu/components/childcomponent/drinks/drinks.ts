import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-drinks',
  imports: [CategoryFood],
  templateUrl: './drinks.html',
  styleUrl: './drinks.css',
})

export class Drinks {
  drinkFoods=allFoods.filter(food=>food.category === "Drinks");
}
