import { Injectable } from '@angular/core';

/**Models */
import { UserModel } from '@core/models/User.model';

/**Environment */
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  /**Variables */
  private user?: UserModel;

  setUser(user: UserModel) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  isAdmin() {
    return this.getUser()?.type == environment.typeAdmin;
  }
}
