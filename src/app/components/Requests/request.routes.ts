import { Routes } from '@angular/router';

/**Components */
import { RequestsComponent } from '@requests/requests/requests.component';

export const routes: Routes = [
  {
    path: '',
    component: RequestsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
