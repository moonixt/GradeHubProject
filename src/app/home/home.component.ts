import { Component } from '@angular/core';
import { ContentComponent } from "../components/content/content.component";
import { ContainerComponent } from "../components/container/container.component";
import { ContentFeaturesComponent } from "../components/content-features/content-features.component";
import { HeroComponent } from "../components/hero/hero.component";
import { CardsComponent } from "../components/cards/cards.component";
import { Hero2Component } from "../components/hero2/hero2.component";
import { GalleryContainerComponent } from "../components/gallery-container/gallery-container.component";
import { GalleryComponent } from "../components/gallery/gallery.component";
import { HeroContainerComponent } from "../components/hero-container/hero-container.component";




@Component({
  selector: 'app-home',
  imports: [
    ContentComponent,
    ContainerComponent,
    ContentFeaturesComponent,
    HeroComponent,
    CardsComponent,
    Hero2Component,
    GalleryContainerComponent,
    GalleryComponent,
],
  templateUrl: './home.component.html',
  // styleUrl: './home.component.css'
})
export class HomeComponent {

}
