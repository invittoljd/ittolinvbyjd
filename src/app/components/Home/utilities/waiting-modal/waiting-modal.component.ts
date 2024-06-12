import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';

/**Services */
import { WaitingModalService } from '@services/WaitingModal/waiting-modal.service';

@Component({
  selector: 'app-waiting-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './waiting-modal.component.html',
  styleUrl: './waiting-modal.component.css'
})
export class WaitingModalComponent {
  private _waitingModalService = inject(WaitingModalService);
  
  getIsWaiting() {
    return this._waitingModalService.getIsWaiting();
  }
}
