webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".star-rating {\r\n  line-height:32px;\r\n  font-size:1.25em;\r\n}\r\n\r\n.star-rating .fa-star{color:#f5ef04}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content-block\" style=\"margin-top:50px;\">\n  <div class=\"container be-detail-container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-4 left-feild\">\n        <div class=\"be-user-block style-3\">\n          <div *ngIf=\"(user | async)?.uid\" class=\"be-user-detail\">\n            <img style=\"cursor:text\" class=\"profile-image img-circle\" src=\"{{prof_dict.image}}\" alt onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"...\" >\n            <p class=\"be-use-name\"style=\"font-size:28px;color:#fff\">{{prof_dict.name}}</p>\n            <p class=\"edit-details\"data-toggle=\"modal\" data-target=\"#editDetail\"> <i class=\"fa fa-edit\"></i> Edit details</p>\n            <p class=\"edit-details\" (click)=\"changePhoto()\"> <i class=\"fa fa-photo\" style=\"padding-right: 10px\"></i>Change Photo</p>\n\n          </div>\n          <div class=\"detail-info\">\n            <h2>Ratings</h2>\n            <div class=\"profile-ratting\">\n              <div class=\"star-rating\">\n                <span *ngIf=\"prof_dict.averagerating >= 1; else template1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n                <ng-template #template1><span class=\"far fa-star\" data-rating=\"1\"></span></ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 2; else template2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n                <ng-template #template2><span class=\"far fa-star\" data-rating=\"2\"></span></ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 3; else template3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n                <ng-template #template3><span class=\"far fa-star\" data-rating=\"3\"></span></ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 4; else template4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n                <ng-template #template4><span class=\"far fa-star\" data-rating=\"4\"></span></ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 5; else template5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n                <ng-template #template5><span class=\"far fa-star\" data-rating=\"5\"></span></ng-template>\n\n              </div>\n            </div>\n            <p>(Total ratings - {{prof_dict.totalratings}})</p>\n\n          </div>\n          <div class=\"detail-info \">\n            <h2>Detail Info</h2>\n            <h5>Email</h5>\n            <span>{{prof_dict.email}}</span>\n            <h5>Zip Code</h5>\n            <span>{{prof_dict.zipCode}}</span>\n            <h5>State / Location</h5>\n            <span>{{prof_dict.state}}</span>\n\n          </div>\n          <div class=\"detail-info\">\n            <h2>Send Email Notifications for:</h2>\n\n            <div class=\"form-group trigger\">\n              <label class=\"switch label-sell\">\n                <input type=\"checkbox\" [checked]=\"config.buyingActivities === 'on'\" (change)=\"changeBuyingStatus($event)\">\n                <span class=\"slider round\"></span>\n                Buying Activites\n              </label>\n            </div>\n            <div class=\"form-group trigger\">\n              <label class=\"switch label-sell\">\n                <input type=\"checkbox\"  [checked]=\"config.sellingActivities === 'on'\"  (change)=\"changeSellingStatus($event)\">\n                <span class=\"slider round\"></span>\n                Selling Activites\n              </label>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"col-xs-12 col-md-8\">\n\n        <ul class=\"nav nav-tabs\">\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\" style=\"color:#000\">Selling</a></li>\n          <li ><a data-toggle=\"tab\" href=\"#menu1\" style=\"color:#000\">Bought & Wins</a></li>\n          <li><a data-toggle=\"tab\" href=\"#menu2\" style=\"color:#000\">Buying & Bids</a></li>\n          <li><a data-toggle=\"tab\" href=\"#menu3\" style=\"color:#000\">Watching</a></li>\n          <li><a data-toggle=\"tab\" href=\"#menu4\" style=\"color:#000\">Followers</a></li>\n          <li><a data-toggle=\"tab\" href=\"#menu5\" style=\"color:#000\">Following</a></li>\n        </ul>\n\n        <div class=\"tab-content\">\n          <div id=\"home\" class=\"tab-pane fade in active\">\n\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <div *ngIf=\"prodinfo.length == 0\" class=\"col-md-12\" style=\"text-align:center\">\n                <img src=\"assets/img/no-products-found.jpg\" alt=\"\">\n              </div>\n              <ng-container *ngFor=\"let sell of prodinfo;let ind=index\">\n                <div *ngIf=\"sell.image0 && sellcat[ind] \"    class=\"col-md-4 col-xs-6 col-sm-4\">\n\n                  <div class=\"be-post\" (click) = singleproduct(sell.title,sellcat[ind],sellauction[ind],sellstate[ind],sellingkey[ind],profileid)>\n                    <a class=\"be-img-block\">\n                      <img src=\"{{sell.image0}}\"  alt=\"...\">\n                    </a>\n                    <a class=\"be-post-title\" style=\"font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\"> {{sell.title}}</a><span style=\"float:right; color:#e74c3c; font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{sell.startPrice}}</span>\n                    <span style=\"padding-bottom: 10px\">\n            <a class=\"be-post-tag\"> {{sell.description}}</a>\n            </span>\n\n                  </div>\n                </div>\n              </ng-container>\n              <div  *ngIf=\"prodinfo.length == 0\"class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_product.png\" alt=\"no product\">\n                </div>\n                <h2>Items you list for sale, appear here.</h2>\n              </div>\n\n\n            </div>\n          </div>\n          <div id=\"menu1\" class=\"tab-pane fade\">\n\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <div *ngIf=\"boughtinfo.length == 0\" class=\"col-md-12\" style=\"text-align:center\">\n                <img src=\"assets/img/no-products-found.jpg\" alt=\"\">\n              </div>\n              <ng-container *ngFor=\"let bought of boughtinfo;let bgh=index\" >\n                <div *ngIf=\"bought.image0\" (click) = singleproduct(bought.title,boughtcat[bgh],boughtauction[bgh],boughtstate[bgh],boughtkey[bgh],profileid) class=\"col-ml-12 col-xs-6 col-sm-4\">\n                  <div  class=\"be-post\">\n                    <a class=\"be-img-block\">\n                      <img src=\"{{bought.image0}}\" alt=\"...\">\n                    </a>\n                    <a class=\"be-post-title\" style=\"font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\"> {{bought.title}}</a><span style=\"float:right; color:#e74c3c; font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{bought.startPrice}}</span>\n                    <span>\n            <a class=\"be-post-tag\"> {{bought.description}}</a>\n            </span>\n\n                  </div>\n                  <!-- <div class=\"clearfix\" *ngIf=\"(bgh + 1) % 3 == 0\"></div> -->\n\n                </div>\n              </ng-container>\n              <div  *ngIf=\"boughtinfo.length == 0\"class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_product.png\" alt=\"no product\">\n                </div>\n                <h2>Items you are currently in the process of buying and you have bid on, appear here.</h2>\n\n              </div>\n            </div>\n\n\n          </div>\n          <div id=\"menu2\" class=\"tab-pane fade\">\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <div *ngIf=\"buyinginfo.length == 0\" class=\"col-md-12\" style=\"text-align:center\">\n                <img src=\"assets/img/no-products-found.jpg\" alt=\"\">\n              </div>\n              <ng-container *ngFor=\"let buying of buyinginfo;let buy=index\">\n\n                <div *ngIf=\"buying.image0\"   (click) = singleproduct(buying.title,buyingcat[buy],buyingauction[buy],buyingstate[buy],buyingkey[buy],profileid) class=\"col-ml-12 col-xs-6 col-sm-4\">\n                  <div class=\"be-post\">\n                    <a class=\"be-img-block\">\n                      <img src=\"{{buying.image0}}\"  alt=\"...\">\n                    </a>\n                    <a class=\"be-post-title\" style=\"font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\"> {{buying.title}}</a><span style=\"float:right; color:#e74c3c; font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{buying.startPrice}}</span>\n                    <span>\n            <a class=\"be-post-tag\"> {{buying.description}}</a>\n            </span>\n\n                  </div>\n                  <!-- <div class=\"clearfix\" *ngIf=\"(buy + 1) % 3 == 0\"></div>     -->\n                </div>\n              </ng-container>\n              <div  *ngIf=\"buyinginfo.length == 0\"class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_product.png\" alt=\"no product\">\n                </div>\n                <h2>Items you are currently in the process of buying and you have bid on, appear here.</h2>\n\n              </div>\n            </div>\n\n\n\n          </div>\n          <div id=\"menu3\" class=\"tab-pane fade\">\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <!-- <div *ngIf=\"watchinginfo.length == 0\" class=\"col-md-12\" style=\"text-align:center\">\n              <img src=\"assets/img/no-products-found.jpg\" alt=\"\">\n              </div> -->\n              <ng-container *ngFor=\"let watching of watchinginfo;let wat=index\">\n                <div *ngIf=\"watching.image0\" (click) = singleproduct(watching.title,watchingcat[wat],watchingauction[wat],watchingstate[wat],watchingkey[wat],profileid) class=\"col-ml-12 col-xs-6 col-sm-4\">\n                  <div  class=\"be-post\">\n                    <a class=\"be-img-block\">\n                      <img src=\"{{watching.image0}}\" alt=\"...\">\n                    </a>\n                    <a class=\"be-post-title\" style=\"font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\"> {{watching.title}}</a><span style=\"float:right; color:#e74c3c; font-weight:bold; width:8em;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{watching.startPrice}}</span>\n                    <span>\n            <a class=\"be-post-tag\"> {{watching.description}}</a>\n            </span>\n\n                  </div>\n                  <!-- <div class=\"clearfix\" *ngIf=\"(wat + 1) % 3 == 0\"></div>         -->\n                </div>\n              </ng-container>\n              <div  *ngIf=\"watchinginfo.length == 0\"class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_bids.png\" alt=\"no product\">\n                </div>\n                <h2>No Result Found..</h2>\n\n              </div>\n            </div>\n          </div>\n\n          <div id=\"menu4\" class=\"tab-pane fade\">\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <div  *ngIf=\"followeruser.length == 0\" class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_bids.png\" alt=\"No Follower\">\n                </div>\n                <h2>People, who follow you, appear here.</h2>\n              </div>\n              <div *ngFor=\"let userinfo of followeruser; let fl=index\" class=\"mix category-3 custom-column-5\" style=\"display:block;width:260px;clear:none;\" >\n                <div class=\"be-user-block style-2\" (click) = singleuser(userinfo,followerinfo[fl]) >\n                  <a class=\"be-ava-user style-2\" style=\"cursor:pointer;\" >\n                    <img style=\"border-radius:100%;\" src=\"{{userinfo.image}}\" onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"...\">\n                  </a>\n                  <div class=\"be-user-counter\">\n                    <div *ngIf=\"userinfo.totalratings >= 1; else rate\"class=\"c_number\">{{userinfo.totalratings}}</div>\n                    <ng-template #rate><div class=\"c_number\">0</div></ng-template>\n                    <div class=\"c_text\" style=\"color:#fff;\">Ratings</div>\n                  </div>\n                  <a class=\"be-use-name\">{{userinfo.name}}</a>\n                  <!-- <p class=\"be-user-info\">{{userinfo.email}}</p> -->\n                  <div class=\"be-text-tags\">\n                    <div class=\"star-rating\">\n                      <span *ngIf=\"userinfo.averagerating >= 1; else template1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n                      <ng-template #template1><span class=\"far fa-star\" data-rating=\"1\"></span></ng-template>\n                      <span *ngIf=\"userinfo.averagerating >= 2; else template2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n                      <ng-template #template2><span class=\"far fa-star\" data-rating=\"2\"></span></ng-template>\n                      <span *ngIf=\"userinfo.averagerating >= 3; else template3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n                      <ng-template #template3><span class=\"far fa-star\" data-rating=\"3\"></span></ng-template>\n                      <span *ngIf=\"userinfo.averagerating >= 4; else template4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n                      <ng-template #template4><span class=\"far fa-star\" data-rating=\"4\"></span></ng-template>\n                      <span *ngIf=\"userinfo.averagerating >= 5; else template5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n                      <ng-template #template5><span class=\"far fa-star\" data-rating=\"5\"></span></ng-template>\n\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n\n\n            </div>\n          </div>\n\n          <div id=\"menu5\" class=\"tab-pane fade\">\n            <div class=\"row\" style=\"margin-top:20px;\">\n              <div  *ngIf=\"followinguser.length == 0\" class=\"col-md-12 no-product-found\">\n                <div>\n                  <img src=\"../../assets/img/no_bids.png\" alt=\"No Following\">\n                </div>\n                <h2>People, you follow , appear here.</h2>\n              </div>\n\n              <div *ngFor=\"let fuserinfo of followinguser; let fg=index\" class=\"mix category-3 custom-column-5\" style=\"display:block;width:260px;clear:none;\" >\n                <div class=\"be-user-block style-2\" (click) = singleuser(fuserinfo,followinginfo[fg]) >\n                  <a class=\"be-ava-user style-2\" style=\"cursor:pointer;\" >\n                    <img style=\"border-radius:100%;\" src=\"{{fuserinfo.image}}\" onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"...\">\n                  </a>\n                  <div class=\"be-user-counter\">\n                    <div *ngIf=\"fuserinfo.totalratings >= 1; else frate\"class=\"c_number\">{{fuserinfo.totalratings}}</div>\n                    <ng-template #frate><div class=\"c_number\">0</div></ng-template>\n                    <div class=\"c_text\" style=\"color:#fff;\">Ratings</div>\n                  </div>\n                  <a class=\"be-use-name\">{{fuserinfo.name}}</a>\n                  <!-- <p class=\"be-user-info\">{{fuserinfo.email}}</p> -->\n                  <div class=\"be-text-tags\">\n                    <div class=\"star-rating\">\n                      <span *ngIf=\"fuserinfo.averagerating >= 1; else ftemplate1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n                      <ng-template #ftemplate1><span class=\"far fa-star\" data-rating=\"1\"></span></ng-template>\n                      <span *ngIf=\"fuserinfo.averagerating >= 2; else ftemplate2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n                      <ng-template #ftemplate2><span class=\"far fa-star\" data-rating=\"2\"></span></ng-template>\n                      <span *ngIf=\"fuserinfo.averagerating >= 3; else ftemplate3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n                      <ng-template #ftemplate3><span class=\"far fa-star\" data-rating=\"3\"></span></ng-template>\n                      <span *ngIf=\"fuserinfo.averagerating >= 4; else ftemplate4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n                      <ng-template #ftemplate4><span class=\"far fa-star\" data-rating=\"4\"></span></ng-template>\n                      <span *ngIf=\"fuserinfo.averagerating >= 5; else ftemplate5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n                      <ng-template #ftemplate5><span class=\"far fa-star\" data-rating=\"5\"></span></ng-template>\n\n                    </div>\n\n                  </div>\n                </div>\n              </div>\n\n\n\n\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Counter  offer Modal -->\n<div class=\"modal fade\" id=\"editDetail\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Edit Profile</h4>\n      </div>\n      <div class=\"modal-body \">\n        <form  class=\"form\"  #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Full Name</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.name\"   name=\"name\" required>\n            <!-- <span class=\"pull-left help-block\" *ngIf=\"name.touched && name.errors\">\n              <span style=\"color: #bd081c\" *ngIf=\"name.errors.required\"> *Full name is required</span>\n            </span> -->\n          </div>\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Zip Code</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.zipCode\"\n                   name=\"zipCode\" required>\n            <!-- <span class=\"pull-left help-block\" *ngIf=\"zipCode.touched && zipCode.errors\">\n                <span style=\"color: #bd081c\" *ngIf=\"zipCode.errors.required\"> *Zip Code is required</span>\n            </span> -->\n            <p style=\"color:#e74c3c\">* City and State will be updated from Zip Code</p>\n          </div>\n          <div class=\"form-group\">\n            <button  type=\"submit\" class=\"btn btn-next pull-left\">Update</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProfileComponent = (function () {
    function ProfileComponent(_serv, _http, sg, afAuth, db, _nav) {
        var _this = this;
        this._serv = _serv;
        this._http = _http;
        this.sg = sg;
        this.afAuth = afAuth;
        this.db = db;
        this._nav = _nav;
        this.profileid = {};
        this.prof_dict = [];
        this.userproduct = [];
        this.sellproduct = [];
        this.sellingkey = [];
        this.prodinfo = [];
        this.boughtkey = [];
        this.boughtproduct = [];
        this.boughtinfo = [];
        this.buyingkey = [];
        this.buyingproduct = [];
        this.buyinginfo = [];
        this.watchingkey = [];
        this.watchingproduct = [];
        this.watchinginfo = [];
        this.followerinfo = [];
        this.followeruser = [];
        this.followinginfo = [];
        this.followinguser = [];
        this.currentuser = {};
        this.name = {};
        this.sellauction = [];
        this.sellcat = [];
        this.sellstate = [];
        this.boughtauction = [];
        this.boughtcat = [];
        this.boughtstate = [];
        this.buyingauction = [];
        this.buyingcat = [];
        this.buyingstate = [];
        this.watchingauction = [];
        this.watchingcat = [];
        this.watchingstate = [];
        this.model = {};
        this.location_Data = { "city": "", "state": "" };
        this.upload_url = { "image": "" };
        this.config = {};
        this.basePath = '/uploads';
        this.user = this.afAuth.authState;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentuser = res.uid;
                // console.log('user is logged in',res.uid);
            }
            else {
                // console.log('user not logged in');
            }
        });
        this.profileid = JSON.parse(localStorage.getItem("profileid"));
        // console.log("get id", this.profileid);
        ///////////////////////user profile/////////////////////////////
        // this.db.list('/users/'+this.profileid,{ preserveSnapshot: true})
        this.db.list('/users/' + this.profileid, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.prof_dict[snapshot.key] = snapshot.val();
            });
            _this.config = _this.prof_dict.configs;
            console.log("profile", _this.config);
        });
        /////////////////////////end////////////////////////////
        ///////////////////////// user profile products////////
        ///////////////////////user selling product/////////////////////
        // this.db.list('/users/'+this.prof_dict+'/products/selling',{ preserveSnapshot: true})
        this.db.list('/users/' + this.profileid + '/products/selling', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.sellcat = [];
            _this.sellauction = [];
            _this.sellstate = [];
            _this.sellingkey = [];
            _this.userproduct = [];
            snapshots.forEach(function (snapshot) {
                _this.sellcat.push(snapshot.val()['category']);
                _this.sellauction.push(snapshot.val()['auctionType']);
                _this.sellstate.push(snapshot.val()['state']);
                _this.sellingkey.push(snapshot.key);
                _this.userproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
            });
            console.log("cat", _this.sellcat, "auction", _this.sellauction, "state", _this.sellstate);
            var _loop_1 = function (i) {
                var pinfo = {};
                _this.db.list('/products/' + _this.userproduct[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        pinfo[snapshot.key] = snapshot.val();
                    });
                });
                console.log("pp", pinfo);
                _this.prodinfo.push(pinfo);
            };
            for (var i = 0; i < _this.userproduct.length; i++) {
                _loop_1(i);
            }
            // console.log("selling",this.prodinfo);
        });
        /////////////////////////////end///////////////////////////////////////////////
        /////////////////////////////////////Bought/////////////////////////////////////
        this.db.list('/users/' + this.profileid + '/products/bought', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.boughtcat = [];
            _this.boughtauction = [];
            _this.boughtstate = [];
            _this.boughtkey = [];
            _this.boughtproduct = [];
            snapshots.forEach(function (snapshot) {
                _this.boughtcat.push(snapshot.val()['category']);
                _this.boughtauction.push(snapshot.val()['auctionType']);
                _this.boughtstate.push(snapshot.val()['state']);
                _this.boughtkey.push(snapshot.key);
                _this.boughtproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
            });
            var _loop_2 = function (i) {
                var binfo = {};
                _this.db.list('/products/' + _this.boughtproduct[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        binfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.boughtinfo.push(binfo);
            };
            for (var i = 0; i < _this.boughtproduct.length; i++) {
                _loop_2(i);
            }
            // console.log("bought",this.boughtinfo);
        });
        ////////////////////////////end///////////////////////
        /////////////////////////////Buying///////////////////
        this.db.list('/users/' + this.profileid + '/products/buying', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.buyingcat = [];
            _this.buyingauction = [];
            _this.buyingstate = [];
            _this.buyingkey = [];
            _this.buyingproduct = [];
            snapshots.forEach(function (snapshot) {
                _this.buyingcat.push(snapshot.val()['category']);
                _this.buyingauction.push(snapshot.val()['auctionType']);
                _this.buyingstate.push(snapshot.val()['state']);
                _this.buyingkey.push(snapshot.key);
                _this.buyingproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
            });
            var _loop_3 = function (i) {
                var byinfo = {};
                _this.db.list('/products/' + _this.buyingproduct[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        byinfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.buyinginfo.push(byinfo);
            };
            for (var i = 0; i < _this.buyingproduct.length; i++) {
                _loop_3(i);
            }
            // console.log("buying",this.buyinginfo);
        });
        ////////////////////////////end//////////////////////
        ///////////////////////////watching//////////////////////
        this.db.list('/users/' + this.profileid + '/products/watching', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.watchingcat = [];
            _this.watchingauction = [];
            _this.watchingstate = [];
            _this.watchingkey = [];
            _this.watchingproduct = [];
            snapshots.forEach(function (snapshot) {
                _this.watchingcat.push(snapshot.val()['category']);
                _this.watchingauction.push(snapshot.val()['auction']);
                _this.watchingstate.push(snapshot.val()['state']);
                _this.watchingkey.push(snapshot.key);
                _this.watchingproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auction'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
            });
            var _loop_4 = function (i) {
                var wtinfo = {};
                _this.db.list('/products/' + _this.watchingproduct[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        wtinfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.watchinginfo.push(wtinfo);
            };
            for (var i = 0; i < _this.watchingproduct.length; i++) {
                _loop_4(i);
            }
            // console.log("watching",this.watchinginfo);
        });
        //////////////////////////end///////////////////////////
        //////////////////////////////////////followers///////////////
        this.db.list('/users/' + this.profileid + '/followers', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.followeruser = [];
                if (snapshot.val() == 1) {
                    _this.followerinfo.push(snapshot.key);
                }
            });
            console.log("ff", _this.followerinfo);
            var _loop_5 = function (i) {
                var flinfo = {};
                _this.db.list('/users/' + _this.followerinfo[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        flinfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.followeruser.push(flinfo);
            };
            for (var i = 0; i < _this.followerinfo.length; i++) {
                _loop_5(i);
            }
            // console.log("followers",this.followeruser);
        });
        //////////////////////////////////////end////////////////////
        ///////////////////////////////////following//////////////////
        this.db.list('/users/' + this.profileid + '/followings', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.followinginfo = [];
            snapshots.forEach(function (snapshot) {
                if (snapshot.val() == 1) {
                    _this.followinginfo.push(snapshot.key);
                }
            });
            var _loop_6 = function (i) {
                var fginfo = {};
                _this.db.list('/users/' + _this.followinginfo[i], { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        fginfo[snapshot.key] = snapshot.val();
                    });
                });
                _this.followinguser.push(fginfo);
            };
            // console.log("ff",this.followerinfo);
            for (var i = 0; i < _this.followinginfo.length; i++) {
                _loop_6(i);
            }
            console.log("following", _this.followinguser);
        });
        //////////////////////////////////end////////////////////////
    }
    ProfileComponent.prototype.checkValue = function (event) {
        console.log(event);
    };
    ProfileComponent.prototype.singleproduct = function (title, cat, auction, state, pid, uid) {
        console.log(cat, auction, state, pid, uid);
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
    ProfileComponent.prototype.singleuser = function (user, id) {
        localStorage.setItem("userinfo", JSON.stringify(id));
        var url = 'user/' + id + '/' + user.name;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
        //  console.log("user",this.userinfo);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    ProfileComponent.prototype.changeBuyingStatus = function (event) {
        var _this = this;
        console.log(event.target.checked);
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var buying_update = {};
                if (event.target.checked == true) {
                    buying_update = { buyingActivities: "on" };
                }
                if (event.target.checked == false) {
                    buying_update = { buyingActivities: "off" };
                }
                var user_config = '/users/' + res.uid + '/configs';
                _this.db.object(user_config).update(buying_update);
            }
        });
    };
    ProfileComponent.prototype.changeSellingStatus = function (event) {
        var _this = this;
        console.log(event.target.checked);
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var selling_update = {};
                if (event.target.checked == true) {
                    selling_update = { sellingActivities: "on" };
                }
                if (event.target.checked == false) {
                    selling_update = { sellingActivities: "off" };
                }
                var user_config = '/users/' + res.uid + '/configs';
                _this.db.object(user_config).update(selling_update);
            }
        });
    };
    // changePhoto() {
    //   swal({
    //     title: 'Select Photo',
    //     input: 'file',
    //     showCancelButton: true,
    //     confirmButtonText: 'Submit',
    //     showLoaderOnConfirm: true,
    //
    //   }).then((file) => {
    //     if (file) {
    //       console.log(file, file.name)
    //       let storageRef = firebase.storage().ref();
    //       let uploadTask = storageRef.child(`/uploads/${file.name}`).put(file);
    //       uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //         (snapshot) => {
    //           // upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
    //           console.log("url", uploadTask.snapshot.downloadURL);
    //
    //         },
    //
    //         (error) => {
    //           // upload failed
    //           console.log(error)
    //         },
    //         () => {
    //
    //           this.profileImg(uploadTask.snapshot.downloadURL)
    //         })
    //
    //
    //     }
    //   });
    //
    //
    // }
    ProfileComponent.prototype.profileImg = function (url) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.db.object('users/' + res.uid).update({
                    'image': url
                }).then(function (success) {
                    __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Edit Profile', 'Profile image updated successfully.', 'success');
                });
            }
        });
    };
    ProfileComponent.prototype.zipcodeCheck = function (zip) {
        var _this = this;
        console.log(zip);
        this._serv.zipcode(zip).subscribe(function (data) {
            _this.location_Data = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid == true) {
            console.log(f.value);
            this._serv.zipcode(f.value.zipCode).subscribe(function (data) {
                _this.location_Data = data;
                console.log(data);
                _this.afAuth.authState.subscribe(function (res) {
                    if (res && res.uid) {
                        _this.db.object('users/' + res.uid).update({
                            'name': f.value.name,
                            'zipCode': f.value.zipCode,
                            'city': _this.location_Data.city,
                            'state': _this.location_Data.state
                        }).then(function (success) {
                            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Edit Profile', 'Profile updated successfully.', 'success');
                            _this.model['name'] = null;
                            _this.model['zipCode'] = null;
                            $('#editDetail').css('display', 'none');
                            $('.modal-backdrop.in').css('opacity', 0);
                            $('.modal-backdrop.in').css('display', 'none');
                            $('body').removeClass('modal-open');
                            $('body').css('padding-right', 17);
                        });
                    }
                });
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProfileComponent.prototype.zipcode = function (zip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('https://apis.rfpgurus.com/zipcode/' + zip + '/', { headers: headers }).map(function (response) { return response.json(); });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_simple_global__["SimpleGlobal"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _f || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_routing__ = __webpack_require__("../../../../../src/app/profile/profile.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("../../../../../src/app/profile/profile.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_4__profile_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__profile_component__["a" /* ProfileComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__profile_component__["a" /* ProfileComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=profile.routing.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = (function () {
    function ProfileService(_http) {
        this._http = _http;
    }
    ProfileService.prototype.zipcode = function (zip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.get('https://apis.rfpgurus.com/zipcode/' + zip + '/', { headers: headers }).map(function (response) { return response.json(); });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProfileService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map