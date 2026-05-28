import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopRated } from '../components/top-rated/top-rated';
import { SpecialOffers } from '../../home/components/special-offers/special-offers';
import { FoodCard } from '../../home/components/food-card/food-card';
import { CategoryFilter } from '../components/category-filter/category-filter';


@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, TopRated, SpecialOffers, FoodCard, CategoryFilter],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})

export class Menu {

}
