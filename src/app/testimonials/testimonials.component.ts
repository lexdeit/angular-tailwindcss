import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../testimonial-card/testimonial-card.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TestimonialCardComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Lex Teck",
      username: "lex_teck",
      comment: "¡Excelente servicio! Me ayudaron a resolver mi problema de manera rápida y eficiente. Estoy muy agradecido por la atención recibida.",
      userProfileImage: "https://www.github.com/lexdeit.png"
    },
    {
      name: "María González",
      username: "mariag",
      comment: "Estoy muy satisfecha con el producto que compré. La calidad es excepcional y el envío fue rápido. Sin duda, volveré a comprar aquí.",
      userProfileImage: "https://www.github.com/AntonioErdeljac.png"
    },
    {
      name: "Pedro López",
      username: "pedritol",
      comment: "El equipo de atención al cliente fue muy amable y resolvió todas mis dudas de manera clara y rápida. ¡Muy recomendado!",
      userProfileImage: "https://www.github.com/Daiana215.png"
    },
    {
      name: "Ana Martínez",
      username: "anita89",
      comment: "Me encanta la calidad de los productos y el envío fue muy rápido. Además, el servicio postventa es excelente. ¡Gracias por todo!",
      userProfileImage: "https://www.github.com/trekhleb.png"
    },
    {
      name: "Carlos Sánchez",
      username: "carlitos",
      comment: "¡Increíble experiencia de compra! Definitivamente volveré a comprar aquí. La variedad de productos es impresionante y el proceso de compra es muy sencillo.",
      userProfileImage: "https://www.github.com/juanwmedia.png"
    },
    {
      name: "Laura Rodríguez",
      username: "lauritarod",
      comment: "Los precios son muy competitivos y la entrega fue puntual. Además, el seguimiento del pedido fue muy claro y detallado. ¡Altamente recomendado!",
      userProfileImage: "https://www.github.com/midudev.png"
    }
  ];

}
