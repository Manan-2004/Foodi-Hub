import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Cartservice } from '../../../core/services/frontendservices/cart/cartservice';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  cartService=inject(Cartservice)

  isMenuOpen=false;
  toggleMenu(){
    this.isMenuOpen=!this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen=false;
  }
}
