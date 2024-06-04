import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { CardItemModel } from '@core/models/CardItem.model';

/**Services */
import { AreaService } from '@services/Area/area.service';
import { CategoryService } from '@services/Category/category.service';
import { SessionService } from '@services/Session/session.service';

/**Components */
import { ItemCardsComponent } from '@item/item-cards/item-cards.component';
import { ItemAddComponent } from '@item/item-add/item-add.component';
import { ItemInformationComponent } from '@item/item-information/item-information.component';
import { ItemEditComponent } from '@item/item-edit/item-edit.component';
import { ItemPurchaseComponent } from '@item/item-purchase/item-purchase.component';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [ItemCardsComponent, ItemAddComponent, ItemEditComponent, ItemInformationComponent, ItemPurchaseComponent, NgIf],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  /**Variables */
  areaSelected?: AreaItemModel;
  categorySelected?: CategoryItemModel;
  itemSelected?: CardItemModel;

  items?: Array<CardItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);
  private _activatedRoute = inject(ActivatedRoute);
  private _areasService = inject(AreaService);
  private _categoriesService = inject(CategoryService);

  isAdmin() {
    return this._sessionService.isAdmin();
  }

  async ngOnInit() {
    this._activatedRoute.paramMap.subscribe(async (params) => {
      const area_id: String = '' + params.get('area_id');
      const category_id: String = '' + params.get('category_id');
      this.areaSelected = await this._areasService.getArea(area_id);
      if (this.areaSelected) {
        this.categorySelected = await this._categoriesService.getCategory(category_id);
        if (this.categorySelected) {
          this.items = this.categorySelected.items;
        }
      }
    });
  }

  setItemSelected(item: CardItemModel) {
    this.itemSelected = item;
  }
}
