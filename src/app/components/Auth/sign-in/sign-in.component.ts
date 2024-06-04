import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';

/**Services */
import { AuthService } from '@services/Auth/auth.service';
import { AlertService } from '@services/Alert/alert.service';

/**Components */
import { AlertComponent } from '@components/Home/alerts/alert/alert.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  /**FormGroups */
  formSignIn: FormGroup = new FormGroup({});

  /**Variables */
  alert?: AlertModel;

  /**Injects */
  private _router = inject(Router);
  private _authService = inject(AuthService);
  private _alertService = inject(AlertService);

  /**
   * The function `ngOnInit` initializes a form with validation rules for user, password, and type
   * fields in a TypeScript component.
   */
  ngOnInit(): void {
    this.formSignIn = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      type: new FormControl(2, [
        Validators.required,
        Validators.min(1),
        Validators.max(2),
      ]),
    });
  }

  /**
   * The `signIn` function in TypeScript checks if the form is valid, signs in the user using
   * authentication service, and displays success or error alerts accordingly.
   */
  async signIn() {
    if (this.formSignIn.valid) {
      const { user, password, type } = this.formSignIn.value;
      if (await this._authService.signIn(user, password, type)) {
        this.alert = {
          type: AlertType.Success,
          text: 'Usuario creado con éxito',
          keep: false
        }
        this._alertService.addAlert(this.alert);
        this._router.navigate(['/', 'home'])
      } else {
        this.alert = {
          type: AlertType.Danger,
          text: 'Favor de verificar los datos',
          keep: true
        }
      }
    }
  }

  /**
   * The `signOut` function in TypeScript navigates to the 'auth/sign-out' route using the Angular
   * router.
   */
  singOut() {
    this._router.navigate(['/', 'auth', 'sign-out'])
  }
}
