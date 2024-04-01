import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css'
})
export class PricingCardComponent {
  @Input() plan: string = "";
  @Input() description: string = "";
  @Input() price: string = "";
  @Input() features: string[] = [];
  @Input() buttonText: string = "";
  @Input() isFeatured: boolean = false;
}
