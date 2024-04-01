import { Component } from '@angular/core';
import { HeroCardsComponent } from '../hero-cards/hero-cards.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroCardsComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  cards = [
    {
      title: '',
      imageUrl: './../assets/Images/card-hero-3.webp',
      class: '-rotate-12'
    },
    {
      title: '',
      imageUrl: './../assets/Images/card-hero.webp',
      class: 'rotate-12'
    },
    
  ]

  logos = [
    {
      url: './../assets/icons/microsoft-logo.svg',
      alt: 'microsoft-logo'
    },
    {
      url: './../assets/icons/google-logo.svg',
      alt: 'google-logo'
    },
    {
      url: './../assets/icons/notion-logo.svg',
      alt: 'notion-logo'
    },
    {
      url: './../assets/icons/slack-logo.svg',
      alt: 'slack-logo'
    },
    {
      url: './../assets/icons/appwrite-logo.svg',
      alt: 'appwrite-logo'
    },
    {
      url: './../assets/icons/codepen-logo.svg',
      alt: 'codepen-logo'
    },
  ]
}
