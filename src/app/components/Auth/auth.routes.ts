import { Routes } from '@angular/router';

/**Components */
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

/**Guards */
import { sessionGuard } from '@guards/session/session.guard';

export const routes: Routes = [
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-in',
    canActivate: [sessionGuard],
    component: SignInComponent
  },
  {
    path: 'sign-out',
    component: SignOutComponent,
    canActivate: [sessionGuard],
  },
  {
    path: '**',
    redirectTo: 'log-in'
  }
];
