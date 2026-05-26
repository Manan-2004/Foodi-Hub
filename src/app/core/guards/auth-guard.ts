import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../services/frontendservices/auth/authservice';

export const authGuard: CanActivateFn = (route, state) => {
    const authService=inject(Authservice)
    const router=inject(Router)

    if(authService.isLoggedIn()){
        return true
    }

    router.navigate(['/auth/login'])

    return false
};
