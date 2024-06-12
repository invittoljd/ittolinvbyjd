import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Services */
import { WaitingModalService } from '@services/WaitingModal/waiting-modal.service';
import { RequestService } from '@services/Request/request.service';

/**Models */
import { RequestModel } from '@core/models/Request.model';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent {
  /**Variables */
  requests?: Array<RequestModel>;
  schedule: Array<{ time: string, requests: RequestModel[] }> = [];

  /**FormGroups */
  formDate: FormGroup = new FormGroup({});

  /**Injects */
  private _waitingModalService = inject(WaitingModalService);
  private _requestService = inject(RequestService);

  ngOnInit(): void {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10); // Formato 'yyyy-MM-dd'

    this.formDate = new FormGroup({
      date: new FormControl(formattedDate, [
        Validators.required
      ])
    });
  }

  async submit() {
    if (this.formDate.valid) {
      const { date } = this.formDate.value;
      this._waitingModalService.setIsWaiting(true);
      this.requests = await this._requestService.getRequestsToday(date);
      this.generateSchedule(this.requests, date);
      this._waitingModalService.setIsWaiting(false);
    }
  }

  generateSchedule(requests: RequestModel[], date: string): void {
    const schedule = [];
    const [year, month, day] = date.split('-').map(Number);
    const baseDate = new Date(year, month - 1, day); // Meses en JavaScript son 0-indexados

    for (let hour = 0; hour < 24; hour++) {
      const start = new Date(baseDate);
      start.setHours(hour, 0, 0, 0);

      const end = new Date(baseDate);
      end.setHours(hour + 1, 0, 0, 0);

      const hourlyRequests = requests.filter((request) => {
        if (request.datetimeStart && request.datetimeEnd) {
          return (new Date(request.datetimeStart).getTime() < end.getTime() &&
            new Date(request.datetimeEnd).getTime() > start.getTime());
        } else {
          return false;
        }
      });

      if (hourlyRequests.length > 0) {
        schedule.push({ time: `${hour}:00 - ${hour + 1}:00`, requests: hourlyRequests });
      }
    }

    this.schedule = schedule;
  }

}
