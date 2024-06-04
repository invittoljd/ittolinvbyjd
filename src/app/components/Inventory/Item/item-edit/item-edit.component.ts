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
  selector: 'app-item-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgFor, NgIf],
  templateUrl: './item-edit.component.html',
  styleUrl: './item-edit.component.css'
})
export class ItemEditComponent {
  /**FormGroups */
  formItemEdit: FormGroup = new FormGroup({});

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel;
  @Input() itemSelected?: CardItemModel;

  /**Variables */
  editIcon: Boolean = false;
  iconSelected?: IconModel;
  iconsItems?: Array<IconModel>;

  editDate: boolean = false;
  editBatch: boolean = false;
  editInventory: boolean = false;
  editNIU: boolean = false;
  editSerial: boolean = false;
  editManager: boolean = false;

  /**Injects */
  private _itemService=inject(ItemService);
  private _alertService=inject(AlertService);

  /**
   * The function `changeEditDate` toggles the editDate property and enables or disables the date form
   * control accordingly.
   */
  changeEditDate() {
    this.editDate = !this.editDate;
    const { date } = this.formItemEdit.controls;
    if (this.editDate) {
      date.enable();
    } else {
      date.disable();
    }
    date.updateValueAndValidity();
  }

  changeEditBatch() {
    this.editBatch = !this.editBatch;
    const { batch } = this.formItemEdit.controls;
    if (this.editBatch) {
      batch.enable();
    } else {
      batch.disable();
    }
    batch.updateValueAndValidity();
  }

  changeEditInventory() {
    this.editInventory = !this.editInventory;
    const { inventory } = this.formItemEdit.controls;
    if (this.editInventory) {
      inventory.enable();
    } else {
      inventory.disable();
    }
    inventory.updateValueAndValidity();
  }

  changeEditNIU() {
    this.editNIU = !this.editNIU;
    const { niu } = this.formItemEdit.controls;
    if (this.editNIU) {
      niu.enable();
    } else {
      niu.disable();
    }
    niu.updateValueAndValidity();
  }

  changeEditSerial() {
    this.editSerial = !this.editSerial;
    const { serial } = this.formItemEdit.controls;
    if (this.editSerial) {
      serial.enable();
    } else {
      serial.disable();
    }
    serial.updateValueAndValidity();
  }

  changeEditManager() {
    this.editManager = !this.editManager;
    const { manager } = this.formItemEdit.controls;
    if (this.editManager) {
      manager.enable();
    } else {
      manager.disable();
    }
    manager.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.formItemEdit = new FormGroup({
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

  changeEditIcon(): void {
    this.editIcon = !this.editIcon;
  }

  selectIcon(icon: IconModel) {
    this.iconSelected = icon;
  }

  async itemEdit() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al modificar el Item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.itemSelected) {
      const { title, information, stock, date, batch, inventory, niu, serial, manager } = this.formItemEdit.value;
      if (title) {
        this.itemSelected.title = title;
      }
      if (information) {
        this.itemSelected.information = information;
      }
      if (stock) {
        this.itemSelected.stock = stock;
      }
      if (date) {
        this.itemSelected.date = date;
      }
      if (batch) {
        this.itemSelected.batch = batch;
      }
      if (inventory) {
        this.itemSelected.inventory = inventory;
      }
      if (niu) {
        this.itemSelected.niu = niu;
      }
      if (serial) {
        this.itemSelected.serial = serial;
      }
      if (manager) {
        this.itemSelected.manager = manager;
      }
      if (this.editIcon && this.iconSelected) {
        this.itemSelected.src = this.iconSelected.src;
      }
      const edited: boolean = await this._itemService.editItem(this.itemSelected);
      if (edited) {
        alert = {
          keep: false,
          text: "Item modificado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }

  async deleteItem() {
    let alert: AlertModel = {
      keep: false,
      text: "Error al eliminar Item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.areaSelected && this.categorySelected && this.itemSelected?._id) {
      const deleted = await this._itemService.deleteItem(this.categorySelected, this.itemSelected._id);
      if (deleted) {
        alert = {
          keep: false,
          text: "Item eliminado con éxito",
          type: AlertType.Success
        }
      }
    }
    this._alertService.addAlert(alert);
  }
}
