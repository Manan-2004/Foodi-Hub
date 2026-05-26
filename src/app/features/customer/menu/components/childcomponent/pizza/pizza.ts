import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-pizza',
  imports: [CategoryFood],
  templateUrl: './pizza.html',
  styleUrl: './pizza.css',
})

export class Pizza {
  pizzaFoods = allFoods.filter(food => food.category === "Pizza")
}
