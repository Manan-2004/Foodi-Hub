import { Component } from '@angular/core';
import { CategoryFood } from "../../category-food/category-food";
import { allFoods } from '../../../../../../core/food-data/all-foods';

@Component({
  selector: 'app-biryani',
  imports: [CategoryFood],
  templateUrl: './biryani.html',
  styleUrl: './biryani.css',
})
export class Biryani {
  biryanifoods=allFoods.filter(food=>food.category === "Biryani")
}
