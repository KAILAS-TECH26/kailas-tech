import { Component } from '@angular/core';


import { CommonModule} from '@angular/common';
import { Router, RouterModule } from '@angular/router';

// Import Components
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SliderComponent } from './business-module/slider/slider.component';
import { BlogPostComponent } from './business-module/blog-post/blog-post.component';
import { AboutUsComponent } from './business-module/about-us/about-us.component';
import { TeamMembersComponent } from './business-module/team-members/team-members.component';
import { OurServicesComponent } from './business-module/our-services/our-services.component';
import { CompletedProjectComponent } from './business-module/completed-project/completed-project.component';
import { ReviewComponent } from './business-module/review/review.component';
// import { CardsServiceComponent } from './business-module/cards-service/cards-service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  
    HeaderComponent,
    SliderComponent,
    AboutUsComponent,
    FooterComponent,
    BlogPostComponent,
    TeamMembersComponent,
    OurServicesComponent,
    CompletedProjectComponent,
    ReviewComponent,
    // CardsServiceComponent,
    RouterModule  // ✅ Required for routing
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showSlider = true; // Default: Show slider
  title = 'kailash-tech';
}
