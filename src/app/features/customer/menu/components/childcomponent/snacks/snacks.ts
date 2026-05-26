import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-snacks',
  imports: [CategoryFood],
  templateUrl: './snacks.html',
  styleUrl: './snacks.css',
})

export class Snacks {
  snackFoods=allFoods.filter(food=>food.category === "Snacks")
}
