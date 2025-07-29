import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;


@Component({
  selector: 'app-home-slider',
  imports: [],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css'
})
export class HomeSliderComponent implements AfterViewInit {

  swiper: any;

  ngAfterViewInit() {
    this.swiper = new Swiper ('.slider-wrapper', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
