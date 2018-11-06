import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {routing} from "./users.routing";
import {UsersComponent} from "./users.component";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import{ExportedComponentsModule} from "../ui/loading-spinner/exported-components.module";

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    routing,
    ExportedComponentsModule
  ],
  declarations: [
    UsersComponent,
  ],
  providers: [
   ]
  })
export class UsersModule {

}
