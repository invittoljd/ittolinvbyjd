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
import { WaitingModalService } from '@services/WaitingModal/waiting-modal.service';

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
  filteredRequests?: Array<RequestModel>;
  searchTerm: string = '';

  /**Injects */
  private _requestService = inject(RequestService);
  private _waitingModalService = inject(WaitingModalService);

  async ngOnInit() {
    this._waitingModalService.setIsWaiting(true);
    /**all, pending, approved */
    this.requests = await this._requestService.getRequests("pending");
    this.applySearchTerm();
    this._waitingModalService.setIsWaiting(false);
  }

  setRequestSelected(request: RequestModel) {
    this.requestSelected = request;
  }

  async filterRequests(event: any) {
    this._waitingModalService.setIsWaiting(true);
    const filterValue = event.target.value;
    /**all, pending, approved */
    this.requests = await this._requestService.getRequests(filterValue);
    this.applySearchTerm();
    this._waitingModalService.setIsWaiting(false);
  }

  searchRequests(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.applySearchTerm();
  }

  applySearchTerm() {
    if (this.searchTerm && this.requests) {
      const searchTermLower = this.searchTerm.toLowerCase();
      this.filteredRequests = this.requests.filter(request =>
        request._id?.toLowerCase().includes(searchTermLower) ||
        request.username?.toLowerCase().includes(searchTermLower)
      );
    } else {
      this.filteredRequests = this.requests;
    }
  }

}
