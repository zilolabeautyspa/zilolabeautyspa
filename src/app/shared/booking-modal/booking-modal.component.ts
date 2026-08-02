import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookingService } from '../../core/services/booking.service';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking-modal.component.html',
  styleUrl: './booking-modal.component.css'
})
export class BookingModalComponent {
  readonly submitted = signal(false);
  constructor(readonly booking: BookingService) {}

  submit(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
    form.resetForm();
  }

  close(): void {
    this.submitted.set(false);
    this.booking.close();
  }
}
