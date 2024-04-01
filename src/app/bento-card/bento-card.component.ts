import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bento-card',
  standalone: true,
  imports: [],
  templateUrl: './bento-card.component.html',
  styleUrl: './bento-card.component.css'
})
export class BentoCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imageUrl = '';
}
