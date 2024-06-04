import { Injectable, inject } from '@angular/core';

/**Models */
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { CardItemModel } from '@core/models/CardItem.model';
import { IconModel } from '@core/models/Icon.model';

/**Services */
import { RequestModel } from '@core/models/Request.model';
import { HttpClient } from '@angular/common/http';

/**Environment */
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  /**Variables */
  private apiUrl = `${environment.url}/api/itemRoutes`;

  /**Injects */
  private http = inject(HttpClient);

  /**
  * Add new item
  * @param category CategoryItemModel
  * @param item CardItemModel
  * @returns Promise<String> with new item's _id
  */
  async addItem(category: CategoryItemModel, item: CardItemModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { category_id: category._id, item }).toPromise();
      if (response) {
        const { item: newItem } = response;
        if (newItem) {
          category.items.push(newItem);
          return newItem._id;
        }
        console.log('Error al crear item:', response.message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  getIconsItems(): Array<IconModel> {
    const iconsAreas: Array<IconModel> = [
      {
        src: 'assets/categories/acid.svg',
      },
      {
        src: 'assets/categories/base.svg',
      },
      {
        src: 'assets/categories/gold.svg',
      },
      {
        src: 'assets/categories/ingot.svg',
      },
      {
        src: 'assets/categories/radioactive.svg',
      },
    ];
    return iconsAreas;
  }

  /**
   * Edit category
   * @param categoryEdited CategoryItemModel
   * @returns boolean, true if area edited else false
   */
  async editItem(itemEdited: CardItemModel): Promise<boolean> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + itemEdited._id, { item: itemEdited }).toPromise();
      if (response) {
        const { message, item } = response;
        if (item) {
          return true;
        }
        console.log('Error al editar item:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }


  async deleteItem(categorySelected: CategoryItemModel, item_id: String): Promise<boolean> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + item_id).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          const index = categorySelected.items.findIndex((item: CardItemModel) => item._id === item_id);
          if (index !== -1) {
            categorySelected.items.splice(index, 1);
          }
          return true;
        }
        console.log('Error al eliminar el item:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return false;
  }

  async addStockToItem(itemSelected: CardItemModel, quantity: number): Promise<boolean> {
    if (itemSelected._id && itemSelected.stock != undefined) {
      const response: any = await this.http.put(this.apiUrl + "/" + itemSelected._id + "/addStock", { quantity }).toPromise();
      if (response) {
        const { ok } = response;
        itemSelected.stock += quantity;
        return ok;
      }
    }
    return false;
  }

  async requestItem(itemSelected: CardItemModel, quantity: number, description: String, datetimeStart: Date, datetimeEnd: Date): Promise<RequestModel | undefined> {
    if (itemSelected.stock) {
      // const flag: boolean = await this.editItem(itemSelected);
      // if (flag) {
      const request: RequestModel = {
        date: new Date(Date.now()),
        item: itemSelected,
        status: false,
        description,
        quantity
      }
      if (datetimeStart && datetimeEnd) {
        request.datetimeStart = datetimeStart;
        request.datetimeEnd = datetimeEnd;
      }
      return request;
      // }
    }
    return undefined;
  }
}
