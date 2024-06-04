import { Component, Input } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { NgFor } from '@angular/common';

/**Models */
import { AlertModel } from '@core/models/Alert.model';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [AlertComponent, NgFor],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent {
  /**Inputs */
  @Input() alerts?: Array<AlertModel>;


  /**
   * The `refreshPage` function in TypeScript reloads the current window location.
   */
  refreshPage(): void {
    window.location.reload();
  }
}
