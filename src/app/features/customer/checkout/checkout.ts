import { Component, computed, inject, signal, ViewChild } from '@angular/core';
import { Cartservice } from '../../../core/services/frontendservices/cart/cartservice';
import { DeliveryAddress } from './components/delivery-address/delivery-address';
import { PaymentMethod } from './components/payment-method/payment-method';
import { OrderItems } from './components/order-items/order-items';
import { OrderSummary } from './components/order-summary/order-summary';
import { CheckoutStepper } from './components/checkout-stepper/checkout-stepper';
import { Paymentservice } from '../../../core/services/frontendservices/payment/paymentservice';

@Component({
   selector: 'app-checkout',
   imports: [DeliveryAddress, PaymentMethod, OrderItems, OrderSummary, CheckoutStepper],
   templateUrl: './checkout.html',
   styleUrl: './checkout.css',
})
export class Checkout {
   cartService = inject(Cartservice)
   @ViewChild(OrderSummary) orderSummary!: OrderSummary;
   paymentService = inject(Paymentservice)

   checkoutItems = computed(() => {
      return this.cartService.buyNowItem().length ? this.cartService.buyNowItem() : this.cartService.cartItems()
   })

   formValid = false;
   updateStatus(status: boolean) {
      this.formValid = status
   }
   currentStep = signal(1);

   selectedPayment = signal('');

   updatePayment(payment: string) {
      this.selectedPayment.set(payment)
   }

   next() {

      // Step 1 validation
      if (this.currentStep() === 1 && !this.formValid) {

         alert('Please fill delivery details')
         return;

      }

      // Step 3 validation
      if (this.currentStep() === 3 && !this.selectedPayment()) {
         alert('Please select payment method')
         return;

      }

      this.currentStep.update(
         value => value + 1
      );

   }

   previous() {
      if (this.currentStep() > 1) {
         this.currentStep.update(
            value => value - 1
         )
      }
   }

   payNow() {
      this.paymentService.pay(this.orderSummary.finalTotal())
   }

   placeOrder(){
      this.paymentService.placeCODOrder()
   }
}
