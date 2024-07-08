import { Injectable, inject } from '@angular/core';

/**Models */
import { IconModel } from '@core/models/Icon.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { HttpClient } from '@angular/common/http';

/**Environment */
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**Variables */
  private apiUrl = `${environment.url}/api/categories`;

  /**Injects */
  private http = inject(HttpClient);

  async getCategory(_id: String): Promise<CategoryItemModel | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + _id).toPromise();
      if (response) {
        const { message, category } = response;
        if (category) {
          return category;
        }
        this.showError('Error al obtener la categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Delete Category
   * @param category_id String
   * @returns Promise<boolean> true if Category was deleted else false
   */
  async deleteCategory(categories: Array<CategoryItemModel>, category_id: String): Promise<boolean> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + category_id).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          const index = categories.findIndex((category: CategoryItemModel) => category._id === category_id);
          if (index !== -1) {
            categories.splice(index, 1);
          }
          return true;
        }
        this.showError('Error al eliminar la categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  /**
    * Add new area
    * @param category CategoryItemModel
    * @returns Promise<String> with new area's _id
    */
  async addCategory(area_id: String, categories: Array<CategoryItemModel>, category: CategoryItemModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { area_id, category }).toPromise();
      if (response) {
        const { category: newCategory } = response;
        if (newCategory) {
          categories.push(newCategory);
          return newCategory._id;
        }
        this.showError('Error al crear categoría:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }


  getIconsCategories(): Array<IconModel> {
    const iconsAreas: Array<IconModel> = [
      {
        src: 'assets/categories/inventory.svg',
      },
      {
        src: 'assets/categories/equipment.svg',
      },
      {
        src: 'assets/categories/acid.svg',
      },
      {
        src: 'assets/categories/base.svg',
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
  async editCategory(categoryEdited: CategoryItemModel): Promise<boolean> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + categoryEdited._id, { category: categoryEdited }).toPromise();
      if (response) {
        const { message, category } = response;
        if (category) {
          return true;
        }
        this.showError('Error al editar categoría:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  private showError(title: string, error: any) {
    console.log('Error en el archivo: category.service.ts');
    console.log(title, '\n\t', environment.showErrors ? error : '');
  }
}
