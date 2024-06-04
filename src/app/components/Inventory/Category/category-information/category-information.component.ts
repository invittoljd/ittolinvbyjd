import { Component, Input } from '@angular/core';

/**Models */
import { CategoryItemModel } from '@core/models/CategoryItem.model';

@Component({
  selector: 'app-category-information',
  standalone: true,
  imports: [],
  templateUrl: './category-information.component.html',
  styleUrl: './category-information.component.css'
})
export class CategoryInformationComponent {
  /**Inputs */
  @Input() categorySelected?: CategoryItemModel;
}
