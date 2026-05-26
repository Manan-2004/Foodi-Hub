import {
  Component,
  inject,
  output
} from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-delivery-address',
  imports: [ReactiveFormsModule],
  templateUrl: './delivery-address.html',
  styleUrl: './delivery-address.css'
})

export class DeliveryAddress {

  fb = inject(FormBuilder);

  validStatus = output<boolean>();

  selectedCities: string[] = [];

  states = [

    {
      name: 'Gujarat',
      cities: [
        'Ahmedabad',
        'Surat',
        'Vadodara',
        'Rajkot'
      ]
    },

    {
      name: 'Maharashtra',
      cities: [
        'Mumbai',
        'Pune',
        'Nagpur'
      ]
    },

    {
      name: 'Delhi',
      cities: [
        'New Delhi'
      ]
    }

  ];


  checkoutForm = this.fb.group({

    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    phone: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^[0-9]{10}$/
        )
      ]
    ],

    address: [
      '',
      [
        Validators.required
      ]
    ],

    state: [
      '',
      [
        Validators.required
      ]
    ],

    city: [
      '',
      [
        Validators.required
      ]
    ],

    pincode: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^[0-9]{6}$/
        )
      ]
    ]

  });


  constructor() {

    this.checkoutForm
      .get('state')
      ?.valueChanges
      .subscribe(value => {

        const selected =
          this.states.find(
            state => state.name === value
          );

        this.selectedCities =
          selected?.cities || [];

        this.checkoutForm.patchValue({

          city: ''

        });

      });


    this.checkoutForm
      .statusChanges
      .subscribe(status => {

        this.validStatus.emit(
          status === 'VALID'
        );

      });

  }

}