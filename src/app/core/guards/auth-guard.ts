import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from '../services/frontendservices/auth/authservice';

export const authGuard: CanActivateFn = () => {

    const authService = inject(Authservice);

    const router = inject(Router);

    // Login hai - page open
    if (authService.isLoggedIn()){
        return true;

    }

    // Login nahi - login page
    return router.createUrlTree(
        ['/auth/login']
    );

};