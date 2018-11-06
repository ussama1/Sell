import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {ProfileComponent} from "./profile.component";
import {routing} from "./profile.routing";
import {FormsModule,FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule,NgForm   } from "@angular/forms";
import { ProfileService } from"./profile.service";
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    InfiniteScrollModule,
    routing
  ],
  declarations: [
    ProfileComponent,
  ],
  providers: [
    ProfileService
  ]

})
export class ProfileModule {

}
