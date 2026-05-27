import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-stats',
  imports: [],
  templateUrl: './profile-stats.html',
  styleUrl: './profile-stats.css',
})
export class ProfileStats {
  stats = signal([
    {
      icon: '📦',
      count: 15,
      title: 'Orders'
    },

    {
      icon: '❤️',
      count: 23,
      title: 'Favorites'
    },

    {
      icon: '💰',
      count: '₹7,540',
      title: 'Spent'
    }
  ])
}
