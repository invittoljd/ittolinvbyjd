import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Components */
import { RequestMessageComponent } from '../request-message/request-message.component';

/**Models */
import { RequestModel } from '@core/models/Request.model';

@Component({
  selector: 'app-request-messages',
  standalone: true,
  imports: [RequestMessageComponent, NgFor, NgIf],
  templateUrl: './request-messages.component.html',
  styleUrl: './request-messages.component.css'
})
export class RequestMessagesComponent {
  /**Inputs */
  @Input() requestSelected?: RequestModel;
}
