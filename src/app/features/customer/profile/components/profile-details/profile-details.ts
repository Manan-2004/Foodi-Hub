import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Profiledeatils } from '../../../../../core/services/frontendservices/profile/profiledeatils';
import { Authservice } from '../../../../../core/services/frontendservices/auth/authservice';

@Component({
  selector: 'app-profile-details',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.css'
})

export class ProfileDetails {

  Settings = inject(Profiledeatils)

  AuthService = inject(Authservice)

  router = inject(Router)

  fb = inject(FormBuilder)

  settings = this.Settings.settings

  showModal = signal(false)

  passwordForm = this.fb.group({

    currentPassword: [
      '',
      [
        Validators.required
      ]
    ],

    newPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],

    confirmPassword: [
      '',
      [
        Validators.required
      ]
    ]

  })

  handleAction(title: string) {

    if (title === 'Security') {

      this.showModal.set(true)

    }

    if (title === 'Logout') {

      this.AuthService.logout()

    }

  }

  closeModal() {

    this.showModal.set(false)

  }

  savePassword() {

    if (this.passwordForm.invalid) {

      this.passwordForm.markAllAsTouched()

      return

    }

    console.log(this.passwordForm.value)

    this.closeModal()

  }

}