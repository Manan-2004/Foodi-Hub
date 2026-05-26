import { Routes } from '@angular/router';
import { loginGuard } from '../../core/guards/login-guard';

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(c => c.Login),
        canActivate:[loginGuard]
    },
    {
        path: 'signup',
        loadComponent: () =>
            import('./signup/signup').then(m => m.Signup),
        canActivate:[loginGuard]
    }
];