import { Component } from '@angular/core';
import { ReviewsModel } from '../../../../../core/models/home/reviews-model';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  reviews: ReviewsModel[] = [

    {
      name: 'Rahul Sharma',
      role: 'Food Lover',
      comment: 'Amazing food quality and super fast delivery. I really loved the experience.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=11'
    },

    {
      name: 'Priya Patel',
      role: 'Regular Customer',
      comment: 'Very tasty food and packaging was also great. Highly recommended.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=5'
    },

    {
      name: 'Amit Kumar',
      role: 'Food Blogger',
      comment: 'Fresh food and easy ordering process. Delivery was very quick.',
      rating: '⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=15'
    },

    {
      name: 'Sneha Verma',
      role: 'College Student',
      comment: 'The burger was delicious and delivery was right on time.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=20'
    },

    {
      name: 'Rohit Singh',
      role: 'Software Engineer',
      comment: 'Easy ordering experience and food quality was excellent.',
      rating: '⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=25'
    },

    {
      name: 'Neha Patel',
      role: 'Food Enthusiast',
      comment: 'Pizza was hot and fresh. Packaging quality was also nice.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=32'
    },

    {
      name: 'Arjun Mehta',
      role: 'Gym Trainer',
      comment: 'Healthy food options are really good and taste amazing.',
      rating: '⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=35'
    },

    {
      name: 'Pooja Shah',
      role: 'Designer',
      comment: 'Very smooth app experience and customer support was helpful.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=41'
    },

    {
      name: 'Karan Joshi',
      role: 'Business Owner',
      comment: 'Delivery was super fast and food quality exceeded expectations.',
      rating: '⭐⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=50'
    },

    {
      name: 'Anjali Gupta',
      role: 'Teacher',
      comment: 'Loved the desserts section. Definitely ordering again.',
      rating: '⭐⭐⭐⭐',
      image: 'https://i.pravatar.cc/150?img=45'
    }

  ];
}
