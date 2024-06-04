import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

/**Services */
import { SessionService } from '@services/Session/session.service';
import { AuthService } from '@services/Auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  /**Injects */
  private _sessionService = inject(SessionService);
  private _authService = inject(AuthService);

  /**
   * The `isAdmin` function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The `logOut` function in TypeScript logs out the user by calling the `logOut` method from the
   * `_authService`.
   */
  async logOut() {
    await this._authService.logOut();
  }
}
