import { Component, inject } from '@angular/core';
import { Addressservice } from '../../../../../core/services/frontendservices/profile/addressservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alert } from '../../../../../core/services/frontendservices/messages/alert';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-saved-address',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './saved-address.html',
  styleUrl: './saved-address.css'
})
export class SavedAddress {

  addressService = inject(Addressservice);
  alert = inject(Alert);

  addresses = this.addressService.addresses;

  fb = inject(FormBuilder);

  showModal = false;

  isClosing = false;

  addressForm = this.fb.group({

    type: ['Home', Validators.required],

    full: [
      '',
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],

    city: [
      '',
      Validators.required
    ],

    pincode: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{6}$/)
      ]
    ]

  });

  openModal() {
    this.showModal = true;
  }

  closeModal() {

    this.isClosing = true;

    setTimeout(() => {

      this.showModal = false;

      this.isClosing = false;

      this.addressForm.reset({

        type: 'Home'

      });

    }, 300);

  }

  saveAddress() {

    this.addressForm.markAllAsTouched();

    if (this.addressForm.invalid) {

      this.alert.error(
        'Invalid Form',
        'Please fill all required fields'
      );

      return;

    }

    const value = this.addressForm.value;

    this.addressService.addAddress({

      id: Date.now(),

      type: value.type,

      full: `
      ${value.full},
      ${value.city},
      ${value.pincode}
      `

    });

    this.alert.success(
      'Success',
      'Address added successfully'
    );

    this.closeModal();

  }

}