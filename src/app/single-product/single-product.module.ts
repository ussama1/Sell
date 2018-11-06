import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ExportedComponentsModule } from "../ui/loading-spinner/exported-components.module";
import { SingleProductComponent } from "./single-product.component";
import { routing } from "./single-product.routing";
import { AgmCoreModule } from '@agm/core';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselModule } from 'ngx-bootstrap';
import { ProductService } from './../product.service';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, NgForm } from "@angular/forms";
import { SweetAlertService } from 'ng2-sweetalert2';
import { NgxGalleryModule } from 'ngx-gallery';
import { OrderModule } from 'ngx-order-pipe';
import { RatingModule } from "ngx-rating";
import { StarRatingModule } from 'angular-star-rating';
import { AsyncPipe } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { TimePipe } from './timer';

@NgModule({
  imports: [
    FormsModule,
    OrderModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    CommonModule,
    InfiniteScrollModule,
    routing,
    RatingModule,
    StarRatingModule,
    ExportedComponentsModule,
    CarouselModule.forRoot(),
    Ng2CarouselamosModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
    })
  ],
  declarations: [
    SingleProductComponent,
    TimePipe,

  ],
  providers: [
    ProductService,
    SweetAlertService,

  ]
})
export class SingleProductModule {

}
