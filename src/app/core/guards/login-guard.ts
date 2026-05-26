import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../services/frontendservices/auth/authservice';

export const loginGuard: CanActivateFn = (route, state) => {
   
  const authService = inject(Authservice)
  const router = inject(Router);

  if(authService.isLoggedIn()){
     router.navigate(['/customer/home'])
     return false
  }
  
  return true;

};
