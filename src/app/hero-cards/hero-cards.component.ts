import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-cards',
  standalone: true,
  imports: [],
  templateUrl: './hero-cards.component.html',
  styleUrl: './hero-cards.component.css'
})
export class HeroCardsComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
}
