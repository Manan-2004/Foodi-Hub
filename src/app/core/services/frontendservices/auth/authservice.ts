import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn:'root'
})

export class Authservice{
  router=inject(Router)

  isUserLoggedIn=signal(
    localStorage.getItem('token') ? true:false
  );

  login(data:any){
    console.log(data)
    localStorage.setItem(
      'token',
      'foodie-user'
    );

    this.isUserLoggedIn.set(true);

  }

  logout(){

    localStorage.removeItem('token');

    this.isUserLoggedIn.set(false);

    this.router.navigate(['/auth/login'])

  }

  isLoggedIn(){

    return this.isUserLoggedIn();

  }

}