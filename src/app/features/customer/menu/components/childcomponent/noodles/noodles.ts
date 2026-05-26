import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-noodles',
  imports: [CategoryFood],
  templateUrl: './noodles.html',
  styleUrl: './noodles.css',
})

export class Noodles {
  noodleFoods=allFoods.filter(food=>food.category === "Noodles")
}
