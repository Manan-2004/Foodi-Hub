import { Component, inject } from '@angular/core';
import { Orderservice } from '../../../../../core/services/frontendservices/orders/orderservice';

@Component({
  selector: 'app-recent-orders',
  imports: [],
  templateUrl: './recent-orders.html',
  styleUrl: './recent-orders.css',
})
export class RecentOrders {

   orderService=inject(Orderservice)
   orders=this.orderService.orders
   
}
