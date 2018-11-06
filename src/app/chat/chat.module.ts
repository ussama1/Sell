import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule}  from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import{ExportedComponentsModule} from "../ui/loading-spinner/exported-components.module";
import {ChatComponent} from "./chat.component";
import {routing} from "./chat.routing";
import {FormsModule,FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule,NgForm   } from "@angular/forms";
import { AsyncPipe } from '@angular/common';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { FilterPipe } from '../pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  imports: [
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    CommonModule,
    InfiniteScrollModule,
    routing,
    Ng2SearchPipeModule


  ],
  declarations: [
    ChatComponent,
  ],

  providers: [
    ]
})
export class ChatModule {

}
