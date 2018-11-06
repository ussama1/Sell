import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule,ToastOptions} from 'ng2-toastr/ng2-toastr';
import { NgForm,FormsModule,FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule   } from "@angular/forms";
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import Swal from 'sweetalert2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// Google map
import { AgmCoreModule } from '@agm/core';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase';
import { ProductService } from './product.service';
import { ScriptService } from './script.service';
import { SellService } from './sell/sell.service'
import { SimpleGlobal } from 'ng2-simple-global';
import { Product } from './front/product'
/////////////////////////////////////Recaptcha////////////////////
// import { RecaptchaModule } from 'ng-recaptcha';
import { TimeAgoPipe } from 'time-ago-pipe';


import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import {routes} from './app.routing';
import { ExportedComponentsModule } from './ui/loading-spinner/exported-components.module';
// import { CarouselModule } from 'ngx-bootstrap';
import { UsersComponent } from './users/users.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import {SellComponent} from './sell/sell.component';

// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {RouterModule} from "@angular/router";
import {XHRBackend, RequestOptions} from '@angular/http';
import {HttpService} from './services/http-service';
import {AuthService} from './auth.service';
import {AuthGuard} from './nav-bar/auth.guard';

// import {MatSidenavModule} from '@angular/material';
// import {PostService} from './services/post-service';
import {PreloaderFull} from './components/preloader-full/preloader-full';
import {PreloaderSmall} from './components/preloader-small/preloader-small';
import {BaseRequestOptions} from '@angular/http';
import {PreloaderService} from './services/preloader-service';
import {CookieServiceLocal} from './services/cookie-service';
import {SharedData} from './services/shared-service';

import { CookieService } from 'ngx-cookie-service';

import { ContactComponent } from './contact/contact.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll'

// import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';
import { ReversePipe } from './reverse.pipe';
import { ToastNotificationComponent } from './toast-notification/toast-notification.component';
import { ToastNotificationService} from './toast-notification.service';
import { MessagingService } from "./messaging.service";

import {MatAutocompleteModule,MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { SweetAlertService } from 'ng2-sweetalert2';
import {PrivacyComponent, TermsandConditionsComponent, CommunityComponent , HowitworksComponent, DevelopersComponent, CopyrightComponent, TrustComponent} from './privacy/privacy.component';
import {OwlModule} from "ngx-owl-carousel";
// import { SampleLoginComponent } from './sample-login/sample-login.component';
// import { FooterSimpleComponent } from './footer-simple/footer-simple.component';
import { OrderModule } from 'ngx-order-pipe';
import { FiltersComponent } from './filters/filters.component';
import { SearchService } from './search-product/search.service';
import { GeoService } from './geo.service';
// import { SidebarComponent } from './sidebar/sidebar.component';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import {SpeechRecognitionService} from "./services/speechservice";
import { SlickModule } from 'ngx-slick';


export const  firebaseConfig = {
  apiKey: "AIzaSyCLteIvu7xNKiquCChdljQCh3xrWmrcfjg",
  authDomain: "sell4bids-4affe.firebaseapp.com",
  databaseURL: "https://sell4bids-4affe.firebaseio.com",
  projectId: "sell4bids-4affe",
  storageBucket: "sell4bids-4affe.appspot.com",
  messagingSenderId: "795664390984"
};

// export function httpServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, preloaderService: PreloaderService) {
//   return new HttpService(backend, defaultOptions, preloaderService);
// }

// export class CustomOptions extends ToastOptions {
//   animate = 'flyRight';
//   dismiss = 'auto';
//   showCloseButton = true;
//   // newestOnTop = false;
//   positionClass = 'toast-bottom-right';
//   enableHTML = true;
//   // messageClass = '';
//   // titleClass = '';
// }
@NgModule({
  declarations: [
    AppComponent,
    PreloaderFull,
    PreloaderSmall,
    FrontComponent,
    NavBarComponent,
    FooterComponent,
    PrivacyComponent,
    // SingleProductComponent,
    // UsersComponent,
    // UserDetailComponent,
    // ProfileComponent,
    // AboutComponent,
    // ContactComponent,
    // LoadingSpinnerComponent,
    ReversePipe,
    // SellComponent,
    ToastNotificationComponent,
    // SampleLoginComponent,
    // FooterSimpleComponent,
    TermsandConditionsComponent,
    CommunityComponent,
    HowitworksComponent,
    DevelopersComponent,
    CopyrightComponent,
    TrustComponent,
    FiltersComponent,
    TimeAgoPipe
    // SidebarComponent
    // SignupComponent
  ],
  entryComponents: [TermsandConditionsComponent, CommunityComponent , HowitworksComponent , DevelopersComponent , CopyrightComponent , TrustComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
    }),
    Ng2DeviceDetectorModule.forRoot(),
    OrderModule,
    BrowserModule,
    ExportedComponentsModule,
    MatAutocompleteModule,
    NoopAnimationsModule,
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpModule,
    OwlModule,
    routes,
    SlickModule.forRoot(),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    // CarouselModule.forRoot(),
    // SwiperModule.forRoot(SWIPER_CONFIG),
    AngularFireAuthModule,
    // RecaptchaModule.forRoot(),
    InfiniteScrollModule,
    // Ng2CarouselamosModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    // AngularFireModule.initializeApp(environment.firebase)
  ],

  providers: [
    AngularFireDatabase,
    CookieService,
    ProductService,
    CookieServiceLocal,
    Product,
    SpeechRecognitionService,
    // SellService,
    SweetAlertService,
    SharedData,
    SimpleGlobal ,
    ToastNotificationService,
    ScriptService,
    AuthService,
    AuthGuard,
    PreloaderService,
    MessagingService ,
    SearchService,
    // BaseRequestOptions,
    // {
    //   provide: HttpService,
    //   useFactory: httpServiceFactory,
    //   deps: [XHRBackend, RequestOptions, PreloaderService]
    // },
    FrontComponent,
    // UserDetailComponent,
    GeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
