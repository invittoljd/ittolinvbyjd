import { NgClass, NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { IconModel } from '@core/models/Icon.model';
import { AreaItemModel } from '@core/models/AreaItem.model';
import { AlertModel, AlertType } from '@core/models/Alert.model';

/**Services */
import { AreaService } from '@services/Area/area.service';
import { AlertService } from '@services/Alert/alert.service';

@Component({
  selector: 'app-area-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './area-add.component.html',
  styleUrl: './area-add.component.css'
})
export class AreaAddComponent {
  /**FormGroups */
  formAreaAdd: FormGroup = new FormGroup({});

  /**Variables */
  iconSelected?: IconModel;
  iconsAreas?: Array<IconModel>;

  /**Inputs */
  @Input() areas?: Array<AreaItemModel>;

  /**Injects */
  private _areaService= inject(AreaService);
  private _alertService= inject(AlertService);

  /**
   * The function `ngOnInit` initializes a form group with form controls for title and information,
   * along with setting icons for areas.
   */
  ngOnInit(): void {
    this.formAreaAdd = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      information: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500),
      ]),
    });
    this.iconsAreas = this._areaService.getIconsAreas();
  }

  /**
   * The function `selectIcon` sets the `iconSelected` property to the provided `icon` parameter.
   * @param {IconModel} icon - The `icon` parameter in the `selectIcon` function is of type
   * `IconModel`, which means it expects an object of the `IconModel` class as an argument.
   */
  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  /**
   * The `areaAdd` function in TypeScript is an asynchronous function that adds a new area with
   * specified information and icon to a list of areas, displaying success or error alerts accordingly.
   */
  async areaAdd() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar Área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formAreaAdd.valid && this.iconSelected && this.areas) {
      const { title, information } = this.formAreaAdd.value;
      const area: AreaItemModel = {
        title, information, src: this.iconSelected.src, categories: []
      };
      const added = await this._areaService.addArea(this.areas, area);
      if (added) {
        this.formAreaAdd.reset();
        alert = {
          keep: false,
          text: "Área agregada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
