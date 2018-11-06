import { Routes, RouterModule }  from '@angular/router';
import {SearchProductComponent} from "./search-product.component";

const routes: Routes = [
  {
    path: '',
    component: SearchProductComponent
  }
];

export const routing = RouterModule.forChild(routes);
