import { NgClass, NgFor } from '@angular/common';
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
  selector: 'app-category-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css'
})
export class CategoryAddComponent {
  /**Inputs */
  @Input() areaSelected?: AreaItemModel;

  /**Variables */
  iconSelected?: IconModel;
  iconsCategories?: Array<IconModel>;

  /**FormGroups */
  formCategoryAdd: FormGroup = new FormGroup({});

  /**Injects */
  private _categoryService = inject(CategoryService);
  private _alertService = inject(AlertService);

  /**
   * The ngOnInit function initializes a form group for adding a category with title and information
   * fields, along with fetching icons for categories from a service.
   */
  ngOnInit(): void {
    this.formCategoryAdd = new FormGroup({
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
   * The function `selectIcon` sets the `iconSelected` property to the provided `icon` parameter.
   * @param {IconModel} icon - The `selectIcon` function takes an `icon` parameter of type `IconModel`,
   * which is used to set the `iconSelected` property of the class to the selected icon.
   */
  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  /**
   * The function `categoryAdd` adds a new category to a specified area and displays an alert message
   * based on the success or failure of the operation.
   */
  async categoryAdd() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar Categoría, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formCategoryAdd.valid && this.iconSelected && this.areaSelected && this.areaSelected._id) {
      const { title, information } = this.formCategoryAdd.value;
      const category: CategoryItemModel = {
        title, information, src: this.iconSelected.src, items: []
      };
      const added = await this._categoryService.addCategory(this.areaSelected._id, this.areaSelected.categories, category);
      category._id = added;
      if (added) {
        this.formCategoryAdd.reset();
        alert = {
          keep: false,
          text: "Categoría agregada con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
