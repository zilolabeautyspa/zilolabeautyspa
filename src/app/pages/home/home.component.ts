import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../core/services/booking.service';

interface ServiceCard { title: string; tag: string; description: string; image: string; route: string; }
interface Ritual { title: string; description: string; }
interface Review { quote: string; name: string; service: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly services: ServiceCard[] = [
    { title: 'Head Spa', tag: 'Signature', description: 'A deeply restorative scalp and hair ritual using herbal rinses, oils, masks and beauty traditions from around the world.', image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=88', route: '/services' },
    { title: 'Mani & Pedi', tag: 'For Everyone', description: 'Luxurious nail care for women, men and kids—from classic polish to gel, spa pedicures and nail art.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=88', route: '/services' },
    { title: 'Hair Services', tag: 'All Ages', description: 'Cuts, color, styling and treatments for all ages, including bridal hair and barber services.', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=88', route: '/services' },
    { title: 'Waxing & Facials', tag: 'Glow Up', description: 'Smooth, radiant skin with expert waxing, facials, microneedling and eyebrow threading.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=88', route: '/services' }
  ];
  readonly rituals: Ritual[] = [
    { title: 'Herbal Rinses', description: 'Botanical blends that cleanse and refresh' },
    { title: 'Deep Conditioning', description: 'Intensive moisture and repair from root to tip' },
    { title: 'Scalp Oils', description: 'Nourishing oils for scalp health and shine' },
    { title: 'Hair Masks', description: 'Restorative treatments for all hair types' },
    { title: 'Henna', description: 'Natural color and conditioning in one ritual' },
    { title: 'Japanese Ritual', description: 'Precision and serenity in every stroke' },
    { title: 'Korean Ritual', description: 'Glass-hair shine and scalp renewal' },
    { title: 'Thai Ritual', description: 'Ancient pressure-point scalp massage' }
  ];
  readonly reviews: Review[] = [
    { quote: 'The head spa treatment was absolutely transformative. I left feeling like a completely new person—my scalp has never felt so healthy.', name: 'Amira K.', service: 'Head Spa' },
    { quote: 'Zilola did my bridal hair and makeup and I could not have been happier. Every detail was perfect and I felt stunning all day long.', name: 'Sofia R.', service: 'Bridal Package' },
    { quote: 'I bring my whole family here. My kids love the mani and pedi, and I always leave with beautiful nails. Such a warm, welcoming place.', name: 'Layla M.', service: 'Mani & Pedi' }
  ];
  constructor(readonly booking: BookingService) {}
}
