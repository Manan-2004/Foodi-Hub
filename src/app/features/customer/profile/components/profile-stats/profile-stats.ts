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
      id: 1,
      icon: 'bi bi-bag-check-fill',
      count: '128',
      title: 'Total Orders'
    },
    {
      id: 2,
      icon: 'bi bi-heart-fill',
      count: '36',
      title: 'Wishlist Items'
    },
    {
      id: 3,
      icon: 'bi bi-geo-alt-fill',
      count: '5',
      title: 'Saved Addresses'
    },
    {
      id: 4,
      icon: 'bi bi-star-fill',
      count: '4.9',
      title: 'Customer Rating'
    }
  ]);
}
