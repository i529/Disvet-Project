import { Component } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { HomeAboutComponent } from "./home-about/home-about.component";
import { HomeServicesComponent } from "./home-services/home-services.component";
import { HomeContactComponent } from "./home-contact/home-contact.component";
import { HomeAboutHistoryComponent } from "./home-about-history/home-about-history.component";
import { HomeSliderComponent } from "./home-slider/home-slider.component";
import { HomeWorkUsComponent } from "../../components/home/home-work-us/home-work-us.component";
import { HomeContactInviteComponent } from "./home-contact-invite/home-contact-invite.component";
import { HomeBlogComponent } from "./home-blog/home-blog.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, HomeAboutComponent, HomeServicesComponent, HomeContactComponent, HomeAboutHistoryComponent, HomeSliderComponent, HomeWorkUsComponent, HomeContactInviteComponent, HomeBlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
