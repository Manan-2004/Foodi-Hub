import { Component, input } from '@angular/core';
import { Foodmenumodel } from '../../../../../core/models/menu/foodmenumodel';
import { Displayfoodcard } from '../displayfoodcard/displayfoodcard';

@Component({
  selector: 'app-food-list',
  imports: [Displayfoodcard],
  templateUrl: './food-list.html',
  styleUrl: './food-list.css',
})

export class FoodList {
  foods=input.required<Foodmenumodel[]>()
}
