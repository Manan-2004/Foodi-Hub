import { Routes } from '@angular/router';

export const routes: Routes = [

    // Default redirect
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

    // Auth Routes (Login/Register)
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/authroutes/auth.routes').then(r => r.AUTH_ROUTES)
    },

    //Customer Routes
    {
        path: 'customer',
        loadChildren: () =>
            import('./features/customer/customerroutes/customer.routes').then(r => r.CUSTOMER_ROUTES)
    },

    // Employee Routes


    // Admin Routes


    // 404
    {
        path: '**',
        loadComponent: () =>
            import('./shared/components/not-found/page/not-found').then(m => m.NotFound)
    }

];
