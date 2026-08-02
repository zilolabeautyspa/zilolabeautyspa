import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Service {
  icon: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

interface Plan {
  name: string;
  price: string;
  featured?: boolean;
  features: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly menuOpen = signal(false);
  readonly bookingOpen = signal(false);
  readonly submitted = signal(false);
  readonly currentYear = new Date().getFullYear();

  readonly services: Service[] = [
    { icon: '◌', title: 'Hydrotherapy', description: 'Warm water rituals that release tension and restore quiet balance.', duration: '60 min', price: '$145' },
    { icon: '✦', title: 'Deep Tissue Massage', description: 'Targeted therapeutic pressure personalized to your body’s needs.', duration: '75 min', price: '$185' },
    { icon: '❋', title: 'Reflexology', description: 'A grounding foot ritual designed to encourage whole-body renewal.', duration: '50 min', price: '$125' }
  ];

  readonly plans: Plan[] = [
    { name: 'Serenity', price: '$149', features: ['One 60-minute treatment', 'Herbal tea ritual', 'Sauna access', 'Weekday booking'] },
    { name: 'Luméra Signature', price: '$249', featured: true, features: ['90-minute signature ritual', 'Luxury facial enhancement', 'Private relaxation suite', 'Priority booking'] },
    { name: 'Wellness Day', price: '$395', features: ['Three-hour spa journey', 'Seasonal lunch', 'Hydrotherapy circuit', 'Take-home wellness gift'] }
  ];

  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openBooking(): void {
    this.bookingOpen.set(true);
    this.submitted.set(false);
    document.body.style.overflow = 'hidden';
  }

  closeBooking(): void {
    this.bookingOpen.set(false);
    document.body.style.overflow = '';
  }

  submitBooking(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    form.resetForm();
  }
}
