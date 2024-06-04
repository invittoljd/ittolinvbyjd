import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

/**Models */
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css'
})
export class CategoryCardComponent {
  /**Outputs */
  @Output() categorySelectedEvent = new EventEmitter<CategoryItemModel>();

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categoryItem?: CategoryItemModel;

  /**Variables */
  link = ['/', 'home', 'items'];

  /**Injects */
  private _sessionService = inject(SessionService);
  private _router = inject(Router);

  /**
   * The isAdmin function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The function `setCategorySelected` emits a category item through an event if the category item is
   * defined.
   * @param {CategoryItemModel | undefined} categoryItem - The `categoryItem` parameter in the
   * `setCategorySelected` function is of type `CategoryItemModel` or `undefined`.
   */
  setCategorySelected(categoryItem: CategoryItemModel | undefined) {
    if (categoryItem) {
      this.categorySelectedEvent.emit(categoryItem);
    }
  }

  /**
   * The `navigate` function checks if an area and category item are selected, then navigates to a
   * specific route using the selected IDs.
   */
  navigate() {
    if (this.areaSelected && this.categoryItem) {
      this._router.navigate([...this.link, this.areaSelected._id, this.categoryItem._id]);
    }
  }
}
