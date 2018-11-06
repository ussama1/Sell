import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {SellComponent} from "./sell.component";
import {routing} from "./sell.routing";
import {SellService} from "./sell.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ExportedComponentsModule } from './../ui/loading-spinner/exported-components.module';

@NgModule({
  imports: [
    CommonModule,
    InfiniteScrollModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    ExportedComponentsModule    
  ],
  declarations: [
    SellComponent,
  ],
  providers: [
    SellService
  ]
})
export class SellModule {

}
