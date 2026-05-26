import { Component, inject } from '@angular/core';
import { Cartservice } from '../../../../../core/services/frontendservices/cart/cartservice';
import { Router } from "@angular/router";


@Component({
  selector: 'app-cart-summary',
  imports: [],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.css',
})

export class CartSummary {
   cartService=inject(Cartservice)

   router=inject(Router)

   checkout(){
      this.cartService.clearBuyNow()

      this.router.navigate(['/customer/checkout']);
   }


}
