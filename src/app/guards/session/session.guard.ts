import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**Environment */
import { environment } from '@environment/environment';
import { AuthService } from '@services/Auth/auth.service';

/**Services */
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = async (route, state) => {
  /**Injects */
  const cookieService = inject(CookieService);
  const router = inject(Router);

  /**Variables */
  const token = cookieService.get(environment.tokenName);

  if (token) {
    const _authService = inject(AuthService);
    const response = await _authService.getUserInfo();
    const { type } = response;
    if (type) {
      if (type == 1) {
        return true;
      }
    }
  }
  cookieService.deleteAll();
  router.navigate(['/', 'auth']);
  return false;
};