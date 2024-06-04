import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { IconModel } from '@core/models/Icon.model';

/**Services */
import { AlertService } from '@services/Alert/alert.service';
import { CategoryService } from '@services/Category/category.service';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  /**FormGroups */
  formCategoryEdit: FormGroup = new FormGroup({});

  /**Variables */
  editIcon: Boolean = false;
  iconSelected?: IconModel;
  iconsCategories?: Array<IconModel>;

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel;

  /**Injects */
  private _categoryService = inject(CategoryService);
  private _alertService = inject(AlertService);

  /**
   * The `ngOnInit` function initializes a form group for editing category information and retrieves
   * icons for categories from a service.
   */
  ngOnInit(): void {
    this.formCategoryEdit = new FormGroup({
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

    this.iconsCategories = this._categoryService.getIconsCategories();
  }

  /**
   * The function `changeEditIcon` toggles the value of the `editIcon` property.
   */
  changeEditIcon(): void {
    this.editIcon = !this.editIcon;
  }

  /**
   * The function `selectIcon` sets the `iconSelected` property to the provided `IconModel` parameter.
   * @param {IconModel} icon - The `selectIcon` function takes an `IconModel` object as a parameter
   * named `icon`. This parameter represents the icon that will be selected and assigned to the
   * `iconSelected` property of the class or component where this function is defined.
   */
  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  /**
   * The function `categoryEdit` is an asynchronous function that edits a category and displays an
   * alert message based on the success or failure of the operation.
   */
  async categoryEdit() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar la Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.categorySelected) {
      const { title, information } = this.formCategoryEdit.value;
      if (title) {
        this.categorySelected.title = title;
      }
      if (information) {
        this.categorySelected.information = information;
      }
      if (this.editIcon && this.iconSelected) {
        this.categorySelected.src = this.iconSelected.src;
      }
      const edited: boolean = await this._categoryService.editCategory(this.categorySelected);
      if (edited) {
        alert = {
          keep: false,
          text: "Categoría modificada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }

  /**
   * The `deleteCategory` function in TypeScript deletes a category and displays an alert message based
   * on the success or failure of the deletion.
   */
  async deleteCategory() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.areaSelected && this.categorySelected?._id) {
      const deleted = await this._categoryService.deleteCategory(this.areaSelected.categories, this.categorySelected._id);
      if (deleted) {
        alert = {
          keep: false,
          text: "Categoría eliminada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
