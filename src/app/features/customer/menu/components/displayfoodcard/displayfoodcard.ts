import { Component, inject, input } from '@angular/core';
import { Foodmenumodel } from '../../../../../core/models/menu/foodmenumodel';
import { Router, RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { Cartservice } from '../../../../../core/services/frontendservices/cart/cartservice';
import { Alert } from '../../../../../core/services/frontendservices/messages/alert';
import { Authservice } from '../../../../../core/services/frontendservices/auth/authservice';

@Component({
  selector: 'app-displayfoodcard',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './displayfoodcard.html',
  styleUrl: './displayfoodcard.css',
})

export class Displayfoodcard {
  food = input.required<Foodmenumodel>();
  cartService = inject(Cartservice)
  alertService = inject(Alert)
  router = inject(Router)
  authService = inject(Authservice)

  //Add To cart
  addItem(event: Event) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login'])
      return
    }
    event.stopPropagation()
    this.cartService.addToCart(this.food())
    this.alertService.success('Added', `${this.food().name} added to cart`)
  }
}
