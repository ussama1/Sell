webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"../../../../../src/app/about/about.module.ts",
		"about.module"
	],
	"app/categories/categories.module": [
		"../../../../../src/app/categories/categories.module.ts",
		"common",
		"categories.module"
	],
	"app/chat/chat.module": [
		"../../../../../src/app/chat/chat.module.ts",
		"chat.module"
	],
	"app/contact/contact.module": [
		"../../../../../src/app/contact/contact.module.ts",
		"common",
		"contact.module"
	],
	"app/profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts",
		"profile.module"
	],
	"app/sample-login/sample-login.module": [
		"../../../../../src/app/sample-login/sample-login.module.ts",
		"common",
		"sample-login.module"
	],
	"app/search-product/search-product.module": [
		"../../../../../src/app/search-product/search-product.module.ts",
		"common",
		"search-product.module"
	],
	"app/sell/sell.module": [
		"../../../../../src/app/sell/sell.module.ts",
		"sell.module"
	],
	"app/signup/signup.module": [
		"../../../../../src/app/signup/signup.module.ts",
		"common",
		"signup.module"
	],
	"app/single-product/single-product.module": [
		"../../../../../src/app/single-product/single-product.module.ts",
		"common",
		"single-product.module"
	],
	"app/user-detail/user-detail.module": [
		"../../../../../src/app/user-detail/user-detail.module.ts",
		"common",
		"user-detail.module"
	],
	"app/users/users.module": [
		"../../../../../src/app/users/users.module.ts",
		"common",
		"users.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Haeder-->\r\n<app-nav-bar></app-nav-bar>\r\n<!--end-->\r\n<router-outlet></router-outlet>\r\n\r\n<!--footer-->\r\n<app-footer></app-footer>\r\n<!--end-->\r\n\r\n<!-- <app-galleria></app-galleria> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__script_service__ = __webpack_require__("../../../../../src/app/script.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__front_product__ = __webpack_require__("../../../../../src/app/front/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__front_front_component__ = __webpack_require__("../../../../../src/app/front/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__nav_bar_auth_guard__ = __webpack_require__("../../../../../src/app/nav-bar/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_preloader_full_preloader_full__ = __webpack_require__("../../../../../src/app/components/preloader-full/preloader-full.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_preloader_small_preloader_small__ = __webpack_require__("../../../../../src/app/components/preloader-small/preloader-small.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_preloader_service__ = __webpack_require__("../../../../../src/app/services/preloader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_cookie_service__ = __webpack_require__("../../../../../src/app/services/cookie-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__reverse_pipe__ = __webpack_require__("../../../../../src/app/reverse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__toast_notification_toast_notification_component__ = __webpack_require__("../../../../../src/app/toast-notification/toast-notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__toast_notification_service__ = __webpack_require__("../../../../../src/app/toast-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__messaging_service__ = __webpack_require__("../../../../../src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_owl_carousel__ = __webpack_require__("../../../../ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__filters_filters_component__ = __webpack_require__("../../../../../src/app/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__search_product_search_service__ = __webpack_require__("../../../../../src/app/search-product/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__geo_service__ = __webpack_require__("../../../../../src/app/geo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_speechservice__ = __webpack_require__("../../../../../src/app/services/speechservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_ngx_slick__ = __webpack_require__("../../../../ngx-slick/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FormsModule } from '@angular/forms';


// New imports to update based on AngularFire2 version 4



// Google map





/////////////////////////////////////Recaptcha////////////////////
// import { RecaptchaModule } from 'ng-recaptcha';









// import {MatSidenavModule} from '@angular/material';
// import {PostService} from './services/post-service';

















// import { SampleLoginComponent } from './sample-login/sample-login.component';
// import { FooterSimpleComponent } from './footer-simple/footer-simple.component';




// import { SidebarComponent } from './sidebar/sidebar.component';



var firebaseConfig = {
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_preloader_full_preloader_full__["a" /* PreloaderFull */],
            __WEBPACK_IMPORTED_MODULE_25__components_preloader_small_preloader_small__["a" /* PreloaderSmall */],
            __WEBPACK_IMPORTED_MODULE_17__front_front_component__["a" /* FrontComponent */],
            __WEBPACK_IMPORTED_MODULE_18__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["e" /* PrivacyComponent */],
            // SingleProductComponent,
            // UsersComponent,
            // UserDetailComponent,
            // ProfileComponent,
            // AboutComponent,
            // ContactComponent,
            // LoadingSpinnerComponent,
            __WEBPACK_IMPORTED_MODULE_31__reverse_pipe__["a" /* ReversePipe */],
            // SellComponent,
            __WEBPACK_IMPORTED_MODULE_32__toast_notification_toast_notification_component__["a" /* ToastNotificationComponent */],
            // SampleLoginComponent,
            // FooterSimpleComponent,
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["f" /* TermsandConditionsComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["a" /* CommunityComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["d" /* HowitworksComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["c" /* DevelopersComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["b" /* CopyrightComponent */],
            __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["g" /* TrustComponent */],
            __WEBPACK_IMPORTED_MODULE_41__filters_filters_component__["a" /* FiltersComponent */],
            __WEBPACK_IMPORTED_MODULE_15_time_ago_pipe__["TimeAgoPipe"]
            // SidebarComponent
            // SignupComponent
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["f" /* TermsandConditionsComponent */], __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["a" /* CommunityComponent */], __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["d" /* HowitworksComponent */], __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["c" /* DevelopersComponent */], __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["b" /* CopyrightComponent */], __WEBPACK_IMPORTED_MODULE_38__privacy_privacy_component__["g" /* TrustComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
            }),
            __WEBPACK_IMPORTED_MODULE_44_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_40_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_21__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_35__angular_material__["a" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_39_ngx_owl_carousel__["OwlModule"],
            __WEBPACK_IMPORTED_MODULE_20__app_routing__["a" /* routes */],
            __WEBPACK_IMPORTED_MODULE_46_ngx_slick__["a" /* SlickModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            // CarouselModule.forRoot(),
            // SwiperModule.forRoot(SWIPER_CONFIG),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
            // RecaptchaModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_30_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            // Ng2CarouselamosModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_29_ngx_cookie_service__["a" /* CookieService */],
            __WEBPACK_IMPORTED_MODULE_11__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_27__services_cookie_service__["a" /* CookieServiceLocal */],
            __WEBPACK_IMPORTED_MODULE_14__front_product__["a" /* Product */],
            __WEBPACK_IMPORTED_MODULE_45__services_speechservice__["a" /* SpeechRecognitionService */],
            // SellService,
            __WEBPACK_IMPORTED_MODULE_37_ng2_sweetalert2__["SweetAlertService"],
            __WEBPACK_IMPORTED_MODULE_28__services_shared_service__["a" /* SharedData */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__["SimpleGlobal"],
            __WEBPACK_IMPORTED_MODULE_33__toast_notification_service__["a" /* ToastNotificationService */],
            __WEBPACK_IMPORTED_MODULE_12__script_service__["a" /* ScriptService */],
            __WEBPACK_IMPORTED_MODULE_22__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_23__nav_bar_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_26__services_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_34__messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_42__search_product_search_service__["a" /* SearchService */],
            // BaseRequestOptions,
            // {
            //   provide: HttpService,
            //   useFactory: httpServiceFactory,
            //   deps: [XHRBackend, RequestOptions, PreloaderService]
            // },
            __WEBPACK_IMPORTED_MODULE_17__front_front_component__["a" /* FrontComponent */],
            // UserDetailComponent,
            __WEBPACK_IMPORTED_MODULE_43__geo_service__["a" /* GeoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__front_front_component__ = __webpack_require__("../../../../../src/app/front/front.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters_filters_component__ = __webpack_require__("../../../../../src/app/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_bar_auth_guard__ = __webpack_require__("../../../../../src/app/nav-bar/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__ = __webpack_require__("../../../../../src/app/privacy/privacy.component.ts");



// import {ProfileComponent} from './profile/profile.component';
// import {AboutComponent} from './about/about.component';
// import {SidebarComponent} from './sidebar/sidebar.component';

// import {ContactComponent} from './contact/contact.component';
// import {SellComponent} from './sell/sell.component';

// import {UsersComponent} from "./users/users.component";
var router = [
    {
        path: 'who-are-we',
        loadChildren: 'app/about/about.module#AboutModule'
    },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'login', loadChildren: 'app/sample-login/sample-login.module#SampleLoginModule' },
    { path: 'signup', loadChildren: 'app/signup/signup.module#SignupModule' },
    { path: 'products/category/:name', loadChildren: 'app/categories/categories.module#CategoriesModule' },
    { path: 'item', loadChildren: 'app/single-product/single-product.module#SingleProductModule' },
    { path: 'item/:name', loadChildren: 'app/single-product/single-product.module#SingleProductModule' },
    {
        path: 'members',
        loadChildren: 'app/users/users.module#UsersModule'
    },
    { path: 'user/:id/:name', loadChildren: 'app/user-detail/user-detail.module#UserDetailModule' },
    { path: 'search/:id', loadChildren: 'app/search-product/search-product.module#SearchProductModule' },
    { path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__nav_bar_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile/:id', loadChildren: 'app/profile/profile.module#ProfileModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__nav_bar_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'establish-contact',
        loadChildren: 'app/contact/contact.module#ContactModule'
    },
    { path: 'sell', loadChildren: 'app/sell/sell.module#SellModule', canActivate: [__WEBPACK_IMPORTED_MODULE_3__nav_bar_auth_guard__["a" /* AuthGuard */]] },
    { path: 'filtered-search', component: __WEBPACK_IMPORTED_MODULE_2__filters_filters_component__["a" /* FiltersComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__front_front_component__["a" /* FrontComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["e" /* PrivacyComponent */] },
    { path: 'terms-and-conditions', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["f" /* TermsandConditionsComponent */] },
    { path: 'Community', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["a" /* CommunityComponent */] },
    { path: 'how-it-works', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["d" /* HowitworksComponent */] },
    { path: 'developers', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["c" /* DevelopersComponent */] },
    { path: 'copyright', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["b" /* CopyrightComponent */] },
    { path: 'trust-and-safety', component: __WEBPACK_IMPORTED_MODULE_4__privacy_privacy_component__["g" /* TrustComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(router);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(db, afAuth, firebaseAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.firebaseAuth = firebaseAuth;
        this.dbPath = '/products/Cars & Accessories/buy-it-now/NY';
        this.user = firebaseAuth.authState;
    }
    AuthService.prototype.getMovies = function () {
        return this.db.list('/products', {
            query: {
                orderByKey: true,
            }
        });
    };
    AuthService.prototype.gettestToken = function () {
        console.log(localStorage.getItem('JwtToken'));
    };
    AuthService.prototype.signup = function (email, password) {
        return this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.login = function (email, password) {
        return this.firebaseAuth.auth
            .signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.Googleservice = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider()).then(function (value) {
            _this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid && __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"].GoogleAuthProvider.PROVIDER_ID == 'google.com') {
                    // firebase.database().ref('/users/'+res.uid).update({email:res.email,name:res.displayName,uid:res.uid,image:res.photoURL})               
                }
                else {
                    //console.log('user not logged in');   
                }
            });
        })
            .catch(function (error) {
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var auth = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]();
        return auth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["auth"]().currentUser;
        if (user) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/preloader-full/preloader-full.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"preloader-full\"-->\n     <!--*ngIf=\"preloaderService.getPreloaderCount('full') > 0\">-->\n  <!--<div class=\"preloader-full__spinner\">💩</div>-->\n<!--</div>-->\n<div class=\"loading\" *ngIf=\"preloaderService.getPreloaderCount('full') > 0\">Loading&#8230;</div>"

/***/ }),

/***/ "../../../../../src/app/components/preloader-full/preloader-full.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0; }\n\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/preloader-full/preloader-full.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderFull; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__ = __webpack_require__("../../../../../src/app/services/preloader-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderFull = (function () {
    function PreloaderFull(preloaderService) {
        this.preloaderService = preloaderService;
    }
    return PreloaderFull;
}());
PreloaderFull = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preloader-full',
        styles: [__webpack_require__("../../../../../src/app/components/preloader-full/preloader-full.scss")],
        template: __webpack_require__("../../../../../src/app/components/preloader-full/preloader-full.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__["a" /* PreloaderService */]) === "function" && _a || Object])
], PreloaderFull);

var _a;
//# sourceMappingURL=preloader-full.js.map

/***/ }),

/***/ "../../../../../src/app/components/preloader-small/preloader-small.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"loading-container\" *ngIf=\"preloaderService.getPreloaderCount('small') > 0 && preloaderService.getPreloaderCount('full') == 0\">\n    <div class=\"spinner\"></div>\n    <div class=\"spinner-center\"></div>\n    <div class=\"loading-text\">Loading...</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/preloader-small/preloader-small.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes spinner {\n  100% {\n    -webkit-transform: rotate(3600deg);\n            transform: rotate(3600deg); } }\n\n@keyframes spinner {\n  100% {\n    -webkit-transform: rotate(3600deg);\n            transform: rotate(3600deg); } }\n\n.loading-container {\n  margin: 0 auto;\n  text-align: center;\n  position: relative;\n  top: 11vh;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  background: transparent; }\n\n.spinner {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background: url(\"http://i.imgur.com/oSHLAzp.png\") center center;\n  background-size: contain;\n  transition-origin: 50% 50%;\n  -webkit-animation: spinner 3s infinite alternate ease-in-out;\n          animation: spinner 3s infinite alternate ease-in-out; }\n\n.spinner-center {\n  display: inline-block;\n  position: absolute;\n  margin-left: -100px;\n  width: 100px;\n  height: 100px;\n  background: url(\"http://i.imgur.com/u0BC2ZR.png\") center center;\n  background-size: contain;\n  content: ''; }\n\n.loading-text {\n  position: relative;\n  z-index: 1;\n  font-size: 1.5rem;\n  font-family: \"Comic Sans MS\", cursive, sans-serif;\n  margin-left: 0.5em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/preloader-small/preloader-small.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderSmall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__ = __webpack_require__("../../../../../src/app/services/preloader-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloaderSmall = (function () {
    function PreloaderSmall(preloaderService) {
        this.preloaderService = preloaderService;
    }
    return PreloaderSmall;
}());
PreloaderSmall = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preloader-small',
        styles: [__webpack_require__("../../../../../src/app/components/preloader-small/preloader-small.scss")],
        template: __webpack_require__("../../../../../src/app/components/preloader-small/preloader-small.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_preloader_service__["a" /* PreloaderService */]) === "function" && _a || Object])
], PreloaderSmall);

var _a;
//# sourceMappingURL=preloader-small.js.map

/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
    }
    return Config;
}());
Config.api = '';
Config = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Config);

//# sourceMappingURL=config.js.map

/***/ }),

/***/ "../../../../../src/app/filters/filters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width,input[type=text]:focus{width:100%}.example-form{min-width:150px;max-width:500px;width:100%}img.video-play-btn{position:absolute;top:65px;left:30%}input[type=text]{width:330px;box-sizing:border-box;border:2px solid #ccc;border-radius:4px;font-size:16px;background-color:#fff;background-position:10px 10px;background-repeat:no-repeat;padding:12px 20px 12px 40px;transition:width .4s ease-in-out}a{text-decoration:none}a:hover{text-decoration:underline}input{font-family:HelveticaNeue,'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#555860}#advance-search{background:#333;margin:0 0 40px;padding:30px 0}.search-form-wrap form .input-field-wrap,.search-form-wrap form .select-field-wrap{margin-right:20px;width:100%}#advance-search label{color:#fefefe}h1.title-advance-search{border-bottom:solid 1px #fefefe;color:#fefefe}.title-advance-search span{background:#777;padding:3px 10px;margin-left:255px}.search-form-wrap{padding:25px 40px;position:relative;z-index:100}.search-form-wrap form .input-field-wrap input.search-form-input{width:100%;height:56px;line-height:56px;font-size:20px;text-transform:capitalize;padding:20px;border:none;border-radius:0}.slider:before{display:none}.search-form-wrap form .select-field-wrap select.search-form-select{background:url(https://github.com/ussama1/Sell.git/assets/img/form-icon.png) top right no-repeat #fff;background-position-x:0;background-position-y:0;width:100%;height:56px;line-height:56px;font-size:20px;text-transform:capitalize;padding:0 0 0 20px;-webkit-appearance:none;-moz-appearance:none;text-overflow:'';box-shadow:none;border:none;color:#999}.search-form-wrap form .select-field-wrap select.search-form-select .options{padding:15px 20px;font-size:20px;border-top:1px solid #f7f7f7;border-left:none;border-right:none;border-bottom:none}.search-form-wrap form .select-field-wrap .options{background-color:#fff}.search-form-wrap form .submit-field-wrap input.search-form-submit{width:100%;height:56px;line-height:56px;font-size:20px;text-transform:capitalize;box-shadow:none;border:none}.bgyallow-1{background:#ea1b22}.white{color:#fff}.slidecontainer{width:100%}.slider{-webkit-appearance:none;width:100%;height:10px;background:#fff;outline:0;transition:opacity .2s;border-radius:5px;position:relative!important}p.range-value{color:#fff;padding-top:10px}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;background:#ea1b22;cursor:pointer;border-radius:50%}.slider::-moz-range-thumb{width:25px;height:25px;background:#ea1b22;cursor:pointer}.no-record{padding:20px 0}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section id=\"advance-search\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <h1 class=\"title-advance-search\">Filtered Search</h1>\n        <section id=\"search-form\">\n          <div class=\"search-form-wrap\">\n            <form class=\"clearfix\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\n              <div class=\"row\">\n                  <div class=\"col-md-4\">\n                      <div class=\"select-field-wrap\">\n                        <label style=\"font-size: 26px;\">Category</label>\n                        <select class=\"search-form-select\"  [(ngModel)]=\"catfilter\" name=\"category\" (change)=\"filterExact('category', catfilter)\">\n                          <option *ngFor=\"let cat of category\">{{cat}}</option>\n                        </select>\n                        <button class=\"btn btn-next\" *ngIf=\"catfilter\"\n                        (click)=\"removeFilter('catfilter')\">\n                        Remove filter\n                      </button>\n                      </div>\n                    </div>\n                  <div class=\"col-md-4\">\n                      <div class=\"select-field-wrap\">\n                        <label style=\"font-size: 26px;\">Buying Option</label>\n                        <select class=\"search-form-select\"  [(ngModel)]=\"auctionfilter\" name=\"auction\" (change)=\"filterExact('auctionType',auctionfilter)\" >\n                            <!-- <option class=\"options\" >Any</option> -->\n                            <option class=\"options\" value=\"buy-it-now\">Buy Now</option>\n                            <option class=\"options\" value=\"reserve\">Bidding</option>\n                          </select>\n                          <button class=\"btn btn-next\" *ngIf=\"auctionfilter\"\n                          (click)=\"removeFilter('auctionfilter')\">\n                          Remove filter\n                        </button>\n                    </div>\n                  </div>\n                <div class=\"col-md-4\">\n                  <div class=\"select-field-wrap\">\n                      <label style=\"font-size: 26px;\">State</label>\n            \n                      <select class=\"search-form-select\"  [(ngModel)]=\"statefilter\" name=\"state\"  (change)=\"filterExact('state',statefilter)\">\n                        <option class=\"options\" value=\"AL\">Alabama, AL</option>\n                        <option class=\"options\" value=\"AL\">Alaska, AK</option>\n                        <option class=\"options\" value=\"AZ\">Arizona, AZ</option>\n                        <option class=\"options\" value=\"AR\">Arkansas, AR</option>\n                        <option class=\"options\" value=\"CA\">California, CA</option>\n                        <option class=\"options\" value=\"CO\">Colorado, CO</option>\n                        <option class=\"options\" value=\"CT\">Connecticut, CT</option>\n                        <option class=\"options\" value=\"DE\">Delaware, DE</option>\n                        <option class=\"options\" value=\"FL\">Florida, FL</option>\n                        <option class=\"options\" value=\"GA\">Georgia, GA</option>\n                        <option class=\"options\" value=\"HI\">Hawaii, HI</option>\n                        <option class=\"options\" value=\"ID\">Idaho, ID</option>\n                        <option class=\"options\" value=\"IL\">Illinois, IL</option>\n                        <option class=\"options\" value=\"IN\">Indiana, IN</option>\n                        <option class=\"options\" value=\"IA\">Iowa, IA</option>\n                        <option class=\"options\" value=\"KS\">Kansas, KS</option>\n                        <option class=\"options\" value=\"KY\">IKentucky, KY</option>\n                        <option class=\"options\" value=\"LA\">Louisiana, LA</option>\n                        <option class=\"options\" value=\"ME\">Maine, ME</option>\n                        <option class=\"options\" value=\"MD\">Maryland, MD</option>\n                        <option class=\"options\" value=\"MA\">Massachusetts, MA</option>\n                        <option class=\"options\" value=\"MI\">Michigan, MI</option>\n                        <option class=\"options\" value=\"MN\">Minnesota, MN</option>\n                        <option class=\"options\" value=\"MS\">Mississippi, MS</option>\n                        <option class=\"options\" value=\"MO\">Missouri, MO</option>\n                        <option class=\"options\" value=\"MT\">Montana, MT</option>\n                        <option class=\"options\" value=\"NE\">Nebraska, NE</option>\n                        <option class=\"options\" value=\"NV\">Nevada, NV</option>\n                        <option class=\"options\" value=\"NJ\">New Jersey, NJ</option>\n                        <option class=\"options\" value=\"NM\">New Mexico, NM</option>\n                        <option class=\"options\" value=\"NY\">New York, NY</option>\n                        <option class=\"options\" value=\"NC\">North Carolina, NC</option>\n                        <option class=\"options\" value=\"ND\">North Dakota, ND</option>\n                        <option class=\"options\" value=\"OH\">Ohio, OH</option>\n                        <option class=\"options\" value=\"OK\">Oklahoma, OK</option>\n                        <option class=\"options\" value=\"OR\">Oregon, OR</option>\n                        <option class=\"options\" value=\"PA\">Pennsylvania, PA</option>\n                        <option class=\"options\" value=\"RI\">Rhode Island, RI</option>\n                        <option class=\"options\" value=\"SC\">South Carolina, SC</option>\n                        <option class=\"options\" value=\"SD\">South Dakota, SD</option>\n                        <option class=\"options\" value=\"TN\">Tennessee, TN</option>\n                        <option class=\"options\" value=\"TX\">Texas, TX</option>\n                        <option class=\"options\" value=\"UT\">Utah, UT</option>\n                        <option class=\"options\" value=\"VT\">Vermont, VT</option>\n                        <option class=\"options\" value=\"VA\">Virginia, VA</option>\n                        <option class=\"options\" value=\"WA\">Washington , WA</option>\n                        <option class=\"options\" value=\"DC\">\"Washington DC, DC</option>\n                        <option class=\"options\" value=\"WV\">West Virginia, WV</option>\n                        <option class=\"options\" value=\"WI\">Wisconsin, WI</option>\n                        <option class=\"options\" value=\"WY\">Wyoming, WY</option>\n                        \n                    </select>\n                    <button class=\"btn btn-next\" *ngIf=\"statefilter\"\n                    (click)=\"removeFilter('statefilter')\">\n                    Remove filter\n                  </button>\n                  </div>\n                </div>\n               \n              </div>\n              <br>\n            </form>\n          </div>\n        </section>\n        </div>\n        </div>\n        </div>\n        </section>\n        <div class=\"clearfix\"></div>\n      <div class=\"container\">\n        <div class=\"row\">\n           \n          \n            </div>\n          </div>\n          <ng-container *ngFor=\"let category of filteredAnimals\">\n            <div  *ngIf=\"category.image0 && category.title\" class=\"col-md-3 col-lg-2 col-sm-6 animated fadeIn product-wrapper\" style=\"padding:0px 5px;display:block;\" >\n            <div class=\"be-post\">\n            <a (click) = singleproduct(category,category.category,category.auctionType,category.state,category.key,category.uid) class=\"be-img-block\">\n            <img  src=\"{{category.image0}}\"  alt=\"...\" >\n            </a>\n            <a (click) = singleproduct(category,category.category,category.auctionType,category.state,category.key,category.uid) class=\"be-post-title\" style=\"font-weight:bolder;\">\n              {{category.title}}</a>\n              <span>\n            <a  class=\"be-post-tag\" > {{category.description}}</a>\n            \n            </span>\n            <div class=\"item-btn \">\n              <div class=\"pull-left\">\n                <button *ngIf=\"category.auctionType=='buy-it-now' && category.category=='Jobs'\" class=\"btn btn-next\" >Apply Now</button>                    \n                <button *ngIf=\"category.auctionType=='buy-it-now' && category.category != 'Jobs'\" class=\"btn btn-next\" >Buy Now</button>\n              <button *ngIf=\"category.auctionType=='reserve' || category.auctionType=='non-reserve'\"  class=\"btn btn-alert\">Bid Now</button>\n            \n            </div>\n            <div class=\"pull-right\">\n                <span style=\"color:#e74c3c; font-weight:bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{category.startPrice}}</span>\n            </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            \n          \n            \n            </div>\n            <div class=\"clearfix\" *ngIf=\"(ind + 1) % 3 == 0\"></div>\n            \n            </div>\n            \n            \n            </ng-container>\n            <div class=\"clearfix\"></div>\n            <div *ngIf=\"filteredAnimals < 1\" class=\"no-record text-center\">\n              <i class=\"fa fa-exclamation-triangle\" style=\"font-size:40px\"></i>\n              <h1>No Record Found!</h1>\n            </div>\n"

/***/ }),

/***/ "../../../../../src/app/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FiltersComponent = (function () {
    function FiltersComponent(_shareData, db, sg, route, _nav) {
        // this.prodmodel = this.front.models ;
        // this.applyFilters()
        var _this = this;
        this._shareData = _shareData;
        this.db = db;
        this.sg = sg;
        this.route = route;
        this._nav = _nav;
        this.prodmodel = [];
        this.productFilteredList = [];
        this.modal = {};
        this.filters = {};
        this.category = [];
        this._shareData.returnSubject().subscribe(function (data) {
            _this.prodmodel = data;
            console.log("shared", data);
        });
        this.db.list('/products', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.category.push(snapshot.key);
            });
            console.log("cat key", _this.category);
        });
    }
    FiltersComponent.prototype.applyFilters = function () {
        this.filteredAnimals = __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](this.prodmodel, __WEBPACK_IMPORTED_MODULE_3_lodash__["conforms"](this.filters));
        console.log(this.filteredAnimals);
    };
    /// filter property by equality to rule
    FiltersComponent.prototype.filterExact = function (property, rule) {
        this.filters[property] = function (val) { return val == rule; };
        this.applyFilters();
        console.log(property, rule);
    };
    /// filter  numbers greater than rule
    FiltersComponent.prototype.filterGreaterThan = function (property, rule) {
        this.filters[property] = function (val) { return val > rule; };
        this.applyFilters();
    };
    FiltersComponent.prototype.filterLessThan = function (property, rule) {
        this.filters[property] = function (val) { return val < rule; };
        this.applyFilters();
    };
    /// filter properties that resolve to true
    FiltersComponent.prototype.filterBoolean = function (property, rule) {
        if (!rule)
            this.removeFilter(property);
        else {
            this.filters[property] = function (val) { return val; };
            this.applyFilters();
        }
    };
    /// removes filter
    FiltersComponent.prototype.removeFilter = function (property) {
        console.log(property);
        delete this.filters[property];
        this[property] = null;
        this.applyFilters();
    };
    FiltersComponent.prototype.ngOnInit = function () {
        //   this.route.queryParams
        //   .subscribe(params  => {
        //     this.cat = params.cat;
        //     this.state = params.state
        //     console.log(params);
        //   })
        //   if(this.cat != ""){
        //   this.productFilteredList=[];
        //   this.prodmodel.filter((product: any) => {
        //     console.log(product['category'])
        //     if(product['category'] ){
        //       if(product['category'].toLowerCase().indexOf(this.cat.toLowerCase()) > -1){
        //         this.productFilteredList.push(product);
        //       }
        //     }
        //   });
        //   console.log(this.productFilteredList);
        // }
        // else{
        //   this.productFilteredList = [];
        // }
        // let val = $('#myRange').value();
        // alert('val');
    };
    FiltersComponent.prototype.singleproduct = function (acess, catname, auction, state, pid, uid) {
        console.log(acess, catname, auction, state, pid, uid);
        this.sg['category'] = catname;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this.sg['uid'] = uid;
        console.log("parent auction   ", this.sg['AuctionType']);
        //  localStorage.setItem("singleproduct",JSON.stringify(acess));
        var url = 'item/' + pid + '/' + acess.title;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
    };
    return FiltersComponent;
}());
FiltersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-filters',
        template: __webpack_require__("../../../../../src/app/filters/filters.component.html"),
        styles: [__webpack_require__("../../../../../src/app/filters/filters.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_simple_global__["SimpleGlobal"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _e || Object])
], FiltersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=filters.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#spanstyle,p#spanstyle1{font-family:ShopifySans,Helvetica,Arial,'Lucida Grande',sans-serif}.footer-categories{text-align:center}.footer-block a{font-size:18px!important;color:#7C7C7C;font-weight:700;line-height:34px}.footer-bottom{font-size:14px;color:#eee;padding:10px;background:#1D1D1D}.footer-bottom ul li:last-child{border-right:none}.footer-bottom ul li{display:inline;padding:0 5px;border-right:solid 1px}.apps,.apps2{padding-left:30px}ul.sc_buttons li{display:inline-block}#spanstyle{line-height:1.5}#spanstyle1>a{color:#c00}#another::before{content:'';margin-left:20%}.apps{margin-bottom:0}@media screen and (max-width:991px){#pad{padding-left:15px!important}}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n\n  <div class=\"footer-bottom\">\n    <div class=\"container-fluid custom-container\">\n      <div class=\"row\">\n        <div class=\"col-md-9 col-lg-9 col-sm-12 col-xs-12\">\n          <ul>\n            <li><a onclick=\"topFunction()\" routerLink='/privacy-policy'>Privacy Policy</a></li>\n            <li><a onclick=\"topFunction()\" routerLink='/terms-and-conditions'>Terms & conditions </a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3 col-lg-3 col-sm-12 col-xs-12 clearfix\">\n          <div class=\"\">\n            <span class=\"copy\">© 2018. All rights reserved. <span class=\"white\" style=\"color:#cc0000;font-size:18px;\">Sell4Bids</span></span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooterComponent = (function () {
    function FooterComponent(_shareData, _nav, db) {
        // this.cat = this.front.category 
        this._shareData = _shareData;
        this._nav = _nav;
        this.db = db;
        this.cat = [];
        this.model = {};
    }
    FooterComponent.prototype.mainFunction = function () {
        var _this = this;
        this.db.list('/categories', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.cat.push(snapshot.key);
            });
        });
    };
    FooterComponent.prototype.subscriber = function () {
        console.log(this.model['email']);
        this.db.list('subscribed_users').push({
            email: this.model['email']
        });
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'success',
            html: 'Thanks for signing up to receive the latest News and Deals from Sell4Bids.'
        });
        this.model['email'] = undefined;
    };
    FooterComponent.prototype.loadprodut = function (item) {
        localStorage.setItem("item1", item);
        this.product = item;
        this._shareData.vendorInfo(item);
        var sth = 'products/category/' + item;
        sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        // this.cat_comp.constructor_two();
        console.log("sth: ", sth);
        this._nav.navigate([sth]);
    };
    FooterComponent.prototype.ngOnInit = function () {
        this.mainFunction();
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
], FooterComponent);

var _a, _b, _c;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/front/front.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/front/front.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"showSpinner\" class=\"app-preloader\" >\n    <app-loading-spinner ></app-loading-spinner>\n</div> -->\n<div id=\"carousel-example-generic\" class=\"carousel slide margin-top-55\" data-ride=\"carousel\">\n  <ngx-slick class=\"container cat-slider-homepage\" #slickModal=\"slick-modal\" [config]=\"slideConfig\"id=\"cat-sliderr\">\n    <div ngxSlickItem *ngFor=\"let item of array_categories\" (click)=\"getcategory(item)\" class=\"categories-slider-wrapper\">\n      <img src=\"assets/img/cat-icons/{{item}}.png\" title=\"{{item}}\">\n      <span title=\"{{item}}\">{{item}}</span>\n    </div>\n  </ngx-slick>\n</div>\n\n\n<div class=\"clearfix\"></div>\n\n<!-- search box -->\n\n\n\n<!-- search box end -->\n\n<div class=\"clearfix\"></div>\n<div class=\"item-video hidden-xs hidden-sm\">\n  <div class=\"item-video-inner\">\n    <div class=\"head-bg slider-above-video\" style=\"margin-bottom:0;padding:0;\">\n    </div>\n  </div>\n</div>\n\n\n  <div id=\"content-block\">\n    <!-- <select [(ngModel)]=\"userState\" name=\"userState\" (change)=\"getState()\">\n      <option *ngFor=\"let state of dict_state\" >{{state}}</option>\n    </select> -->\n    <div class=\"container-fluid custom-container\">\n      <div id=\"masonry\" class=\"delay\">\n        <!-- <ng-container *ngFor=\"let acess of record;let ind=index\" class=\" animated wow zoomIn\"> -->\n        <div *ngFor=\"let acess of record;let ind=index\">\n          <div *ngIf=\"acess.title\" class=\" prod_item\" (click)=singleproduct(acess.title,acess,acess.category,acess.auctionType,acess.state,acess.$key,acess.uid)>\n            <div class=\"overlay-img\"></div>\n            <img *ngIf=\"acess.image0_small\" src=\"{{acess.image0_small}}\" alt=\"Images\" />\n            <img *ngIf=\"acess.image0 && !acess.image0_small\" src=\"{{acess.image0}}\" alt=\"Images\" />\n            <img *ngIf=\"!acess.image0 && !acess.image0_small\" src=\"../../assets/img/Placeholder(Background)512.png\" alt=\"Images\" />\n\n\n            <a class=\"be-post-title\" style=\"font-weight:bolder;\">\n              {{acess.title}}</a>\n            <div class=\"sh-bid-buy-btns \">\n              <button *ngIf=\"acess.auctionType=='buy-it-now' && acess.category =='Jobs'\" class=\"btn btn-next\">Apply Now</button>\n              <button *ngIf=\"acess.quantity >= 1 && (acess.auctionType=='buy-it-now' && acess.category != 'Jobs')\" class=\"btn btn-next\">Buy at ${{acess.startPrice}}</button>\n              <button *ngIf=\"acess.auctionType=='reserve' || acess.auctionType=='non-reserve'\" class=\"btn btn-alert\" style=\"background:#000 !important\">Bid at ${{acess.startPrice}}</button>\n              <button *ngIf=\"acess.quantity == 0 && (acess.auctionType=='buy-it-now' && acess.category != 'Jobs')\" class=\"btn btn-previous\">Sold </button>\n            </div>\n          </div>\n        </div>\n        <!-- </ng-container> -->\n        <div class=\"clearfix\"></div>\n        <div *ngIf=\"!finished\">\n          <!-- Loading more movies... -->\n        </div>\n        <div *ngIf=\"finished\">\n          <!-- End of database... That's all folks! -->\n        </div>\n      </div>\n      <div *ngIf=\"!showSpinner\" class=\"text-center loadmore-holder\">\n        <button class=\"btn btn-next load-more load-more-btn\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"1000\"\n          (click)=\"onScroll()\">\n          <i style=\"margin-right: 0 !important;\" class=\"fa fa-plus\"></i>\n        </button>\n        <br> SHOW MORE\n      </div>\n    </div>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Download The Free Sell4Bids App</h4>\n          </div>\n          <div class=\"modal-body text-center\">\n            <a href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\">\n              <img style=\"height:50px;margin:10px 0 0 10px\" src=\"assets/img/googleplayx233.png\">\n            </a>\n            <a href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\">\n              <img style=\"height:50px;margin:10px 0 0 10px\" src=\"assets/img/appstorex233.png\">\n            </a>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<div class=\"play-store-icons-wrapper\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <img class=\"download-mob-image\" src=\"../../assets/img/Splash.png\" alt=\"google play store\">\n      </div>\n\n      <div class=\"col-md-6 col-sm-6 col-xs-6\">\n        <div class=\"play-store-inner\">\n          <h4>\n            <span>Download</span> and Experience Our Super Cool Next Generation Mobile Auction & Jobs/Services Mobile App Now.</h4>\n          <ul class=\"play-store-img\">\n            <li>\n              <a href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\">\n                <img class=\"iosBadge\" src=\"../../assets/img/apple-store.png\" alt=\"IOS\">\n              </a>\n            </li>\n            <li>\n              <a href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\">\n                <img class=\"androidBadge\" src=\"../../assets/img/google-play.png\" alt=\"google play store\">\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-3\">\n        <img class=\"download-mob-image pull-right\" src=\"../../assets/img/Splash.png\" alt=\"google play store\">\n      </div>\n    </div>\n    <!--<a routerlink=\"/privacy-policy\" href=\"/privacy-policy\" class=\"btn subscribe-btn pull-left\" (click)=\"subscriber()\" >Privacy Policy</a>-->\n    <!--<a routerlink=\"/terms-and-conditions\" href=\"/terms-and-conditions\" class=\"btn subscribe-btn pull-right\" (click)=\"subscriber()\" >Terms & Conditions</a>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/front/front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product__ = __webpack_require__("../../../../../src/app/front/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cookie_service__ = __webpack_require__("../../../../../src/app/services/cookie-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__messaging_service__ = __webpack_require__("../../../../../src/app/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());

var FrontComponent = (function () {
    function FrontComponent(afAuth, deviceService, _shareData, msgService, cookieService, sg, authService, _ps, db, _nav) {
        this.afAuth = afAuth;
        this.deviceService = deviceService;
        this._shareData = _shareData;
        this.msgService = msgService;
        this.cookieService = cookieService;
        this.sg = sg;
        this.authService = authService;
        this._ps = _ps;
        this.db = db;
        this._nav = _nav;
        //////////////////////////////// Recent items//////////////////////////
        this.recentitems = [];
        this.cookieValue = [];
        this.order = 'chargeTime';
        this.product = [];
        this.catidmodel = [];
        this.catid = [];
        this.models = [];
        this.userid = [];
        this.userinfo = [];
        this.searchcat = [];
        // items: FirebaseListObservable<any>;
        //Pagination portion
        this.products_key = [];
        this.product_path_array_counter = 0;
        this.product_path_array = [];
        this.pagination_counter = 0;
        this.end_of_scroll = 0;
        this.lastkey_check = 0;
        this.loop_check_first_time = 0;
        this.loop_check_f = 0;
        this.loop_check_f_limit = 0;
        this.control_code_run = 0;
        this.movies = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.batch = 3; // size of each query
        this.lastKey = ''; // key to offset next query from
        this.finished = false; // boolean when end of database is reached
        this.prod = [];
        this.category = [];
        this.path_first = '';
        this.check = 0;
        //path = '/products/Accessories/buy-it-now/DC'
        this.path = '';
        this.showSpinner = true;
        this.auction = [];
        this.catname = [];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_15__angular_forms__["FormControl"]();
        this.upload = new __WEBPACK_IMPORTED_MODULE_14__product__["a" /* Product */]();
        this.options = [
            new User('Mary'),
            new User('Shelley'),
            new User('Igor')
        ];
        this.ascending = true;
        this.productList = [];
        this.productFilteredList = [];
        this.filterloaded = false;
        this.modal = {};
        this.filters = {};
        ////////////////////End////////////////////
        this.uploadArray = [];
        this.array_categories = [
            "Jobs", "Accessories", "Antiques", "Art and Crafts", "Baby and Kids", "Bags",
            "Boats and Marines", "Books", "Business Equipment", "Campers and RVs", "Cars and Accessories",
            "CDs and DVDs", "Clothing", "Collectible Toys", "Computers and Accessories", "Costumes",
            "Coupons", "Electronics", "Exercise", "Fashion", "Food and Beverages", "Free and Donation",
            "Furniture", "Gadgets", "Games", "Halloween", "Hobbies",
            "Home Decor", "Home and Garden", "Household Appliances", "Jewelry", "Kids Toys",
            "Makeup and Beauty", "Motorcycles and Accessories", "Musical Equipment", "Outdoor and Camping", "Pet Accessories",
            "Tickets", "Tools", "Phone and Tablets", "Shoes", "Sports Equipment",
            "Video Games", "Wallets", "Watches", "Wedding", "Others"
        ];
        this.auction_type = [
            "buy-it-now", "reserve", "non-reserve"
        ];
        this.dict_state = [
            "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
            "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
            "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX",
            "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"
        ];
        this.deviceInfo = null;
        //////////////////////// Pagination/////////////////////////
        this.endkeys = [];
        this.record = [];
        // ngOnInit() {
        //   window.scrollTo(0,0);
        // }
        ///Pagination Part
        this.query = '';
        for (var i = 0; i <= 70; i++) {
            this.endkeys[i] = [];
            for (var j = 0; j < 3; j++) {
                this.endkeys[i][j] = 0;
            }
        }
        this.slideConfig = {
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: false,
            prevArrow: '',
            nextArrow: '',
            responsive: [
                {
                    breakpoint: 651,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    }
    ;
    FrontComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        // console.log(this.deviceInfo);
    };
    FrontComponent.prototype.mainFunction = function () {
        // if(this.deviceInfo.device.toLowerCase( )=="iphone" ||this.deviceInfo.device.toLowerCase( )=="ipad")
        // {
        //   window.location.href = 'sell4bids://';
        var _this = this;
        // }
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var profdict_1 = {};
                var tempstate_1;
                _this.db.list('/users/' + res.uid, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        profdict_1[snapshot.key] = snapshot.val();
                        tempstate_1 = profdict_1['state'];
                        _this.fetchingState = tempstate_1;
                    });
                    // console.log("profile",this.fetchingState);
                    // this.fetchingState = this.userState
                    if (_this.fetchingState == undefined) {
                        _this.fetchingState = "NY";
                    }
                    _this.record = [];
                    for (var i = 0; i <= 70; i++) {
                        _this.endkeys[i] = [];
                        for (var j = 0; j < 3; j++) {
                            _this.endkeys[i][j] = 0;
                        }
                    }
                    _this.getData();
                });
            }
            else {
                _this.fetchingState = "NY";
                // this.fetchingState = this.userState
                _this.record = [];
                for (var i = 0; i <= 70; i++) {
                    _this.endkeys[i] = [];
                    for (var j = 0; j < 3; j++) {
                        _this.endkeys[i][j] = 0;
                    }
                }
                _this.getData();
            }
        });
    };
    FrontComponent.prototype.getState = function () {
        this.fetchingState = this.userState;
        this.record = [];
        for (var i = 0; i <= 70; i++) {
            this.endkeys[i] = [];
            for (var j = 0; j < 3; j++) {
                this.endkeys[i][j] = 0;
            }
        }
        this.getData();
    };
    FrontComponent.prototype.sweet = function () {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Download The Free Sell4Bids App',
            type: 'error',
            html: ' <a href="https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en" target="_blank">\n' +
                '            <img src="assets/img/Adroid-Badge.png" style="width: 150px">\n' +
                '          </a>' +
                '<a href="https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8" target="_blank">\n' +
                '<img src="assets/img/IOS-Badge.png" style="width: 150px;height:65px">\n' +
                '</a>',
            focusConfirm: false,
        });
    };
    FrontComponent.prototype.getData = function () {
        var _this = this;
        var catIndex = 0;
        var _loop_1 = function (cat) {
            var i = 0;
            var aucIndex = 0;
            var _loop_2 = function (auction) {
                var query = null;
                var qcount = 0;
                if (this_1.endkeys[catIndex][aucIndex] == 0) {
                    query = {
                        orderByChild: "chargeTime",
                        limitToLast: this_1.batch,
                    };
                    qcount = 0;
                }
                else {
                    qcount = 1;
                    query = {
                        orderByChild: "chargeTime",
                        limitToLast: this_1.batch,
                        endAt: this_1.endkeys[catIndex][aucIndex]
                    };
                }
                var path = 'products/' + this_1.array_categories[catIndex] + '/' + this_1.auction_type[aucIndex] + '/' + this_1.fetchingState;
                var catIndexTemp = catIndex;
                var aucIndexTemp = aucIndex;
                this_1.db.list(path, {
                    query: query
                }).subscribe(function (items) {
                    var count = 0;
                    items.reverse();
                    items.forEach(function (item) {
                        count++;
                        if (qcount == 1 && count == items.length) {
                        }
                        else {
                            item['category'] = _this.array_categories[cat];
                            item['auctionType'] = _this.auction_type[auction];
                            item['state'] = _this.fetchingState;
                            _this.record.push(item);
                            _this.showSpinner = true;
                        }
                        _this.endkeys[catIndexTemp][aucIndexTemp] = item['chargeTime'];
                    });
                });
                aucIndex++;
            };
            for (var auction in this_1.auction_type) {
                _loop_2(auction);
            }
            catIndex++;
        };
        var this_1 = this;
        for (var cat in this.array_categories) {
            _loop_1(cat);
        }
    };
    FrontComponent.prototype.onSubmit = function (obj) {
        var searchUrl = 'filters';
        this._nav.navigate([searchUrl], { queryParams: { cat: obj.value['category'], state: obj.value['state'] } });
    };
    /// filter property by equality to rule
    FrontComponent.prototype.singleproduct = function (title, acess, catname, auction, state, pid, uid) {
        // console.log(catname, auction, state, pid, uid);
        //  this.cookieService.set(acess)
        // this.cookieService.set( 'Test', JSON.stringify(acess)[ind] );
        // console.log(acess, catname, auction, state, pid);
        this.sg['category'] = catname;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this.sg['uid'] = uid;
        // console.log("parent auction   ", this.sg['AuctionType'])
        //  localStorage.setItem("singleproduct",JSON.stringify(acess));
        var urlTitle;
        var mainTitle;
        urlTitle = title.replace(/[^A-Za-z ]/g, "");
        mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
        var url = 'item/' + mainTitle;
        this._nav.navigate([url], { queryParams: { cat: catname, auction: auction, state: state, pid: pid, uid: uid } });
    };
    FrontComponent.prototype.singlesearch = function (acess) {
        localStorage.setItem("singleproduct", JSON.stringify(acess));
        var url = 'item/' + acess.title;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
    };
    FrontComponent.prototype.onScroll = function () {
        this.getData();
    };
    FrontComponent.prototype.getMovies = function (path) {
    };
    FrontComponent.prototype.getcategory = function (item) {
        // console.log("category", item)
        localStorage.setItem("item1", item);
        this._shareData.vendorInfo(item);
        var sth = 'products/category/' + item;
        sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        //this.cat_comp.empty_function()
        // console.log("sth: ", sth);
        this._nav.navigate([sth]);
    };
    FrontComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.mainFunction();
        this.msgService.getPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
        // this.cookieValue.push(JSON.parse(this.cookieService.get('Test')));
        // this.cookieService.get()
        this.loadScript('assets/script/scripts.js');
        // $('.cat-slider-homepage').fadeOut(0);
        // setTimeout(function () {
        //   $('.cat-slider-homepage').slick({
        //     infinite: true,
        //     slidesToShow: 6,
        //     slidesToScroll: 3,
        //     autoplay: false,
        //     prevArrow: '',
        //     nextArrow: '',
        //     responsive: [
        //       {
        //         breakpoint: 651,
        //         settings: {
        //           slidesToShow: 4,
        //           slidesToScroll: 1
        //         }
        //       }
        //     ]
        //   });
        // }, 100);
        // $('.CategorySlider').fadeIn(500).delay(200);
    };
    // ngOnDestroy(){
    //   this.subscription.unsubscribe();
    // }
    FrontComponent.prototype.loadScript = function (url) {
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    return FrontComponent;
}());
FrontComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-front',
        template: __webpack_require__("../../../../../src/app/front/front.component.html"),
        styles: [__webpack_require__("../../../../../src/app/front/front.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_19_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_19_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_18__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_18__services_shared_service__["a" /* SharedData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_17__messaging_service__["a" /* MessagingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__messaging_service__["a" /* MessagingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_16__services_cookie_service__["a" /* CookieServiceLocal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__services_cookie_service__["a" /* CookieServiceLocal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_ng2_simple_global__["SimpleGlobal"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__auth_service__["a" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _k || Object])
], FrontComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ "../../../../../src/app/front/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/geo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire__ = __webpack_require__("../../../../geofire/dist/geofire.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_geofire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_geofire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeoService = (function () {
    function GeoService(db) {
        this.db = db;
        this.hits = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        /// Reference database location for GeoFire
        this.dbRef = this.db.list('/locations');
        this.geoFire = new __WEBPACK_IMPORTED_MODULE_2_geofire__(this.dbRef.$ref);
    }
    /// Adds GeoFire data to database
    GeoService.prototype.setLocation = function (key, coords) {
        this.geoFire.set(key, coords)
            .then(function (_) { return console.log('location updated'); })
            .catch(function (err) { return console.log(err); });
    };
    /// Queries database for nearby locations
    /// Maps results to the hits BehaviorSubject
    GeoService.prototype.getLocations = function (radius, coords) {
        var _this = this;
        this.geoFire.query({
            center: coords,
            radius: radius
        })
            .on('key_entered', function (key, location, distance) {
            var hit = {
                location: location,
                distance: distance
            };
            var currentHits = _this.hits.value;
            currentHits.push(hit);
            _this.hits.next(currentHits);
        });
    };
    return GeoService;
}());
GeoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], GeoService);

var _a;
//# sourceMappingURL=geo.service.js.map

/***/ }),

/***/ "../../../../../src/app/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagingService = (function () {
    function MessagingService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.messaging = __WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"]();
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    MessagingService.prototype.updateToken = function (token) {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (user) {
            if (!user)
                return;
            var data = { 'token': token };
            _this.db.object("users/" + user.uid).update(data).then(function (sucess) {
                // alert("junaid");
            });
        });
    };
    MessagingService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            console.log(token);
            _this.updateToken(token);
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.messaging.onMessage(function (payload) {
            console.log("Message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    return MessagingService;
}());
MessagingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], MessagingService);

var _a, _b;
//# sourceMappingURL=messaging.service.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.afAuth.authState.map(function (auth) {
            if (Object(__WEBPACK_IMPORTED_MODULE_2_util__["isNullOrUndefined"])(auth)) {
                _this.router.navigate(['/login']);
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("Please Login First", "", "warning");
                return false;
            }
            else {
                return true;
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"menu-bar-main\">\n    <div id=\"mySidenav\" class=\"sidenav\">\n      <div class=\"user-box\">\n        <div class=\"user-img\">\n          <a href=\"#\">\n            <img src=\"../../assets/img/Blank-Photo.jpg\">\n          </a>\n        </div>\n        <a href=\"#\">User Name</a>\n      </div>\n\n      <span href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</span>\n\n      <a href=\"/\" class=\"active\"><img src=\"../../assets/img/android-Icons/Home@16px.png\">Home</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Sell%20Now@16px.png\">Sell Now</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Search%20Categories@16px.png\">Search Categories</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Search%20Filters@16px.png\">Search Filters</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\" ><img src=\"../../assets/img/android-Icons/My%20Sell4Bids@16px.png\">My Sell4Bids</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Jobs@16px.png\">Jobs</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/My%20Chat@16px.png\">My Chat</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/My%20Watch%20List@16px.png\">My Watch List</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/My%20Profile@16px.png\">My Profile</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Notifications@16px.png\">Notifications</a>\n      <p>About Sell4Bids</p>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/My%20Sell4Bids@16px.png\">What is Sell4Bids</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/How%20it%20Works@16px.png\">How it Works?</a>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Establish%20Contact@16px.png\">Establish Contact</a>\n      <!--<p>Legal</p>-->\n      <!--<a href=\"\"><i class=\"fas fa-file-contract\" (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"></i>Terms & Conditions</a>-->\n      <!--<a href=\"\"><i class=\"fas fa-shield-alt\" (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"></i>Privacy Policy</a>-->\n      <!--<a href=\"\"><i class=\"fas fa-handshake\" (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"></i>Partnership</a>-->\n      <!--<a href=\"\"><i class=\"far fa-question-circle\" (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"></i>FAQs</a>-->\n      <a href=\"\"><img src=\"../../assets/img/android-Icons/My%20Sell4Bids@16px.png\">Invite</a>\n      <p>Settings</p>\n      <a (click)=\"closeNav()\" data-toggle=\"modal\" data-target=\"#SweetModal\"><img src=\"../../assets/img/android-Icons/Rate%20Sell4Bids@16px.png\">Rate Sell4Bids</a>\n      <a href=\"\"><img src=\"../../assets/img/android-Icons/Logout@16px.png\">Logout</a>\n    </div>\n\n    <span class=\"open-sidenav\" (click)=\"openNav()\"><i class=\"fas fa-bars\"></i></span>\n\n    <input type=\"search\" [(ngModel)]=\"search_text\" placeholder=\"Search Sell4Bids\" data-toggle=\"modal\" data-target=\"#searchModal\">\n    <a routerLink=\"/\"><img class=\"logo\" src=\"../../assets/img/hamer.png\"></a>\n    <div class=\"icons-box\">\n      <i class=\"fas fa-microphone\" (click)=\"triggerMike()\"></i>\n      <!--<a href=\"#\"><i class=\"fas fa-filter\"></i></a>-->\n\n      <!--<input *ngIf=\"showInput\"  [(ngModel)]=\"search_text\" class=\"search-input\" autofocus/>-->\n      <!--<div [ngClass]=\"showInput ? 'indicator' : 'floatingIndicator'\">-->\n        <!--<img class=\"mike\" (click)=\"triggerMike()\" src=\"assets/mike.png\">-->\n        <!--<div class=\"spinner\" *ngIf=\"blink\"></div>-->\n      <!--</div>-->\n\n      <a href=\"#\" class=\"invite-btn\" data-toggle=\"modal\" data-target=\"#myModal\">Invite</a>\n    </div>\n  </div>\n</nav>\n\n\n\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"margin-top: 120px;\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Download and Experience Our Super Cool Next Generation Mobile Auction & Jobs/Services Mobile App Now.</h4>\n      </div>\n      <div class=\"modal-body text-center modal-height\">\n        <a href=\"https://www.sell4bids.com/\" title=\"https://www.sell4bids.com/\" class=\"display-inline-b icons-dialog-box\"><img class=\"logo\" src=\"../../assets/img/hamer.png\"></a>\n        <a class=\"display-inline-b play-store-responsive\" href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\" >\n          <img style=\"height:50px;margin:0;\" src=\"../../assets/img/google-play.png\">\n        </a>\n        <a class=\"display-inline-b play-store-responsive\" href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\" >\n          <img style=\"height:50px;margin:0;\" src=\"../../assets/img/apple-store.png\">\n        </a>\n        <a class=\"btn-copy icons-dialog-box\" (click)=\"copyMessage('https://m.sell4bids.com/')\" title=\"click to copy\" ><i class=\"far fa-copy\"></i>Copy link</a>\n      </div>\n      <!--<div class=\"modal-footer\">-->\n      <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n      <!--</div>-->\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"searchModal\" role=\"dialog\" style=\"z-index: 9999;\">\n  <div class=\"modal-dialog sh-margin-0\">\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"background-color: transparent;\">\n      <div class=\"modal-header\" style=\"background-color: transparent;\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body text-center\">\n        <input (keyup.enter)=\"searchitem(searchprod.value)\" #searchprod [(ngModel)]=\"search_text\" placeholder=\"Search Sell4Bids\" class=\"search-input\" autofocus/>\n        <div [ngClass]=\"showInput ? 'indicator' : 'floatingIndicator'\" class=\"mike-box\">\n          <!--<img class=\"mike\" (click)=\"triggerMike()\" src=\"assets/mike.png\">-->\n          <i class=\"fas fa-microphone\" (click)=\"triggerMike()\"></i>\n          <div class=\"spinner\" *ngIf=\"blink\"></div>\n        </div>\n        <ul  class=\"results\" >\n          <div *ngFor=\"let search of productFilteredList;let ind=index\" class=\"search-result\">\n            <li *ngIf=\"ind < 10\"  style=\"text-align:left;font-size:18px;\"  >\n              <a  data-dismiss=\"modal\" (click) = singleproduct(search,search.category,search.auctionType,search.state,search.key,search.uid) style=\"cursor:pointer\" >\n                {{search?.title }}<br />\n              </a>\n            </li>\n          </div>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"SweetModal\" role=\"dialog\">\n  <div class=\"modal-dialog sweet-modal\" style=\"margin-top: 80px;\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header sweet-modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body sweet-modal-body text-center\">\n        <div class=\"for-text\">\n          <h2 class=\"modal-title\">Download The Free Sell4Bids App</h2>\n          <p>Fast, Easy, Cool. Sell4Bids brings the Online Auction Experience to you like NEVER BEFORE!</p>\n          <a class=\"display-inline-b width100-playstore\" href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\" >\n            <img src=\"../../assets/img/google-play.png\">\n          </a>\n          <a class=\"display-inline-b width100-playstore\" href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\" >\n            <img src=\"../../assets/img/apple-store.png\">\n          </a>\n        </div>\n        <div class=\"image-sec\">\n          <img src=\"../../assets/img/modal-image.png\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_speechservice__ = __webpack_require__("../../../../../src/app/services/speechservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var NavBarComponent = (function () {
    function NavBarComponent(_shareData, sg, _ps, db, afa, toastr, vcr, fb, authService, afAuth, _nav, speech) {
        this._shareData = _shareData;
        this.sg = sg;
        this._ps = _ps;
        this.db = db;
        this.afa = afa;
        this.toastr = toastr;
        this.fb = fb;
        this.authService = authService;
        this.afAuth = afAuth;
        this._nav = _nav;
        this.speech = speech;
        this.currentuser = {};
        this.model = {};
        this.animate = 'flyRight'; // you can override any options available
        this.newestOnTop = false;
        this.showCloseButton = true;
        this.prof_dict = {};
        this.movies = [];
        this.startAt = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.endAt = new __WEBPACK_IMPORTED_MODULE_8_rxjs_Subject__["Subject"]();
        this.catkey = [];
        this.lastKeypress = 0;
        this.login_check = 0;
        this.productList = [];
        this.productFilteredList = [];
        this.filterloaded = false;
        // private start$: Subject<string> = new Subject<string>();
        // private end$: Subject<string> = new Subject<string>();
        this.cat = [];
        this.auctionType = [];
        this.prodkey = [];
        this.prodmodel = [];
        this.uid = [];
        this.mainmodel = [];
        this.notification = [];
        this.unread = 0;
        this.search_text = '';
        this.blink = false;
        this.spokenText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.error = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showInput = true;
    }
    NavBarComponent.prototype.mainFunction = function () {
        var _this = this;
        ///////////////////// search code///////////////////////////////////
        // this.cat = this.front.category;
        // this.auctionType = this.front.auction;
        // this.prodkey = this.front.catidmodel;
        // this.prodmodel = this.front.models;
        // this.uid = this.front.userid;
        this._shareData.returnSubject().subscribe(function (data) {
            _this.prodmodel = data;
            // console.log("shared",data) ;
        });
        ///////////////////// End /////////////////////////////////////////
        // this.toastr.setRootViewContainerRef(vcr);
        this.itemsSubscription = this.db.list('/categories', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.catkey.push(snapshot.key);
            });
            // console.log("cat key", this.catkey);
        });
        this.user = this.afAuth.authState;
        this.check_currentuser = 0;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentuser = res.uid;
                _this.itemsSubscription = _this.db.list('/users/' + _this.currentuser, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    _this.prof_dict = {};
                    snapshots.forEach(function (snapshot) {
                        _this.prof_dict[snapshot.key] = snapshot.val();
                    });
                });
            }
            else {
                //console.log('user not logged in');
            }
        });
    };
    ////////////////////////////////////////////// Filter search/////////////////////////
    NavBarComponent.prototype.filter = function (element) {
        var _this = this;
        // console.log(element);
        if (element != "") {
            this.productFilteredList = [];
            this.prodmodel.filter(function (product) {
                // console.log(product['title'])
                if (product['title']) {
                    if (product['title'].toLowerCase().indexOf(element.toLowerCase()) > -1) {
                        _this.productFilteredList.push(product);
                    }
                }
            });
            // this.productList = this.productFilteredList;
            // console.log(this.productFilteredList);
        }
        else {
            this.productFilteredList = [];
            //  console.log("yes");
        }
    };
    NavBarComponent.prototype.initialize = function () {
        this.notification = [];
        this.unread = 0;
        ;
    };
    NavBarComponent.prototype.userNotify = function () {
        var _this = this;
        this.initialize();
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.db.list('/users/' + res.uid + '/notifications/', {
                    query: {
                        limitToLast: 30,
                        orderByChild: 'time',
                    }
                }).subscribe(function (items) {
                    // items.reverse();
                    _this.unread = 0;
                    _this.notification = [];
                    items.forEach(function (s) {
                        _this.notification.push(s);
                        if (s['read'] != 1) {
                            _this.unread++;
                            // console.log("unread",this.unread)
                        }
                    });
                    // console.info("notifications",items);
                });
            }
        });
    };
    NavBarComponent.prototype.singleNotification = function (catname, auction, state, pid, nid, nread, type, senderid) {
        var _this = this;
        // console.log(catname,auction,state,pid,nid,nread)
        this.sg['category'] = catname;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this._shareData.notiInfo({ cat: catname, auction: auction, state: state, pid: pid });
        if (nread == 0) {
            this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    _this.db.object('users/' + res.uid + '/notifications/' + nid).update({
                        read: "1"
                    });
                }
            });
        }
        if (type == "c") {
            var url = 'chat';
            this._nav.navigate([url], { queryParams: { uid: senderid } });
        }
        else {
            var url = 'item';
            url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
            this._nav.navigate([url], { queryParams: { cat: catname, auction: auction, state: state, pid: pid } });
        }
    };
    NavBarComponent.prototype.chatPage = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var num = 0;
                _this.db.object('users/' + res.uid).update({
                    unreadCount: num.toString()
                });
            }
        });
        var url = 'chat';
        this._nav.navigate([url]);
    };
    NavBarComponent.prototype.singleproduct = function (acess, catname, auction, state, pid, uid) {
        // console.log(acess, catname, auction, state, pid);
        this.sg['category'] = catname;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this.sg['uid'] = uid;
        // console.log("parent auction   ", this.sg['AuctionType'])
        //  localStorage.setItem("singleproduct",JSON.stringify(acess));
        var url = 'item/' + pid + '/' + acess.title;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
    };
    ///////////////////////////////////////////////End/////////////////////////////////////
    NavBarComponent.prototype.resolved = function (captchaResponse) {
        // console.log(`Resolved captcha with response ${captchaResponse}:`);
        this.captcha = captchaResponse;
    };
    NavBarComponent.prototype.searchitem = function (item) {
        // console.log(item)
        this._shareData.searchInfo(item);
        $('#searchModal').css('display', 'none');
        $('.modal-backdrop.in').css('opacity', 0);
        $('.modal-backdrop.in').css('display', 'none');
        $('body').removeClass('modal-open');
        $('body').css('padding-right', 0);
        var url = 'search/' + item;
        // url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
    };
    NavBarComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.removeItem("currentuser");
        localStorage.removeItem("user");
        localStorage.removeItem("currentusername");
        localStorage.removeItem("image");
        localStorage.clear();
        this._nav.navigate(['/']);
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
            type: 'success',
            html: 'You have been successfully signed out from Sell4Bids.'
        });
    };
    NavBarComponent.prototype.profile = function (currentuserid) {
        localStorage.setItem("profileid", JSON.stringify(currentuserid));
        var url = 'profile/' + currentuserid;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-');
        this._nav.navigate([url]);
        // console.log("login",currentuserid);
    };
    NavBarComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.mainFunction();
        this.userNotify();
    };
    NavBarComponent.prototype.triggerMike = function () {
        if (!('webkitSpeechRecognition' in window)) {
            console.log('please upgrade');
        }
        else {
            // url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
            this.search_text = '';
            this.blink = true;
            this.searching();
        }
    };
    NavBarComponent.prototype.searching = function () {
        var _this = this;
        this.speech.record().subscribe(function (text) {
            _this.search_text = text;
            _this._shareData.searchInfo(_this.search_text);
            var url = 'search/' + _this.search_text;
            _this._nav.navigate([url]);
            _this.blink = false;
            _this.spokenText.emit(_this.search_text);
            _this.speech.stop();
        }, function (err) {
            _this.error.emit('Failed in Fetching');
            if (err.error === 'no-speech') {
                _this.searching();
            }
        });
    };
    NavBarComponent.prototype.copyMessage = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
            text: "Copy Link",
            title: "Sell4Bids",
            type: "success",
            showConfirmButton: true,
            confirmButtonColor: "#5cb85c", timer: 2000,
            confirmButtonText: "OK",
        });
    };
    NavBarComponent.prototype.openNav = function () {
        // document.getElementById("mySidenav").style.width = "270px";
        $(".sidenav").addClass("open");
        // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.63)";
        $("body").addClass("background");
    };
    NavBarComponent.prototype.closeNav = function () {
        // document.getElementById("mySidenav").style.width = "0";
        // document.body.style.backgroundColor = "white";
        $(".sidenav").removeClass("open");
        $("body").removeClass("background");
    };
    // openNav() {
    //     $('.open-sidenav').on('click', function (e) {
    //       $("body").toggleClass("background");
    //       $('.sidenav').toggleClass('open');
    //
    //       e.stopPropagation();
    //       return false;
    //     });
    //
    //     $('*:not(.open-sidenav)').on('click', function () {
    //       $("body").removeClass("background");
    //       $('.sidenav').removeClass('open');
    //     });
    //
    //   }
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.itemsSubscription.unsubscribe();
    };
    NavBarComponent.prototype.search = function ($event) {
        if ($event.timeStamp - this.lastKeypress > 200) {
            var q = $event.target.value;
            this.startAt.next(q);
            this.endAt.next(q + "\uf8ff");
        }
        this.lastKeypress = $event.timeStamp;
    };
    NavBarComponent.prototype.sweet = function () {
        __WEBPACK_IMPORTED_MODULE_10_sweetalert2___default()({
            title: 'Download The Free Sell4Bids App',
            type: 'error',
            html: ' <a href="https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en" target="_blank">\n' +
                '            <img src="assets/img/Adroid-Badge.png" style="width: 150px">\n' +
                '          </a>' +
                '<a href="https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8" target="_blank">\n' +
                '<img src="assets/img/IOS-Badge.png" style="width: 150px;height:65px">\n' +
                '</a>',
            focusConfirm: false,
        });
        this.closeNav();
    };
    // signup() {
    // //  alert('nav');
    //   this.authService.signup(this.model.email, this.model.password);
    //   this.model.email = this.model.password = '';
    // }
    NavBarComponent.prototype.loadprodut = function (item) {
        localStorage.setItem("item1", item);
        this._shareData.vendorInfo(item);
        var sth = 'products/category/' + item;
        sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([sth]);
    };
    NavBarComponent.prototype.alljobs = function (item) {
        localStorage.setItem("item1", item);
        this._shareData.vendorInfo(item);
        var sth = 'products/category/' + item;
        sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        // this.cat_comp.constructor_two();
        // console.log("sth: ", sth);
        this._nav.navigate([sth]);
    };
    return NavBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "spokenText", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "error", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "showInput", void 0);
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'replace'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_shared_service__["a" /* SharedData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ng2_simple_global__["SimpleGlobal"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_12__services_speechservice__["a" /* SpeechRecognitionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_speechservice__["a" /* SpeechRecognitionService */]) === "function" && _m || Object])
], NavBarComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/community.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"terms-container-wrapper  container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"terms-condition-wrapper container\">\r\n        <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Community</h1>\r\n        <hr>\r\n        <h2 class=\"wow fadeInUp\" >For exceptional buying, Selling and Bidding experience Good terms among buyer, seller & bidder hold worthy importance. And Sell4Bids Ensures this!\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">For running an outstanding business in a market an interactive community structure is the core to build the chain of success Sell4Bids itself a versatile platform for quality interaction.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/copyright.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content-block\">\r\n  <div class=\"container be-detail-container\">\r\n    <div class=\"block\">\r\n      <h1 class=\"terms-title wow fadeInDown\">Privacy Policy</h1>\r\n      <div>\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs privacy-item wow fadeInDownBig\" role=\"tablist\">\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/privacy-policy\" aria-controls=\"Privacy\" role=\"tab\" data-toggle=\"tab\">Privacy</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n            <span class=\"privacy-item-nav-circle\">\r\n              <a routerLink=\"/terms-and-conditions\" aria-controls=\"Terms\" role=\"tab\" data-toggle=\"tab\">Terms</a>\r\n            </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/Community\" aria-controls=\"Community\" role=\"tab\" data-toggle=\"tab\">Community</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a  routerLink=\"/advertising\" aria-controls=\"Advertising\" role=\"tab\" data-toggle=\"tab\">Advertising</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/developers\" aria-controls=\"Developers\" role=\"tab\" data-toggle=\"tab\">Developers</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\" style=\"background-color: #d7b4f5;\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/copyright\" aria-controls=\"Copyright\" role=\"tab\" data-toggle=\"tab\">Copyright</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/trademark\" aria-controls=\"Trademark\" role=\"tab\" data-toggle=\"tab\">Trademark</a>\r\n             </span>\r\n          </li>\r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\">\r\n          <div role=\"tabpanel\" class=\"tab-pane active\" id=\"Terms\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\" style=\"color: #d7b4f5;\">Copyright</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Privacy\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Privacy policy</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Community\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Community guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Advertising\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Advertising guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Developers\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Developer guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Copyright\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Copyright</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Trademark\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Trademark</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/developers.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content-block\">\r\n  <div class=\"container be-detail-container\">\r\n    <div class=\"block\">\r\n      <h1 class=\"terms-title wow fadeInDown\">Privacy Policy</h1>\r\n      <div>\r\n        <!-- Nav tabs -->\r\n        <ul class=\"nav nav-tabs privacy-item wow fadeInDownBig\" role=\"tablist\">\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/privacy-policy\" aria-controls=\"Privacy\" role=\"tab\" data-toggle=\"tab\">Privacy</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n            <span class=\"privacy-item-nav-circle\">\r\n              <a routerLink=\"/terms-and-conditions\" aria-controls=\"Terms\" role=\"tab\" data-toggle=\"tab\">Terms</a>\r\n            </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/Community\" aria-controls=\"Community\" role=\"tab\" data-toggle=\"tab\">Community</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a href=\"#Advertising\" aria-controls=\"Advertising\" role=\"tab\" data-toggle=\"tab\">Advertising</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\" style=\"background: #364a4c;\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"developers\" aria-controls=\"Developers\" role=\"tab\" data-toggle=\"tab\">Developers</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/copyright\" aria-controls=\"Copyright\" role=\"tab\" data-toggle=\"tab\">Copyright</a>\r\n             </span>\r\n          </li>\r\n          <li role=\"presentation\">\r\n             <span class=\"privacy-item-nav-circle\">\r\n                <a routerLink=\"/trademark\" aria-controls=\"Trademark\" role=\"tab\" data-toggle=\"tab\">Trademark</a>\r\n             </span>\r\n          </li>\r\n        </ul>\r\n\r\n        <!-- Tab panes -->\r\n        <div class=\"tab-content\">\r\n          <div role=\"tabpanel\" class=\"tab-pane active\" id=\"Terms\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\" style=\"color: #364a4c;\">Developers</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Privacy\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Privacy policy</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Community\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Community guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Advertising\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Advertising guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Developers\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Developer guidelines</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Copyright\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Copyright</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div role=\"tabpanel\" class=\"tab-pane\" id=\"Trademark\">\r\n            <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Trademark</h1>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Thank you for using Sell4bids!</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Service (\"Terms\") govern your access to and use of Sell4bids website, products, and services (\"Products\"). Please read these Terms carefully. if you have any questions. By accessing or using our Products, you agree to be bound by these Terms and by our Privacy policy. You also confirm you have read and agreed to our Community guidelines and our Cookies policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">1. Using Sell4bids</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may use our Products only if you can form a binding contract with Sell4bids, and only in compliance with these Terms and all applicable laws. When you create your Sell4bids account, you must provide us with accurate and complete information. Any use or access by anyone under the age of 13 is prohibited. If you open an account on behalf of a company, organization, or other entity, then (a) \"you\" includes you and that entity, and (b) you represent and warrant that you are authorized to grant all permissions and licenses provided in these Terms and bind the entity to these Terms, and that you agree to these Terms on the entity's behalf. Some of our Products may be software that is downloaded to your computer, phone, tablet, or other device. You agree that we may automatically upgrade those Products, and these Terms will apply to such upgrades.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">2. Your content</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids allows you to post content, including photos, comments, links, and other materials. Anything that you post or otherwise make available on our Products is referred to as \"User Content.\" You retain all rights in, and are solely responsible for, the User Content you post to Sell4bids.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Copyright policy</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids has adopted and implemented the Sell4bids Copyright policy in accordance with the Digital Millennium Copyright Act and other applicable copyright laws. For more information, please read our Copyright policy.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We care about the security of our users. While we work to protect the security of your content and account, Sell4bids cannot guarantee that unauthorized third parties will not be able to defeat our security measures. We ask that you keep your password secure. Please notify us immediately of any compromise or unauthorized use of your account.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">5. Third-party links, sites, and services</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Our Products may contain links to third-party websites, advertisers, services, special offers, or other events or activities that are not owned or controlled by Sell4bids. We do not endorse or assume any responsibility for any such third-party sites, information, materials, products, or services. If you access any third party website, service, or content from Sell4bids, you do so at your own risk and you agree that Sell4bids will have no liability arising from your use of or access to any third-party website, service, or content.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">6. Termination</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4bids may terminate or suspend this license at any time, with or without cause or notice to you. Upon termination, you continue to be bound by Sections 2 and 6-12 of these Terms.</p>\r\n                <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">7. Indemnity</h2>\r\n                <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you use our Products for commercial purposes without agreeing to our Business Terms as required by Section 1(c), as determined in our sole and absolute discretion, you agree to indemnify and hold harmless Sell4bids and its respective officers, directors, employees and agents, from and against any claims, suits, proceedings, disputes, demands, liabilities, damages, losses, costs and expenses, including, without limitation, reasonable legal and accounting fees (including costs of defense of claims, suits or proceedings brought by third parties), in any way related to (a) your access to or use of our Products, (b) your User Content, or (c) your breach of any of these Terms.</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/how-it-works.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"how-it-works-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <h2>How it works for Bidders & Buyers?</h2>\r\n\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/1.png\">\r\n          <h3>1. Signup on Sell4Bids</h3>\r\n          <p>Signup on Sell4Bids is Super-Easy and takes less than a few minutes on Web or Mobile: Download our next generation Artificially Intelligent App on Google Play Store or Apple App Store.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/2.png\">\r\n          <h3>2. Search/Browse Stuff </h3>\r\n          <p> Easily Search/Browse through Sell4Bids for Auctions, Stuff, Jobs, Services, Items & more.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/3.png\">\r\n          <h3>3.\tBID or BUY</h3>\r\n          <p> Place BIDS on Online Auctions or Buy Items outright – On the Web or Mobile. It’s that Simple!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/4.png\">\r\n          <h3>4. Buy-In-Person</h3>\r\n          <p>Get your Bought/Won Items In-Person for a local exchange.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/5.png\">\r\n          <h3>5.\tLeverage our AI</h3>\r\n          <p>Leverage our bleeding edge Artificial Intelligence (AI). Sell4Bids Searches, Scores, Reviews and Compares all the Online Sellers for ALL Transactions so that YOU DON’T HAVE TO!</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/buyrs/6.png\">\r\n          <h3>6. Shop with a Roar!</h3>\r\n          <p>Bidding. Stuff. Services. Jobs. Offers. Counter-Offers. Shop with a Roar!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <h2>How it works for Sellers & Auctioneers?</h2>\r\n\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/seller/1.png\">\r\n          <h3>1.\tSignup on Sell4Bids</h3>\r\n          <p>Signup on Sell4Bids is Super-Easy and takes less than a few minutes on Web or Mobile: Download our next generation Artificially Intelligent App on Google Play Store or Apple App Store.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/seller/2.png\">\r\n          <h3>2.\tSetup your Seller Profile</h3>\r\n          <p>Setup your Seller Profile in a Jiffy – Tap, Tap: It’s that simple.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/seller/3.png\">\r\n          <h3>3.\tTake Photos. Auction. Jobs. Sell!</h3>\r\n          <p>Selling on Sell4Bids is as easy as taking a Selfie! List your Stuff and Jobs. Auction off your Items OR Sell them with a BUY-IT-NOW Price.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/seller/4.png\">\r\n          <h3>4.\tReal-Time Messaging</h3>\r\n          <p>Chat with Buyers in Real-Time. Send Offers and Get Counter-Offers.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 col-sm-4 col-xs-6\">\r\n        <div class=\"how-it-works-box\">\r\n          <img src=\"../../assets/img/seller/5.png\">\r\n          <h3>5.\tTurn Stuff into Cash.</h3>\r\n          <p>Turn your Stuff into Cash, the Smart Way. Fast!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div id=\"content-block\">-->\n  <!--<div class=\"container be-detail-container\">-->\n    <!--<div class=\"block\">-->\n      <!--<h1 class=\"terms-title wow fadeInDown\">Sell4Bids- Privacy Policy</h1>-->\n      <!--<div>-->\n        <!--&lt;!&ndash; Nav tabs &ndash;&gt;-->\n        <!--<ul class=\"nav nav-tabs privacy-item wow fadeInDownBig\" role=\"tablist\">-->\n            <!--<li role=\"presentation\" style=\"background: #004b91;\" routerLink=\"/privacy-policy\">-->\n               <!--<span class=\"privacy-item-nav-circle\">-->\n                  <!--<a  aria-controls=\"Privacy\" role=\"tab\" data-toggle=\"tab\">Privacy</a>-->\n               <!--</span>-->\n            <!--</li>-->\n            <!--<li role=\"presentation\" routerLink=\"/terms-and-conditions\" >-->\n              <!--<span class=\"privacy-item-nav-circle\">-->\n                <!--<a  aria-controls=\"Terms\" role=\"tab\" data-toggle=\"tab\">Terms</a>-->\n              <!--</span>-->\n            <!--</li>-->\n            <!--<li role=\"presentation\" routerLink=\"/Community\">-->\n               <!--<span class=\"privacy-item-nav-circle\">-->\n                  <!--<a  aria-controls=\"Community\" role=\"tab\" data-toggle=\"tab\">Community</a>-->\n               <!--</span>-->\n            <!--</li>-->\n            <!--<li role=\"presentation\" routerLink=\"/how-it-works\">-->\n                <!--<span class=\"privacy-item-nav-circle\">-->\n                   <!--<a   aria-controls=\"Advertising\" role=\"tab\" data-toggle=\"tab\">How it works</a>-->\n                <!--</span>-->\n             <!--</li>-->\n             <!--<li role=\"presentation\" routerLink=\"/trust-and-safety\">-->\n                <!--<span class=\"privacy-item-nav-circle\">-->\n                   <!--<a  aria-controls=\"Trademark\" role=\"tab\" data-toggle=\"tab\">Trust & Safety</a>-->\n                <!--</span>-->\n             <!--</li>-->\n          <!--</ul>-->\n\n        <!--&lt;!&ndash; Tab panes &ndash;&gt;-->\n        <!--<div class=\"tab-content\">-->\n          <!--<div role=\"tabpanel\" class=\"tab-pane active\" id=\"Terms\">-->\n            <!---->\n            <!--<div class=\"row\">-->\n              <!--<div class=\"col-md-12 col-sm-12 col-xs-12\">-->\n                <!---->\n              <!--</div>-->\n            <!--</div>-->\n          <!--</div>-->\n         <!---->\n\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n  <!--</div>-->\n<!--</div>-->\n\n<div class=\"terms-container-wrapper container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\n      <div class=\"terms-condition-wrapper container\">\n        <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Privacy Policy</h1>\n        <hr>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You have touched base at https://www.Sell4Bids.com or potentially are generally associating with our Services (characterized beneath), which is possessed and worked by The Third Stone Holdings Limited (\"Third Stone\" \"Sell4Bids, \"we,\" and \"us\"). We at Sell4Bids know you think about how your own data is utilized and shared, and we consider your security important. If you don't mind read the accompanying to take in more about our security approach (\"Privacy Policy\"). By utilizing or getting to the Services in any way, you recognize that you acknowledge the practices and strategies laid out in this Privacy Policy, and you thusly assent that we will gather, utilize, and share your data in the accompanying ways. Sell4Bids urges you to occasionally survey this page for any progressions to its Privacy Policy. </p>\n        <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">Keep in mind that your utilization of Sell4Bids' Services is consistently subject to the Terms of Use, which consolidates this Privacy Policy. Any terms we use in this Policy without characterizing them have the definitions given to them in the Terms of Use.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">What does this Privacy Policy cover? </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">This Privacy Policy covers our treatment of data, including Personal Information (characterized beneath) that we accumulate when you access or utilize any online administration area that presents a connection on this Privacy Policy and furthermore applies to your utilization of our website(s), items, administrations and portable applications (by and large, the \"Administrations\"), yet not to the acts of organizations we don't possess or control, or individuals that we don't oversee. We accumulate different kinds of data from our clients, as clarified in more detail underneath, and we utilize this data for you to associate with our Services, inside regarding our Services, including to customize, give, and enhance our Services, to enable you to set up a client record and profile, to get in touch with you and enable different clients to reach you, to satisfy your solicitations for specific items and benefits, and to dissect how you utilize the Services. In specific cases, we may likewise impart some Personal Information to outsiders as portrayed underneath. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Will Sell4Bids ever change this Privacy Policy? </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We're always attempting to enhance our Services, and we may likewise change this Privacy Policy now and again too. We may caution you to changes by putting a notice on the site at https://www.Sell4Bids.com/, by sending you an email, as well as by some different means. If it's not too much trouble take note of that in the event that you've selected not to get lawful notice messages from us (or you haven't given us your email address), those lawful notification will at present represent your utilization of the Services, and you are as yet in charge of perusing and understanding them. On the off chance that you utilize the Services after any progressions to the Privacy Policy have been posted, that implies you consent to the greater part of the progressions. Utilization of data we gather now is liable to the Privacy Policy as a result at the time such data is utilized. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Youngsters and Sell4Bids \n\n        </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Services are proposed to be utilized by grown-ups, as characterized under any material law in every particular case. In the event that you are not a grown-up, you are not approved to download the application, enroll, and make a record with us. All minors require authorization from their separate lawful agent with a specific end goal to utilize the Services. Sell4Bids does not purposely gather or request individual data from anybody younger than 13. In the event that you are under 13, kindly don't endeavor to enroll for the Services or send any Personal Information about yourself to us. In the event that we discover that we have gathered Personal Information from a kid under age 13, we will erase that data as fast as could reasonably be expected. In the event that you trust that a youngster under 13 may have given us Personal Information, please reach us at contact@sell4bids.com</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">What Information Does Sell4Bids Collect? </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The data we gather is utilized to enhance the substance and client experience of our Services. The kind of data we may gather from you incorporates both by and by identifiable data, which is data, for example, your first and last name, email address, telephone number, street number and outsider record certifications (e.g., your Facebook login qualifications, Google login accreditations) (\"Personal Information\"), your area (which can be ongoing), and statistic data, for example, data with respect to your sexual orientation, nationality and occupation (\"Demographic Information\"). We may gathering this data through different structures and in different places inside the Services. To the degree we consolidate Demographic Information with your Personal Information we gather from you on the Services, we will regard the joined information as Personal Information under this Policy. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Amid your utilization of the Services we may likewise gather non-individual data. Non-individual data is, for the most part, data that does not recognize you and it incorporates such things as the kind of cell phone used to get to the application, gadget ID, program write and form, date and time of a client's visit, and dialect inclination. Non-individual data that we gather naturally is examined underneath. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">In light of a legitimate concern for wellbeing, we likewise gather data that could possibly distinguish a client, for example, a client's IP address when the client sign into the Services. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">How Does Sell4Bids Collect My Information? </h2>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Data You Provide:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids gathers data that you give specifically to us. For example, amid the enlistment procedure (or when you refresh your record) you furnish us with Personal Information, for example, your first and last name, email address, phone number, and perhaps your Facebook (or other web-based social networking stage) certifications and your Google accreditations. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Furthermore, there might be cases where you think that its important to discuss straightforwardly with us or where you have furnished us with the way to speak with you. For instance, on the off chance that you have given us your email address, we may send special email offers to you, inform you of any progressions to the Terms or Services, or email you about your utilization of the Services. Likewise, we may get information when you open an email from us or utilize our Services, including your contacts data. This information causes us make our correspondences with you all the more intriguing and enhance our Services. You are, be that as it may, allowed to quit getting email interchanges from us by exploring to the settings page inside the Services. If it's not too much trouble note, in any case, that you might be not able quit some authoritative interchanges that are sensibly important to the Services, for example, a request affirmation or administration notices.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Data Collected Automatically: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">At whatever point you communicate with our Services, we naturally get and record data on our server logs from your program or gadget, which may incorporate your IP address, gadget ID, \"treat\" data, program as well as gadget write, and the page or highlight you asked. This technique for data gathering is talked about in more detail beneath: </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Cookies:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Cookies are remarkable identifiers that we exchange to your gadget to empower our frameworks to perceive your gadget and to enhance your general Sell4Bids client encounter. For example, treats enable us to save our clients' inclinations and record session data, for example, what pages a client visits or things the client takes a gander at, perceive the client's program or gadget write, and figure out which pages or potentially includes are gone by and by what number of individuals. You might have the capacity to change the inclinations on your program or gadget to avert or confine your gadget's acknowledgment of treats, yet this may keep you from exploiting some of our highlights.</p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Through treats we put on your cell phone or program, we may gather data about your online movement after you leave our Services. Much the same as some other utilization data we gather, this data enables us to enhance the Services and to modify your online experience, and generally as depicted in this Privacy Policy. Your program may offer you a \"Don't Track\" alternative which enables you to motion to administrators of sites and web applications and administrations (counting behavioral publicizing administrations) that you don't wish such administrators to track sure of your online exercises after some time and crosswise over various sites. At present our Services don't screen, support or make any move regarding \"Don't Track\" solicitations, signs or components, which implies that we may gather data about your online action both while you are utilizing the Services and after you leave our Services. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Area:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Sell4Bids commercial center is designed particularly for encouraging exchanges amongst merchants and intrigued purchasers who are inside closeness to those dealers. For instance, we utilize your area data to confirm that you are in San Francisco with the goal that we can organize and convey postings from San Francisco or places adjacent to you. All things considered, the gathering of clients' area data is significant to furnishing you with the best and most valuable commercial center experience we can. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">When you get to our Service through a cell phone or application, we and an outsider accomplice may get or gather and store the promoting distinguishing proof number related with your gadget and, contingent upon your cell phone settings, your topographical area information, including GPS organizes, (for example, scope or potentially longitude) or comparative data in regards to the area of your cell phone. You may empower or debilitate the accumulation of this information whenever utilizing the settings on your cell phone by: (an) erasing the application or changing the in-application settings of the application if the application makes that alternative accessible; or (b) erasing or resetting the pertinent versatile promoter ID by constraining advertisement following on your gadget. You may likewise utilize the Digital Advertising Alliances \"AppChoices\" application (accessible at http://www.aboutads.info/appchoices) to quit taking part outsider promoting systems who target publicizing to your cell phone in light of your portable promoting identifier.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Gadget Information:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">When you get to the Sell4Bids Services by means of your cell phone or PC, we gather and may share information we gather about you including novel recognizable proof numbers related with cell phones or through its API (counting, for instance, a Unique ID for Advertisers (\"IDFA\"), Unique ID for Vendors (\"IDFV\"), Google Ad ID, or Windows Advertising ID), portable transporter, gadget compose, model and producer, cell phone working framework brand and model, battery life, and, contingent upon the client's cell phone settings, the land area information, including GPS arranges (e.g. scope as well as longitude) or comparative data in regards to the area of the cell phone (\"User Data\") with our outsider accomplices, that empowers us to furnish you with data, commercials, or offers particular to your area and interests. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Data from Third Parties:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may have the choice of enlisting a Sell4Bids record and signing into or generally connecting to that record utilizing an outsider record, for example, Facebook, Google or other record gave by an outsider site or application. In the event that you give or sign into your record utilizing your certifications for an outsider stage we may approach certain data from that site, for example, your name, contacts or companion's rundowns, account data, open profile, and email address. Therefore, in the event that you give your outsider record qualifications, you recognize that the above-distinguished data, and in addition other data for that record (on the whole, \"Outsider Account Information\") might be transmitted into your Sell4Bids record in the event that you approve such transmissions. You additionally recognize that Third Party Account Information transmitted to us is represented by this Privacy Policy. If you don't mind take note of that specific data might be required to enlist a Sell4Bids record or to exploit some of our highlights. Additionally, Sell4Bids may, now and again, join data from different sources with data we gather through Sell4Bids Services to improve our capacity to serve you, forestall deceitful exchanges, tailor our substance to you, offer you chances to buy items or administrations that we accept might bear some significance with you, and for some other purposes depicted in this Privacy Policy.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Is My Personal Information Secure? </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Ensuring your security is essential to us, which is the reason Sell4Bids undertakings to secure the security of your protection and data utilizing financially sensible safety efforts. Lamentably, no site or Internet transmission is totally secure. Along these lines, Sell4Bids can't ensure that your data will never be hacked or that your data is free from unapproved get to, information misfortune, or different breaks. At the end of the day, your utilization of the Sell4Bids application or site is at your own particular hazard. Sell4Bids urges you to practice alert when utilizing the Sell4Bids Services by keeping your watchword safe and not offering it to different people. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">By tolerating this Privacy Policy and the relating Terms and proceeding to utilize the Services, you recognize that Sell4Bids isn't in charge of your own exposure of your data to outsiders through our Services (e.g., sending your contact data to another client through the Services). Further, you recognize that you, and only you, are in charge of the substance of your profile and the exactness thereof.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Sharing Personal Information </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We don't lease or pitch your Personal Information to anybody, gave certain Personal Information might be moved regarding business exchanges, as depicted beneath. We may impart your Personal Information to outsiders as portrayed in this area:</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Data that has been de-distinguished: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may de-distinguish your Personal Information with the goal that you are not recognized and give that data to our accomplices. We may likewise give total use data to our accomplices (or enable accomplices to gather that data from you), who may utilize such data to see how frequently and in what ways individuals utilize our Services, so they, as well, can furnish you with an ideal online ordeal. In any case, we never unveil total utilization or de-distinguished data to an accomplice (or enable an accomplice to gather such data) in a way that would by and by recognize you. For instance, we utilize Google Analytics to develop our business, to enhance or build up our administrations, to screen and dissect utilization of our Services, for our specialized organization, to expand the usefulness and ease of use of our Services, and to confirm that clients have the approval required for us to process their solicitations. To take in more about the security strategy of Google Analytics, visit http://www.google.com/intl/en/investigation/privacyoverview.html. You can quit the Google Analytics by going by http://tools.google.com/dlpage/gaoptout. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Associated Businesses: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">In specific circumstances, organizations or outsider sites we're subsidiary with may offer or give items or administrations to you through or regarding the Services (either alone or mutually with us). You can perceive when a subsidiary business is related with such an exchange or administration, and we will impart your Personal Information to that associated business just to the degree that it is identified with such exchange or administration. For instance, you may share things on Facebook, Twitter, Instagram, and Google+. To exploit these highlights, we may approach you to enlist for or sign into such administrations on the sites of the individual specialist co-ops. When you empower such outsider administrations from the Services, we will gather your login data and other significant data important to empower the Services to get to that outsider administrations and your information contained inside that outsider administration accounts. As a component of such combination, such outsider administrations will give us access to certain data that you host gave to such third gathering administrations, and we will utilize, store and unveil such data as per this Privacy Policy. Moreover, by empowering outsider administrations inside Sell4Bids, you additionally concur that we will share or join your sign in data and some other data in your Sell4Bids record with these outsider specialist co-ops for this reason. If it's not too much trouble recall that the way in which outsider administrations utilize, store and unveil your data is represented exclusively by the approaches of such outsider specialist co-ops. We have no power over the strategies and practices of outsider sites or organizations as to protection or whatever else, so on the off chance that you partake in any exchange or administration identifying with a partnered site or business, please audit all such business' or sites' approaches.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Operators: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may utilize different organizations and individuals to play out specific errands or administrations for our benefit, for example, facilitating administrations, and may impart your data to them to give items or administrations to you; for instance, we may utilize an installment handling organization to get and process your Master card exchanges for us. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may offer sweepstakes, challenges, and different advancements (each an \"Advancement\") through the Services that may require enrollment. By taking an interest in a Promotion, you are consenting to official decides that administer that Promotion, which may contain particular prerequisites of you, including, enabling the patron of the Promotion to utilize your name, voice and additionally similarity in publicizing or showcasing related with the Promotion. In the event that you enter a Promotion, Personal Information might be unveiled to outsiders or people in general regarding the organization of such Promotion, including, regarding victor determination, prize satisfaction, and as required by law or allowed by the Promotion's authentic principles, for example, on a champs list. By taking part in a Promotion, you concur that we may impart your Personal Information to outsiders as portrayed in this section. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may likewise utilize organizations to call or email you to keeping in mind the end goal to give better administrations to you, for example, to welcome you when you join with us, to tell you of your exchange data, to help you to remember your record idleness, to give codes to you to allude your companions to our Services, or to inform you of an offer that you might be keen on. By giving the pertinent correspondence intends to us, you concur that we may, to the degree allowed by appropriate law, get in touch with you for the previously mentioned purposes. Unless we let you know in an unexpected way, our operators don't have any privilege to utilize the Personal Information we share with them past what is important to help us. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Client Profiles and Submissions: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Certain client profile data, including your username, telephone number, area, and any picture content that such client has transferred to the Services, might be shown to different clients to encourage client connection inside the Services or address your demand for our Services. If it's not too much trouble recall that any substance you transfer to your open client profile, alongside any Personal Information or substance that you intentionally reveal online in a way different clients can see (in messages and so on.) turns out to be freely accessible, and can be gathered and utilized by anybody. Your client name may likewise be shown to different clients if and when you send messages or remarks or transfer pictures or items through the Services and different clients can get in touch with you through messages and remarks. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Business Transfers: </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may purchase or offer resources, and may share and additionally exchange client data, including Personal Information, regarding the assessment of and section into such exchanges. Additionally, in the event that we (or our advantages) are procured, or on the off chance that we leave business, enter liquidation, or experience some other difference in charge, Personal Information could be one of the benefits exchanged to or obtained by an outsider. We may likewise share your data, including Personal Information, Demographic Information and utilization data with our patent, backups and members.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Insurance of Third Stone and Others:</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We maintain whatever authority is needed to get to, peruse, hold, safeguard, and unveil any data that we trust in our sole watchfulness is important to (a) consent to laws, court orders, or other legitimate procedures or government demands; (b) implement or apply our Terms of Use and different understandings, rules, strategies, and controls; (c) explore and react to cases of claimed infringement of any outsider rights; or (d) secure the rights, property, or wellbeing of Sell4Bids, our representatives, our clients, or others.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Getting to and Modifying Your Personal Information</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You are in charge of keeping up the precision of the data you submit to us, for example, your contact data. You might have the capacity to get to a lot of your data by means of the Services. For instance, the individual data you gave amid the enlistment procedure (i.e., name, email, secret key, and so forth.) can be gotten to by signing into your record and exploring to account settings. </p>\n        <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">Through your record settings, you may get to, and, sometimes, alter or erase the accompanying data you've given to us: </p>\n        <ul>\n          <li>Nickname </li>\n          <li>Avatar photograph</li>\n          <li>Phone number </li>\n          <li>Email </li>\n          <li>Listings (counting pictures) </li>\n\n        </ul>\n        <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">The data you can see, refresh, alter, and erase may change as the Services change. In the event that you have any inquiries concerning survey or refreshing data we have on document about you, please get in touch with us at contact@sell4bids.com.</p>\n        <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">Under California Civil Code Sections 1798.83-1798.84, California inhabitants are qualified for approach us for a notice recognizing the classes of Personal Information which we share with our offshoots or potentially outsiders for showcasing purposes, and giving contact data to such associates as well as outsiders. On the off chance that you are a California inhabitant and might want a duplicate of this notice or to demand to quit such future sharing, please present a composed demand to: contact@sell4bids.com</p>\n        <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">Exchange of Information to the United States \n\n          Our Services is worked in the United States and proposed for clients situated in the United States. In the event that you are situated outside of the United 3 states, please know that data we gather, including Personal Information, will be exchanged to, and prepared, put away and utilized as a part of the United States. The information insurance laws in the United States may contrast from those of the nation in which you are found, and your Personal Information might be liable to get to demands from governments, courts, or law requirement in the United States as indicated by laws of the United States. By utilizing the Services or giving us any data, you agree to the exchange to, and handling, use, sharing and capacity of your data, including Personal Information, in the United States as put forward in this Privacy Policy. </p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Your Choices About the Collection of Your Information </h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You can simply select not to reveal data to us, but rather remember some data might be expected to enlist with us or to exploit some of our highlights. </p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You might have the capacity to include, refresh, or erase data as clarified previously. When you refresh data, notwithstanding, we may keep up a duplicate of the unrevised data in our records. You may ask for cancellation of your record by reaching us by email at contact@sell4bids.com.com or you may deactivate your Sell4Bids record by getting to the Help Center at https://www.Sell4Bids.com/data/helpCenter. If you don't mind take note of that we might be required (by law or something else) to hold your record data or some other data related with it and not erase it (or to keep this data for a specific timeframe, in which case we will follow your cancellation ask for simply after we have satisfied such necessities). Some data may stay in our records after your cancellation of such data from your record. We may utilize any accumulated information got from or consolidating your Personal Information after you refresh or erase it, yet not in a way that would distinguish you by and by.</p>\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Outsider Tracking and Analytics</h2>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">It is conceivable that some outsiders may give connects to outsider sites or administrations on the Sell4Bids commercial center stage. In the event that you tap on a connection to an outsider site or administration, an outsider may transmit treats to you. This Privacy Policy does not cover your utilization of an outsider site or benefit or the utilization of treats by any outsiders, and we are not in charge of their protection strategies and practices. You should audit the relevant outsider protection strategies before utilizing their site or administrations.</p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If it's not too much trouble know that outsiders may keep on tracking your online exercises even after you have left our Services, and those outsiders may not respect \"Don't Track\" asks for you have set utilizing your program or gadget.</p>\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">\n          Furthermore, please take note of that we may utilize Google Analytics to develop our business, to enhance our Services, for our specialized organization, to build the usefulness and ease of use of our Services, and to check that clients have the approval required for us to process their solicitations. To take in more about the security of Google Analytics, visit: \n          <br>\n          http://www.google.com/intl/en/examination/privacyoverview.html \n          <br>\n          You can quit the Google Analytics by going to: \n          <br>\n          http://tools.google.com/dlpage/gaoptout \n          <br>\n          Imagine a scenario in which I have inquiries concerning this approach. \n          <br>\n          In the event that you have any inquiries or concerns with respect to our Privacy Policy or move toward becoming honor of abuse of the Services by any individual, please send us a point by point message to contact@sell4bids.com\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PrivacyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TermsandConditionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HowitworksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DevelopersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CopyrightComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TrustComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
    };
    return PrivacyComponent;
}());
PrivacyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__("../../../../../src/app/privacy/privacy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/privacy/privacy.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrivacyComponent);

var TermsandConditionsComponent = (function () {
    function TermsandConditionsComponent() {
    }
    TermsandConditionsComponent.prototype.ngOnInit = function () {
    };
    return TermsandConditionsComponent;
}());
TermsandConditionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'termsandconditions',
        template: __webpack_require__("../../../../../src/app/privacy/terms-and-conditions.html"),
    }),
    __metadata("design:paramtypes", [])
], TermsandConditionsComponent);

var CommunityComponent = (function () {
    function CommunityComponent() {
    }
    CommunityComponent.prototype.ngOnInit = function () {
    };
    return CommunityComponent;
}());
CommunityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'community',
        template: __webpack_require__("../../../../../src/app/privacy/community.html"),
    }),
    __metadata("design:paramtypes", [])
], CommunityComponent);

var HowitworksComponent = (function () {
    function HowitworksComponent() {
    }
    HowitworksComponent.prototype.ngOnInit = function () {
    };
    return HowitworksComponent;
}());
HowitworksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'how-it-works',
        template: __webpack_require__("../../../../../src/app/privacy/how-it-works.html"),
    }),
    __metadata("design:paramtypes", [])
], HowitworksComponent);

var DevelopersComponent = (function () {
    function DevelopersComponent() {
    }
    DevelopersComponent.prototype.ngOnInit = function () {
    };
    return DevelopersComponent;
}());
DevelopersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'developers',
        template: __webpack_require__("../../../../../src/app/privacy/developers.html"),
    }),
    __metadata("design:paramtypes", [])
], DevelopersComponent);

var CopyrightComponent = (function () {
    function CopyrightComponent() {
    }
    CopyrightComponent.prototype.ngOnInit = function () {
    };
    return CopyrightComponent;
}());
CopyrightComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'copyright',
        template: __webpack_require__("../../../../../src/app/privacy/copyright.html"),
    }),
    __metadata("design:paramtypes", [])
], CopyrightComponent);

var TrustComponent = (function () {
    function TrustComponent() {
    }
    TrustComponent.prototype.ngOnInit = function () {
    };
    return TrustComponent;
}());
TrustComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'trust',
        template: __webpack_require__("../../../../../src/app/privacy/trust.html"),
    }),
    __metadata("design:paramtypes", [])
], TrustComponent);

//# sourceMappingURL=privacy.component.js.map

/***/ }),

/***/ "../../../../../src/app/privacy/terms-and-conditions.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"terms-container-wrapper container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"terms-condition-wrapper container\">\r\n        <h1>Terms and Conditions</h1>\r\n        <hr>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">TERMS OF USE</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">It would be ideal if you note that your use of and access to our services (defined below) are subject to the following terms; if you do not agree to all of the following, you may not use or access the services in any manner.  \r\n                <br>\r\n                Viable date: twelfth August, 2016 </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Welcome to Sell4Bids. It would be ideal if you read on to take in the tenets and limitations that administer your utilization of our website(s), items, administrations and versatile applications (the \"Administrations\"). In the event that you have any inquiries, remarks, or concerns with respect to these terms or the Services, please get in touch with us at contact@sell4bids.com.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms of Use (the \"Terms\") are a coupling contract amongst you and Sell4Bids LLC (\"Sell4Bids,\" \"we,\" and \"us\"). The terms administer the utilization of the Services that Sell4Bids offers as a commercial center stage by means of its portable application and site for clients to deal items on the web. You should consent to and acknowledge the greater part of the Terms, or you don't have the privilege to utilize the Services. Your utilizing the Services in any capacity implies that you consent to these Terms, and these Terms will stay in actuality while you utilize the Services. In the event that you don't wish to acknowledge the present Terms, don't utilize the Services and uninstall any Sell4Bids applications from your gadget. </p>\r\n              <p class=\"wow zoomIn\">These Terms incorporate the arrangements in this report, those in the Privacy Policy and also rules, strategies, and directions that Sell4Bids makes accessible on the Services (counting without impediment the Help Center https://help.Sell4Bids.com/) and are liable to change every once in a while.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Will these Terms ever change?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We ceaselessly endeavor to enhance our Services, so these Terms may need to change alongside the Services to mirror those upgrades, or for different reasons. We maintain whatever authority is needed to change the Terms whenever and for any reason. While we may give see when generous changes are made, please inquire much of the time to guarantee you have surveyed the most recent duplicate of these Terms at https://Sell4Bids.com/. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that you don't concur with the new Terms, you are allowed to dismiss them; sadly, that implies you will never again have the capacity to utilize the Services. In the event that you utilize the Services in any capacity after a change to the Terms is viable, that implies you consent to the greater part of the progressions. You should visit this page occasionally to audit these Terms. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Aside from changes by us as depicted here, no other correction or adjustment of these Terms will be powerful unless in composing and marked by both you and us.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">What about my privacy?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids takes the security of its clients genuinely. For the current Sell4Bids Privacy Policy, please click here. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Children's Online Privacy Protection Act (\"COPPA\") requires that online specialist co-ops acquire parental assent before they purposely gather by and by identifiable data online from youngsters who are under 13. This Services are not coordinated toward or planned for youngsters under age 13, and on the off chance that you are under 13 you ought not utilize this site. We don't purposely gather or request by and by identifiable data from youngsters under 13; on the off chance that you are a tyke under 13, kindly don't endeavor to enlist for the Services or send any individual data about yourself to us. On the off chance that we learn we have gathered individual data from a kid under 13, we will erase that data as fast as sensibly conceivable. In the event that you trust that a kid under 13 may have given us individual data, please get in touch with us at contact@sell4bids.com.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Required Age</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Services are proposed to be utilized by grown-ups, as characterized under any relevant law in every particular case. In the event that you are not a grown-up, you are not approved to download the application, enroll, and make a record with us. All minors require consent from their particular lawful agent keeping in mind the end goal to utilize the Services.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Using the Sell4Bids Marketplace</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You might be required to agree to accept a record, and select a watchword and client name (\"Sell4Bids User ID\"). You guarantee to give us precise, finish, and refreshed enrollment data about yourself. You additionally guarantee to speedily advise us if the cell phone number you given to us to speak with you is changed. You may not choose as your Sell4Bids User ID a name that you don't have the privilege to utilize, or someone else's name with the goal to mimic that individual. Further, to the degree any data you give isn't honest, Sell4Bids might not be at risk since it can't confirm the gave data assurance.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">\r\n                You may not exchange your record to any other person without our earlier composed authorization. \r\n                <br>\r\n                In utilizing the Sell4Bids Service, you consent to utilize the application and site and their substance and administrations as per the law and as per these Terms. You are committed not to utilize the Sell4Bids Service to direct unlawful exercises or in a way that constitutes a criminal offense, including infringement of an outsider's rights.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Prohibited Actions</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Regarding utilizing or getting to the Services you concur not to perform or participate in any activities from the accompanying nonexhaustive rundown of restricted activities:</p>\r\n              <ul>\r\n                <li>posting, posting, or transferring substance or things in unseemly classifications or zones on our Services;</li>\r\n                <li>posting, posting, or transferring things available to be purchased that are for the most part unlawful to claim or have;</li>\r\n                <li>posting, posting, or transferring substance or things that encroach or disregard the protected innovation rights or some other privileges of any other individual (counting Sell4Bids);</li>\r\n                <li>posting, posting, offering, offering available to be purchased, or generally giving any copies, fake things, unapproved postings, stolen property, or any things recorded on our Prohibited Items Policy accessible at https://Sell4Bids.zendesk.com/hc/en-us/articles/225351488-Prohibited-Items-Policy; </li>\r\n                <li>rupturing or bypassing any laws, outsider rights or our frameworks, strategies, or conclusions of your record status;</li>\r\n                <li>utilizing our Services in the event that you are not ready to frame lawfully restricting contracts (for instance on the off chance that you are under 18), or are briefly or uncertainly suspended from utilizing our destinations, administrations, applications or devices;</li>\r\n                <li>neglecting to pay for things obtained by you, unless you have a substantial reason as set out in a Sell4Bids arrangement;</li>\r\n                <li>neglecting to convey things sold by you, unless you have a substantial reason as set out in a Sell4Bids arrangement; </li>\r\n                <li>utilizing our Services in any way that disregards pertinent electronic assets exchange or charge card organize principles or controls; </li>\r\n                <li>controlling the cost of any thing or meddle with some other client's postings; </li>\r\n                <li>posting false, deceitful, beguiling, off base, deceiving, defamatory, or hostile substance, or substance that is unsafe, debilitating, badgering, vulgar, bigot, xenophobic, or generally shocking;</li>\r\n                <li>making any move that may undermine the criticism or appraisals frameworks; </li>\r\n                <li>exchanging your Sell4Bids record and Sell4Bids User ID to another gathering without our assent or making any move that imperils the security of your Sell4Bids record or any other individual's, (for example, permitting another person to sign in to the Services as you); </li>\r\n                <li>conveying or posting spam, spontaneous or mass electronic interchanges, junk letters, or fraudulent business models; </li>\r\n                <li>conveying infections or whatever other advancements that may hurt Sell4Bids, or the interests or property of clients;</li>\r\n                <li>utilizing any robot, insect, scrubber, or some other means, manual or mechanized, to get to our Services for any reason, if some constrained web ordering is permissible by approved substances;</li>\r\n                <li>bypassing our robot rejection headers or generally meddling with the working of our Services, or forcing an outlandish or excessively vast load on our foundation, including, yet not constrained to, running Maillist, Listerv, spontaneous, or unapproved publicizing, advancement materials, business exercises, as well as deals, any type of automated assistant or \"spam\" on the Services, or any procedures that run or are enacted while you are not signed into the Services;</li>\r\n                <li>bypassing any specialized measures we use to give the Services, including, however not constrained to, damaging the security of any PC system, or figuring out any passwords or security encryption codes;</li>\r\n                <li>repeating, performing, showing, disseminating, figuring out, or getting ready subsidiary works from content that has a place with or is authorized to Sell4Bids, or that originates from the Services and has a place with another Sell4Bids client or to an outsider including works secured by any copyrights, trademark, patent, or other protected innovation appropriate, aside from with earlier express consent of Sell4Bids as well as some other gathering holding the privilege to permit such utilize; </li>\r\n                <li>decompiling, figuring out, or generally endeavoring to acquire the source code of basic thought or data of or identifying with the Services;</li>\r\n                <li>commercializing any Sell4Bids application or any data or programming related with such application;</li>\r\n                <li>reaping or generally gathering data about clients without their assent; or getting to, utilizing, or generally misusing the Services infringing upon any relevant understandings, rules, directions, or strategies that Sell4Bids makes accessible on the Services or generally in a way regarded frightful by Sell4Bids in its sole caution.</li>\r\n              </ul>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The U.S. government precludes or confine exchanges with specific gatherings recognized as taking part in fear based oppression, opiates trafficking, weapons expansion and different exercises that debilitate national security (\"Banned Parties\"). Prohibited Parties incorporate, yet are not really restricted to, the gatherings recognized on the assents records kept up by the U.S. Division of the Treasury's Office of Foreign Asset Control (\"OFAC\") and people who are natives of, or situated inside, a country that is liable to U.S. exchange sanctions, embargoes or other signi_cant exchange confinements (counting, without constraint, Cuba, Iran, Sudan, Syria and North Korea) (\"Sanctioned Countries\"). Sell4Bids does not work with or generally participate in or encourage exchanges including Banned Parties. You speak to and warrant that you are not a Banned Party, that you are not situated in a Sanctioned Country, and that you won't utilize the Services to encourage exchanges with Banned Parties or to, through, or from a Sanctioned Country.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">U.S. send out control laws and directions limit the shipment or exchange of certain data, wares, administrations, and different things (counting programming) for reasons of remote approach and national security, as controlled by the U.S. government (\"U.S. Fare Control Laws\"). You speak to and warrant that you won't post, list, offer, offer available to be purchased or generally give any substance or material in a way that disregards U.S. Fare Control laws, including without confinement utilizing the Services to unveil, exchange, download, fare or re-send out, straightforwardly or in a roundabout way, such substance or material to any nation, element or other gathering which is ineligible to get such things under U.S. Fare Control laws. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You speak to and warrant that you are of lawful age to frame a coupling contract (or if not, you have your parent's or gatekeeper's consent to utilize the Services and their consent to these Terms for your sake). In case you're consenting to these Terms for the benefit of an association or substance, you speak to and warrant that you are approved to consent to these Terms for its sake and tie them to it Terms (in which case, the references to \"you\" and \"your\" in these Terms, aside from in this sentence, allude to that association or element). </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You will just utilize the Services for your very own utilization, and not for or for the advantage of any outsider, and just in a way that consents to all laws that apply to you and these Terms. On the off chance that your utilization of the Services is denied by material laws, at that point you are not approved to utilize the Services. We can't and won't be in charge of your utilizing the Services in a way that infringes upon the law.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">An infringement of any of the prior is justification for end of your entitlement to utilize or get to the Services. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that we trust you are mishandling Sell4Bids in any capacity, we may, in our sole caution and without constraining different cures, restrain, suspend, or end your client account(s) and access to our Services, postponement or evacuate facilitated content, expel any uncommon status related with your account(s), expel and downgrade postings, lessen or wipe out any rebates, and take specialized and additionally lawful strides to keep you from utilizing our Services.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may wipe out unverified records or records that have been inert for quite a while or alter or suspend our Services. Moreover, we claim all authority to reject or end all or part of our Services to anybody for any reason at our tact.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Security of Your Account</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">By making a record, you acknowledge and expect all obligation that may emerge from all action that starts from your record or happens under your username and secret word. You recognize that you are in charge of keeping up the privacy of the secret word you assign amid the enlistment procedure. You can't impart it to other individuals or perform acts that may reduce or undermine the security of your record. On the off chance that you have learning that your secret word has been bargained, you ought to educate us instantly with a specific end goal to recoup your record.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Access and Proprietary Rights</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You are authorized to access the Services only to the extent you comply with these Terms of Use. Accessing the Services in violation of these Terms of Use is strictly prohibited and unauthorized. You agree that we may moderate Services and content, access and use in our sole discretion, e.g., by blocking (e.g., IP addresses), filtering, deletion, delay, omission, verification, and/or access/account/license termination. You agree (1) not to bypass said moderation, (2) we are not liable for moderating, not moderating, or representations as to moderating, and (3) nothing we say or do waives our right to moderate, or not.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids is the holder of various intellectual property rights pertaining to or has obtained the necessary authorizations and/or licenses for its exploitation of the content disclosed in and associated with the Services, including, but not limited to, the trademarks, graphics, design, applications, text, images, and source code. Neither the contents of the Services nor the database of users may be used, reproduced, broadcasted, copied, processed, or transmitted in any form without Sell4Bids' prior express written consent.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids' trademark(s) and trade dress may not be used in connection with any product or service that is not Sell4Bids', in any manner that is likely to cause confusion among customers, or in any manner that disparages or discredits Sell4Bids. All other trademarks not owned by Sell4Bids that appear in any of our Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by Sell4Bids.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">User Submissions; Do I have to grant any licenses to Sell4Bids or to other users?</h2>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">Anything you post, transfer, offer, store, or generally give through the Services is your \"Client Submission.\" Some User Submissions are distinguishable by different clients. So as to show your User Submissions on the Services, and to enable different clients to appreciate them (where material), you allow us certain rights in those User Submissions. It would be ideal if you take note of that the majority of the accompanying licenses are liable to our Privacy Policy to the degree they identify with User Submissions that are additionally your actually identifiable data.</p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">For all User Submissions, you thus allow Sell4Bids a permit to interpret, alter (for specialized purposes, for instance ensuring your substance is perceptible on a telephone and in addition a PC) and duplicate and generally act concerning such User Submissions, for each situation to empower us to work the Services, as portrayed in more detail beneath. This is a permit just—your possession in User Submissions isn't influenced—in any case, you concede a permit to Sell4Bids to make subordinate works, accumulate your substance with other substance and to claim, enlist and implement rights in such gathering and be the sole party qualified for any help acquired from such authorization endeavors. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that you store a User Submission in your very own Sell4Bids record, in a way that isn't distinguishable by some other client aside from you (an \"Individual User Submission\"), you allow Sell4Bids the permit above, and in addition a permit to show, perform, and convey your Personal User Submission to make that Personal User Submission available to you and giving the Services important to do as such. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">In the event that you share a User Submission just in a way that exclusive certain predetermined clients can see (for instance, a private message to at least one other users)(a \"Restricted Audience User Submission\"), at that point you allow Sell4Bids the licenses above, and in addition a permit to show, perform, and disseminate your Limited Audience User Submission to make that Limited Audience User Submission open to such other determined clients, and giving the Services important to do as such. Likewise, you give such other determined clients a permit to get to that Limited Audience User Submission, and to utilize and practice all rights in it.</p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that you share a User Submission openly on the Services and additionally in a way that something beyond you or certain predefined clients can see, or in the event that you give us (in an immediate email or something else) with any input, recommendations, changes, upgrades, or potentially highlight demands identifying with the Services (each of the previous, an \"Open User Submission\"), at that point you give Sell4Bids the licenses above, and additionally a permit to show, perform, and appropriate your Public User Submission to make that Public User Submission available to every one of the Sell4Bids clients and giving the Services important to do as such, and also all different rights important to utilize and practice all rights in that Public User Submission regarding the Services or potentially generally regarding Sell4Bids' business. Likewise, you concede every single other client of the Services a permit to get to that Public User Submission, and to utilize and practice all rights in it, as allowed by the usefulness of the Services. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">You concur that the licenses you concede are without eminence, unending, sublicenseable, unavoidable, and around the world, gave that when you erase your Sell4Bids record, we will quit showing your User Submissions (other than Public User Submissions, which may remain completely accessible) to different clients (if appropriate) inside a sensible time, however you comprehend and concur that we might be required by law or generally to hold your record data or some other data related with it and it may not be conceivable to totally erase that substance from Sell4Bids' records, and that your User Submissions may stay visible somewhere else to the degree that they were replicated or put away by different clients. Further, without bounds degree allowed under material law, you postpone your ethical rights and guarantee not to affirm such rights or some other licensed innovation or attention rights against us, our sublicensees, or our trustees.</p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">At last, you comprehend and concur that Sell4Bids, in playing out the required specialized strides to give the Services to our clients (counting you), may need to roll out improvements to your User Submissions to adjust and adjust those User Submissions to the specialized necessities of association systems, gadgets, administrations, or media, and the prior licenses incorporate the rights to do as such.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You speak to and warrant that none of the accompanying encroach any rights said in the former passage: your arrangement of substance to us, your making content be posted utilizing the Services, and utilization of any such substance (counting of works got from it) by us, our clients, or others in contract with us that is done regarding the Services and in consistence with these Terms.</p>\r\n\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Who is responsible for what I see and do on the Services?</h2>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">You are exclusively in charge of any data or substance freely posted or secretly transmitted through the Services by you or through a gadget connected to you, and you get to all such data and substance at your own particular hazard. Sell4Bids isn't at risk for any mistakes or oversights in that data or content or for any harms or misfortune you may endure regarding it. We can't control and have no obligation to make any move in regards to how you may translate and utilize any things or data posted, transferred, shared, put away, or generally gave through the Services by different clients (\"Content\") or what moves you may make because of having been presented to the Content, and you thus discharge us from all risk for you having procured or not obtained Content through the Services. We can't ensure the personality of any clients with whom you interface in utilizing the Services and are not in charge of which clients access the Services. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You are in charge of all User Submissions that you contribute, in any way, to the Services, and you speak to and warrant you have all rights important to do as such, in the way in which you contribute it. You will keep all your enlistment data exact and current. You are in charge of all your movement regarding the Services. Sell4Bids might have the privilege to expel any thing or substance that abuses these Terms or is generally considered questionable by Sell4Bids in its sole attentiveness. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Services may contain connections or associations with outsider sites or administrations that are not possessed or controlled by Sell4Bids. When you get to outsider sites or utilize outsider administrations, you acknowledge that there are chances in doing as such, and that Sell4Bids isn't in charge of such dangers. We urge you to know when you leave the Services and to peruse the terms and conditions and protection arrangement of every outsider site or administration that you visit or use</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids goes about as an open commercial center for clients to associate with different clients to purchase and offer items posted by clients on the Services. Sell4Bids isn't associated with any exchanges amongst purchasers and merchants who utilize the Services, and does not go about as the purchaser or dealer (or specialist for purchasers or venders, aside from as explicitly gave thus) regarding any such exchanges. Sell4Bids has no power over, does not support or ensure, and accepts no accountability for, the substance, precision, protection arrangements, or practices of or sentiments communicated in any outsider sites or by any outsider that you cooperate with through the Services. Also, Sell4Bids won't and can't screen, confirm, blue pencil or alter the substance of any outsider site or administration. By utilizing the Services, you discharge and hold us safe from any risk emerging from your utilization of any outsider site or administration. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Your connections with associations and additionally people found on or through the Services, including installment for and conveyance of merchandise or benefits, and some other terms, conditions, guarantees or portrayals related with such dealings, are exclusively amongst you and such associations or potentially people. You should make whatever examination you feel fundamental or proper before continuing with any on the web or disconnected exchange with any of these outsiders. You concur that Sell4Bids should not be mindful or obligated for any misfortune or harm of any kind acquired as the aftereffect of any such dealings as further nitty gritty beneath. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">In the event that there is a question between members utilizing the Services, or amongst clients and any outsider, you concur that Sell4Bids is under no commitment to end up plainly included. Sell4Bids does not offer or give discounts to purchasers who have made buys from venders through the Services; any discounts are the commitments of the merchant, as concurred amongst purchaser and dealer. Sell4Bids maintains all authority to distribute the material rules, arrangements, and controls to manage merchants' or purchasers' guidelines of practices and debate determination systems for client protests, in which occasion such strategies will represent any discounts from the dealer. If you have a question with at least one different clients, you discharge Sell4Bids, its parent, offshoots and auxiliaries, and our and their separate officers, executives, workers and operators (all things considered the \"Releasees\") from cases, requests, and harms of each kind or nature, known or obscure, suspected or unsuspected, revealed or undisclosed, emerging out of or in any capacity identified with such debate as well as our Services. On the off chance that you are a California occupant, you might and thusly do postpone California Civil Code Section 1542, which says: \"A general discharge does not stretch out to claims which the lender does not know or suspect to exist in his or her support at the season of executing the discharge, which, if known by him or her must have tangibly influenced his or her settlement with the indebted person.\"</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">What if I see something on the Services that infringes my copyright?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You may have known about the Digital Millennium Copyright Act (the \"DMCA\"), as it identifies with online specialist organizations, as Sell4Bids, being requested to expel material that supposedly damages somebody's copyright. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We don't allow copyright encroaching exercises and encroachment of protected innovation rights and will evacuate any photographs or other substance if legitimately advised that such substance encroaches on another's licensed innovation rights. On the off chance that you are a copyright proprietor or an operator thereof and trust that any substance encroaches upon your copyright, you may present a notice by giving our Copyright Agent the accompanying data in composing:</p>\r\n              <ul>\r\n                <li>an electronic or physical mark of the individual approved to follow up for the benefit of the proprietor of the copyright's advantage; </li>\r\n                <li>a depiction of the copyrighted work that you assert has been encroached, including the URL (i.e., site page address) of the area where the copyrighted work exists or a duplicate of the copyrighted work; </li>\r\n                <li>distinguishing proof of the URL or other particular area on the Services where the material that you assert is encroaching is found; </li>\r\n                <li>your address, phone number, and email address </li>\r\n                <li>an announcement by you that you have a decent confidence conviction that the questioned utilize isn't approved by the copyright proprietor, its operator, or the law; </li>\r\n                <li>an announcement by you, made under punishment of prevarication, that the above data in your notice is precise and that you are the copyright proprietor or approved to follow up for the copyright proprietor's sake. \r\n\r\n                   \r\n\r\n                  You can contact our Copyright Agent by means of email at copyright@Sell4Bids.com. \r\n                  To take in more about the DMCA, click here.\r\n                </li>\r\n\r\n              </ul>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Authorization to Contact You; Recording Calls</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids may contact you using autodialed or prerecorded calls and text messages, at any telephone number that you have provided us, to: (i) notify you regarding your account; (ii) troubleshoot problems with your account; (iii) resolve a dispute; (iv) collect a debt; (v) poll your opinions through surveys or questionnaires; or (vi) as otherwise necessary to service your account or enforce these Terms, our policies, applicable law, or any other agreement we may have with you.  Sell4Bids may also contact you using autodialed or prerecorded calls and text messages for marketing purposes (e.g., offers and promotions), if you consent to such communications. As described in our Privacy Policy, Sell4Bids may collect other telephone numbers for you and may place manual non-marketing calls to any of those numbers and autodialed non-marketing calls to any landline. Standard telephone minute and text charges may apply and may include overage fees if you have exceeded your plan limits. If you do not wish to receive such communications, you may change your communications preference at any time.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids may, without further notice or warning and in its sole discretion, monitor or record telephone conversations you or anyone acting on your behalf has with Sell4Bids or its agents for quality control and training purposes or for its own protection.\r\n\r\n                TERMS IN THIS SECTION ARE VOID WHERE PROHIBITED</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Electronic Communications</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">When you utilize the Sell4Bids Service, or send messages or different correspondences from your cell phone or work area to us, you are speaking with us electronically. In doing as such, you agree to get correspondences from us electronically utilizing similar channels of correspondence, including without impediment messages, portable push notices, or notification and messages on the site or through the Sell4Bids Service, and you can hold duplicates of these interchanges for your records. You concur that all assentions, notification, revelations, and different correspondences that we give to you electronically fulfill any legitimate prerequisite that such interchanges be in composing.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Privacy of Others</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">In the event that Sell4Bids furnishes you with data about another client, you concur you will utilize the data just for the reasons it is given to you. You may not uncover, offer, lease, or appropriate a client's data to an outsider for purposes irrelevant to the Services. Moreover, you may not utilize the data for promoting purposes, through electronic means or different means, unless you acquire the assent of the particular client to do as such.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Will Sell4Bids ever change the Services?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We're always trying to improve the Services, so they may change over time. We may suspend or discontinue any part of the Services, or we may introduce new features or impose limits on certain features or restrict access to parts or all of the Services. We'll try to give you notice when we make a material change to the Services that would adversely affect you, but this isn't always practical. Similarly, we reserve the right to remove any User Submissions or Content from the Services at any time, for any reason (including, but not limited to, if someone alleges you contributed such User Submissions in violation of these Terms), in our sole discretion, and without notice.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Does the Sell4Bids App cost anything?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Individual access and use of the Services are currently free. (We may make additional products and services available for purchase through the Services, as further described in these Terms below). If you choose to sell goods through the Services, you are responsible for all income taxes associated with purchase/use and sale/solicitation of any items/services through the Services. If you choose to purchase goods through the Services, you will be charged the listed price for such good or service, together with any applicable shipping fees and taxes. Shipping costs and taxes are not included in the listed price for any listings made available from sellers through the Service, but will be displayed to buyers before confirmation of any purchase if possible. The prices for listings displayed on the Services are quoted in US dollars. Prices are subject to change at any time before an agreement by both parties as to sales price is final.  Sell4Bids does not regulate agreements between parties, but merely serves to provide information regarding items for sale according to these Terms. Payment and collection of applicable taxes (including sales, excise, import, export, VAT and other taxes or duties associated with the purchase/use and sale/solicitation of any listing) are the exclusive responsibility of the parties. it is the seller's responsibility to determine whether such taxes apply to a transaction and to collect, report, and remit the correct taxes to the appropriate tax authority.  Sell4Bids is not responsible for determining whether such taxes apply to a transaction or for collecting, reporting, or remitting any taxes arising from any transaction.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We reserve the right to charge you a processing fee if you deactivate your account. We also reserve the right to charge for certain or all Services in the future. We will try to notify you before any Services you are then using begin carrying a fee, but it may not always be possible. Any such changes are effective when we post information about the fee change through the Services. If you wish to continue using such Services, you must pay all applicable fees for such Services.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Payment for Goods or Services Using the Services.</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We may offer you the ability to pay for goods or services online with a credit or debit card or other payment method that you designate in your Sell4Bids account. All payments are facilitated through a third party payment processor.  Sell4Bids does not collect, store or retain your credit card or any other payment methods you provide to such third party payment processing service provider for any purpose other than facilitation of these transactions and future communications with you. If you have provided Sell4Bids a designated credit or debit card for making payments using the Services, you represent and warrant to Sell4Bids that you are the authorized owner of such credit or debit card, and you authorize and direct our third party payment processor(s) to make charges to such credit or debit card in payment of the goods and services purchased through your Sell4Bids account. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">All payment method information that you provide in connection with a purchase or transaction using the Services must be accurate, complete, and current. Otherwise, your transaction may not be able to be completed, and your purchase may be cancelled or delayed.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Receiving Payments as a Seller Using the Services.</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">All payments due you from purchasers making payment online through the Services will be facilitated by our third-party payment processor. Funds paid by buyers for your sale of goods or services through the Services may be forwarded directly to you by the third-party payment processor. Alternatively, the third-party payment processor may transfer funds to us for forwarding to sellers. In that event, you authorize Sell4Bids to act as your limited collection agent for processing payments, refunds and adjustments for your transactions with a buyer, receiving and holding sales proceeds on your behalf and remitting such proceeds to your bank account. You agree that receipt of sales proceeds by Sell4Bids on your behalf shall be deemed receipt of such proceeds by you, constitute payment to you, and satisfy the buyer's obligation to you [even in the event that Sell4Bids fails to deliver such proceeds to you]. You will not receive interest or any other earnings on such funds.\r\n\r\n                We can start credits of offers continues to your record just on a business day when the mechanized clearinghouses are open for business. A \"business day\" is a Monday through Friday, barring occasions and different days when banks taking an interest in the robotized clearinghouse are approved or guided under appropriate law to be shut. \r\n\r\n              </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Amongst us and you as dealer, we will bear the danger of Mastercard extortion (i.e., fake buy emerging from the burglary and unapproved utilization of an outsider's Mastercard data) happening regarding your exchanges, and the merchant will bear all other danger of misrepresentation or misfortune. Be that as it may, we won't bear the danger of charge card misrepresentation regarding any exchange in which you as vender don't satisfy a request as per the data on the relevant posting or generally are not in consistence with these Terms of Use. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids has the privilege to look for repayment from you as dealer in the event that we in our sole watchfulness choose to return assets to the purchaser since you have not auspicious conveyed a thing or administration bought, on the off chance that we find incorrect or copy exchanges, or in the event that we get a chargeback from the purchaser's Mastercard backer for the measure of the purchaser's buy from you. We may get repayment of any sums owed by you to Sell4Bids by deducting from future installments owed to you or turning around any credits to you, either through directions to our outsider processor or counterbalancing any assets held by us as your constrained installment specialist, where relevant. We may likewise charge your credit or platinum card on _le, assuming any, or look for such repayment from you by some other legitimate means. You approve us to utilize any or the greater part of the previous strategies to look for repayment. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Endless supply of your Sell4Bids record, we maintain whatever authority is needed to set o_ against any installments to be made to you as merchant, a sum controlled by us to be satisfactory to cover chargebacks, discounts or different sums paid to purchasers regarding your exchanges for a planned sixty (60) day time span. Toward the finish of such sixty (60) day time frame, we will dispense to you any sum not used to o_set chargebacks or sums paid to Buyers, or we will look for repayment from you by any of the methods approved above for any extra sums required to o_set chargebacks or sums paid to Buyers, as material. </p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">What else do I have to know whether I need to make a deal on the Services?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You should have the legitimate specialist to offer the postings that you are posting available to be purchased through the Services. You should portray your posting and all terms of offer in your posting honestly, precisely, sensibly, and totally in concurring with the Listing Guidelines accessible at here. An offer to offer might be withdrawn whenever before its acknowledgment, however a great many. Sell4Bids precludes the posting or offer of any posting that is illicit to offer under any material law, statute, law, or control, including without confinement content posted in our Prohibited Items Policy accessible here .</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You should have the legitimate specialist to offer the postings that you are posting available to be purchased through the Services. You should portray your posting and all terms of offer in your posting honestly, precisely, sensibly, and totally in concurring with the Listing Guidelines accessible at here. An offer to offer might be withdrawn whenever before its acknowledgment, however a great many. Sell4Bids precludes the posting or offer of any posting that is illicit to offer under any material law, statute, law, or control, including without confinement content posted in our Prohibited Items Policy accessible here .</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">As a dealer, you explicitly speak to and warrant to us that you are and will constantly be in full consistence all pertinent government, state, common and neighborhood laws, statutes, mandates and controls identifying with the authorizing, circulation, and offer of any items that you rundown or offer through the Services, including without confinement (I) the Consumer Products Safety Improvement Act of 2008, and all directions proclaimed by the U.S. Buyer Products Safety Commission, and (ii) the Indian Arts and Crafts Act of 1990 and any extra laws and directions material to the offer of Indian expressions and artworks.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Imagine a scenario in which I need to quit utilizing Sell4Bids. </h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">You can deactivate your Sell4Bids record by getting to the Help Center here. Kindly allude to our Privacy Policy, and additionally the licenses above, to see how we treat data you give to us after you have quit utilizing our Services. \r\n\r\n                 \r\n\r\n                Sell4Bids is likewise allowed to end (or suspend access to) your utilization of the Services or your record, for any reason in our prudence, including your break of these Terms. Sell4Bids has the sole appropriate to choose whether you are infringing upon any of the confinements put forward in these Terms. \r\n\r\n              </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that you deactivate the record, you can re-actuate it by signing in again or recovering your secret key at the login page. Record end, erasure, or deactivation may bring about annihilation of any and additionally all User Submissions or Content related with your record, so remember that before you choose to end your record. We will endeavor to give progress ahead of time to you before our ending your record with the goal that you can recover any essential User Submissions you may have put away in your record (to the degree permitted by law and these Terms), however we may not do as such in the event that we decide it would be illogical, illicit, not in light of a legitimate concern for somebody's correct, wellbeing or security, or generally destructive to the rights or property of Sell4Bids. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Arrangements that, by their tendency, ought to survive end of these Terms should survive end. By method for instance, the majority of the accompanying will survive end: any commitment you need to pay us or repay us, any constraints on our obligation, any terms in regards to possession or licensed innovation rights, and terms in regards to debate between us.</p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">I utilize the Sell4Bids App accessible by means of the Apple App Store _ would it be advisable for me to know anything about that?</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">These Terms apply to your utilization of the considerable number of Services, including the iPhone, iPad Touch, and iPad applications accessible by means of the Apple, Inc. (\"Apple\") App Store (the \"Application\"), yet the accompanying extra terms likewise apply to the Application:</p>\r\n              <ul>\r\n                <li>(a) Both you and Sell4Bids recognize that the Terms are finished up amongst you and Sell4Bids just, and not with Apple, and that Apple isn't in charge of the Application or the Content; </li>\r\n                <li>(b) The Application is authorized to you on a constrained, non-selective, non-transferrable, non-sublicensable premise, exclusively to be utilized as a part of association with the Services for your private, individual, non-business utilize, subject to every one of the terms and states of these Terms as they are material to the Services; </li>\r\n                <li>(c) You will just utilize the Application regarding an Apple gadget that you claim or control; </li>\r\n                <li>(d) You recognize and concur that Apple has no commitment at all to outfit any upkeep and bolster administrations regarding the Application; </li>\r\n                <li>(e) in case of any disappointment of the Application to fit in with any pertinent guarantee, including those suggested by law, you may advise Apple of such disappointment; upon warning, Apple's sole guarantee commitment to you will be to discount to you the price tag, assuming any, of the Application; </li>\r\n                <li>(f) You recognize and concur that Sell4Bids, and not Apple, is in charge of tending to any cases you or any outsider may have in connection to the Application;</li>\r\n                <li>(g) You recognize and concur that, in case of any outsider claim that the Application or your ownership and utilization of the Application encroaches that outsider's protected innovation rights, Sell4Bids, and not Apple, will be in charge of the examination, safeguard, settlement and release of any such encroachment guarantee; </li>\r\n                <li>(h) You speak to and warrant that you are not situated in a Sanctioned Country and that you are not a Banned Party; </li>\r\n                <li>(I) Both you and Sell4Bids recognize and concur that, in your utilization of the Application, you will conform to any pertinent outsider terms of assention that may influence or be influenced by such utilize;</li>\r\n                <li>(j) Both you and Sell4Bids recognize and concur that Apple and Apple's backups are outsider recipients of these Terms, and that upon your acknowledgment of these Terms, Apple will have the right (and will be regarded to have acknowledged the right) to authorize these Terms against you as the outsider recipient about. </li>\r\n\r\n\r\n              </ul>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">In-App Products </h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Every now and then, Sell4Bids may offer clients the chance to buy extra items or administrations through the Services (\"In-App Products\"). You consent to be in charge of auspicious installment for all In-App Products obtained through your record and that Sell4Bids may charge your installment technique gave at the season of procurement, or other installment strategy related with your record, at the cost of In-App Products and any extra sums (counting any expenses and late expenses, as appropriate) that might be gathered regarding such buys. Appropriate assessments will be founded on the bill-to address and the duty rate as a result at the time you download the In-App Product. You speak to and warrant to Sell4Bids that you are the approved proprietor of all techniques for installment furnished to us regarding your record and that all installment strategy data outfitted to us is precise, finished and current. For subtle elements of how buys are charged to you, please visit Sell4Bids Support. \r\n\r\n                 \r\n\r\n                All offers of In-App Products are last. In-App Products are liable to the Disclaimers of Warranty put forward underneath. \r\n\r\n              </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Costs for In-App Products are liable to change whenever without see, and the Services don't give value assurance or discounts in case of a value lessening or special offering happening after your buy. \r\n\r\n                 \r\n\r\n                On the off chance that an In-App Product winds up plainly inaccessible after Purchase and preceding use, you will be discounted upon ask for as it were. In the event that specialized issues avert or absurdly defer conveyance of your In-App Product, you will be discounted upon ask for as it were. To ask for a discount, please contact contact@sell4bids.com. </p>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Disclaimer of Warranties and Limitation of Liability</h2>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">The Sell4Bids Service is a commercial center stage that empowers clients to offer items locally on the web. Thusly, Sell4Bids has no proprietorship or control over the things sold through the stage, unless generally expressed, and is for the most part not a gathering to the exchange of the deal completed solely between a merchant and intrigued purchaser, nor does it audit the items that a client gives through the Services. As needs be, Sell4Bids isn't obligated for and might not be mindful, either straightforwardly or by implication, for any difference between clients of the commercial center. Any claim or question that may emerge between clients of the Services might be settled by them, and the gatherings consent to hold Sell4Bids safe. Sell4Bids does not offer or give discounts to purchasers who have made buys from dealers by means of the Services; any discounts are the commitments of the vender, as concurred amongst purchaser and merchant, yet in all cases subject to any pertinent question determination systems amongst purchasers and dealers that might be set up by Sell4Bids occasionally regarding the Services.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We attempt to guard our Services, secure, and working legitimately, however we can't ensure the persistent operation of or access to our Services. Moreover, Sell4Bids should for no situation be in charge of the substance operation and additionally information assurance or different terms alluded to in different sites or applications that might be gotten to by the incorporation of a hyperlink on the Services, or the substance, administrations, or items offered on the same, unless such destinations are possessed by Sell4Bids. The hyperlinks contained in the site or in the application may prompt an outsider site, application, or administration. Sell4Bids accepts no accountability for the substance, data, or administrations that may show up on those destinations. </p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">THE Sell4Bids SERVICES AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) AND OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE Sell4Bids SERVICES ARE PROVIDED BY Sell4Bids ON AN \"AS May be\" AND \"AS AVAILABLE\" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING. Sell4Bids MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE Sell4Bids SERVICES, OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE Sell4Bids SERVICES, UNLESS OTHERWISE SPECIFIED IN WRITING. YOU EXPRESSLY AGREE THAT YOUR USE OF THE Sell4Bids SERVICES IS AT YOUR SOLE RISK.</p>\r\n              <p class=\"wow zoomIn\" data-wow-duration=\"2s\">TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, Sell4Bids DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. Sell4Bids DOES NOT WARRANT THAT THE Sell4Bids SERVICES, INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE Sell4Bids SERVICES, Sell4Bids' SERVERS OR ELECTRONIC COMMUNICATIONS SENT FROM Sell4Bids ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. Sell4Bids RELEASEES WILL NOT BE LIABLE FOR ANY DAMAGES OR LOSSES OF ANY KIND ARISING FROM THE USE OF ANY Sell4Bids SERVICE, OR FROM ANY INFORMATION, CONTENT, MATERIALS, PRODUCTS (INCLUDING SOFTWARE) OR OTHER SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH ANY Sell4Bids SERVICE, INCLUDING, BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, AND CONSEQUENTIAL DAMAGES, UNLESS OTHERWISE SPECIFIED IN WRITING, INCLUDING, BUT NOT LIMITED TO, SUCH DAMAGES RESULTING DIRECTLY OR INDIRECTLY FROM:</p>\r\n              <ul>\r\n                <li>your utilization of or your failure to utilize our Services;</li>\r\n                <li>postponements or interruptions in our Services; </li>\r\n                <li>infections or different malignant programming got by getting to or connecting to our Services;</li>\r\n                <li>glitches, bugs, blunders, or mistakes of any sort in our Services;</li>\r\n                <li>a suspension or other move made regarding your record or rupture of the utilizing Sell4Bids Section above; </li>\r\n              </ul>\r\n              <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Incidental </h2>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">You will be in charge of paying, withholding, recording, and revealing all expenses, obligations, and other legislative evaluations related with your movement regarding the Services, gave that the Sell4Bids may, in its sole tact, do any of the prior for your sake or for itself as it sees fit. The disappointment of it is possible that you or us to work out, in any capacity, any privilege in this might not be regarded a waiver of any further rights hereunder. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">You thusly recognize and concur that you are not a representative, operator, accomplice, or joint wander of Sell4Bids, and you don't have any specialist of any sort to tie Sell4Bids in any regard at all. But as explicitly put forward in the segment above with respect to the Apple Application, you and Sell4Bids concur there are no outsider recipients expected under these Terms. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">On the off chance that you make or utilize a record in the interest of a business substance, you speak to that you are approved to follow up for the benefit of such business and tie the business to these Terms. Such record is claimed and controlled by the business substance. No office, association, joint wander, worker business or franchiser-franchisee relationship is planned or made by these Terms. </p>\r\n              <p  class=\"wow zoomIn\" data-wow-duration=\"2s\">You and Sell4Bids concur that these Terms are the entire and restrictive explanation of the common comprehension amongst you and Sell4Bids, and that it supersedes and scratchs off all past composed and oral assentions, correspondences and different understandings identifying with the topic of these Terms. \r\n                The accompanying Sections survive any end of these Terms: User Submissions, Disclaimer of Warranties, Limitation of Liability, Release, Indemnity, and Legal Disputes.</p>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/privacy/trust.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"terms-container-wrapper container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"terms-condition-wrapper container\">\r\n        <h1 class=\"wow zoomIn\" data-wow-duration=\"1s\">Trust & Safety</h1>\r\n        <hr>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Honesty is the bedrock for successful trading. Trust empowers relationships to produce mutually beneficial results</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids is an open marketplace for all buyers, sellers and bidders. One of our fundamental goals is to build a trustworthy community by deploying transparency in our bleeding edge features. We take the interaction among buyers, sellers and bidders very seriously. Our goal is to make Sell4Bids a highly secure and trustworthy online marketplace.</p>\r\n        <span style=\"color: #000; font-size: 24px; font-weight: bold\" class=\"wow fadeInUp\" data-wow-duration=\"1s\">Rules of Conduct:\r\n        </span>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Be Friendlyt</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Maintain healthy relationships to other party you are dealing with in order to have great interaction experience on Sell4Bids.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Set Honest Prices\r\n\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Set balanced prices in order to make good deal with the other party. As the product picture depicts its actual price so be honest.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Put the Product in the Picture\r\n\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Provide transparent details and descriptions about your product.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Be Ethical:</h2>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">No harassment, no aggression, no threats</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We forbid the act of aggression verbal or written and any attempt of harass or threaten any one.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">No inequity\r\n\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Everyone who follows our terms and policies can use our site. Discrimination on the basis of caste, creed and color will not be acceptable.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">No Falsification\r\n\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Show yourself the way you are. We accept no replacement. Impression of other people, other entities, or Sell4Bids employees is not permissible, in spite of association. And posting another person’s personal information in any shape is illegal. </p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">No defraud</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We will eradicate any user who mimics another person or entity, sends unwanted messages to latent buyers, or sends deceptive, false, or hateful communication. If you’re on the receiving end of something suspicious do report Sell4Bids team.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">BE Hands-On</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We ask affiliate of our community to take their individual wellbeing as critically as we do by making good results about how and where to buy, bid and sell the product.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Don’t share confidential information</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Don’t give away personal information such as email, phone number, or address. Use built-in app messaging to communicate securely. Do not make line transfers or send money by mail.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Meet in a reasonable site</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Consent to meet in well-known, well-crowded public locations, and let a friend or family member know where you’re going.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Examine items</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Please carefully look over and test items before you complete a sale.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Report troubles</h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">If you find something on Sell4Bids that infringes our policy, please report it through the app. If you have an experience with a buyer or seller that violates our community standards, please take the fitting action to uphold your personal wellbeing, and then contact us.</p>\r\n        <h2 class=\"wow fadeInUp\" data-wow-duration=\"1s\">Rate each other\r\n        </h2>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">We expect part of our community to get high marks, but our in-app rating tool is your chance to give each other honest feedback on the buying and selling and bidding and help improve that experience for others.</p>\r\n        <p class=\"wow zoomIn\" data-wow-duration=\"2s\">Sell4Bids will take action against identified violators of these Rules of Conduct. If you see something or practice something that doesn’t meet to these values, please inform Sell4Bids team.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AuthHttp, AuthConfig , JwtHelper } from 'angular2-jwt';
// import {AlertService} from './_services/index';


var ProductService = (function () {
    function ProductService(_http2, db) {
        this._http2 = _http2;
        this.db = db;
        this.path = '';
        this.name = '';
        this.image = '';
        this.userid = '';
    }
    ProductService.prototype.setName = function (name) {
        this.name = name;
    };
    ProductService.prototype.setImage = function (image) {
        this.image = image;
    };
    ProductService.prototype.setUserid = function (userid) {
        this.userid = userid;
    };
    ProductService.prototype.getName = function () {
        return this.name;
    };
    ProductService.prototype.getImage = function () {
        return this.image;
    };
    ProductService.prototype.getUserid = function () {
        return this.userid;
    };
    ProductService.prototype.getProducts = function () {
        return this.products = this.db.list('/products', { preserveSnapshot: true });
    };
    ProductService.prototype.getAccessory = function () {
        return this.products = this.db.list('/products/Accessories', { preserveSnapshot: true });
    };
    ProductService.prototype.location = function (address) {
        return this._http2.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address).map(function (response) { return response.json(); });
    };
    ProductService.prototype.locationShare = function (lat, lng) {
        return this._http2.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key=AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q").map(function (response) { return response.json(); });
    };
    ProductService.prototype.getMovies = function (batch, lastKey, path) {
        // alert(lastKey)
        var query = {
            orderByChild: "chargeTime",
            limitToLast: batch,
        };
        if (path == undefined)
            console.log("Undefiendddddddddddddddd");
        else
            this.path = path;
        //this.setCateogry();
        //this.path = '/movies'+'/'+this.cat +'/Nested'
        //this.path = '/'+'/'+this.cat +'/Nested'
        //this.path = '/movies' 
        if (lastKey)
            query['startAt'] = lastKey;
        //console.log("DBBBBBBBBBBBBBBBBBBBBBBBBBB LLLLLLLLLLLLLLlllllllliist")
        //console.log(this.db.list(this.path,{query}))
        return this.db.list(this.path, {
            query: query
        });
    };
    ProductService.prototype.getUsers = function (batch, lastKey) {
        var query = {
            orderByKey: true,
            limitToFirst: batch,
        };
        if (lastKey)
            query['startAt'] = lastKey;
        return this.db.list('/users', {
            query: query
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/reverse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReversePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ReversePipe = (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value, args) {
        if (!value)
            return;
        value = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["filter"])(value, ['dismissed', false]); // remove dismissed notifications
        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["reverse"])(value);
    };
    return ReversePipe;
}());
ReversePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);

//# sourceMappingURL=reverse.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/script.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScriptStore */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptStore = [
    { name: '1', src: 'assets/script/SimpleStarRating.js' }
];
var ScriptService = (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = function () {
                        if (script_1.readyState === "loaded" || script_1.readyState === "complete") {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    script_1.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script_1.onerror = function (error) { return resolve({ script: name, loaded: false, status: 'Loaded' }); };
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
        });
    };
    return ScriptService;
}());
ScriptService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ScriptService);

//# sourceMappingURL=script.service.js.map

/***/ }),

/***/ "../../../../../src/app/search-product/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(_http5) {
        this._http5 = _http5;
    }
    SearchService.prototype.search_service = function (sid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'text/html');
        headers.append('Accept', 'text/html');
        headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        return this._http5.get('https://us-central1-sell4bids-4affe.cloudfunctions.net/searchResult?key=qwerty&queryString=' + sid, { headers: headers }).map(function (response) {
            return response.json() || {};
        })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error.statusText);
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cookie-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieServiceLocal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__ = __webpack_require__("../../../../ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var CookieServiceLocal = (function () {
    function CookieServiceLocal(cookieService, platformId) {
        this.cookieService = cookieService;
        this.platformId = platformId;
        this.recentitems = [];
    }
    CookieServiceLocal.prototype.set = function (obj) {
        console.log("set", obj);
        this.cookieService.set('Test', JSON.stringify(obj));
    };
    CookieServiceLocal.prototype.get = function () {
        this.recentitems.push(JSON.parse(this.cookieService.get('Test')));
        console.log("get", this.recentitems);
    };
    return CookieServiceLocal;
}());
CookieServiceLocal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_cookie_service__["a" /* CookieService */]) === "function" && _a || Object, Object])
], CookieServiceLocal);

var _a;
//# sourceMappingURL=cookie-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preloader_service__ = __webpack_require__("../../../../../src/app/services/preloader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, preloaderService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.preloaderService = preloaderService;
        return _this;
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @param preloaderType
     * @returns {Observable<>}
     */
    HttpService.prototype.get = function (url, options, preloaderType) {
        var _this = this;
        this.requestInterceptor(preloaderType);
        var fullUrl = this.getFullUrl(url);
        return _super.prototype.get.call(this, fullUrl, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally(preloaderType);
        });
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        var fullUrl = this.getFullUrl(url);
        return _super.prototype.post.call(this, fullUrl, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, this.getFullUrl(url), options)
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    //
    /**
     * Build full URL for request.
     * @param str
     * @returns {string}
     */
    HttpService.prototype.getFullUrl = function (str) {
        return __WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].api + str;
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]();
        }
        return options;
    };
    /**
     * Request interceptor.
     */
    HttpService.prototype.requestInterceptor = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.preloaderService.showPreloader(preloaderType);
    };
    /**
     * Response interceptor.
     */
    HttpService.prototype.responseInterceptor = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.preloaderService.hidePreloader(preloaderType);
    };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    HttpService.prototype.onCatch = function (error) {
        console.log('onCatch');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    /**
     * onSubscribeSuccess
     * @param res
     */
    HttpService.prototype.onSubscribeSuccess = function (res) {
    };
    /**
     * onSubscribeError
     * @param error
     */
    HttpService.prototype.onSubscribeError = function (error) {
    };
    /**
     * onFinally
     */
    HttpService.prototype.onFinally = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.responseInterceptor(preloaderType);
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]));
HttpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__preloader_service__["a" /* PreloaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__preloader_service__["a" /* PreloaderService */]) === "function" && _c || Object])
], HttpService);

var _a, _b, _c;
//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/preloader-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreloaderService = PreloaderService_1 = (function () {
    function PreloaderService() {
    }
    PreloaderService.prototype.getPreloaderCount = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            return PreloaderService_1.fullLoadingCount;
        }
        else if (preloaderType === 'small') {
            return PreloaderService_1.smallLoadingCount;
        }
    };
    PreloaderService.prototype.showPreloader = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            PreloaderService_1.fullLoadingCount++;
        }
        else if (preloaderType === 'small') {
            PreloaderService_1.smallLoadingCount++;
        }
    };
    PreloaderService.prototype.hidePreloader = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            PreloaderService_1.fullLoadingCount--;
        }
        else if (preloaderType === 'small') {
            PreloaderService_1.smallLoadingCount--;
        }
    };
    return PreloaderService;
}());
PreloaderService.fullLoadingCount = 0;
PreloaderService.smallLoadingCount = 0;
PreloaderService = PreloaderService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PreloaderService);

var PreloaderService_1;
//# sourceMappingURL=preloader-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shared-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedData = (function () {
    function SharedData() {
        this.vendorSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.notiSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.searchSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    SharedData.prototype.returnSubject = function () {
        return this.vendorSubject;
    };
    SharedData.prototype.vendorInfo = function (data) {
        this.vendorSubject.next(data);
    };
    SharedData.prototype.returnNoti = function () {
        return this.notiSubject;
    };
    SharedData.prototype.notiInfo = function (path) {
        this.notiSubject.next(path);
    };
    SharedData.prototype.returnSearch = function () {
        return this.searchSubject;
    };
    SharedData.prototype.searchInfo = function (data) {
        this.searchSubject.next(data);
    };
    return SharedData;
}());
SharedData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SharedData);

//# sourceMappingURL=shared-service.js.map

/***/ }),

/***/ "../../../../../src/app/services/speechservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechRecognitionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechRecognitionService = (function () {
    function SpeechRecognitionService(zone) {
        var _this = this;
        this.zone = zone;
        this.stop = function () {
            _this.speechRecognition.stop();
        };
    }
    SpeechRecognitionService.prototype.record = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            _this.speechRecognition = new webkitSpeechRecognition();
            _this.speechRecognition.continuous = true;
            _this.speechRecognition.lang = 'en-us';
            _this.speechRecognition.maxAlternatives = 1;
            _this.speechRecognition.onresult = function (speech) {
                var term = '';
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    var transcript = result[0].transcript;
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log('Unrecognized result - Please try again');
                        }
                        else {
                            term = transcript;
                        }
                    }
                }
                _this.zone.run(function () {
                    observer.next(term);
                });
            };
            _this.speechRecognition.onerror = function (error) {
                observer.error(error);
            };
            _this.speechRecognition.onend = function () {
                observer.complete();
            };
            _this.speechRecognition.start();
        });
    };
    return SpeechRecognitionService;
}());
SpeechRecognitionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], SpeechRecognitionService);

var _a;
//# sourceMappingURL=speechservice.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".creative_filds_block a.active{background:#e74c3c!important;color:#FFF!important}.creative_filds_block .header{padding:11px 15px 11px 20px;color:#fff;background-color:#e74c3c;border:0;border-top-right-radius:6px;border-top-left-radius:6px;font-size:30px}.sidebar-title{padding-left:10px;padding-bottom:10px;font-size:30px;font-weight:700;color:#EA1B22}\r\n\r\n.filter {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  font-family:ShopifySans,Helvetica,Arial,'Lucida Grande',sans-serif;\r\n  font-size:16px\r\n}\r\n\r\ndiv.a:hover {\r\n  overflow: visible;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left\"  id=\"mySidebar\">\n  <button class=\"w3-bar-item w3-button w3-large w3-hide-large\" onclick=\"w3_close()\">Close &times;</button>\n  <div class=\"be-vidget\">\n\n    <div class=\"creative_filds_block\">\n\n      <div class=\"sidebar-title\"><i class=\"fa fa-th\"></i> Browse </div>\n      <div class=\"ul sh-sidebar-img\" *ngIf = \"loaded\">\n        <a *ngFor=\"let item of cat\" (click)=loadprodut(item) title=\"{{item}}\" class=\"filter\" style=\"font-weight:bolder;\"><img src=\"assets/img/cat-icons/{{item}}.png\">{{ item }} </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<div class=\"w3-main\" style=\"margin-left:200px\">-->\n<!--<div class=\"w3-teal\">-->\n\n<!--<div class=\"w3-container\">-->\n<!--<h1>My Page</h1>-->\n<!--</div>-->\n<!--</div>-->\n\n<!--<div class=\"w3-container\">-->\n<!--<h3>Responsive Sidebar</h3>-->\n<!--<p>The sidebar in this example will always be displayed on screens wider than 992px, and hidden on tablets or mobile phones (screens less than 993px wide).</p>-->\n<!--<p>On tablets and mobile phones the sidebar is replaced with a menu icon to open the sidebar.</p>-->\n<!--<p>The sidebar will overlay of the page content.</p>-->\n<!--<p><b>Resize the browser window to see how it works.</b></p>-->\n<!--</div>-->\n\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidebarComponent = (function () {
    function SidebarComponent(db, _shareData, _cat, _nav) {
        this.db = db;
        this._shareData = _shareData;
        this._cat = _cat;
        this._nav = _nav;
        this.cat = [];
        this.auctionType = [];
        this.prodkey = [];
        this.prodmodel = [];
        this.uid = [];
        this.showspinner = '';
        this.model = {};
    }
    SidebarComponent.prototype.mainFunction = function () {
        var _this = this;
        // this.cat = this.front.category ;
        //  this._shareData.returnSubject().subscribe(
        //   data => {
        // this.cat = data
        // })
        // this.auctionType = this.front.auction ;
        // this.prodkey = this.front.catidmodel ;
        // this.prodmodel = this.front.models ;
        // this.uid = this.front.userid;
        // console.log("sidebar",this.prodmodel)
        this.db.list('/categories', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.cat = [];
            snapshots.forEach(function (snapshot) {
                _this.cat.push(snapshot.key);
            });
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.mainFunction();
        this.loaded = true;
    };
    SidebarComponent.prototype.loadprodut = function (item) {
        localStorage.setItem("item1", item);
        this.product = item;
        this._shareData.vendorInfo(item);
        console.log("category: ", item);
        var sth = 'products/category/' + item;
        sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        console.log("sth: ", sth);
        this._nav.navigate([sth]);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'replace'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/toast-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Message */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Message = (function () {
    // constructor(content, style?) {
    //   this.content = content
    //   this.style = style || 'info'
    // }
    function Message(name, image, uid, content, read) {
        this.dismissed = false;
        this.content = content;
        this.name = name;
        this.uid = uid;
        this.image = image;
        this.read = read;
        //this.style = style || 'info'
    }
    return Message;
}());

var ToastNotificationService = (function () {
    function ToastNotificationService(db) {
        this.db = db;
        this.unreadCount = 0;
    }
    ToastNotificationService.prototype.getMessages = function () {
        return this.db.list('/messages', {
            query: {
                orderByKey: true
            }
        });
    };
    ToastNotificationService.prototype.getNotifications = function () {
        console.log("UUUUUser id: ", localStorage.getItem("user"));
        return this.db.list('/users/' + localStorage.getItem("user") + '/followersnotifications', {
            query: {
                orderByKey: true
            }
        });
    };
    // sendMessage(content, style) {
    //   const message = new Message(content)
    //   this.db.list('/messages').push(message)
    // }
    ToastNotificationService.prototype.sendNotification = function (follower, userid) {
        var name = follower;
        var content = "started following";
        var image = localStorage.getItem("image");
        var uid = localStorage.getItem("user");
        var read = false;
        var message = new Message(name, image, uid, content, read);
        //this.db.list('/users/'+userid+'/followersnotifications').push(message)
        this.db.object('/users/' + userid + '/followersnotifications/' + localStorage.getItem("user")).update(message);
        var check = 0;
        var check2 = 0;
        var value = 0;
        this.db.list('/users/' + userid + '/followersnotifications/', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.key == 'UnreadCount') {
                    check = 1;
                    value = parseInt(snapshot.val()) + 1;
                }
            });
            check2 = 1;
        }, function (error) {
            // this.is_as_error=true;
            console.log(error);
        });
        if (check == 1) {
            this.db.object('/users/' + userid + '/followersnotifications/').update({ 'UnreadCount': value });
        }
        else {
            this.db.object('/users/' + userid + '/followersnotifications/').update({ 'UnreadCount': 1 });
        }
    };
    ToastNotificationService.prototype.setUnreadCount = function (user) {
        var _this = this;
        console.log("User: ", user);
        this.db.list('/users/' + user + '/followersnotifications/', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.key == 'UnreadCount') {
                    _this.unreadCount = parseInt(snapshot.val());
                    //var toastobject = new ToastMessagesComponent();
                    //toastobject.settingUnreadCount(this.unreadCount)
                    console.log("UnreadCount: ", _this.unreadCount);
                }
            });
        }, function (error) {
            // this.is_as_error=true;
            console.log(error);
        });
    };
    // getUnreadCount(user){
    //
    //   console.log("User: ",user)
    //   var check = 0;
    //   var check2 = 0;
    //   var value = 0;
    //   this.db.list('/users/'+user+'/followersnotifications/',{ preserveSnapshot: true})
    //     .subscribe(snapshots=>{
    //         snapshots.forEach(snapshot => {
    //           if(snapshot.key == 'UnreadCount'){
    //             check = 1;
    //             value = parseInt(snapshot.val());
    //           }
    //         })
    //         check2 = 1;
    //       },
    //       error => {
    //         // this.is_as_error=true;
    //         console.log(error);
    //       });
    //   if(check == 1){
    //     return value.toString();
    //   }else{
    //     return "0";
    //   }
    // }
    ToastNotificationService.prototype.dismissMessage = function (messageKey) {
        this.db.object("messages/" + messageKey).update({ 'dismissed': true });
    };
    ToastNotificationService.prototype.dismissNotification = function (notificationKey) {
        this.db.object("users/" + localStorage.getItem("user") + "/followersnotifications" + ("/" + notificationKey)).update({ 'dismissed': true });
    };
    ToastNotificationService.prototype.readNotification = function (notificationKey) {
        var _this = this;
        this.db.object("users/" + localStorage.getItem("user") + "/followersnotifications" + ("/" + notificationKey)).update({ 'read': true });
        var value = 0;
        this.db.list('/users/' + localStorage.getItem("user") + '/followersnotifications/', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.key == 'UnreadCount') {
                    if (parseInt(snapshot.val()) != 0) {
                        value = parseInt(snapshot.val()) - 1;
                        _this.db.object('/users/' + localStorage.getItem("user") + '/followersnotifications/').update({ 'UnreadCount': value });
                        _this.unreadCount = value;
                    }
                }
            });
        }, function (error) {
            // this.is_as_error=true;
            console.log(error);
        });
    };
    return ToastNotificationService;
}());
ToastNotificationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ToastNotificationService);

var _a;
//# sourceMappingURL=toast-notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/toast-notification/toast-notification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.dropdown-notifications>.dropdown-container,.dropdown-notifications>.dropdown-menu*/\r\n/*{width:450px;max-width:450px}*/\r\n/*.dropdown-notifications .dropdown-menu*/\r\n/*{padding:0}*/\r\n/*.dropdown-notifications .dropdown-toolbar,.dropdown-notifications .dropdown-footer*/\r\n/*{padding:9.6px 12px}*/\r\n/*.dropdown-notifications .dropdown-toolbar*/\r\n/*{background:#fff}*/\r\n/*.dropdown-notifications .dropdown-footer*/\r\n/*{background:#eeeeee}*/\r\n\r\n/*!\r\n * bootstrap-notifications v1.0.3 (https://skywalkapps.github.io/bootstrap-notifications)\r\n * Copyright 2017 Martin Staněk\r\n * Licensed under MIT\r\n */\r\n\r\n .readclass{\r\n  background-color:#eeeeee !important;\r\n  text-decoration:none !important;\r\n  /*background-color:#f9f9f9 !important;*/\r\n  border-color:#eeeeee !important;\r\n  display:block !important;\r\n  padding:9.6px 12px !important;\r\n  border-width:0 0 1px 0 !important;\r\n  border-style:solid !important;\r\n  border-color:#eeeeee !important;\r\n  /*background-color:#fff !important;*/\r\n  color:#333333 !important;\r\n  text-decoration:none !important;\r\n}\r\n.dropdown-toolbar .notify{\r\n  float:left;\r\n  /*margin-top:20px !important;*/\r\n}\r\n.dropdown-toolbar .dropdown-toolbar-actions a{\r\n  cursor: pointer;\r\n}\r\n.img-circle {\r\n  border-radius: 50% !important;\r\n  width:50px !important;\r\n  height: 50px !important;\r\n}\r\n.media-body .notification-title a{\r\n  padding:0px !important;\r\n  /*width:70px !important;*/\r\n}\r\n\r\n.dropdown-container\r\n{\r\n  position:absolute !important;\r\n  top:100% !important;\r\n  left:0 !important;\r\n  z-index:1000 !important;\r\n  display:none !important;\r\n  float:left !important;\r\n  min-width:200px !important;\r\n  max-width:330px !important;\r\n  margin:2px 0 0 !important;\r\n  list-style:none !important;\r\n  font-size:14px !important;\r\n  background-color:#fff !important;\r\n  border:1px solid #ccc !important;\r\n  border:1px solid rgba(0,0,0,0.15) !important;\r\n  border-radius:4px !important;\r\n  box-shadow:0 6px 12px rgba(0,0,0,0.175) !important;\r\n  background-clip:padding-box !important;\r\n}\r\n.dropdown-container>.dropdown-menu\r\n{\r\n  position:static !important;\r\n  z-index:1000 !important;\r\n  float:none !important;\r\n  padding:10px 0 !important;\r\n  margin:0;border:0 !important;\r\n  background:transparent !important;\r\n  border-radius:0 !important;\r\n  box-shadow:none !important;\r\n  max-height:330px !important;\r\n  overflow-y:auto !important;\r\n}\r\n.dropdown-container>.dropdown-menu+.dropdown-menu\r\n{\r\n  padding-top:0 !important;\r\n}\r\n.dropdown-menu>li>a{\r\n  overflow:hidden !important;\r\n  white-space:nowrap !important;\r\n  word-wrap:normal !important;\r\n  text-decoration:none !important;\r\n  text-overflow:ellipsis !important;\r\n  -o-text-overflow:ellipsis !important;\r\n  transition:none !important;\r\n}\r\n.dropdown-toggle\r\n{\r\n  cursor:pointer !important;\r\n}.dropdown-header{\r\n   white-space:nowrap !important;\r\n }\r\n.open>.dropdown-container>.dropdown-menu,.open>.dropdown-container{\r\n  display:block !important;\r\n}\r\n.dropdown-toolbar{\r\n  padding-top:6px !important;\r\n  padding-left:20px !important;\r\n  padding-right:20px !important;\r\n  padding-bottom:5px !important;\r\n  background-color:#fff !important;\r\n  border-bottom:1px solid rgba(0,0,0,0.15) !important;\r\n  border-radius:4px 4px 0 0 !important;\r\n}\r\n.dropdown-toolbar>.form-group{\r\n  margin:5px -10px !important;\r\n}\r\n.dropdown-toolbar .dropdown-toolbar-actions{\r\n  float:right !important;\r\n}\r\n.dropdown-toolbar .dropdown-toolbar-title\r\n{\r\n  margin:0 !important;\r\n  font-size:14px !important;\r\n}\r\n.dropdown-footer{\r\n  padding:5px 20px !important;\r\n  border-top:1px solid #ccc !important;\r\n  border-top:1px solid rgba(0,0,0,0.15) !important;\r\n  border-radius:0 0 4px 4px !important;\r\n}\r\n.anchor-block small{\r\n  display:none !important;\r\n}\r\n@media (min-width:992px)\r\n{\r\n  .anchor-block small\r\n  {\r\n    display:block !important;\r\n    font-weight:normal !important;\r\n    color:#777777 !important;\r\n  }\r\n  .dropdown-menu>li>a.anchor-block\r\n  {\r\n    padding-top:6px !important;\r\n    padding-bottom:6px !important;\r\n  }\r\n}@media (min-width:992px)\r\n{\r\n  .dropdown.hoverable:hover>ul\r\n  {\r\n    display:block !important;\r\n  }\r\n}\r\n.dropdown-position-topright\r\n{\r\n  top:auto !important;\r\n  right:0 !important;\r\n  bottom:100% !important;\r\n  left:auto !important;\r\n  margin-bottom:2px !important;\r\n}\r\n.dropdown-position-topleft\r\n{\r\n  top:auto !important;\r\n  right:auto !important;\r\n  bottom:100% !important;\r\n  left:0 !important;\r\n  margin-bottom:2px !important;\r\n}\r\n.dropdown-position-bottomright\r\n{\r\n  right:0 !important;\r\n  left:auto !important;\r\n}\r\n.dropmenu-item-label\r\n{\r\n  white-space:nowrap !important;\r\n}\r\n.dropmenu-item-content\r\n{\r\n  position:absolute !important;\r\n  text-align:right !important;\r\n  max-width:60px;right:20px !important;\r\n  color:#777777 !important;\r\n  overflow:hidden !important;\r\n  white-space:nowrap !important;\r\n  word-wrap:normal !important;\r\n  text-overflow:ellipsis !important;\r\n}\r\nsmall.dropmenu-item-content\r\n{\r\n  line-height:20px !important;\r\n}\r\n.dropdown-menu>li>a.dropmenu-item\r\n{\r\n  position:relative !important;\r\n  padding-right:66px !important;\r\n}\r\n.dropdown-submenu .dropmenu-item-content\r\n{\r\n  right:40px !important;\r\n}\r\n.dropdown-menu>li.dropdown-submenu>a.dropmenu-item\r\n{\r\n  padding-right:86px !important;\r\n}\r\n.dropdown-inverse .dropdown-menu\r\n{\r\n  background-color:rgba(0,0,0,0.8) !important;\r\n  border:1px solid rgba(0,0,0,0.9) !important;\r\n}\r\n.dropdown-inverse .dropdown-menu .divider\r\n{\r\n  height:1px !important;\r\n  margin:9px 0 !important;\r\n  overflow:hidden !important;\r\n  background-color:#2b2b2b !important;\r\n}\r\n.dropdown-inverse .dropdown-menu>li>a\r\n{\r\n  color:#cccccc !important;\r\n}\r\n\r\n.dropdown-inverse .dropdown-menu>li>a:hover,.dropdown-inverse .dropdown-menu>li>a:focus\r\n{\r\n  color:#fff !important;\r\n  background-color:#262626 !important;\r\n}\r\n.dropdown-inverse .dropdown-menu>.active>a,.dropdown-inverse .dropdown-menu>.active>a:hover,.dropdown-inverse .dropdown-menu>.active>a:focus\r\n{\r\n  color:#fff !important;\r\n  background-color:#337ab7 !important;\r\n}\r\n.dropdown-inverse .dropdown-menu>.disabled>a,.dropdown-inverse .dropdown-menu>.disabled>a:hover,.dropdown-inverse .dropdown-menu>.disabled>a:focus\r\n{\r\n  color:#777777 !important;\r\n}\r\n.dropdown-inverse .dropdown-header\r\n{\r\n  color:#777777 !important;\r\n}\r\n.table>thead>tr>th.col-actions\r\n{\r\n  padding-top:0 !important;\r\n  padding-bottom:0 !important;\r\n}\r\n.table>thead>tr>th.col-actions .dropdown-toggle\r\n{\r\n  color:#777777 !important;\r\n}\r\n.notifications{\r\n  list-style:none !important;\r\n  padding:0 !important;\r\n}\r\n.notification\r\n{\r\n  display:block !important;\r\n  padding:9.6px 12px !important;\r\n  border-width:0 0 1px 0 !important;\r\n  border-style:solid !important;\r\n  border-color:#eeeeee !important;\r\n  background-color:#fff !important;\r\n  color:#333333 !important;\r\n  text-decoration:none !important;\r\n}\r\n.notification:last-child\r\n{\r\n  border-bottom:0 !important;\r\n}\r\n.notification:hover,.notification.active:hover\r\n{\r\n  background-color:#f9f9f9 !important;\r\n  border-color:#eeeeee !important;\r\n}\r\n.readclass:hover{\r\n  border-color:#eeeeee !important;\r\n}\r\n.notification.active\r\n{\r\n  background-color:#f4f4f4 !important;\r\n}\r\na.notification:hover\r\n{\r\n  text-decoration:none !important;\r\n}\r\n.notification-title\r\n{\r\n  font-size:15px !important;\r\n  margin-bottom:0 !important;\r\n}\r\n.notification-desc{\r\n  margin-bottom:0 !important;\r\n}\r\n.notification-meta\r\n{\r\n  color:#777777 !important;\r\n}\r\n.dropdown-notifications>.dropdown-container,.dropdown-notifications>.dropdown-menu\r\n{\r\n  width:450px !important;\r\n  max-width:450px !important;\r\n}\r\n.dropdown-notifications .dropdown-menu\r\n{\r\n  padding:0 !important;\r\n}\r\n.dropdown-notifications .dropdown-toolbar,.dropdown-notifications .dropdown-footer\r\n{\r\n  padding:9.6px 12px !important;\r\n}\r\n.dropdown-notifications .dropdown-toolbar\r\n{\r\n  background:#fff !important;\r\n}\r\n.dropdown-notifications .dropdown-footer\r\n{\r\n  background:#eeeeee !important;\r\n}\r\n.notification-icon\r\n{\r\n  margin-right:6.8775px !important;\r\n}\r\n.notification-icon:after\r\n{\r\n  position:absolute !important;\r\n  content:attr(data-count) !important;\r\n  margin-left:-6.8775px !important;\r\n  margin-top:-6.8775px !important;\r\n  padding:0 4px !important;\r\n  min-width:13.755px !important;\r\n  height:13.755px !important;\r\n  line-height:13.755px !important;\r\n  background:red !important;\r\n  border-radius:10px !important;\r\n  color:#fff !important;\r\n  text-align:center !important;\r\n  vertical-align:middle !important;\r\n  font-size:11.004px !important;\r\n  font-weight:600 !important;\r\n  font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif !important;\r\n}\r\n.notification .media-body\r\n{\r\n  padding-top:5.6px !important;\r\n}\r\n.btn-lg .notification-icon:after\r\n{\r\n  margin-left:-8.253px !important;\r\n  margin-top:-8.253px !important;\r\n  min-width:16.506px !important;\r\n  height:16.506px !important;\r\n  line-height:16.506px !important;\r\n  font-size:13.755px !important;\r\n}\r\n.btn-xs .notification-icon:after\r\n{\r\n  content:'' !important;\r\n  margin-left:-4.1265px !important;\r\n  margin-top:-2.06325px !important;\r\n  min-width:6.25227273px !important;\r\n  height:6.25227273px !important;\r\n  line-height:6.25227273px !important;\r\n  padding:0 !important;\r\n}\r\n.btn-xs .notification-icon\r\n{\r\n  margin-right:3.43875px !important;\r\n}\r\n\r\n\r\n\r\n.delete{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:1rem;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:0;position:relative;vertical-align:top;width:20px}\r\n.delete:after,.delete:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}\r\n.delete:before{height:2px;width:50%}\r\n.delete:after{height:50%;width:2px}\r\n.delete:focus,.delete:hover{background-color:rgba(10,10,10,.3)}\r\n.delete:active{background-color:rgba(10,10,10,.4)}\r\n.delete.is-small{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}\r\n.delete.is-medium{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}\r\n.delete.is-large{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}\r\n\r\n\r\n.tick i:hover{\r\n  color:#e74c3c;\r\n}\r\n\r\n.tickselected{\r\n  color:#e74c3c;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nspan {\r\n  position:absolute;\r\n  top:-2em;\r\n  right: 0.5em;\r\n\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n\r\n  line-height:1.5em;\r\n  text-align:center;\r\n\r\n  font-family:'Helvetica Neue', Helvetica, sans-serif;\r\n  font-weight:bold;\r\n  color:#fff;\r\n  text-shadow:0px 1px 0px rgba(0,0,0,.15);\r\n  box-shadow:\r\n    inset 0px 1px 0px rgba(255,255,255,.35),\r\n    0px 1px 1px rgba(0,0,0,.2);\r\n  border-radius:4em;\r\n\r\n  opacity:0;\r\n  filter: alpha(opacity=0);\r\n  transition: .3s top ease-in, .3s opacity ease-in;\r\n}\r\n\r\n\r\n.red {\r\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#f78297', EndColorStr='#f46677');\r\n  border:1px solid #ce4f5e;\r\n}\r\n\r\n\r\n.menu li a {\r\n  color: #343434;\r\n}\r\n\r\n.menu li a span {\r\n  top:-1em;\r\n  opacity:1;\r\n  filter: alpha(opacity=100);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toast-notification/toast-notification.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n<div class=\"\">\n\n        <li class=\"dropdown dropdown-notifications\" style=\"background:none;\">\n          <a  style=\"color:#000 !important;\" *ngIf=\"toast.unreadCount > 0; else other1\" href=\"#notifications-panel\" role=\"button\" (click)=\"initialization()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">          <!--Profile-->\n                  <i style=\"color:#000 !important;\"data-bubble=\"5\" class=\"fa fa-bell\"></i>\n                          <span style=\"background-color:#e74c3c\">{{unreadcount}}</span>\n                             <!--<i data-bubble=\"5\" class=\"fa fa-bell notification-icon\"></i>-->\n                                    <!--<li><a href=\"#\">Profile</a></li>-->\n                                     </a>\n                                        <ng-template #other1>\n\n                                          <a href=\"#notifications-panel\" role=\"button\" (click)=\"initialization()\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                         <i data-bubble=\"5\" class=\"fa fa-bell\"></i>\n                                             </a>\n                                       </ng-template>\n\n          <div class=\"dropdown-container dropdown-position-bottomright \">\n\n            <div class=\"dropdown-toolbar\">\n              <!--<div class=\"dropdown-toolbar-actions\">-->\n                <!--<a href=\"#\">Mark all as read</a>-->\n              <!--</div>-->\n              <!-- <h3 class=\"dropdown-toolbar-title\" style=\"color:#000;\">Notifications (2)</h3> -->\n              <h3 *ngIf=\"unreadcount > 0; else other\" class=\"dropdown-toolbar-title\" style=\"color:#000;\">Unread Notifications ({{unreadcount}})</h3>            <ng-template #other>              <h3 class=\"dropdown-toolbar-title\" style=\"color:#000\">Unread Notifications (0)</h3>            </ng-template>\n            </div><!-- /dropdown-toolbar -->\n\n            <ul class=\"dropdown-menu navbar-right\">\n              <ul class=\"notifications\">\n                <div *ngFor=\"let notification of notifications | async | reverse\">\n\n                  <!--<li *ngIf=\"notification.read; else notread\" class=\"readclass\">-->\n                  <li class=\"{{notification.read ? 'readclass' : 'notification'}}\">\n                    <!--<div  class=\"readclass\">-->\n                    <div class=\"media\">\n                      <div class=\"media-left\">\n                        <div class=\"media-object\">\n                          <img src=\"{{notification.image}}\"  (click) = singleuser(notification.name,notification.uid) class=\"img-circle\" style=\"cursor:pointer;\" alt=\"Name\">\n                        </div>\n                      </div>\n\n                      <div class=\"media-body\">\n                        <strong class=\"notification-title\"><a  (click) = singleuser(notification.name,notification.uid) style=\"color:#e74c3c;cursor:pointer\">{{notification.name}}</a> {{notification.content}} you</strong>\n                        <p class=\"notification-desc\">Visit {{notification.name}} profile to see his/her products</p>\n\n                        <div class=\"notification-meta\">\n                          <small class=\"timestamp\">27. 11. 2015, 15:00</small>\n                        </div>\n                      </div>\n\n                      <div class=\"{{notification.read ? 'tickselected' : 'tick'}}\" style=\"float:right;margin-top:-60px;\">\n                        <!--<button class=\"delete\" (click)=\"read(notification.$key)\"></button>-->\n                        <i class=\"fa fa-check fa-lg\" (click)=\"read(notification.$key)\"></i>\n                      </div>\n                    </div>\n                    <!--</div>-->\n                  </li>\n\n                </div>\n\n\n\n              </ul>\n            </ul>\n\n            <div class=\"dropdown-footer text-center\">\n              <!-- <a href=\"#\">View All</a> -->\n            </div><!-- /dropdown-footer -->\n\n          </div><!-- /dropdown-container -->\n        </li><!-- /dropdown -->\n\n        <!--<li><a href=\"#\">Dashboard</a></li>-->\n        <!--<li><a href=\"#\">Projects</a></li>-->\n        <!--<li><a href=\"#\">People</a></li>-->\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/toast-notification/toast-notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastNotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_notification_service__ = __webpack_require__("../../../../../src/app/toast-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastNotificationComponent = (function () {
    function ToastNotificationComponent(toast, db) {
        var _this = this;
        this.toast = toast;
        this.db = db;
        this.unreadcount = 0;
        this.checkk = 0;
        this.db.list('/users/' + localStorage.getItem("user") + '/followersnotifications/', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (snapshot.key == 'UnreadCount') {
                    _this.unreadcount = parseInt(snapshot.val());
                }
            });
        }, function (error) {
            // this.is_as_error=true;
            console.log(error);
        });
        this.messages = "No Notification";
        this.toast.setUnreadCount(localStorage.getItem("user"));
    }
    ToastNotificationComponent.prototype.ngOnInit = function () {
        this.notifications = this.toast.getNotifications();
        console.log("this.messages:  ", this.notifications);
    };
    ToastNotificationComponent.prototype.initialization = function () {
        this.notifications = this.toast.getNotifications();
    };
    ToastNotificationComponent.prototype.settingUnreadCount = function (unread) {
        this.unreadcount = unread;
    };
    ToastNotificationComponent.prototype.read = function (itemKey) {
        //this.toast.dismissMessage(itemKey)
        this.toast.readNotification(itemKey);
        this.unreadcount = this.toast.unreadCount;
    };
    ToastNotificationComponent.prototype.Incrementcheck = function () {
        this.checkk = 1;
    };
    ToastNotificationComponent.prototype.dismiss = function (itemKey) {
        //this.toast.dismissMessage(itemKey)
        this.toast.dismissNotification(itemKey);
    };
    return ToastNotificationComponent;
}());
ToastNotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast-notification',
        template: __webpack_require__("../../../../../src/app/toast-notification/toast-notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/toast-notification/toast-notification.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toast_notification_service__["a" /* ToastNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__toast_notification_service__["a" /* ToastNotificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], ToastNotificationComponent);

var _a, _b;
//# sourceMappingURL=toast-notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/exported-components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportedComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_preloader_service__ = __webpack_require__("../../../../../src/app/services/preloader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("../../../../../src/app/services/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







function httpServiceFactory(backend, defaultOptions, preloaderService) {
    return new __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */](backend, defaultOptions, preloaderService);
}
var ExportedComponentsModule = (function () {
    function ExportedComponentsModule() {
    }
    return ExportedComponentsModule;
}());
ExportedComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loading_spinner_component__["a" /* LoadingSpinnerComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_preloader_service__["a" /* PreloaderService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* BaseRequestOptions */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* HttpService */],
                useFactory: httpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__services_preloader_service__["a" /* PreloaderService */]]
            }
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ]
    })
], ExportedComponentsModule);

//# sourceMappingURL=exported-components.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner{\r\n    margin:100px auto;\r\n    width: 500px;\r\n    height: 40px;\r\n    text-align: center;\r\n    font-size: 10px;\r\n}\r\n\r\n.spinner > div {\r\n    background-color: #333;\r\n    height: 100%;\r\n    width:6px;\r\n    display: inline-block;\r\n\r\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-int-out;\r\n    animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n}\r\n\r\n.spinner .rect2 {\r\n    -webkit-animation-delay: -1.1s;\r\n    animation-delay: -1.1s;\r\n}\r\n\r\n.spinner .rect3 {\r\n    -webkit-animation-delay: -1.0s;\r\n    animation-delay: -1.0s;\r\n}\r\n\r\n.spinner .rect4 {\r\n    -webkit-animation-delay: -0.9s;\r\n    animation-delay: -0.9s;\r\n}\r\n\r\n.spinner .rect5 {\r\n    -webkit-animation-delay: -0.8s;\r\n    animation-delay: -0.8s;\r\n}\r\n\r\n@-webkit-keyframes sk-stretchdelay{\r\n    0%, 40%, 100% {-webkit-transform: scaleY(0.4)}\r\n    20% { -webkit-transform: scaleY(1.0)}\r\n}\r\n\r\n@keyframes sk-stretchdelay{\r\n    0%, 40%, 100% \r\n    {\r\n        transform: scaleY(0.4);\r\n        -webkit-transform: scaleY(0.4)\r\n    }\r\n    20% { \r\n        transform: scaleY(1.0);\r\n        -webkit-transform: scaleY(1.0)\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <!-- <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div> -->\n  <img  src=\"assets/img/fidget_red.gif\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading-spinner',
        template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    googleMapsKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map