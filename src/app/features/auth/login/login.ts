import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../../../core/services/frontendservices/auth/authservice';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  fb = inject(FormBuilder);

  authService = inject(Authservice);

  router = inject(Router);

  showPassword = false;

  submitted = false;

  loginForm = this.fb.group({

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
        Validators.minLength(6)
      ]
    ]

  });

  togglePassword() {

    this.showPassword = !this.showPassword;

  }

  submit() {

    this.submitted = true;

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;

    }

    this.authService.login(this.loginForm.value);

    this.router.navigate(['/customer/home']);

  }

}