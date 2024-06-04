import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@core/models/Request.model';

/**Services */
import { RequestService } from '@services/Request/request.service';

@Component({
  selector: 'app-request-card-admin',
  standalone: true,
  imports: [NgIf],
  templateUrl: './request-card-admin.component.html',
  styleUrl: './request-card-admin.component.css'
})
export class RequestCardAdminComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() request?: RequestModel;

  /**Injects */
  private _requestService = inject(RequestService);

  setRequestSelected(request: RequestModel | undefined) {
    if (request) {
      this.requestSelectedEvent.emit(request);
    }
  }

  async setStatus(status: boolean, request: RequestModel | undefined) {
    if (request) {

      const updated: boolean = await this._requestService.updateRequest({ ...request, status });
      if (updated) {
        request.status = status;
      }
    }
  }

  getDate() {
    if (this.request) {
      const { date } = this.request;
      if (date) {
        return new Date(date).toDateString();
      }
    }
    return 'Sin información';
  }
  getDateStart(): string {
    if (this.request) {
      const { datetimeStart } = this.request;
      if (datetimeStart) {
        const date = new Date(datetimeStart);
        // Puedes ajustar las opciones de formato según tus necesidades
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        });
      }
    }
    return 'Sin información';
  }

  getDateEnd(): string {
    if (this.request) {
      const { datetimeEnd } = this.request;
      if (datetimeEnd) {
        const date = new Date(datetimeEnd);
        // Puedes ajustar las opciones de formato según tus necesidades
        return date.toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        });
      }
    }
    return 'Sin información';
  }
}
