import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitingModalService {
  private isWaiting: boolean = false;

  setIsWaiting(value: boolean) {
    this.isWaiting = value;
  }

  getIsWaiting() {
    return this.isWaiting;
  }
}
