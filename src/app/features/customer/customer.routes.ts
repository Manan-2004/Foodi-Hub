import { Routes } from '@angular/router';

export const CUSTOMER_ROUTES: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home').then(m => m.Home)
    },
    {
        path: 'menu',
        loadComponent: () =>
            import('./menu/menu').then(m => m.Menu),
        children: [
            { path: '', redirectTo: 'pizza', pathMatch: 'full' },
            {
                path: 'pizza',
                loadComponent: () =>
                    import('./menu/components/childcomponent/pizza/pizza').then(m => m.Pizza)
            },
            {
                path: 'burger',
                loadComponent: () =>
                    import('./menu/components/childcomponent/burger/burger').then(m => m.Burger)
            },
            {
                path: 'noodles',
                loadComponent: () =>
                    import('./menu/components/childcomponent/noodles/noodles').then(m => m.Noodles)
            },
            {
                path: 'drinks',
                loadComponent: () =>
                    import('./menu/components/childcomponent/drinks/drinks').then(m => m.Drinks)
            },
            {
                path: 'desserts',
                loadComponent: () =>
                    import('./menu/components/childcomponent/desserts/desserts').then(m => m.Desserts)
            },
            {
                path: 'snacks',
                loadComponent: () =>
                    import('./menu/components/childcomponent/snacks/snacks').then(m => m.Snacks)
            },
            {
                path: 'chicken',
                loadComponent: () =>
                    import('./menu//components/childcomponent/chicken/chicken').then(m => m.Chicken)
            },
            {
                path: 'healthy',
                loadComponent: () =>
                    import('./menu/components/childcomponent/healthy/healthy').then(m => m.Healthy)
            },
            {
                path: 'rice',
                loadComponent: () =>
                    import('./menu/components/childcomponent/rice/rice').then(m => m.Rice)
            },
            {
                path: 'biryani',
                loadComponent: () =>
                    import('./menu/components/childcomponent/biryani/biryani').then(m => m.Biryani)
            },
            {
                path: 'sandwich',
                loadComponent: () =>
                    import('./menu/components/childcomponent/sandwich/sandwich').then(m => m.Sandwich)
            }
        ]
    },
    {
        path: 'menu/details/:id',
        loadComponent: () =>
            import('./menu/components/food-details/food-details')
                .then(m => m.FoodDetails)
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./cart/cart').then(m => m.Cart)
    },
    {
        path: 'checkout',
        loadComponent: () =>
            import('./checkout/checkout').then(m => m.Checkout)
    },
    {
        path: 'order-success',
        loadComponent: () =>
            import('./checkout/components/order-success/order-success').then(m => m.OrderSuccess)
    },
    {
        path: 'profile',
        loadComponent: () =>
            import('./profile/profile').then(m => m.Profile)
    }
];