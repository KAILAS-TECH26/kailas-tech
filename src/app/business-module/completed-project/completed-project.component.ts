import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-completed-project',
  standalone: true, // Required for Angular 14+ standalone components
  imports: [CommonModule, CarouselModule], // Import necessary modules
  templateUrl: './completed-project.component.html',
  styleUrls: ['./completed-project.component.scss'] // Corrected from `styleUrl` to `styleUrls`
})
export class CompletedProjectComponent {
  customOptions = {
    loop: true,
    nav: false,
    items: 2,
    dots: true,
    smartSpeed: 600,
    center: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      768: { items: 2, margin: 8 }
    }
  };

  constructor() {}
}
