import { Component, input } from '@angular/core';
import { Foodmenumodel } from '../../../../../core/models/menu/foodmenumodel';
import { FoodList } from '../food-list/food-list';


@Component({
  selector: 'app-category-food',
  imports: [FoodList],
  templateUrl: './category-food.html',
  styleUrl: './category-food.css',
})

export class CategoryFood {
  title = input.required<string>();
  foods=input.required<Foodmenumodel[]>();
}
