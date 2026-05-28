import { Component } from '@angular/core';
import { HeroSection } from '../components/hero-section/hero-section';
import { FoodCard } from '../components/food-card/food-card';
import { SpecialOffers } from '../components/special-offers/special-offers';
import { WhyChooseUs } from '../components/why-choose-us/why-choose-us';
import { Testimonials } from '../components/testimonials/testimonials';
import { DownloadApp } from '../components/download-app/download-app';

@Component({
  selector: 'app-home',
  imports: [HeroSection, FoodCard, SpecialOffers, WhyChooseUs, Testimonials, DownloadApp],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home {
 
}
