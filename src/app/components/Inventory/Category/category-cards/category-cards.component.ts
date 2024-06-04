import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

/**Models */
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Components */
import { CategoryCardComponent } from '@category/category-card/category-card.component';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [CategoryCardComponent, NgFor, NgIf],
  templateUrl: './category-cards.component.html',
  styleUrl: './category-cards.component.css'
})
export class CategoryCardsComponent {
  /**Outputs */
  @Output() categorySelectedEvent = new EventEmitter<CategoryItemModel>();

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categories?: Array<CategoryItemModel>;

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
   * The function `setCategorySelected` emits an event with the selected category item as a parameter.
   * @param {CategoryItemModel} categoryItem - The `categoryItem` parameter is an instance of the
   * `CategoryItemModel` class, which represents a specific category item selected by the user.
   */
  setCategorySelected(categoryItem: CategoryItemModel) {
    this.categorySelectedEvent.emit(categoryItem);
  }
}
