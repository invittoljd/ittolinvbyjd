import { Routes } from '@angular/router';

/**Components */
import { ItineraryComponent } from '@itinerary/itinerary/itinerary.component';

export const routes: Routes = [
  {
    path: '',
    component: ItineraryComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
