import { Routes, RouterModule }  from '@angular/router';
import {UserDetailComponent} from "./user-detail.component";

const routes: Routes = [
  {
    path: '',
    component: UserDetailComponent
  }
];

export const routing = RouterModule.forChild(routes);
