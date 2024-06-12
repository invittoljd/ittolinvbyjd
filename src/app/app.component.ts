import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**Components */
import { WaitingModalComponent } from '@components/Home/utilities/waiting-modal/waiting-modal.component';

/**Services */
import { CookieService } from 'ngx-cookie-service';

/**Interceptors */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WaitingModalComponent],
  providers: [
    CookieService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /**Variables */
  title = 'ittolinvbyjd';
}
