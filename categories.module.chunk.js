webpackJsonp(["categories.module"],{

/***/ "../../../../../src/app/categories/categories.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories_routing__ = __webpack_require__("../../../../../src/app/categories/categories.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    return CategoriesModule;
}());
CategoriesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_5__categories_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__categories_component__["a" /* CategoriesComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_sweetalert2__["SweetAlertService"],
        ]
    })
], CategoriesModule);

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__categories_component__["a" /* CategoriesComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=categories.routing.js.map

/***/ })

});
//# sourceMappingURL=categories.module.chunk.js.map