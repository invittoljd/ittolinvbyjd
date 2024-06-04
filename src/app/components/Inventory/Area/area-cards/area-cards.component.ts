import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Components */
import { AreaCardComponent } from '@area/area-card/area-card.component';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-area-cards',
  standalone: true,
  imports: [AreaCardComponent, NgFor, NgIf],
  templateUrl: './area-cards.component.html',
  styleUrl: './area-cards.component.css'
})
export class AreaCardsComponent {
  /**Outputs */
  @Output() areaSelectedEvent = new EventEmitter<AreaItemModel>();

  /**Inputs */
  @Input() areas?: Array<AreaItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**
   * The `isAdmin` function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The function `setAreaSelected` emits an event with the selected `AreaItemModel`.
   * @param {AreaItemModel} areaItem - The `areaItem` parameter is of type `AreaItemModel`, which
   * likely represents a model or object containing information about a selected area.
   */
  setAreaSelected(areaItem: AreaItemModel) {
    this.areaSelectedEvent.emit(areaItem);
  }
}
