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
        console.log('Error al obtener solicitudes:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
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
        console.log('Error al obtener solicitudes:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return [];
  }

  async addRequest(request: RequestModel): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl, { request }).toPromise();
      if (response) {
        const { request: newRequest } = response;
        if (newRequest) {
          return newRequest._id;
        }
        console.log('Error al crear solicitud:', response.message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async addRequestAdmin(request: RequestModel, username2: string): Promise<String | undefined> {
    try {
      const response: any = await this.http.post(this.apiUrl + "/admin", { request, username2 }).toPromise();
      if (response) {
        const { request: newRequest } = response;
        if (newRequest) {
          return newRequest._id;
        }
        console.log('Error al crear solicitud:', response.message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
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
        console.log('Error al eliminar el área:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
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
        console.log('Error al modificar solicitud:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
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
        console.log('Error al mandar mensaje:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    return undefined;
  }

  async checkAvailability(request: RequestModel) {
    try {
      const response: any = await this.http.get(this.apiUrl + "/checkAvailability" + "/" + request._id).toPromise();
      if (response) {
        const { message, requests, ok } = response;
        if (ok) {
          console.log("Disponible")
          return { ok };
        }
        if (requests) {
          console.log("Sobrepuestas")
          return { requests };
        }
        console.log('Error al revisar la disponibilidad:', message);
      }
    } catch (error) {
      console.log('Error al realizar la solicitud:', error);
    }
    console.log("Sin información")
    return {};
  }
}
