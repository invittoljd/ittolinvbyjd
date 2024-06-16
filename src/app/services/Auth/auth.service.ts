import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@core/models/User.model';

/**Environment */
import { environment } from '@environment/environment';

/**Cookie Service */
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**Variables */
  private apiUrl = `${environment.url}/api/auth`;

  /**Injects */
  private http = inject(HttpClient);
  private _cookieService = inject(CookieService);
  private _router = inject(Router);

  async signIn(username: String, password: String, type: number) {
    try {
      const response: any = await this.http.post(this.apiUrl + "/register", { username, password, type }).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          return true;
        }
        console.log('Error al hacer el login:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }

  async logIn(username: String, password: String) {
    try {
      console.log(this.apiUrl + "/login")
      console.log({ username, password, keep: false })
      const response: any = await this.http.post(this.apiUrl + "/login", { username, password, keep: false }).toPromise();
      if (response) {
        const { message, token } = response;
        if (token) {
          this._cookieService.set(environment.tokenName, token, undefined, '/')
          return true;
        }
        console.log('Error al hacer el login:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }

  async getUserInfo() {
    const token = this._cookieService.get(environment.tokenName);
    if (token) {
      const response: any = await this.http.get(this.apiUrl + "/getUserInfo").toPromise();
      const { type, username } = response;
      const user: UserModel = { type, username };
      if (response) {
        return user;
      }
    }
    return {};
  }

  async logOut() {
    this._cookieService.deleteAll();
    this._router.navigate(['']);
  }

  async getUsers() {
    try {
      const response: any = await this.http.get(this.apiUrl + "/getUsers").toPromise();
      if (response) {
        const { users } = response;
        return users;
      }
    } catch (error) {

    }
    return [];
  }

  async deleteUser(users: Array<UserModel>, userSelected: UserModel, deleteAll: boolean) {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + userSelected._id, {
        body: { deleteAll }
      }).toPromise();
      if (response) {
        const index = users.findIndex((user: UserModel) => user._id === userSelected._id);
        if (index !== -1) {
          users.splice(index, 1);
        }
        return true;
      }
    } catch (error) { }
    return false;
  }
}
