import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BridalComponent } from './pages/bridal/bridal.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Zilola Beauty Spa | Falls Church, Virginia' },
  { path: 'services', component: ServicesComponent, title: 'Services | Zilola Beauty Spa' },
  { path: 'bridal', component: BridalComponent, title: 'Bridal Beauty | Zilola Beauty Spa' },
  { path: 'about', component: AboutComponent, title: 'About Us | Zilola Beauty Spa' },
  { path: '**', redirectTo: '' }
];
