import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertModel, AlertType } from '@core/models/Alert.model';

/**Models */
import { RequestModel } from '@core/models/Request.model';

/**Components */
import { RequestWarningMessagesComponent } from '@requests/request-warning-messages/request-warning-messages.component';
import { AlertService } from '@services/Alert/alert.service';

/**Services */
import { RequestService } from '@services/Request/request.service';

@Component({
  selector: 'app-request-warning',
  standalone: true,
  imports: [RequestWarningMessagesComponent, ReactiveFormsModule],
  templateUrl: './request-warning.component.html',
  styleUrl: './request-warning.component.css'
})
export class RequestWarningComponent {
  /**Inputs */
  @Input() requestSelected?: RequestModel;

  /**FormGroups */
  formMessageNew: FormGroup = new FormGroup({});

  /**Injects */
  private _requestService = inject(RequestService);
  private _alertService = inject(AlertService);

  ngOnInit(): void {
    this.formMessageNew = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ])
    });
  }

  async sendMessage() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al enviar mensaje, favor de revisar",
      type: AlertType.Danger
    };
    if (this.requestSelected && this.formMessageNew.valid) {
      const { message } = this.formMessageNew.value;
      const sended = await this._requestService.addMessage(this.requestSelected, message);
      if (sended) {
        this.formMessageNew.reset();
        this.requestSelected.messages?.push(sended)
        alert = {
          keep: false,
          text: "Mensaje enviado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
