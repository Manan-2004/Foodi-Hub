import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-chicken',
  imports: [CategoryFood],
  templateUrl: './chicken.html',
  styleUrl: './chicken.css',
})

export class Chicken {
  chickenFoods=allFoods.filter(food=>food.category === "Chicken")
}
