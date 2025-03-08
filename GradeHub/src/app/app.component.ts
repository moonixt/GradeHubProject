import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from "./content/content.component";
import { CardsComponent } from './cards/cards.component';
import { Hero2Component } from './hero2/hero2.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { ContentFeaturesComponent } from './content-features/content-features.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContainerComponent,
    ContentComponent,
    CardsComponent,
    Hero2Component,
    GalleryComponent,
    GalleryContainerComponent,
    ContentFeaturesComponent
],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GradeHub';
}
