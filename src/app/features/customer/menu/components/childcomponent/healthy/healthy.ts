import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-healthy',
  imports: [CategoryFood],
  templateUrl: './healthy.html',
  styleUrl: './healthy.css',
})

export class Healthy {
  healthyFoods=allFoods.filter(food=>food.category === "Healthy")
}
