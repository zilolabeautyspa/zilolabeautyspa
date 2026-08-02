import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingModalComponent } from './shared/booking-modal/booking-modal.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BookingModalComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-booking-modal />
  `
})
export class AppComponent {}
