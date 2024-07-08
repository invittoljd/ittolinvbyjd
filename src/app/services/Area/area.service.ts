import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';
import { IconModel } from '@core/models/Icon.model';

/**Environment */
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  /**Variables */
  private apiUrl = `${environment.url}/api/areas`;

  /**Injects */
  private http = inject(HttpClient);

  getIconsAreas(): Array<IconModel> {
    const iconsAreas: Array<IconModel> = [
      { src: 'assets/areas/analytics.svg' },
      { src: 'assets/areas/atomic.svg' },
      { src: 'assets/areas/biology.svg' },
      { src: 'assets/areas/chemical.svg' },
      { src: 'assets/areas/computer.svg' },
      { src: 'assets/areas/education.svg' },
      { src: 'assets/areas/health.svg' },
      { src: 'assets/areas/industrial.svg' },
      { src: 'assets/areas/laboratory.svg' },
      { src: 'assets/areas/math.svg' },
      { src: 'assets/areas/physic.svg' },
      { src: 'assets/areas/physicochemical.svg' }
    ];
    return iconsAreas;
  }

  /**
 * Get All Areas
 * @returns Array<AreaItemModel>
 */
  async getAreas(): Promise<Array<AreaItemModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl).toPromise();
      if (response) {
        const { message, areas } = response;
        if (areas) {
          return areas;
        }
        this.showError('Error al obtener áreas: ', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }


  /**
   * Get Area by id
   * @param _id String, Area's id
   * @returns Area with this id
   */
  async getArea(_id: String): Promise<AreaItemModel | undefined> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + _id).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          return area;
        }
        this.showError('Error al obtener área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }
  /**
   * Delete Area
   * @param area_id String
   * @returns Promise<boolean> true if Area was deleted else false
   */
  async deleteArea(areas: Array<AreaItemModel>, area_id: String): Promise<boolean> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + area_id).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          const index = areas.findIndex((area: AreaItemModel) => area._id === area_id);
          if (index !== -1) {
            areas.splice(index, 1);
          }
          return true;
        }
        this.showError('Error al eliminar el área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  /**
  * Add new area
  * @param area AreaItemModel
  * @returns Promise<String> with new area's _id
  */
  async addArea(areas: Array<AreaItemModel>, area: AreaItemModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { area }).toPromise();
      if (response) {
        const { area: newArea } = response;
        if (newArea) {
          areas.push(newArea);
          return newArea._id;
        }
        this.showError('Error al crear área:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  /**
   * Edit area
   * @param areaEdited AreaItemModel
   * @returns boolean, true if area edited else false
   */
  async editArea(areaEdited: AreaItemModel): Promise<boolean> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + areaEdited._id, { area: areaEdited }).toPromise();
      if (response) {
        const { message, area } = response;
        if (area) {
          return true;
        }
        this.showError('Error al editar área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  private showError(title: string, error: any) {
    console.log('Error en el archivo: area.service.ts');
    console.log(title, '\n\t', environment.showErrors ? error : '');
  }

}
