import { Component, computed, input, signal } from '@angular/core';
import { CartItem } from '../../../../../core/models/cart/cart-item';

@Component({
  selector: 'app-order-summary',
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css',
})

export class OrderSummary {
   items=input.required<CartItem[]>();

   totalItems = computed(() =>
    this.items().reduce(
      (total, item) =>
        total + item.quantity,
      0
    )
  );

  subtotal = computed(() =>
    this.items().reduce(
      (total, item) =>total +(item.food.price * item.quantity),0
    )
  );


  deliveryCharge=signal(0);

  discount=signal(50);

  finalTotal=computed(()=>
     this.subtotal() + this.deliveryCharge() - this.discount()
  )
}
