import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

/**Environment */
import { environment } from '@environment/environment';

/**Models */
import { RequestModel } from '@core/models/Request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  /**Variables */
  private apiUrl = `${environment.url}/api/requests`;

  /**Injects */
  private http = inject(HttpClient);

  async getRequests(type: String): Promise<Array<RequestModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/" + type).toPromise();
      if (response) {
        const { message, requests } = response;
        if (requests) {
          return requests;
        }
        this.showError('Error al obtener solicitudes(getRequests):', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud(getRequests):', error);
    }
    return [];
  }

  async getRequestsToday(date: String): Promise<Array<RequestModel>> {
    try {
      const response: any = await this.http.get(this.apiUrl + "/toDate/" + date).toPromise();
      if (response) {
        const { message, requests } = response;
        if (requests) {
          return requests;
        }
        this.showError('Error al obtener solicitudes:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return [];
  }

  async addRequest(request: RequestModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { request }).toPromise();
      if (response) {
        const { request: newRequest } = response;
        if (newRequest) {
          request._id = newRequest._id;
          return newRequest._id;
        }
        this.showError('Error al crear solicitud:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async addRequestAdmin(request: RequestModel, username2: string): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl + "/admin", { request, username2 }).toPromise();
      if (response) {
        const { request: newRequest } = response;
        if (newRequest) {
          request._id = newRequest;
          return newRequest._id;
        }
        this.showError('Error al crear solicitud:', response.message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async deleteRequest(requests: Array<RequestModel>, request_id: String): Promise<RequestModel | undefined> {
    try {
      const response: any = await this.http.delete(this.apiUrl + "/" + request_id).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          const index = requests.findIndex((request: RequestModel) => request._id === request_id);
          if (index !== -1) {
            return requests.splice(index, 1)[0];
          }
        }
        this.showError('Error al eliminar el área:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async updateRequest(request: RequestModel): Promise<boolean> {
    try {
      const response: any = await this.http.put(this.apiUrl + "/" + request._id, { request }).toPromise();
      if (response) {
        const { message, ok } = response;
        if (ok) {
          return true;
        }
        this.showError('Error al modificar solicitud:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return false;
  }

  async addMessage(request: RequestModel, message: String) {
    try {
      const response: any = await this.http.put(this.apiUrl + "/message/" + request._id, { message }).toPromise();
      if (response) {
        const { messageSaved, message } = response;
        if (messageSaved) {
          return messageSaved;
        }
        this.showError('Error al mandar mensaje:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async checkAvailability(request: RequestModel) {
    try {
      const response: any = await this.http.get(this.apiUrl + "/checkAvailability" + "/" + request._id).toPromise();
      if (response) {
        const { message, requests, ok } = response;
        if (ok) {
          return { ok };
        }
        if (requests) {
          return { requests };
        }
        this.showError('Error al revisar la disponibilidad:', message);
      }
    } catch (error) {
      this.showError('Error al realizar la solicitud:', error);
    }
    return {};
  }

  private showError(title: string, error: any) {
    console.log('Error en el archivo: request.service.ts');
    console.log(title, '\n\t', environment.showErrors ? error : '');
  }
}
