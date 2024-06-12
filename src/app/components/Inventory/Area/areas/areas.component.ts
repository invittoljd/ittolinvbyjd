import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';

/**Components */
import { AreaCardsComponent } from '@area/area-cards/area-cards.component';
import { AreaAddComponent } from '@area/area-add/area-add.component';
import { AreaEditComponent } from '@area/area-edit/area-edit.component';
import { AreaInformationComponent } from '@area/area-information/area-information.component';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { AreaService } from '@services/Area/area.service';
import { SessionService } from '@services/Session/session.service';
import { WaitingModalService } from '@services/WaitingModal/waiting-modal.service';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [AreaCardsComponent, AreaAddComponent, AreaEditComponent, AreaInformationComponent, NgIf],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent {
  /**Variables */
  areaSelected?: AreaItemModel;
  areas?: Array<AreaItemModel>;

  /**Injects */
  private _sessionService = inject(SessionService);
  private _areasService = inject(AreaService);
  private _waitingModalService = inject(WaitingModalService);

  /**
   * The isAdmin function checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }

  /**
   * The ngOnInit function in TypeScript initializes the areas property by asynchronously fetching
   * areas from a service.
   */
  async ngOnInit() {
    this._waitingModalService.setIsWaiting(true);
    this.areas = await this._areasService.getAreas();
    this._waitingModalService.setIsWaiting(false);
  }

  /**
   * The function setAreaSelected assigns the value of areaItem to the areaSelected property.
   * @param {AreaItemModel} areaItem - AreaItemModel - This parameter represents an object that
   * contains information about a selected area.
   */
  setAreaSelected(areaItem: AreaItemModel) {
    this.areaSelected = areaItem;
  }

}