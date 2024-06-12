import { Routes } from '@angular/router';

/**Components */
import { ImportComponent } from '@dataimport/import/import.component';

export const routes: Routes = [
  {
    path: '',
    component: ImportComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
