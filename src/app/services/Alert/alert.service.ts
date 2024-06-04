import { Injectable } from '@angular/core';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Array<AlertModel> = [
    // {
    //   type: AlertType.Danger,
    //   text: 'Hello, this is a test',
    //   keep: false
    // },
    // {
    //   type: AlertType.Warning,
    //   text: 'Hello, this is a test',
    //   keep: false
    // },
    // {
    //   type: AlertType.Dark,
    //   text: 'Hello, this is a test',
    //   keep: false
    // },
  ];

  getAlerts(): Array<AlertModel> {
    return this.alerts;
  }

  addAlert(alert: AlertModel): boolean {
    this.alerts.push(alert);
    return true;
  }
}
