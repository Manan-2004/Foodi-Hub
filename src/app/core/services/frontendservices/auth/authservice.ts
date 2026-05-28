import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from '../messages/alert';

@Injectable({
  providedIn:'root'
})

export class Authservice{
  router=inject(Router)
  alert=inject(Alert)

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
    
    this.alert.success('Login SuccessFully','Welcome User')
  }

  logout(){

    localStorage.removeItem('token');

    this.isUserLoggedIn.set(false);

    this.alert.success('Logout SuccessFully',"You are Logged Out !")

    this.router.navigate(['/auth/login'])

  }

  isLoggedIn(){

    return this.isUserLoggedIn();

  }

}