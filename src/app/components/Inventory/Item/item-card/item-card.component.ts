import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CardItemModel } from '@core/models/CardItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  /**Outputs */
  @Output() itemSelectedEvent = new EventEmitter<CardItemModel>();

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel
  @Input() item?: CardItemModel;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**
   * The function `isAdmin` checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The function `setItemSelected` emits an event with the selected item if it is not undefined.
   * @param {CardItemModel | undefined} item - The `item` parameter in the `setItemSelected` function
   * is of type `CardItemModel` or `undefined`.
   */
  setItemSelected(item: CardItemModel | undefined) {
    if (item) {
      this.itemSelectedEvent.emit(item);
    }
  }
}
