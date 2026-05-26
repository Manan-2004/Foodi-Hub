import { Component, output,  signal } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  imports: [],
  templateUrl: './payment-method.html',
  styleUrl: './payment-method.css',
})

export class PaymentMethod {
  
  paymentSelected = output<string>();

  selectedMethod = signal('');

  selectPayment(method: string) {

    this.selectedMethod.set(method);

    this.paymentSelected.emit(method);

  }

}