import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CardItemModel } from '@core/models/CardItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';

/**Components */
import { ItemCardComponent } from '../item-card/item-card.component';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-item-cards',
  standalone: true,
  imports: [ItemCardComponent, NgFor, NgIf],
  templateUrl: './item-cards.component.html',
  styleUrl: './item-cards.component.css'
})
export class ItemCardsComponent {
  /**Outputs */
  @Output() itemSelectedEvent = new EventEmitter<CardItemModel>();

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel;
  @Input() items?: Array<CardItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);

  /**
   * The isAdmin function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The function `setItemSelected` emits an event with the selected `CardItemModel` as a parameter.
   * @param {CardItemModel} item - The `item` parameter is an instance of the `CardItemModel` class,
   * which represents a card item in the application.
   */
  setItemSelected(item: CardItemModel) {
    this.itemSelectedEvent.emit(item);
  }
}
