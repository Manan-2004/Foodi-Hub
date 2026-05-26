import { Component,input } from '@angular/core';
import { CartItem } from '../../../../../core/models/cart/cart-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-items',
  imports: [RouterLink],
  templateUrl: './order-items.html',
  styleUrl: './order-items.css',
})

export class OrderItems {
  items = input.required<CartItem[]>();

}
