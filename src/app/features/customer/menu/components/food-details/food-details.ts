import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foodmenumodel } from '../../../../../core/models/menu/foodmenumodel';
import { allFoods } from '../../../../../core/food-data/all-foods';
import { FoodList } from '../food-list/food-list';
import { Cartservice } from '../../../../../core/services/frontendservices/cart/cartservice';
import { Alert } from '../../../../../core/services/frontendservices/messages/alert';
import { Authservice } from '../../../../../core/services/frontendservices/auth/authservice';


@Component({
  selector: 'app-food-details',
  imports: [FoodList],
  templateUrl: './food-details.html',
  styleUrl: './food-details.css'
})

export class FoodDetails {

  food?: Foodmenumodel;

  realtedfoods: Foodmenumodel[] = [];

  route = inject(ActivatedRoute);

  router=inject(Router);

  cartService = inject(Cartservice);

  alertService = inject(Alert)
  
  authService=inject(Authservice)

  ngOnInit() {

    this.route.paramMap.subscribe(

      params => {

        const id = Number(
          params.get('id')
        );

        this.food =
          allFoods.find(
            item => item.id === id
          );

        if (this.food) {

          this.realtedfoods =
            allFoods.filter(

              item =>

                item.id !== id &&

                item.category ===
                this.food?.category

            ).slice(0, 4);

        }

        window.scrollTo({

          top: 0,

          behavior: 'smooth'

        });

      });

  }


  addItem() {
    if(!this.authService.isLoggedIn()){
        this.router.navigate(['/auth/login'])
        return
    }
    if (this.food) {
      this.cartService.addToCart(this.food);
      this.alertService.success('Added', `${this.food.name} added to cart`
      );
    }
  }

  orderNow() {
    if(!this.authService.isLoggedIn()){
        this.router.navigate(['auth/login'])
        return
    }
    if (this.food) {
       this.cartService.buynow(this.food)
       this.router.navigate(['/customer/checkout']);
    }
  }
}