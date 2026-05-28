import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Orderservice {
  orders = signal([

    {
      id: 101,
      name: "Chicken Burger",
      price: 199,
      image: "images/AllFoods/Burger/101.jpg",
      rating: 4.5,
      category: "Burger",
      description: "Crispy chicken burger",
      restaurant: "Burger King",
      status: "Delivered",
      time: "Yesterday"
    },

    {
      id: 205,
      name: "Farmhouse Pizza",
      price: 349,
      image: "images/AllFoods/Pizza/703.jpg",
      rating: 4.7,
      category: "Pizza",
      description: "Loaded cheesy pizza",
      restaurant: "Pizza Hut",
      status: "Delivered",
      time: "2 days ago"
    },

    {
      id: 309,
      name: 'French Fries',
      price: 99,
      image: 'images/AllFoods/Snacks/801.jpg',
      rating: 4.5,
      category: 'Snacks',
      description: 'Hot crispy fries',
      restaurant: "Fires Express",
      status: "On The Way",
      time: "Today"
    },

    {
      id: 401,
      name: 'Paneer Fried Rice',
      price: 219,
      image: 'images/AllFoods/Rice/907.jpg',
      rating: 4.7,
      category: 'Rice',
      description: 'Paneer mixed fried rice',
      restaurant: "Food Lounge",
      status: "Delivered",
      time: "3 days ago"
    }
  ]);

  
}
