import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**Models */
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { AreaService } from '@services/Area/area.service';
import { SessionService } from '@services/Session/session.service';

/**Components */
import { CategoryCardsComponent } from '@category/category-cards/category-cards.component';
import { CategoryAddComponent } from '@category/category-add/category-add.component';
import { CategoryInformationComponent } from '@category/category-information/category-information.component';
import { CategoryEditComponent } from '../category-edit/category-edit.component';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CategoryCardsComponent, CategoryAddComponent, CategoryEditComponent, CategoryInformationComponent, NgIf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  /**Variables */
  areaSelected?: AreaItemModel;
  categorySelected?: CategoryItemModel;
  categories?: Array<CategoryItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);
  private _activatedRoute = inject(ActivatedRoute);
  private _areasService = inject(AreaService);

  /**
   * The `isAdmin` function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * This function subscribes to route parameters and retrieves area information asynchronously.
   */
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(async (params) => {
      const _id: String = '' + params.get('area_id');
      this.areaSelected = await this._areasService.getArea(_id);
      this.categories = this.areaSelected?.categories;
    });
  }

  /**
   * The function `setCategorySelected` assigns a `CategoryItemModel` object to the `categorySelected`
   * property.
   * @param {CategoryItemModel} categoryItem - CategoryItemModel - This parameter represents an object
   * that contains information about a selected category.
   */
  setCategorySelected(categoryItem: CategoryItemModel) {
    this.categorySelected = categoryItem;
  }
}
