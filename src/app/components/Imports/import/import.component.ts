import { Component } from '@angular/core';

/**Components */
import { InputFileComponent } from '../input-file/input-file.component';

@Component({
  selector: 'app-import',
  standalone: true,
  imports: [InputFileComponent],
  templateUrl: './import.component.html',
  styleUrl: './import.component.css'
})
export class ImportComponent {

}
