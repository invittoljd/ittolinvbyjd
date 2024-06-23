import { NgIf } from '@angular/common';
import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

/**Models */
import { AlertModel, AlertType } from '@core/models/Alert.model';
import { AreaItemModel } from '@core/models/AreaItem.model';
import { CardItemModel } from '@core/models/CardItem.model';
import { CategoryItemModel } from '@core/models/CategoryItem.model';

/**Services */
import { AlertService } from '@services/Alert/alert.service';
import { ItemService } from '@services/Item/item.service';
import { RequestService } from '@services/Request/request.service';
import { SessionService } from '@services/Session/session.service';

@Component({
  selector: 'app-item-purchase',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './item-purchase.component.html',
  styleUrl: './item-purchase.component.css'
})
export class ItemPurchaseComponent {
  /**FormGroups */
  formItemPurchase: FormGroup = new FormGroup({});

  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
  @Input() categorySelected?: CategoryItemModel;
  @Input() itemSelected?: CardItemModel;

  /**Injects */
  private _itemService = inject(ItemService);
  private _requestService = inject(RequestService);
  private _alertService = inject(AlertService);
  private _sessionService = inject(SessionService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemSelected'] && this.itemSelected) {
      this.initializeForm();
      this.updateMaxQuantityValidation();
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  async initializeForm() {
    let stock = this.itemSelected?.stock ? this.itemSelected.stock : 0;
    let isLoan: boolean = this.itemSelected?.loan ? this.itemSelected.loan : false;

    this.formItemPurchase = new FormGroup({
      username: new FormControl('' , [
        Validators.minLength(1),
        Validators.maxLength(255)
      ]),
      quantity: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(stock),
        Validators.pattern('^[0-9]*$')
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100)
      ]),
      datetimeStart: new FormControl({ value: null, disabled: !isLoan }, [
        Validators.required,
        this.dateGreaterThanTodayValidator
      ]),
      datetimeEnd: new FormControl({ value: null, disabled: !isLoan }, [
        Validators.required
      ])
    });

    if (isLoan) {
      this.formItemPurchase.setValidators(this.dateRangeValidator);
    }
  }

  // Validador personalizado para asegurar que la fecha es del día de hoy en adelante
  dateGreaterThanTodayValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Eliminar la parte de horas, minutos, segundos y milisegundos

    return selectedDate > today ? null : { dateTooEarly: true };
  }

  // Validador personalizado para asegurar que datetimeEnd es posterior a datetimeStart
  dateRangeValidator(group: AbstractControl): ValidationErrors | null {
    const datetimeStart = group.get('datetimeStart')?.value;
    const datetimeEnd = group.get('datetimeEnd')?.value;

    if (!datetimeStart || !datetimeEnd) {
      return null; // No validar si una de las fechas no está establecida
    }

    return datetimeEnd > datetimeStart ? null : { dateRangeInvalid: true };
  }

  async itemPurchase() {
    console.log(this.formItemPurchase)
    let alert: AlertModel = {
      keep: false,
      text: "Error al solicitar el Item, favor de revisar",
      type: AlertType.Danger
    };
    if (this.itemSelected && this.formItemPurchase.valid) {
      const { quantity, description, datetimeStart, datetimeEnd, username } = this.formItemPurchase.value;
      const request = await this._itemService.requestItem(this.itemSelected, quantity, description, datetimeStart, datetimeEnd);
      if (request) {
        if(this.isAdmin()){
          await this._requestService.addRequestAdmin(request, username);
        }else{
          await this._requestService.addRequest(request);
        }
        if (this.itemSelected.stock && !this.itemSelected.loan) {
          this.itemSelected.stock -= quantity;
        }
        alert = {
          keep: false,
          text: "Item(s) solicitado con éxito",
          type: AlertType.Success
        }
        this.updateMaxQuantityValidation();
      }
    }
    this._alertService.addAlert(alert);
  }
  updateMaxQuantityValidation() {
    const stock = this.itemSelected?.stock || 0;
    this.formItemPurchase.get('quantity')?.setValidators([
      Validators.required,
      Validators.min(0),
      Validators.max(stock),
      Validators.pattern('^[0-9]*$')
    ]);
    this.formItemPurchase.get('quantity')?.updateValueAndValidity();
  }
  /**
   * The function `isAdmin` checks if the current session is for an admin user.
   * @returns The `isAdmin()` function is returning the result of calling the `isAdmin()` method of the
   * `_sessionService` object.
   */
  isAdmin() {
    return this._sessionService.isAdmin();
  }
}
