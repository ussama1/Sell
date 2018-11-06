import { Routes, RouterModule }  from '@angular/router';
import { SampleLoginComponent} from "./sample-login.component";

const routes: Routes = [
  {
    path: '',
    component: SampleLoginComponent
  }
];

export const routing = RouterModule.forChild(routes);
