import { Component, Input, inject } from '@angular/core';

/**Models */
import { UserModel } from '@core/models/User.model';

/**Services */
import { AuthService } from '@services/Auth/auth.service';

@Component({
  selector: 'app-sign-out-card',
  standalone: true,
  imports: [],
  templateUrl: './sign-out-card.component.html',
  styleUrl: './sign-out-card.component.css'
})
export class SignOutCardComponent {
  /**Variables */
  deleteAll: boolean = true;

  /**Inputs */
  @Input() users?: Array<UserModel>;
  @Input() user?: UserModel;

  /**Injects */
  private _authService = inject(AuthService);

  /**
   * The `changeDeleteAll` function toggles the value of the `deleteAll` property.
   */
  changeDeleteAll() {
    this.deleteAll = !this.deleteAll;
  }

  /**
   * The function `deleteUser` asynchronously deletes a user selected from a list of users using an
   * authentication service.
   * @param {UserModel | undefined} userSelected - The `userSelected` parameter is of type `UserModel |
   * undefined`, which means it can either be an object of type `UserModel` or `undefined`. This
   * parameter represents the user that has been selected for deletion.
   */
  async deleteUser(userSelected: UserModel | undefined) {
    if (this.users && userSelected) {
      const deleted: boolean = await this._authService.deleteUser(this.users, userSelected, this.deleteAll);
    }
  }
}
