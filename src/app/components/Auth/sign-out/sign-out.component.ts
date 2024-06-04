import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';

/**Models */
import { UserModel } from '@core/models/User.model';

/**Services */
import { AuthService } from '@services/Auth/auth.service';

/**Cards */
import { SignOutCardComponent } from '../sign-out-card/sign-out-card.component';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [SignOutCardComponent, NgFor],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.css'
})
export class SignOutComponent {
  /**Variables */
  users?: Array<UserModel>;

  /**Injects */
  private _authService = inject(AuthService)

  /**
   * The `ngOnInit` function in TypeScript initializes the component by fetching users data
   * asynchronously using the `_authService`.
   */
  async ngOnInit() {
    this.users = await this._authService.getUsers();
  }

}
