import { Component } from '@angular/core';
import { BookingService } from '../../core/services/booking.service';

@Component({ selector: 'app-about', standalone: true, templateUrl: './about.component.html', styleUrl: './about.component.css' })
export class AboutComponent {
  readonly values = [
    { icon: '✦', title: 'Beauty for Everyone', text: 'We welcome guests of all ages, backgrounds and beauty needs—women, men, kids and families.' },
    { icon: '◈', title: 'Rooted in Tradition', text: 'Our treatments draw from beauty rituals across the globe, honoring the wisdom of cultures near and far.' },
    { icon: '❋', title: 'Warmth & Care', text: 'Every guest is treated with genuine warmth and personal attention—because you deserve to feel truly seen.' },
    { icon: '◇', title: 'Excellence in Craft', text: 'Our team continuously trains and grows, bringing the highest level of skill and artistry to every appointment.' }
  ];
  constructor(readonly booking: BookingService) {}
}
