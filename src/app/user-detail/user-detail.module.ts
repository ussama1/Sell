import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule}  from '@angular/common';
import{ExportedComponentsModule} from "../ui/loading-spinner/exported-components.module";
import {UserDetailComponent} from "./user-detail.component";
import {routing} from "./user-detail.routing";
import { ProductService  } from './../product.service';
import {FormsModule,FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule,NgForm   } from "@angular/forms";
import { SweetAlertService } from 'ng2-sweetalert2';  
import { NgxGalleryModule } from 'ngx-gallery';
import { OrderModule } from 'ngx-order-pipe';
import {RatingModule} from "ngx-rating";
import { StarRatingModule } from 'angular-star-rating';
import { AsyncPipe } from '@angular/common';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    OrderModule,
    NgxGalleryModule,    
    ReactiveFormsModule,
    CommonModule,
    routing,
    RatingModule,  
    StarRatingModule,    
    ExportedComponentsModule
      
  ],
  declarations: [
    UserDetailComponent,
  ],
  providers: [
    ProductService,
    SweetAlertService,    
    
    ]
})
export class UserDetailModule {

}
