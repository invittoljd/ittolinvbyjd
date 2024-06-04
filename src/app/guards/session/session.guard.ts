import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**Environment */
import { environment } from '@environment/environment';

/**Services */
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  /**Injects */
  const cookieService = inject(CookieService);
  const router = inject(Router);

  /**Variables */
  const token = cookieService.get(environment.tokenName);

  if (!token) {
    cookieService.deleteAll();
    router.navigate(['']);
    return false;
  }
  return true;
};