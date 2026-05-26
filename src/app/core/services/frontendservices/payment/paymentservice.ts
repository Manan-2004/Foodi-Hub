import { inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Alert } from '../messages/alert';
import { Cartservice } from '../cart/cartservice';
import { environment } from '../../../../../environments/env';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})

export class Paymentservice {

  router = inject(Router);

  alert = inject(Alert);

  cartService = inject(Cartservice);


  pay(amount: number) {

    const options = {

      key: environment.razorpayKey,

      amount: amount * 100,

      currency: 'INR',

      name: 'FoodieHub 🍔',

      description: 'Secure Food Payment',

      prefill: {

        name: 'Foodie Customer',

        email: 'foodie@test.com',

        contact: '9999999999'

      },

      notes: {

        app: 'FoodieHub',

        type: 'Food Order'

      },

      theme: {

        color: '#ff5a1f'

      },


      handler: (response: any) => {

        console.log(
          'Payment Success:',
          response
        );

        // extra safety check

        if (response.razorpay_payment_id) {

          this.cartService.clearCheckoutItems();

          this.alert.success(
            'Success',
            'Payment Successful 🎉'
          );

          setTimeout(() => {

            this.router.navigate(
              ['/customer/order-success']
            );

          }, 1000);

        }

      },


      modal: {

        ondismiss: () => {

          this.alert.error(
            'Cancelled',
            'Payment Cancelled'
          );

        }

      }

    };

    const razorpay = new Razorpay(options);

    razorpay.open();

  }


  placeCODOrder() {

    this.cartService.clearCheckoutItems();

    this.alert.success(
      'Order Placed',
      'Cash On Delivery Selected 🚚'
    );

    setTimeout(() => {

      this.router.navigate(
        ['/customer/order-success']
      );

    }, 1000);

  }

}