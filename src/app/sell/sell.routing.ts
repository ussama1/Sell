import { Routes, RouterModule }  from '@angular/router';
import {SellComponent} from "./sell.component";

const routes: Routes = [
  {
    path: '',
    component: SellComponent
  }
];

export const routing = RouterModule.forChild(routes);
