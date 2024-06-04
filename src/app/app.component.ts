import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**Services */
import { CookieService } from 'ngx-cookie-service';

/**Interceptors */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
