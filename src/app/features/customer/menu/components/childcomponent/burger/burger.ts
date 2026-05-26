import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-burger',
  imports: [CategoryFood],
  templateUrl: './burger.html',
  styleUrl: './burger.css',
})

export class Burger {
  burgerFoods=allFoods.filter(food=>food.category === "Burger")
}
