import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CardItemModel } from '@core/models/CardItem.model';
import { ItemService } from '@services/Item/item.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

/**Components */

// Usa la intersección de tipos para agregar el campo 'status'
type CardItemModelWithStatus = CardItemModel & {
  status: number;
};
@Component({
  selector: 'app-import',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export class ImportComponent {
  private _itemService = inject(ItemService);
  private lastEventFile: any;
  showDataFiltered: Boolean = false;

  formFile: FormGroup = new FormGroup({});

  data: Array<Array<string>> = [];
  dataCreate: Array<CardItemModelWithStatus> = [];
  dataUpload: Array<CardItemModelWithStatus> = [];

  fileChanged(e: any) {
    this.lastEventFile = e;
    this.data = [];
    this.dataCreate = [];
    this.dataUpload = [];
    this.showDataFiltered = false;
    let file = this.lastEventFile.target.files[0];
    let fileReader: FileReader = new FileReader;
    fileReader.onload = () => {
      let dataRow = ("" + fileReader.result).replaceAll('\r\n', '\n').split('\n');
      dataRow.forEach((dataTmp) => {
        this.data.push(dataTmp.split(','));
      })
    }
    fileReader.readAsText(file, 'ISO-8859-1');
  }

  prueba: Array<String> = ["LIIA-NUI-IN-002", "LIIA-NUI-IN-200"]

  submit() {
    this.dataCreate = [];
    this.dataUpload = [];
    this.getData().forEach((dataRaw: Array<string>) => {
      if (dataRaw.length < 7) {
        return;
      }
      const cardItem: CardItemModelWithStatus = {
        title: dataRaw[0],
        serial: dataRaw[1],
        information: dataRaw[2],
        inventory: dataRaw[3],
        niu: dataRaw[4],
        manager: dataRaw[5],
        loan: true,
        status: 0
      }
      this.prueba.includes(cardItem.niu ? cardItem.niu : "") ? this.dataUpload.push(cardItem) : this.dataCreate.push(cardItem);
    });
    this.showDataFiltered = true;
  }

  getHeaders() {
    return this.data ? this.data[0] : undefined;
  }

  getData() {
    let dataWhitoutHeaders = [...this.data];
    dataWhitoutHeaders.shift();
    return dataWhitoutHeaders;
  }

  sendCreateData() {
    // this.dataCreate.forEach((data) => {
    //   this._itemService.addItem(data);
    // })
  }
}
