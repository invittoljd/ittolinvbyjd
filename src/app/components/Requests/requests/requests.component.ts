import { Component, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@core/models/Request.model';

/**Components */
import { RequestCardsComponent } from '@requests/request-cards/request-cards.component';
import { ItemInformationComponent } from '@components/Inventory/Item/item-information/item-information.component';
import { RequestDeleteComponent } from '../request-delete/request-delete.component';
import { RequestWarningComponent } from '../request-warning/request-warning.component';

/**Services */
import { RequestService } from '@services/Request/request.service';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [RequestCardsComponent, RequestDeleteComponent, RequestWarningComponent, ItemInformationComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css'
})
export class RequestsComponent {
  /**Variables */
  requestSelected?: RequestModel;
  requests?: Array<RequestModel>;

  /**Injects */
  private _requestService = inject(RequestService);

  async ngOnInit() {
    this.requests = await this._requestService.getRequests();
  }

  setRequestSelected(request: RequestModel) {
    this.requestSelected = request;
  }
}
