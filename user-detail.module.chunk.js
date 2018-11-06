webpackJsonp(["user-detail.module"],{

/***/ "../../../../../src/app/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".star-rating{line-height:32px;font-size:1.25em}.star-rating .fa-star{color:#e74c3c}h3{overflow:hidden;text-align:center}h3:after,h3:before{background-color:#ddd;content:\"\";display:inline-block;height:1px;position:relative;vertical-align:middle;width:50%}h3:before{right:.5em;margin-left:-50%}h3:after{left:.5em;margin-right:-50%}agm-map{height:200px}\r\n\r\n.be-user-detail button{\r\nbackground: #fff;\r\ncolor: #cc0000;\r\nfont-weight: 700;\r\n}\r\n.be-user-detail button:hover{\r\n    background-color: #63321a;\r\n    color: #ffffff;\r\n    opacity: 1;\r\n}\r\n.img {    position: relative;    float: left;    width:  100px;    height: 100px;    background-position: 50% 50%;    background-repeat:   no-repeat;    background-size:     cover;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content-block\" style=\"margin-top:50px;\">\n<div class=\"container be-detail-container\">\n<div class=\"row\">\n<div class=\"col-xs-12 col-md-4 left-feild\">\n<div class=\"be-user-block style-3\">\n<div class=\"be-user-detail\">\n<img  class=\"profile-image img-circle\" src=\"{{prof_dict.image}}\" alt onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"...\">\n\n\n<p class=\"be-use-name\" style=\"font-size:28px;color:#fff; margin-bottom:20px;\">{{prof_dict.name}}</p>\n<button *ngIf=\"currentUser &&  followPerson != 1 \" (click) = \"follow()\"  class=\"btn btn-next btn-lg\" >Follow</button>\n<button *ngIf=\"currentUser && followPerson == 1\" (click) = \"unfollow()\" class=\"btn btn-next btn-lg\" >Un-Follow</button>\n\n<!-- <div class=\"be-user-info\" style=\"font-weight:bolder;\">\n{{prof_dict.email}}\n</div> -->\n</div>\n<div class=\"detail-info\">\n        <h2>Ratings</h2>\n<div class=\"profile-ratting\">\n<div class=\"star-rating\">\n<span *ngIf=\"prof_dict.averagerating >= 1; else template1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n<ng-template #template1><span class=\"fa fa-star-o\" data-rating=\"1\"></span></ng-template>\n<span *ngIf=\"prof_dict.averagerating >= 2; else template2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n<ng-template #template2><span class=\"fa fa-star-o\" data-rating=\"2\"></span></ng-template>\n<span *ngIf=\"prof_dict.averagerating >= 3; else template3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n<ng-template #template3><span class=\"fa fa-star-o\" data-rating=\"3\"></span></ng-template>\n<span *ngIf=\"prof_dict.averagerating >= 4; else template4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n<ng-template #template4><span class=\"fa fa-star-o\" data-rating=\"4\"></span></ng-template>\n<span *ngIf=\"prof_dict.averagerating >= 5; else template5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n<ng-template #template5><span class=\"fa fa-star-o\" data-rating=\"5\"></span></ng-template>\n\n</div>\n\n</div>\n\n</div>\n\n</div>\n\n</div>\n<div class=\"col-xs-12 col-md-8\">\n\n<div class=\"tab-wrapper style-1\">\n\n<div class=\"tabs-content clearfix\">\n<div class=\"tab-info active\">\n\n\n<div class=\"row\">\n<h3 style=\"margin:0px 20px 20px 20px;\"><span style=\"font-weight:bolder;\">Selling items</span></h3>\n<div *ngIf=\"prodinfo.length == 0\" class=\"col-md-12\" style=\"text-align:center\">\n<img src=\"assets/img/no-products-found.jpg\" alt=\"\">\n</div>\n<ng-container *ngFor=\"let sell of prodinfo;let ind=index\" >\n<div *ngIf=\"sell.image0 && sell.startPrice\" (click) = singleproduct(sell.title,catRecord[ind],auctionRecord[ind],stateRecord[ind],sellingkey[ind],userkey) class=\"col-md-4 col-xs-6 col-sm-4\">\n                <div  class=\"be-post woo fadeInUp\">\n                        <a  style=\"cursor:pointer\"  class=\"be-img-block\">\n                                <img  src=\"{{sell.image0}}\" class=\"img\"   alt=\"...\" >\n                        </a>\n                        <a   class=\"be-post-title\" style=\"font-weight:bolder;\">\n                                {{sell.title}}</a>\n                        <span>\n                                <a  class=\"be-post-tag\"> {{sell.description}}</a>\n                                <!-- <a href=\"blog-detail-2.html\" class=\"be-post-tag\">UI/UX</a>,\n                                <a href=\"blog-detail-2.html\" class=\"be-post-tag\">Web Design</a> -->\n                        </span>\n                        <div class=\"item-btn\">\n                                <div class=\"pull-left\">\n                                <button *ngIf=\"auctionRecord[ind]=='buy-it-now'  && catRecord[ind] =='Jobs'\" class=\"btn btn-next\" >Apply Now</button>\n                                <button *ngIf=\"auctionRecord[ind]=='buy-it-now'  && catRecord[ind] !='Jobs'\" class=\"btn btn-next\" >Buy Now</button>\n                                <button *ngIf=\"auctionRecord[ind]=='reserve' || auctionRecord[ind]=='non-reserve'\" class=\"btn btn-alert\" >Bid Now</button>\n                                </div>\n                                <div class=\"pull-right\"> \n                                <span style=\"color:#e74c3c; font-weight:bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{sell.startPrice}}</span>\n                                </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                        \n                        </div>\n    <!-- <div class=\"clearfix\" *ngIf=\"(ind + 1) % 3 == 0\"></div> -->\n\n</div>\n\n</ng-container>\n        <div  *ngIf=\"prodinfo.length == 0\"class=\"col-md-12 no-product-found\">\n                <div>\n                        <img src=\"../../assets/img/no_product.png\"  alt=\"no product\">\n                </div>\n                <h2>No Product found...</h2>\n\n        </div>\n</div>\n        \n</div>\n\n\n</div>\n</div>\n</div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDetailComponent = (function () {
    // customers: FirebaseListObservable<any[]>;
    function UserDetailComponent(authService, afAuth, sg, db, _nav) {
        this.authService = authService;
        this.afAuth = afAuth;
        this.sg = sg;
        this.db = db;
        this._nav = _nav;
        this.user = [];
        this.userkey = {};
        this.userproduct = [];
        this.sellproduct = [];
        this.prof_dict = [];
        this.prodinfo = [];
        this.product = [];
        this.sellingkey = [];
        this.catRecord = [];
        this.auctionRecord = [];
        this.stateRecord = [];
        this.check_follow = [];
        this.followboolean = false;
        this.keys = [];
    }
    UserDetailComponent.prototype.loadFunction = function (userkey) {
        ///////////////////////////user get////////////////////////////
        var _this = this;
        this.subscription = this.db.list('/users/' + userkey, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.prof_dict[snapshot.key] = snapshot.val();
            });
        });
        ///////////////////////////end/////////////////////////////////
    };
    UserDetailComponent.prototype.checkfollow = function (userkey) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                console.log("currentuser", _this.currentUser);
                _this.db.list('/users/' + userkey + '/followers', { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        _this.check_follow[snapshot.key] = snapshot.val();
                        _this.followPerson = _this.check_follow[res.uid];
                        console.log("follow", _this.check_follow[res.uid]);
                    });
                    for (var key in _this.check_follow) {
                        if (_this.check_follow[key] == 1) {
                            _this.keys = { key: key, value: _this.check_follow[key] };
                        }
                        console.log("check", _this.keys);
                    }
                });
            }
        });
    };
    UserDetailComponent.prototype.followUnfollow = function () {
        if (this.keys.key == this.currentUser) {
            return true;
        }
        else {
            return false;
        }
    };
    UserDetailComponent.prototype.initilize = function () {
        this.user = [];
        this.userkey = {};
        this.userproduct = [];
        this.sellproduct = [];
        this.prof_dict = [];
        this.prodinfo = [];
        this.product = [];
        this.sellingkey = [];
    };
    UserDetailComponent.prototype.userSellingProduct = function (userkey) {
        ///////////////////////user selling product/////////////////////
        var _this = this;
        this.db.list('/users/' + userkey + '/products/selling', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.catRecord.push(snapshot.val()['category']);
                _this.auctionRecord.push(snapshot.val()['auctionType']);
                _this.stateRecord.push(snapshot.val()['state']);
                _this.sellingkey.push(snapshot.key);
                _this.userproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
            });
            var _loop_1 = function (i) {
                var pinfo = {};
                _this.db.list('/products/' + _this.userproduct[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        pinfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.prodinfo.push(pinfo);
            };
            for (var i = 0; i < _this.userproduct.length; i++) {
                _loop_1(i);
            }
            console.log(_this.prodinfo.length);
        });
    };
    UserDetailComponent.prototype.singleproduct = function (title, cat, auction, state, pid, uid) {
        console.log(cat, auction, state, pid);
        this.sg['category'] = cat;
        this.sg['AuctionType'] = auction;
        this.sg['state'] = state;
        this.sg['pid'] = pid;
        this.sg['uid'] = uid;
        // localStorage.setItem("singleproduct",JSON.stringify(sell));
        var urlTitle;
        var mainTitle;
        urlTitle = title.replace(/[^A-Za-z ]/g, "");
        mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
        var url = 'item/' + mainTitle;
        this._nav.navigate([url], { queryParams: { cat: cat, auction: auction, state: state, pid: pid, uid: uid } });
        //  console.log("set",sell);
        //  this._nav.navigate([url],{ queryParams:{id: 'lklklk' } });
    };
    UserDetailComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.user = JSON.parse(localStorage.getItem("userinfo"));
        this.userkey = this.user;
        this.loadFunction(this.userkey);
        this.checkfollow(this.userkey);
        this.userSellingProduct(this.userkey);
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserDetailComponent.prototype.follow = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var ukey_1 = _this.userkey;
                var folowing_user = _this.db.object('users/' + res.uid);
                folowing_user.$ref.transaction(function (folowing) {
                    console.log("followingcount", folowing['followingsCount']);
                    var dummy_value = "1";
                    if (folowing.followings == undefined) {
                        folowing["followings"] = (_a = {}, _a["" + ukey_1] = dummy_value, _a);
                    }
                    else {
                        folowing.followings["" + ukey_1] = dummy_value;
                    }
                    var num = 1;
                    if (folowing["followingsCount"] == undefined) {
                        folowing["followingsCount"] = num.toString();
                    }
                    else {
                        var count = void 0;
                        count = parseInt(folowing["followingsCount"]);
                        count += 1;
                        console.log("count", count);
                        var countUpdate = {};
                        folowing["followingsCount"] = count.toString();
                    }
                    return folowing ? folowing : 1;
                    var _a;
                }).then(function (success) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Followings', 'You have successfully added seller to your following list. We will notify you about seller each new listing.', 'success');
                    var follower_user = _this.db.object('users/' + ukey_1);
                    follower_user.$ref.transaction(function (folower) {
                        var value = "1";
                        if (folower.followers == undefined) {
                            folower["followers"] = (_a = {}, _a["" + res.uid] = value, _a);
                        }
                        else {
                            folower.followers["" + res.uid] = value;
                        }
                        var num = 1;
                        if (folower["followersCount"] == undefined) {
                            folower["followersCount"] = num.toString();
                        }
                        else {
                            var fcount = void 0;
                            fcount = parseInt(folower["followersCount"]);
                            fcount += 1;
                            console.log("fcount", fcount);
                            folower["followersCount"] = fcount.toString();
                        }
                        return folower ? folower : 1;
                        var _a;
                    });
                });
            }
        });
    };
    UserDetailComponent.prototype.unfollow = function () {
        var _this = this;
        this.followboolean == true;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var ukey_2 = _this.userkey;
                var unfolowing_user = _this.db.object('users/' + res.uid);
                // unfolowing_user.$ref.child('followings').child(`${ukey}`).remove().then((success) => {
                unfolowing_user.$ref.transaction(function (folowing) {
                    var fol_zero = 0;
                    folowing.followings["" + ukey_2] = "0";
                    var count;
                    count = parseInt(folowing["followingsCount"]);
                    count -= 1;
                    console.log("count", count);
                    folowing["followingsCount"] = count.toString();
                    return folowing ? folowing : 1;
                }).then(function (success) {
                    __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Followings', 'You have un-followed the seller, you can follow again any time.', 'success');
                    var unfollower_user = _this.db.object('users/' + ukey_2);
                    // unfollower_user.$ref.child('followers').child(`${res.uid}`).remove();
                    var zero = 0;
                    unfollower_user.$ref.transaction(function (folower) {
                        folower.followers["" + res.uid] = "0";
                        var fcount;
                        fcount = parseInt(folower["followersCount"]);
                        fcount -= 1;
                        folower["followersCount"] = fcount.toString();
                        return folower ? folower : 1;
                    }).then(function (success) {
                        _this.checkfollow(_this.userkey);
                    });
                    // })
                });
            }
        });
    };
    UserDetailComponent.prototype.removeWatchlist = function () {
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()({
                    title: 'MySell4Bids Watch List',
                    text: "Are you sure you want to unwatch this item?",
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'UN-WATCH'
                }).then(function (result) {
                    // let unwatch_list = this.db.object('users/' +res.uid+ '/products/watching/'+this.pid)
                    // unwatch_list.remove()
                    // this.watch = true;
                });
            }
        });
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-detail',
        template: __webpack_require__("../../../../../src/app/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _e || Object])
], UserDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailModule", function() { return UserDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_detail_routing__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_rating__ = __webpack_require__("../../../../ngx-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular_star_rating__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UserDetailModule = (function () {
    function UserDetailModule() {
    }
    return UserDetailModule;
}());
UserDetailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__user_detail_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_rating__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_11_angular_star_rating__["StarRatingModule"],
            __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_detail_component__["a" /* UserDetailComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_sweetalert2__["SweetAlertService"],
        ]
    })
], UserDetailModule);

//# sourceMappingURL=user-detail.module.js.map

/***/ }),

/***/ "../../../../../src/app/user-detail/user-detail.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_detail_component__ = __webpack_require__("../../../../../src/app/user-detail/user-detail.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_detail_component__["a" /* UserDetailComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=user-detail.routing.js.map

/***/ })

});
//# sourceMappingURL=user-detail.module.chunk.js.map