import { Routes } from '@angular/router';

/**Components */
import { AreasComponent } from '@area/areas/areas.component';
import { CategoriesComponent } from '@category/categories/categories.component';
import { ItemsComponent } from '@item/items/items.component';

export const routes: Routes = [
  {
    path: 'areas',
    component: AreasComponent
  },
  {
    path: 'categories/:area_id',
    component: CategoriesComponent
  },
  {
    path: 'items/:area_id/:category_id',
    component: ItemsComponent
  },
  {
    path: '**',
    redirectTo: 'areas'
  }
];
