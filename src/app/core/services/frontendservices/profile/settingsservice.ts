import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Settingsservice {

  settings = signal([

    {
      id: 1,
      icon: '🔒',
      title: 'Change Password',
      desc: 'Update your account password'
    },

    {
      id: 2,
      icon: '🌐',
      title: 'Language',
      desc: 'Select app language'
    },

    {
      id: 3,
      icon: '❤️',
      title: 'Favorites',
      desc: 'View favorite food items'
    },

    {
      id: 4,
      icon: '🔔',
      title: 'Notifications',
      desc: 'Manage alerts & updates'
    },

    {
      id: 5,
      icon: '💳',
      title: 'Payments',
      desc: 'Saved payment methods'
    },

    {
      id: 6,
      icon: '🎁',
      title: 'Offers',
      desc: 'Coupons & rewards'
    },

    {
      id: 7,
      icon: '🚪',
      title: 'Logout',
      desc: 'Sign out from account'
    }

  ])

}