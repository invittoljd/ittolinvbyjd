import { Routes } from '@angular/router';
import { sessionGuard } from './guards/session/session.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@home/home.routes').then((r) => r.routes),
    canActivate: [sessionGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('@auth/auth.routes').then((r) => r.routes),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];
