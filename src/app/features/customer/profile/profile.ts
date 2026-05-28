import { Component } from '@angular/core';
import { ProfileHeader } from './components/profile-header/profile-header';
import { ProfileStats } from './components/profile-stats/profile-stats';
import { ProfileDetails } from './components/profile-details/profile-details';
import { SavedAddress } from './components/saved-address/saved-address';
import { RecentOrders } from './components/recent-orders/recent-orders';

@Component({
  selector: 'app-profile',
  imports: [ProfileHeader, ProfileStats, ProfileDetails, SavedAddress,RecentOrders],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})

export class Profile {
  pageLoaded = false;
  ngOnInit() {
    setTimeout(() => {
      this.pageLoaded = true;
    }, 100);
  }
}
