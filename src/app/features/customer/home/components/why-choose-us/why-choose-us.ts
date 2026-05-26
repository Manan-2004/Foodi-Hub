import { Component } from '@angular/core';
import { FeaturesModel } from '../../../../../core/models/home/features-model';

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.css',
})
export class WhyChooseUs {
  features: FeaturesModel[] = [
    {
      icon: '🚚',
      title: 'Fast Delivery'
    },

    {
      icon: '🍔',
      title: 'Fresh Food'
    },

    {
      icon: '⭐',
      title: 'Top Restaurants'
    },

    {
      icon: '💳',
      title: 'Secure Payment'
    }
  ]
}
