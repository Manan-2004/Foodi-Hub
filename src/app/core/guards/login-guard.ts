import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../services/frontendservices/auth/authservice';

export const loginGuard: CanActivateFn = () => {

  const authService = inject(Authservice);

  const router = inject(Router);

  // Already login hai
  if (authService.isLoggedIn()) {
    return router.createUrlTree(['/customer/home']);
  }

  // Login nahi hai → login page open
  return true;

};