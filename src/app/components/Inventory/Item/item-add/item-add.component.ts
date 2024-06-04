import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CardItemModel } from '@core/models/CardItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';
import { IconModel } from '@core/models/Icon.model';

/**Services */
import { AlertService } from '@services/Alert/alert.service';
import { ItemService } from '@services/Item/item.service';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  /**FormGroups */
  formItemAdd: FormGroup = new FormGroup({});

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel;

  /**Variables */
  iconSelected?: IconModel;
  iconsItems?: Array<IconModel>;

  isLoan: boolean = false;
  addDate: boolean = false;
  addBatch: boolean = false;
  addInventory: boolean = false;
  addNIU: boolean = false;
  addSerial: boolean = false;
  addManager: boolean = false;

  /**Injects */
  private _itemService = inject(ItemService);
  private _alertService = inject(AlertService);

  /**
   * The function `changeIsLoan` toggles the value of the `isLoan` property.
   */
  changeIsLoan() {
    this.isLoan = !this.isLoan;
  }

  /**
   * The function `changeAddDate` toggles the `addDate` property and enables or disables the `date`
   * form control accordingly.
   */
  changeAddDate() {
    this.addDate = !this.addDate;
    const { date } = this.formItemAdd.controls;
    if (this.addDate) {
      date.enable();
    } else {
      date.disable();
    }
    date.updateValueAndValidity();
  }

  /**
   * The function `changeAddBatch` toggles the `addBatch` property and enables or disables the `batch`
   * form control accordingly.
   */
  changeAddBatch() {
    this.addBatch = !this.addBatch;
    const { batch } = this.formItemAdd.controls;
    if (this.addBatch) {
      batch.enable();
    } else {
      batch.disable();
    }
    batch.updateValueAndValidity();
  }

  /**
   * The function `changeAddInventory` toggles the `addInventory` property and enables or disables the
   * `inventory` form control accordingly.
   */
  changeAddInventory() {
    this.addInventory = !this.addInventory;
    const { inventory } = this.formItemAdd.controls;
    if (this.addInventory) {
      inventory.enable();
    } else {
      inventory.disable();
    }
    inventory.updateValueAndValidity();
  }

  /**
   * The function `changeAddNIU` toggles the `addNIU` property, enables or disables a form control
   * based on the value of `addNIU`, and updates its validity.
   */
  changeAddNIU() {
    this.addNIU = !this.addNIU;
    const { niu } = this.formItemAdd.controls;
    if (this.addNIU) {
      niu.enable();
    } else {
      niu.disable();
    }
    niu.updateValueAndValidity();
  }

  /**
   * The function `changeAddSerial` toggles the `addSerial` property and enables or disables the
   * `serial` form control accordingly.
   */
  changeAddSerial() {
    this.addSerial = !this.addSerial;
    const { serial } = this.formItemAdd.controls;
    if (this.addSerial) {
      serial.enable();
    } else {
      serial.disable();
    }
    serial.updateValueAndValidity();
  }

  /**
   * The function `changeAddManager` toggles the `addManager` property and enables or disables the
   * `manager` form control accordingly.
   */
  changeAddManager() {
    this.addManager = !this.addManager;
    const { manager } = this.formItemAdd.controls;
    if (this.addManager) {
      manager.enable();
    } else {
      manager.disable();
    }
    manager.updateValueAndValidity();
  }

  /**
   * The ngOnInit function initializes a FormGroup with form controls for various fields and sets some
   * validators for each control.
   */
  ngOnInit(): void {
    this.formItemAdd = new FormGroup({
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
      stock: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
        Validators.pattern('^[0-9]*$')
      ]),
      date: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ]),
      batch: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      inventory: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      niu: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      serial: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]),
      manager: new FormControl({ value: '', disabled: true }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ])
    });

    this.iconsItems = this._itemService.getIconsItems();
  }

  /**
   * The function `selectIcon` sets the `iconSelected` property to the provided `IconModel` parameter.
   * @param {IconModel} icon - The `selectIcon` function takes an `icon` parameter of type `IconModel`,
   * which is used to set the `iconSelected` property of the class to the selected icon.
   */
  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  /**
   * The function `itemAdd` in TypeScript adds an item to a list with various properties and displays
   * success or error alerts accordingly.
   */
  async itemAdd() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al agregar Item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.formItemAdd.valid && this.areaSelected && this.categorySelected) {
      let src: String = "";
      if (this.iconSelected) {
        src = this.iconSelected.src;
      }
      const { title, information, stock } = this.formItemAdd.value;
      const item: CardItemModel = {
        title, information, stock, src
      };
      if (this.isLoan) {
        item.loan = this.isLoan;
      }
      if (this.addDate) {
        const { date } = this.formItemAdd.value;
        item.date = date;
      }
      if (this.addBatch) {
        const { batch } = this.formItemAdd.value;
        item.batch = batch;
      }
      if (this.addInventory) {
        const { inventory } = this.formItemAdd.value;
        item.inventory = inventory;
      }
      if (this.addSerial) {
        const { serial } = this.formItemAdd.value;
        item.serial = serial;
      }
      if (this.addNIU) {
        const { niu } = this.formItemAdd.value;
        item.niu = niu;
      }
      if (this.addManager) {
        const { manager } = this.formItemAdd.value;
        item.manager = manager;
      }
      const added = await this._itemService.addItem(this.categorySelected, item);
      item._id = added;
      if (added) {
        this.formItemAdd.reset();
        alert = {
          keep: false,
          text: "Item agregado con éxito",
          type: AlertType.Success
        }
        this.addBatch = false;
        this.addDate = false;
        this.addInventory = false;
        this.addManager = false;
        this.addNIU = false;
        this.addSerial = false;
      }
    }
    this._alertService.addAlert(alert);
  }
}
