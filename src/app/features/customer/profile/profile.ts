import { Component } from '@angular/core';
import { ProfileHeader } from './components/profile-header/profile-header';
import { ProfileStats } from './components/profile-stats/profile-stats';
import { ProfileDetails } from './components/profile-details/profile-details';
import { SavedAddress } from './components/saved-address/saved-address';
import { ProfileActions } from './components/profile-actions/profile-actions';

@Component({
  selector: 'app-profile',
  imports: [ProfileHeader, ProfileStats, ProfileDetails, SavedAddress, ProfileActions],
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
