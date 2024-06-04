import { Routes } from '@angular/router';

/**Components */
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

export const routes: Routes = [
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-out',
    component: SignOutComponent
  },
  {
    path: '**',
    redirectTo: 'log-in'
  }
];
