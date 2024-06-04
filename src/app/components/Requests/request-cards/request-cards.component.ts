import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@core/models/Request.model';

/**Components */
import { RequestCardComponent } from '@requests/request-card/request-card.component';
import { RequestCardAdminComponent } from '@requests/request-card-admin/request-card-admin.component';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-request-cards',
  standalone: true,
  imports: [RequestCardComponent, RequestCardAdminComponent, NgFor, NgIf],
  templateUrl: './request-cards.component.html',
  styleUrl: './request-cards.component.css'
})
export class RequestCardsComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() requests?: Array<RequestModel>;

  /**Injects */
  private _sessionService = inject(SessionService);

  isAdmin() {
    return this._sessionService.isAdmin();
  }

  setRequestSelected(request: RequestModel) {
    this.requestSelectedEvent.emit(request);
  }

}
