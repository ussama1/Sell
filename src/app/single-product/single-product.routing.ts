import { Routes, RouterModule }  from '@angular/router';
import {SingleProductComponent} from "./single-product.component";

const routes: Routes = [
  {
    path: '',
    component: SingleProductComponent
  }
];

export const routing = RouterModule.forChild(routes);
