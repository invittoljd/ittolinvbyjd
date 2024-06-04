import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-area-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './area-card.component.html',
  styleUrl: './area-card.component.css'
})
export class AreaCardComponent {
  /**Outputs */
  @Output() areaSelectedEvent = new EventEmitter<AreaItemModel>();

  /**Inputs */
  @Input() areaItem?: AreaItemModel;

  /**Variables */
  link = ['/', 'home', 'categories'];

  /**Injects */
  private _sessionService = inject(SessionService);
  private _router = inject(Router);

  /**
   * The `isAdmin` function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The function `setAreaSelected` emits an event with the selected `AreaItemModel` if it is defined.
   * @param {AreaItemModel | undefined} areaItem - The `areaItem` parameter in the `setAreaSelected`
   * function is of type `AreaItemModel` or `undefined`. This means that you can pass an object of type
   * `AreaItemModel` or `undefined` as an argument to this function. If `areaItem` is not `
   */
  setAreaSelected(areaItem: AreaItemModel | undefined) {
    if (areaItem) {
      this.areaSelectedEvent.emit(areaItem);
    }
  }

  /**
   * The navigate function checks if an area item exists and navigates to a specific route with the area
   * item's ID.
   */
  navigate() {
    if (this.areaItem) {
      this._router.navigate([...this.link, this.areaItem._id]);
    }
  }
}
