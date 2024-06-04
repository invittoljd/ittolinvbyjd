import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**Components */
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AlertsComponent } from '../alerts/alerts.component';

/**Services */
import { AlertService } from '@services/Alert/alert.service';
import { AuthService } from '@services/Auth/auth.service';
import { SessionService } from '@services/Session/session.service';

/**Models */
import { AlertModel } from '@core/models/Alert.model';
import { UserModel } from '@core/models/User.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, AlertsComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  /**Variables */
  alerts?: Array<AlertModel>;

  /**Injects */
  private _authService = inject(AuthService);
  private _sessionService = inject(SessionService);
  private _alertService = inject(AlertService);

  /**
   * The `ngOnInit` function asynchronously retrieves alerts and user information, then sets the user
   * in the session service.
   */
  async ngOnInit() {
    this.alerts = await this._alertService.getAlerts();
    const user: UserModel = await this._authService.getUserInfo();
    this._sessionService.setUser(user);
  }
}
