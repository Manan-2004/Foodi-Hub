import { Component } from '@angular/core';
import { DownloadAppModel } from '../../../../../core/models/home/download-app-model';

@Component({
  selector: 'app-download-app',
  imports: [],
  templateUrl: './download-app.html',
  styleUrl: './download-app.css',
})
export class DownloadApp {

  appData: DownloadAppModel = {

    tag: '📱 Mobile App',

    title: 'Download FoodieHub App',

    description:
      'Get faster ordering, live order tracking and exclusive app-only offers.',

    playStore: 'Google Play',

    appStore: 'App Store',

    mobileImage: 'images/banners/Phone.png'

  }

}