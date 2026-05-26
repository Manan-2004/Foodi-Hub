import { Component } from '@angular/core';
import { allFoods } from '../../../../../../core/food-data/all-foods';
import { CategoryFood } from "../../category-food/category-food";

@Component({
  selector: 'app-sandwich',
  imports: [CategoryFood],
  templateUrl: './sandwich.html',
  styleUrl: './sandwich.css',
})

export class Sandwich {
  sandwichs=allFoods.filter(food=>food.category === "Sandwich")
}
