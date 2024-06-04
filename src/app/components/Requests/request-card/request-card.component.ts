import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**Models */
import { RequestModel } from '@core/models/Request.model';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  /**Outputs */
  @Output() requestSelectedEvent = new EventEmitter<RequestModel>();

  /**Inputs */
  @Input() request?: RequestModel;

  setRequestSelected(request: RequestModel | undefined) {
    if (request) {
      this.requestSelectedEvent.emit(request);
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