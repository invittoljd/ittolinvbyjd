import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

/**Models */
import { CardItemModel } from '@core/models/CardItem.model';

@Component({
  selector: 'app-item-information',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-information.component.html',
  styleUrl: './item-information.component.css'
})
export class ItemInformationComponent {
  /**Inputs */
  @Input() itemSelected?: CardItemModel;
}
