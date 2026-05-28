import { Component, inject } from '@angular/core';
import { CartItems } from '../components/cart-items/cart-items';
import { CouponBox } from '../components/coupon-box/coupon-box';
import { RecommendedFoods } from '../components/recommended-foods/recommended-foods';
import { CartSummary } from '../components/cart-summary/cart-summary';
import { Cartservice } from '../../../../core/services/frontendservices/cart/cartservice';

@Component({
  selector: 'app-cart',
  imports: [CartItems,CouponBox,RecommendedFoods,CartSummary],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})

export class Cart {
    cartServices=inject(Cartservice)
}
