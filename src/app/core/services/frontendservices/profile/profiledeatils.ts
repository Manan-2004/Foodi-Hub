import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Profiledeatils {
  settings = signal([

    {
      id: 1,
      icon: 'bi bi-shield-lock-fill',
      title: 'Security',
      desc: 'Change Password',
      badge: 'Secure'
    },

    {
      id: 2,
      icon: 'bi bi-bell-fill',
      title: 'Notifications',
      desc: 'Manage app alerts & order updates',
      badge: 'Alerts'
    },

    {
      id: 3,
      icon: 'bi bi-credit-card-2-front-fill',
      title: 'Payment Methods',
      desc: 'Cards, UPI & wallet settings',
      badge: 'Payments'
    },

    {
      id: 4,
      icon: 'bi bi-geo-alt-fill',
      title: 'Saved Addresses',
      desc: 'Manage delivery locations',
      badge: 'Address'
    },

    {
      id: 5,
      icon: 'bi bi-heart-fill',
      title: 'Favorites',
      desc: 'Your liked foods & restaurants',
      badge: 'Food'
    },

    {
      id: 6,
      icon: 'bi bi-box-arrow-right',
      title: 'Logout',
      desc: 'Securely sign out your account',
      badge: 'Account'
    }

  ])
}
