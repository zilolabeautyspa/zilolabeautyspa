import { Component } from '@angular/core';
import { BookingService } from '../../core/services/booking.service';

interface Service { title: string; tag: string; description: string; image: string; items: string[]; }
@Component({ selector: 'app-services', standalone: true, templateUrl: './services.component.html', styleUrl: './services.component.css' })
export class ServicesComponent {
  readonly services: Service[] = [
    { title: 'Head Spa', tag: 'Signature', description: 'Restorative scalp and hair rituals inspired by beauty traditions from around the world.', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1300&q=88', items: ['Herbal rinses', 'Deep conditioning', 'Scalp oils', 'Hair masks', 'Japanese ritual', 'Korean ritual'] },
    { title: 'Mani & Pedi', tag: 'For Everyone', description: 'Polished, comfortable nail care for women, men and children.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1300&q=88', items: ['Classic manicure', 'Gel manicure', 'Spa pedicure', 'Nail art', 'Kids mani & pedi'] },
    { title: 'Hair Services', tag: 'All Ages', description: 'Cuts, color, styling and nourishing treatments for every age and hair type.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1300&q=88', items: ['Haircuts', 'Color', 'Blowouts', 'Treatments', 'Barbering', 'Bridal styling'] },
    { title: 'Waxing & Facials', tag: 'Glow Up', description: 'Thoughtful skin and brow services for a smooth, healthy-looking glow.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1300&q=88', items: ['Custom facials', 'Waxing', 'Microneedling', 'Eyebrow threading', 'Brow tinting'] },
    { title: 'Makeup', tag: 'Day & Night', description: 'Personalized artistry for natural daytime beauty, special events and full glam.', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1300&q=88', items: ['Natural makeup', 'Evening makeup', 'Event makeup', 'Bridal makeup', 'Lashes'] },
    { title: 'Kids Spa', tag: 'For Kids', description: 'A fun, safe and welcoming mini-spa experience for little guests.', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1300&q=88', items: ['Mini manicure', 'Mini pedicure', 'Gentle polish', 'Birthday pampering'] }
  ];
  constructor(readonly booking: BookingService) {}
}
