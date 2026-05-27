import { Component, inject } from '@angular/core';
import { Settingsservice } from '../../../../../core/services/frontendservices/profile/settingsservice';

@Component({
  selector: 'app-profile-actions',
  imports: [],
  templateUrl: './profile-actions.html',
  styleUrl: './profile-actions.css',
})
export class ProfileActions {

  settingsService = inject(Settingsservice)
  actions = this.settingsService.settings

  handleAction(item:any) {
    console.log(item.title);
  }
  


}
