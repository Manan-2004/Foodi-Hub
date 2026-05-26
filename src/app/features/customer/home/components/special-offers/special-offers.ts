import { Component } from '@angular/core';
import { SpecialOffersModel } from '../../../../../core/models/home/special-offers-model';

@Component({
  selector: 'app-special-offers',
  imports: [],
  templateUrl: './special-offers.html',
  styleUrl: './special-offers.css',
})

export class SpecialOffers {
  offers:SpecialOffersModel[]=[
    {
      title: '50% OFF',
      description: 'On your first order',
      icon: '🔥'
    },

    {
      title: 'Free Delivery',
      description: 'Orders above ₹499',
      icon: '🚚'
    },

    {
      title: 'Buy 1 Get 1',
      description: 'Selected dishes',
      icon: '🎁'
    }
  ]
}
