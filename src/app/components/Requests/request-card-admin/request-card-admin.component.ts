import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { RequestModel } from '@core/models/Request.model';

/**Services */
import { RequestService } from '@services/Request/request.service';
import { WaitingModalService } from '@services/WaitingModal/waiting-modal.service';

@Component({
  selector: 'app-request-card-admin',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './request-card-admin.component.html',
  styleUrl: './request-card-admin.component.css'
})
export class RequestCardAdminComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() request?: RequestModel;

  /**Variables */
  overlappingRequests?: Array<RequestModel>;
  status?: String;

  /**Injects */
  private _requestService = inject(RequestService);
  private _waitingModalService = inject(WaitingModalService);

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

  async checkAvailability() {
    this._waitingModalService.setIsWaiting(true);
    if (this.request) {
      const { ok, requests } = await this._requestService.checkAvailability(this.request);
      if (ok) {
        this.status = "Equipo Disponible";
      } else if (requests) {
        this.status = "Equipo Ocupado";
        this.overlappingRequests = requests;
      }else{
        this.status = "Error al revisar, favor de verificar";
      }
    }
    this._waitingModalService.setIsWaiting(false);
  }
}
