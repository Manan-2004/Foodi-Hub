import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../../../models/cart/cart-item';
import { Foodmenumodel } from '../../../models/menu/foodmenumodel';

@Injectable({
  providedIn: 'root',
})

export class Cartservice {

  cartItems = signal<CartItem[]>([]);
  buyNowItem = signal<CartItem[]>([]);

  constructor() {

    // Load cart once
    const savedCart = localStorage.getItem('cart');

    if (savedCart) {

      this.cartItems.set(
        JSON.parse(savedCart)
      );

    }


    // Auto save whenever cart changes
    effect(() => {

      localStorage.setItem(
        'cart',
        JSON.stringify(this.cartItems())
      );

      console.log(
        'Cart Updated:',
        this.cartItems()
      );

    });

  }


  totalItems = computed(() =>

    this.cartItems().reduce(
      (total, item) =>
        total + item.quantity,
      0
    )

  );


  totalPrice = computed(() =>

    this.cartItems().reduce(
      (total, item) =>
        total + (item.food.price * item.quantity),
      0
    )

  );


  addToCart(food: Foodmenumodel) {

    const items = [...this.cartItems()];

    const existingItem = items.find(
      item => item.food.id === food.id
    );


    if (existingItem) {

      existingItem.quantity++;

    }

    else {

      items.push({

        food,
        quantity: 1

      });

    }

    this.cartItems.set(items);

  }

  buynow(food: Foodmenumodel) {
    this.buyNowItem.set([{
      food: food,
      quantity: 1
    }])
  }

  clearBuyNow() {
    this.buyNowItem.set([]);
  }

  removeItem(foodId: number) {

    this.cartItems.update(items =>

      items.filter(
        item => item.food.id !== foodId
      )

    );

  }

  clearCheckoutItems() {

    this.cartItems.set([]);

    this.buyNowItem.set([]);

  }
  increaseQty(foodId: number) {

    this.cartItems.update(items => {

      return items.map(item =>

        item.food.id === foodId
          ? { ...item, quantity: item.quantity + 1 }
          : item

      );

    });

  }


  decreaseQty(foodId: number) {

    this.cartItems.update(items => {

      return items.map(item =>

        item.food.id === foodId
          ? { ...item, quantity: item.quantity - 1 }
          : item

      );

    });

  }

}