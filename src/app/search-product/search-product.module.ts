import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule}  from '@angular/common';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import{ExportedComponentsModule} from "../ui/loading-spinner/exported-components.module";
import {SearchProductComponent} from "./search-product.component";
import {routing} from "./search-product.routing";
import { CarouselModule } from 'ngx-bootstrap';
import { ProductService  } from './../product.service';
import {FormsModule,FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule,NgForm   } from "@angular/forms";
import { SweetAlertService } from 'ng2-sweetalert2';  
import { OrderModule } from 'ngx-order-pipe';
import { AsyncPipe } from '@angular/common';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    CommonModule,
    InfiniteScrollModule,
    routing,
    ExportedComponentsModule,
    CarouselModule.forRoot(),
    
  ],
  declarations: [
    SearchProductComponent,
  ],
  providers: [
    ProductService,
    SweetAlertService,    
    
    ]
})
export class SearchProductModule {

}
