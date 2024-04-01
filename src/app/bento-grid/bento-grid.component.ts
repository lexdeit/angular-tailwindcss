import { Component, Input } from '@angular/core';
import { BentoCardComponent } from '../bento-card/bento-card.component';

@Component({
  selector: 'app-bento-grid',
  standalone: true,
  imports: [BentoCardComponent],
  templateUrl: './bento-grid.component.html',
  styleUrl: './bento-grid.component.css'
})
export class BentoGridComponent {
  grids = [
    {
      title: "Expert Guidance",
      description: "Access to expert advice and guidance to help navigate the complexities of starting a business.",
      imageUrl: '../../assets/Images/grid-1.webp',
      position: "col-span-6"
    },
    {
      title: "Comprehensive Resources",
      description: "Gain access to a comprehensive library of resources including templates, tools, and articles.",
      imageUrl: '../../assets/Images/grid-2.webp',
      position: "col-span-6"
    },
    {
      title: "Market Research",
      description: "Receive insights and analysis on market trends and competitor strategies to inform your business decisions.",
      imageUrl: '../../assets/Images/grid-4.webp',
      position: "col-span-4"
    },
    // Puedes continuar agregando más objetos para las otras características
    {
      title: "Customer Support",
      description: "24/7 customer support to assist you with any questions or issues you may encounter.",
      imageUrl: '../../assets/Images/grid-3.webp',
      position: "col-span-4"
    },
    {
      title: "Flexible Pricing Plans",
      description: "Choose from a variety of flexible pricing plans tailored to meet the needs of your business.",
      imageUrl: '../../assets/Images/grid-5.webp',
      position: "col-span-4"
    }
  ]
}
