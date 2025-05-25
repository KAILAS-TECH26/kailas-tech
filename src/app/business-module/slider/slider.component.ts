import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

 async ngAfterViewInit() {
  if (isPlatformBrowser(this.platformId)) {
    const jQuery = (await import('jquery')).default;
    (window as any).$ = jQuery;
    (window as any).jQuery = jQuery;

    // Load Owl Carousel JS
    await import('owl.carousel');

    jQuery('.hero-slider').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1
    });

    const backtotop = document.querySelector('.back-to-top');

    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };

      window.addEventListener('load', toggleBacktotop);
      document.addEventListener('scroll', toggleBacktotop);
    }
  }
}

}
