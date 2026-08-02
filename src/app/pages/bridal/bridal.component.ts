import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookingService } from '../../core/services/booking.service';

interface Package { name: string; subtitle: string; price: string; featured?: boolean; items: string[]; }
interface ALaCarte { name: string; price: string; }
@Component({ selector: 'app-bridal', standalone: true, imports: [FormsModule], templateUrl: './bridal.component.html', styleUrl: './bridal.component.css' })
export class BridalComponent {
  readonly inquirySent = signal(false);
  readonly steps = [
    { number: '01', title: 'Consultation', text: 'We begin with a personal consultation to understand your vision, style and wedding-day timeline.' },
    { number: '02', title: 'Trial Session', text: 'Your trial appointment lets us perfect every detail—hair, makeup and nails—before the big day.' },
    { number: '03', title: 'Wedding Day', text: 'We arrive ready, calm and focused so you can relax and enjoy every moment of getting ready.' }
  ];
  readonly packages: Package[] = [
    { name: 'The Bride', subtitle: 'Complete bridal beauty for the big day', price: 'From $350', featured: true, items: ['Bridal hair styling (trial + day-of)', 'Bridal makeup (trial + day-of)', 'Gel manicure & spa pedicure', 'Pre-wedding facial', 'Personal consultation'] },
    { name: 'The Bridal Party', subtitle: 'Coordinated beauty for your whole crew', price: 'From $120/person', items: ['Hair styling (updo or blowout)', 'Makeup application', 'Classic manicure', 'Group coordination & scheduling'] },
    { name: 'The Mother', subtitle: 'Elegant beauty for the mother of the bride or groom', price: 'From $180', items: ['Hair styling & blowout', 'Makeup application', 'Gel manicure', 'Eyebrow threading & tinting'] }
  ];
  readonly aLaCarte: ALaCarte[] = [
    { name: 'Bridal Hair Trial', price: 'From $120' }, { name: 'Bridal Hair Day-Of', price: 'From $150' }, { name: 'Bridal Makeup Trial', price: 'From $100' }, { name: 'Bridal Makeup Day-Of', price: 'From $130' }, { name: 'Bridal Updo', price: 'From $140' }, { name: 'Bridal Mani & Pedi', price: 'From $90' }, { name: 'Pre-Wedding Facial', price: 'From $95' }, { name: 'Head Spa Ritual', price: 'From $110' }
  ];
  constructor(readonly booking: BookingService) {}
  submitInquiry(form: NgForm): void { if (form.invalid) { form.control.markAllAsTouched(); return; } this.inquirySent.set(true); form.resetForm(); }
}
