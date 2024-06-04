import { Component, Input } from '@angular/core';

/**Models */
import { MessageItemModel } from '@core/models/MessageItem.model';

@Component({
  selector: 'app-request-message',
  standalone: true,
  imports: [],
  templateUrl: './request-message.component.html',
  styleUrl: './request-message.component.css'
})
export class RequestMessageComponent {
  /**Inputs */
  @Input() message?: MessageItemModel;
  @Input() accordionParent: String = "";
}
