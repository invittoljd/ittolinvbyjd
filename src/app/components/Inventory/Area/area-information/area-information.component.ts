import { Component, Input } from '@angular/core';

/**Models */
import { AreaItemModel } from '@core/models/AreaItem.model';

@Component({
  selector: 'app-area-information',
  standalone: true,
  imports: [],
  templateUrl: './area-information.component.html',
  styleUrl: './area-information.component.css'
})
export class AreaInformationComponent {
  /**Inputs */
  @Input() areaSelected?: AreaItemModel;
}
