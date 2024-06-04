import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';

/**Components */
import { AlertComponent } from '@components/Home/alerts/alert/alert.component';

/**Services */
import { AuthService } from '@services/Auth/auth.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  /**FormGroups */
  formLogIn: FormGroup = new FormGroup({});

  /**Variables */
  alert?: AlertModel;

  /**Injects */
  private _router = inject(Router);
  private _authService = inject(AuthService);

  /**
   * The `ngOnInit` function initializes a form for user login with validation rules for username and
   * password length.
   */
  ngOnInit(): void {
    this.formLogIn = new FormGroup({
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
    });
  }

  /**
   * The `login` function checks if the login form is valid, attempts to log in using the provided
   * credentials, and navigates to the home page if successful.
   */
  async login() {
    if (this.formLogIn.valid) {
      const { user, password } = this.formLogIn.value;
      if (await this._authService.logIn(user, password)) {
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
}
