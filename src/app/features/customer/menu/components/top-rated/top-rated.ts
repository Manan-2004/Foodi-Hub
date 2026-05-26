import { Component } from '@angular/core';
import { TopFood,Feature} from '../../../../../core/models/menu/topfoodrated';

@Component({
  selector: 'app-top-rated',
  imports: [],
  templateUrl: './top-rated.html',
  styleUrl: './top-rated.css',
})
export class TopRated {

  topFoods: TopFood[] = [
    {
      image: '🍔',
      title: 'Chicken Burger',
      description: 'Crispy chicken with extra cheese',
      rating: '⭐ 4.8'
    },
    {
      image: '🍕',
      title: 'Cheese Pizza',
      description: 'Fresh toppings with extra cheese',
      rating: '⭐ 4.9'
    },
    {
      image: '🍩',
      title: 'Chocolate Donut',
      description: 'Soft chocolate dessert',
      rating: '⭐ 4.7'
    }
  ];

  features: Feature[] = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'Delivered within 30 minutes'
    },
    {
      icon: '🎁',
      title: 'Best Offers',
      description: 'Daily discounts available'
    },
    {
      icon: '🥗',
      title: 'Fresh Food',
      description: 'Healthy and quality meals'
    }
  ];

}