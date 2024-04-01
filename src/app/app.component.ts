import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BentoGridComponent } from './bento-grid/bento-grid.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeroComponent,
    BentoGridComponent,
    TestimonialsComponent,
    ContactFormComponent,
    PricingTableComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tailwindcss';
}
