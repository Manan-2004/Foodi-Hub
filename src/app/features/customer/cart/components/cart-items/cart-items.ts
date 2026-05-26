import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cartservice } from '../../../../../core/services/frontendservices/cart/cartservice';
import { Alert } from '../../../../../core/services/frontendservices/messages/alert';

@Component({
  selector: 'app-cart-items',
  imports: [RouterLink],
  templateUrl: './cart-items.html',
  styleUrl: './cart-items.css',
})

export class CartItems {
  cartService = inject(Cartservice)
  alertService = inject(Alert)

  removeItem(foodId: number, foodName: string) {
    this.alertService.confirm('Remove Item?', `${foodName} will be removed from cart`).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeItem(foodId)
        this.alertService.success(
          'Removed',
          `${foodName} removed successfully`
        );
      }
    })
  }

  decreaseItem(foodId: number, foodName: string, quantity: number) {
    if (quantity <= 1) {
       this.alertService.confirm('Remove Item?',`${foodName} quantity will become 0`).then((result)=>{
           if(result.isConfirmed){
               this.cartService.removeItem(foodId)
               this.alertService.success('Removed',`${foodName} removed from cart`);
           }
       })
       return
    }
    this.cartService.decreaseQty(foodId)
  }


}
