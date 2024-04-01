import { Component } from '@angular/core';
import { PricingCardComponent } from '../pricing-card/pricing-card.component';

@Component({
  selector: 'app-pricing-table',
  standalone: true,
  imports: [PricingCardComponent],
  templateUrl: './pricing-table.component.html',
  styleUrl: './pricing-table.component.css'
})
export class PricingTableComponent {
  plans = [
    {
      plan: "Pro",
      description: "Pro Plan: Perfect for individual users needing advanced features and premium support.",
      price: "2500",
      features: [
        "24/7 access to our test service",
        "Premium support from our team",
        "Advanced features included",
        "Customizable templates",
        "API access for integration"
      ],
      buttonText: "Get Started",
      isFeatured: false,
    },
    {
      plan: "Plus",
      description: "Plus Plan: Ideal for small businesses looking for a robust service with additional features.",
      price: "3800",
      features: [
        "Free access to all features",
        "Priority technical support",
        "Advanced analytics tools",
        "Multi-user collaboration",
        "Custom branding options"
      ],
      buttonText: "Get Started",
      isFeatured: false,
    },
    {
      plan: "Custom",
      description: "Custom Plan: Designed for companies requiring tailored solutions and specialized attention.",
      price: "Let's Talk",
      features: [
        "Custom development based on specific needs",
        "Dedicated advisor for personalized assistance",
        "Custom integrations with other systems",
        "Enterprise-level security measures",
        "Scalable infrastructure for growing businesses"
      ],
      buttonText: "Book a Call",
      isFeatured: true,
    }
  ];

}
