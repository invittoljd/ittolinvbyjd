import { Component, Input, inject } from '@angular/core';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';
import { RequestModel } from '@core/models/Request.model';

/**Services */
import { AlertService } from '@services/Alert/alert.service';
import { RequestService } from '@services/Request/request.service';

@Component({
  selector: 'app-request-delete',
  standalone: true,
  imports: [],
  templateUrl: './request-delete.component.html',
  styleUrl: './request-delete.component.css'
})
export class RequestDeleteComponent {
  /**Inputs */
  @Input() requests?: Array<RequestModel>;
  @Input() requestSelected?: RequestModel;

  /**Injects */
  private _requestService=inject(RequestService);
  private _alertService=inject(AlertService);

  async deleteRequest() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Solicitud, favor de revisar",
      type: AlertType.Danger
    };
    if (this.requests && this.requestSelected?._id) {
      const deleted = await this._requestService.deleteRequest(this.requests, this.requestSelected._id);
      if (deleted) {
        alert = {
          keep: false,
          text: "Solicitud eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
