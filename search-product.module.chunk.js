webpackJsonp(["search-product.module"],{

/***/ "../../../../../src/app/search-product/search-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".load-more-btn{\r\n    background: #0a0a0a !important;\r\n    padding: 0 !important;\r\n    margin: 0;\r\n    width: 70px;\r\n    height: 70px !important;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    min-width: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-product/search-product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <div *ngIf=\"showSpinner\" class=\"app-preloader\" >\n    <app-loading-spinner ></app-loading-spinner>\n</div> -->\n<div id=\"content-block\" style=\"min-height: 600px; margin-top:0;margin-bottom:40px\">\n\n  <div class=\"s_keywords\" style=\"margin-bottom:8px;\"></div>\n\n  <!--<div class=\"container-fluid custom-container\">-->\n    <!--<button class=\"w3-button w3-teal w3-xlarge w3-hide-large\" onclick=\"w3_open()\">&#9776;</button>-->\n   <!--<a class=\"btn color-1 size-3 hover-10\"><i class=\"fa fa-trash-o\"></i>Acessories</a> -->\n    <!--<ol class=\"breadcrumb\">-->\n      <!--<li class=\"breadcrumb-item\"><a routerLink='/' style=\"color:#777;font-size:16px !important\"><i class=\"fa fa-home\"></i> Home</a>-->\n      <!--</li>-->\n      <!--<li class=\"breadcrumb-item active\">Products-->\n      <!--</li>-->\n      <!--<li class=\"breadcrumb-item active\">Search-->\n      <!--</li>-->\n      <!--<li class=\"breadcrumb-item active\">{{search}}-->\n      <!--</li>-->\n    <!--</ol>-->\n  <!--</div>-->\n  <div class=\"container-fluid custom-container\">\n    <div class=\"row\">\n      <!--sidebar-->\n      <!--<div class=\"col-lg-2 col-md-3 col-sm-4 left-feild\">-->\n        <!--<app-sidebar></app-sidebar>-->\n      <!--</div>-->\n    <!--endsidebar-->\n      <div class=\"col-md-12 col-sm-12 pd-0-1024\">\n        <!-- routerLink='/item'  -->\n        <ng-container *ngFor=\"let category of models;let ind=index\" >\n            <div *ngIf=\"category.image0 && category.title\" (click)=single(category.title,category.category,category.auctionType,category.state,category.productId,category.uid) class=\"col-lg-4 col-md-4 col-sm-4 animated fadeIn\" style=\"padding:0 5px;\">\n              <div class=\"be-post\">\n                <a class=\"be-img-block\">\n                  <img src=\"{{category.image0}}\" alt=\"...\" >\n                </a>\n                <a class=\"be-post-title\" style=\"font-weight:bolder;\">{{category.title}}</a>\n                <span>\n                  <a class=\"be-post-tag\" > {{category.description}}</a>\n                </span>\n                <div class=\"item-btn \">\n                  <div class=\"pull-left\">\n                    <button *ngIf=\"category.auctionType=='buy-it-now' && category.category =='Jobs'\" class=\"btn btn-next\" >Apply Now</button>\n                    <button *ngIf=\"category.quantity >= 1 && (category.auctionType=='buy-it-now' &&category.category != 'Jobs')\" class=\"btn btn-next\" >Buy Now</button>\n                    <button *ngIf=\"category.quantity == 0 && (category.auctionType=='buy-it-now' && category.category != 'Jobs')\" class=\"btn btn-previous\" >Sold</button>\n                    <button *ngIf=\"category.auctionType=='reserve' || category.auctionType=='non-reserve'\"  class=\"btn btn-alert\">Bid Now</button>\n                  </div>\n                  <div class=\"pull-right\">\n                      <span style=\"color:#e74c3c; font-weight:bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{category.startPrice}}</span>\n                  </div>\n                </div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"clearfix\" *ngIf=\"(ind + 1) % 3 == 0\"></div>\n            </div>\n          </ng-container>\n        <div class=\"clearfix\"></div>\n        <div *ngIf=\"models.length == 0 && !showSpinner\" class=\"no-record text-center\">\n          <i class=\"fa fa-exclamation-triangle\" style=\"font-size:40px\"></i>\n          <h1>No Record Found!</h1>\n        </div>\n        <div *ngIf=\"models.length >= 15 && !showSpinner\" class=\"text-center loadmore-holder\" style=\"font-size:20px\">\n          <button class=\"btn btn-next load-more load-more-btn\" infiniteScroll\n            [infiniteScrollDistance]=\"2\"\n            [infiniteScrollThrottle]=\"1000\"\n            (click)=\"onScroll()\">\n            <i style=\"margin-right: 0 !important;\" class=\"fa fa-plus\"></i>\n          </button><br>\n          SHOW MORE\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Download the free Sell4Bids app</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n          <a href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\" ><img style=\"height:50px;margin:10px 0 0 10px\" src=\"assets/img/googleplayx233.png\"></a>\n          <a  href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\" >\n          <img style=\"height:50px;margin:10px 0 0 10px\" src=\"assets/img/appstorex233.png\">\n          </a>\n              </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/search-product/search-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_product_search_service__ = __webpack_require__("../../../../../src/app/search-product/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__);
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






var SearchProductComponent = (function () {
    function SearchProductComponent(_shareData, sg, _nav, route, _serv, db) {
        this._shareData = _shareData;
        this.sg = sg;
        this._nav = _nav;
        this.route = route;
        this._serv = _serv;
        this.db = db;
        this.models = [];
        this.showSpinner = true;
        this.productLoad = false;
    }
    SearchProductComponent.prototype.loadsearch = function (sid) {
        var _this = this;
        console.log("end", this.end);
        if (this.end == undefined) {
            this.db.list('result/' + sid + '/', {
                query: {
                    limitToLast: 15,
                    orderByChild: 'chargeTime'
                }
            }).subscribe(function (items) {
                _this.showSpinner = false;
                _this.end = items[0]['chargeTime'];
                _this.models = items.reverse();
                console.log("model", _this.models, items);
                console.log("pid", _this.end);
            });
        }
        else {
            this.db.list('result/' + sid + '/', {
                query: {
                    limitToLast: 10,
                    orderByChild: 'chargeTime',
                    endAt: this.end
                }
            }).subscribe(function (items) {
                _this.end = items[0]['chargeTime'];
                items = items.reverse();
                var i = 0;
                items.forEach(function (element) {
                    i++;
                    if (i != 1) {
                        _this.models.push(element);
                    }
                });
                console.log(_this.models);
            });
        }
    };
    SearchProductComponent.prototype.onScroll = function () {
        this.loadsearch(this.search);
    };
    SearchProductComponent.prototype.single = function (title, category, auction, state, pid, uid) {
        console.log(auction, state, pid, uid);
        this.sg['category'] = category;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this.sg['uid'] = uid;
        console.log("global", this.sg['category'], this.sg['AuctionType'], this.sg['state'], this.sg['pid'], this.sg['uid']);
        // localStorage.setItem("singleproduct",JSON.stringify(acess));
        var urlTitle;
        var mainTitle;
        urlTitle = title.replace(/[^A-Za-z ]/g, "");
        mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
        var url = 'item/' + mainTitle;
        this._nav.navigate([url], { queryParams: { cat: category, auction: auction, state: state, pid: pid, uid: uid } });
    };
    SearchProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._shareData.returnSearch().subscribe(function (data) {
            _this.showSpinner = true;
            window.scrollTo(0, 0);
            _this.models = [];
            _this.end = undefined;
            _this.search = data;
            if (!data) {
                _this.route.params.subscribe(function (params) {
                    console.log('params', params['id']);
                    _this.search = params['id'];
                });
            }
            _this._serv.search_service(_this.search).subscribe(function (data) {
                console.log(data);
                _this.loadsearch(_this.search);
            }, function (error) {
                console.log(error);
                _this.loadsearch(_this.search);
            });
        });
    };
    return SearchProductComponent;
}());
SearchProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-product',
        template: __webpack_require__("../../../../../src/app/search-product/search-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-product/search-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_shared_service__["a" /* SharedData */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__search_product_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_product_search_service__["a" /* SearchService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _f || Object])
], SearchProductComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=search-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-product/search-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductModule", function() { return SearchProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_product_component__ = __webpack_require__("../../../../../src/app/search-product/search-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_product_routing__ = __webpack_require__("../../../../../src/app/search-product/search-product.routing.ts");
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











var SearchProductModule = (function () {
    function SearchProductModule() {
    }
    return SearchProductModule;
}());
SearchProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_5__search_product_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__search_product_component__["a" /* SearchProductComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_sweetalert2__["SweetAlertService"],
        ]
    })
], SearchProductModule);

//# sourceMappingURL=search-product.module.js.map

/***/ }),

/***/ "../../../../../src/app/search-product/search-product.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_product_component__ = __webpack_require__("../../../../../src/app/search-product/search-product.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__search_product_component__["a" /* SearchProductComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=search-product.routing.js.map

/***/ })

});
//# sourceMappingURL=search-product.module.chunk.js.map