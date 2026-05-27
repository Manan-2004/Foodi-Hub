import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Profileservice {
  user = signal({
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    city: 'Ahmedabad',
    image: 'https://i.pravatar.cc/150',
    mobile: '9328398569',
    bio: 'Hii Hello'
  });

  updateProfile(data: any) {
    this.user.update(user => ({...user,...data})
    );
  }



}
