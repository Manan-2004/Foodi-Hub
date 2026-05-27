import { Component, inject } from '@angular/core';
import { Profileservice } from '../../../../../core/services/frontendservices/profile/profileservice';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Alert } from '../../../../../core/services/frontendservices/messages/alert';

@Component({
  selector: 'app-profile-header',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css'
})
export class ProfileHeader {

  profileService = inject(Profileservice);

  alert = inject(Alert);

  user = this.profileService.user;

  fb = inject(FormBuilder);

  showModal = false;

  isClosing = false;


  profileForm = this.fb.group({

    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    mobile: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/)
      ]
    ],

    city: [
      '',
      Validators.required
    ],

    bio: ['']

  });


  openModal() {

    this.profileForm.patchValue({

      name: this.user().name,
      email: this.user().email,
      mobile: this.user().mobile,
      city: this.user().city,
      bio: this.user().bio

    });

    this.showModal = true;

  }


  closeModal() {

    this.isClosing = true;

    setTimeout(() => {

      this.showModal = false;

      this.isClosing = false;

      this.profileForm.reset();

    }, 300);

  }


  saveProfile() {

    this.profileForm.markAllAsTouched();

    if (this.profileForm.invalid) {

      this.alert.error(
        'Invalid Form',
        'Please fill all required fields'
      );

      return;

    }

    const value = this.profileForm.value;

    this.profileService.updateProfile(value)

    this.alert.success(
      'Success',
      'Profile Updated Successfully'
    );


    this.closeModal();

  }

}