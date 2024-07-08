import { Injectable } from '@angular/core';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Array<AlertModel> = [];

  private timeToDestroy: number = 5;

  /**
   * Returns the list of current alerts.
   * @returns An array of AlertModel objects.
   */
  getAlerts(): Array<AlertModel> {
    return this.alerts;
  }

  /**
   * Adds a new alert to the list of alerts and starts the timer to destroy it after a specified time.
   * @param alert - The alert to be added.
   * @returns A boolean value indicating the alert was successfully added.
   */
  addAlert(alert: AlertModel): boolean {
    this.alerts.push(alert);
    this.startToDestroy(alert);
    return true;
  }


  /**
   * Starts a timer to destroy the alert after the specified time has elapsed.
   * @param alert - The alert to be destroyed.
   */
  private startToDestroy(alert: AlertModel): void {
    // Sets a timer that calls removeAlert after this.timeToDestroy milliseconds
    setTimeout(() => {
      this.removeAlert(alert);
    }, this.timeToDestroy);
  }

  /**
   * Removes an alert from the list of alerts.
   * @param alert - The alert to be removed.
   */
  private removeAlert(alert: AlertModel): void {
    const index = this.alerts.indexOf(alert);
    if (index > -1) {
      this.alerts.splice(index, 1);
    }
  }
}
