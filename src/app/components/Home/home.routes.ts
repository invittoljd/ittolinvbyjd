import { Routes } from '@angular/router';

/**Components */
import { HomeComponent } from '@home/home/home.component';

export const routes: Routes = [
    {
        path: 'requests',
        component: HomeComponent,
        loadChildren: () => import('@requests/request.routes').then(r => r.routes),
    },
    {
        path: 'itineraries',
        component: HomeComponent,
        loadChildren: () => import('@itinerary/itinerary.routes').then(r => r.routes),
    },
    {
        path: 'import',
        component: HomeComponent,
        loadChildren: () => import('@dataimport/dataimport.routes').then(r => r.routes),
    },
    {
        path: '',
        component: HomeComponent,
        loadChildren: () => import('@home/routes.routes').then(r => r.routes),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
