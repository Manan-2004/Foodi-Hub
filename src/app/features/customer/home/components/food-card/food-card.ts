import { Component, input } from '@angular/core';
import { Foodmenumodel } from '../../../../../core/models/menu/foodmenumodel';
import { allFoods } from '../../../../../core/food-data/all-foods';
import { FoodList } from '../../../menu/components/food-list/food-list';


@Component({
  selector: 'app-food-card',
  imports: [FoodList],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css'
})

export class FoodCard {
  title = input<string>();
  subtitle = input<string>();
  foods: Foodmenumodel[] = []
  
  ngOnInit() {
    this.foods = allFoods.sort(() => 0.5 - Math.random()).slice(0, 5)
  }

}