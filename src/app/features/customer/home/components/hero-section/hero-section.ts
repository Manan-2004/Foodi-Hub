import { Component } from '@angular/core';
import { HeroData } from '../../../../../core/models/home/hero-data';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  heroData: HeroData = {
    tag: '🔥 Fast Delivery in 30 Minutes',
    title: 'Fresh Food Delivered To Your Door',
    description: 'Discover delicious meals from top restaurants and get them delivered instantly.',
    foodImage: '🍔🍕🍟'
  }

}