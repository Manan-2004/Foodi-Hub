import {Component,ElementRef, ViewChild,AfterViewInit,NgZone,OnDestroy} from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { Categorymenumodel } from '../../../../../core/models/menu/categorymenumodel';

@Component({
  selector: 'app-category-filter',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})

export class CategoryFilter implements AfterViewInit, OnDestroy {

  @ViewChild('slider')
  slider!: ElementRef;

  private wheelHandler!: (event: WheelEvent) => void;

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {

    this.zone.runOutsideAngular(() => {

      this.wheelHandler = (event: WheelEvent) => {

        event.preventDefault();

        this.slider.nativeElement.scrollLeft += event.deltaY;

      };

      this.slider.nativeElement.addEventListener(
        'wheel',
        this.wheelHandler
      );

    });

  }

  ngOnDestroy(): void {

    if (this.slider) {

      this.slider.nativeElement.removeEventListener(
        'wheel',
        this.wheelHandler
      );

    }

  }

  categories: Categorymenumodel[] = [

    {
      name: 'Pizza',
      icon: '🍕',
      route: 'pizza'
    },

    {
      name: 'Burger',
      icon: '🍔',
      route: 'burger'
    },

    {
      name: 'Noodles',
      icon: '🍜',
      route: 'noodles'
    },

    {
      name: 'Drinks',
      icon: '🥤',
      route: 'drinks'
    },

    {
      name: 'Desserts',
      icon: '🍰',
      route: 'desserts'
    },

    {
      name: 'Snacks',
      icon: '🍟',
      route: 'snacks'
    },

    {
      name: 'Chicken',
      icon: '🍗',
      route: 'chicken'
    },

    {
      name: 'Healthy',
      icon: '🥗',
      route: 'healthy'
    },

    {
      name: 'Rice',
      icon: '🍚',
      route: 'rice'
    },

    {
      name: 'Biryani',
      icon: '🍛',
      route: 'biryani'
    },

    {
      name: 'Sandwich',
      icon: '🥪',
      route: 'sandwich'
    }

  ];

}