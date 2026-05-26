import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-desserts',
  imports: [CategoryFood],
  templateUrl: './desserts.html',
  styleUrl: './desserts.css',
})
export class Desserts {
  dessertFoods=allFoods.filter(food=>food.category === "Desserts")
}
