import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { IconModel } from '@core/models/Icon.model';
import { AlertModel, AlertType } from '@core/models/Alert.model';
import { AreaItemModel } from '@core/models/AreaItem.model';

/**Services */
import { AreaService } from '@services/Area/area.service';
import { AlertService } from '@services/Alert/alert.service';

@Component({
  selector: 'app-area-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './area-edit.component.html',
  styleUrl: './area-edit.component.css'
})
export class AreaEditComponent {
  /**FormGroups */
  formAreaEdit: FormGroup = new FormGroup({});

  /**Variables */
  editIcon: Boolean = false;
  iconSelected?: IconModel;
  iconsAreas?: Array<IconModel>;

  /**Inputs */
  @Input() areas?: Array<AreaItemModel>;
  @Input() areaSelected?: AreaItemModel;

  /**Injects */
  private _areaService = inject(AreaService);
  private _alertService = inject(AlertService);

  /**
   * The ngOnInit function initializes a form group with form controls for title and information fields,
   * along with setting iconsAreas using data from a service.
   */
  ngOnInit(): void {
    this.formAreaEdit = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20),
      ]),
      information: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(255),
      ]),
    });

    this.iconsAreas = this._areaService.getIconsAreas();
  }

  /**
   * The function `changeEditIcon` toggles the value of the `editIcon` property.
   */
  changeEditIcon(): void {
    this.editIcon = !this.editIcon;
  }

  /**
   * The function `selectIcon` in TypeScript selects an icon from an `IconModel` object.
   * @param {IconModel} icon - The `selectIcon` function takes an `IconModel` object as a parameter
   * named `icon`. This parameter represents the icon that will be selected and stored in the
   * `iconSelected` property of the class or component where this function is defined.
   */
  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  /**
   * The function `areaEdit` is an asynchronous function that edits an area with the provided
   * information and displays an alert message based on the success or failure of the edit operation.
   */
  async areaEdit() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar Área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.areaSelected) {
      const { title, information } = this.formAreaEdit.value;
      if (title) {
        this.areaSelected.title = title;
      }
      if (information) {
        this.areaSelected.information = information;
      }
      if (this.editIcon && this.iconSelected) {
        this.areaSelected.src = this.iconSelected.src;
      }
      const edited: boolean = await this._areaService.editArea(this.areaSelected);
      if (edited) {
        alert = {
          keep: false,
          text: "Área modificada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }

  /**
   * The function `deleteArea` asynchronously deletes an area and displays an alert message based on
   * the result.
   */
  async deleteArea() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Área, favor de revisar",
      type: AlertType.Danger
    };
    if (this.areas && this.areaSelected?._id) {
      const deleted = await this._areaService.deleteArea(this.areas, this.areaSelected._id);
      if (deleted) {
        alert = {
          keep: false,
          text: "Área eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
