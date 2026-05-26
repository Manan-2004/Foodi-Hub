import { Component, input } from '@angular/core';

@Component({
  selector: 'app-checkout-stepper',
  imports: [],
  templateUrl: './checkout-stepper.html',
  styleUrl: './checkout-stepper.css',
})
export class CheckoutStepper {
  
  currentStep=input.required<number>();

}
