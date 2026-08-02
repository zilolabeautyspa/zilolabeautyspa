import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookingService {
  readonly isOpen = signal(false);
  readonly requestedService = signal('');

  open(service = ''): void {
    this.requestedService.set(service);
    this.isOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    this.requestedService.set('');
    document.body.style.overflow = '';
  }
}
