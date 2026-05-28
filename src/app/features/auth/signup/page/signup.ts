import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  AbstractControl
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import { Authservice } from '../../../../core/services/frontendservices/auth/authservice';

@Component({
  selector: 'app-signup',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})

export class Signup {

  fb = inject(FormBuilder);

  router = inject(Router);

  authService = inject(Authservice);

  showPassword = false;

  showConfirmPassword = false;


  /* Match Password Validator */

  passwordMatchValidator(
    control: AbstractControl) {

    const password =
      control.get('password')?.value;

    const confirmPassword =
      control.get('confirmPassword')?.value;

    if (!confirmPassword) {

      return null;

    }

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };

  }


  /* Form */

  signupForm = this.fb.group({

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

    password: [
      '',
      [
        Validators.required,

        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )

      ]
    ],

    confirmPassword: [
      '',
      Validators.required
    ]

  },

    {
      validators: this.passwordMatchValidator
    }

  );



  togglePassword() {

    this.showPassword =
      !this.showPassword;

  }


  toggleConfirmPassword() {

    this.showConfirmPassword =
      !this.showConfirmPassword;

  }



  submit() {

    if (this.signupForm.invalid) {

      this.signupForm.markAllAsTouched();

      return;

    }


    /* data */

    const userData = {
      name:
        this.signupForm.value.name,

      email:
        this.signupForm.value.email,

      password:
        this.signupForm.value.password

    };
    
    console.log(userData);

    /* reset form */
    this.signupForm.reset();

    /* redirect */
    this.router.navigate(['/auth/login']);
  }

}