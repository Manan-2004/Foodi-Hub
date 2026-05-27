import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  imports: [],
  templateUrl: './profile-details.html',
  styleUrl: './profile-details.css',
})
export class ProfileDetails {
    settings = signal([
    {
      icon: '🔒',
      title: 'Change Password',
      desc: 'Update your account password'
    },
    {
      icon: '📱',
      title: 'Phone Number',
      desc: 'Update mobile number'
    },
    {
      icon: '🌐',
      title: 'Language',
      desc: 'Set app language'
    },
    {
      icon: '🚪',
      title: 'Logout',
      desc: 'Sign out from account'
    }
  ]);

}
