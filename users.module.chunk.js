webpackJsonp(["users.module"],{

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".star-rating{line-height:32px;font-size:1.25em}.star-rating .fa-star{color:#e74c3c}.btn2{color:#e74c3c!important;background:#fff!important;border:1px solid #e74c3c!important}.load-more-btn{background:#0a0a0a!important;padding:0!important;margin:0;width:70px;height:70px!important;border-radius:50%;text-align:center;min-width:auto}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"content-block\"style=\"margin-top:0px;margin-bottom:0px\">\n\n<!--Breadcrumbs-->\n<div class=\"s_keywords\" style=\"margin-bottom:20px;\">\n<div class=\"container-fluid custom-container\">\n    <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a routerLink='/' style=\"color:#777;font-size:16px !important\"><i class=\"fa fa-home\"></i> Home</a>\n        </li>\n        <li class=\"breadcrumb-item active\">Users\n        </li>\n\n      </ol>\n</div>\n</div>\n<!--end-->\n\n\n<!-- (click) = singleuser(userinfo,userkey[ind]) -->\n<!-- Spinner -->\n<div *ngIf=\"showSpinner\" class=\"app-preloader\" >\n        <app-loading-spinner ></app-loading-spinner>\n    </div>\n<div class=\"container-fluid custom-container\">\n<div class=\"row\">\n<div class=\"col-md-10 col-md-push-2\">\n<div id=\"container-mix\" class=\"be-user-wrapper row\">\n<div *ngFor=\"let userinfo of users | async; let ind=index\" class=\"mix category-1 custom-column-5 animated fadeIn\"  style=\"display:block;\" >\n<!-- <div *ngIf=\"user_id != userkey[ind]\"> -->\n<div class=\"be-user-block style-2\" >\n<a class=\"be-ava-user style-2\" >\n<img style=\"border-radius:100%;\" src=\"{{userinfo.image}}\"  onError=\"this.src='assets/img/Blank-Photo.jpg';\"  alt=\"...\">\n</a>\n<div class=\"be-user-counter\">\n<div  *ngIf=\"userinfo.totalratings >= 1; else rate\"class=\"c_number\">{{userinfo.totalratings}}</div>\n<ng-template #rate><div class=\"c_number\">0</div></ng-template>\n<div class=\"c_text\" style=\"color:#fff;\">Ratings</div>\n</div>\n<a class=\"be-use-name\">{{userinfo.name}}</a>\n<!-- <p class=\"be-user-info\">{{userinfo.email}}</p> -->\n<div class=\"be-text-tags\">\n  <div class=\"star-rating\">\n      <span *ngIf=\"userinfo.averagerating >= 1; else template1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n      <ng-template #template1><span class=\"fa fa-star-o\" data-rating=\"1\"></span></ng-template>\n      <span *ngIf=\"userinfo.averagerating >= 2; else template2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n      <ng-template #template2><span class=\"fa fa-star-o\" data-rating=\"2\"></span></ng-template>\n      <span *ngIf=\"userinfo.averagerating >= 3; else template3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n      <ng-template #template3><span class=\"fa fa-star-o\" data-rating=\"3\"></span></ng-template>\n      <span *ngIf=\"userinfo.averagerating >= 4; else template4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n      <ng-template #template4><span class=\"fa fa-star-o\" data-rating=\"4\"></span></ng-template>\n      <span *ngIf=\"userinfo.averagerating >= 5; else template5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n      <ng-template #template5><span class=\"fa fa-star-o\" data-rating=\"5\"></span></ng-template>\n\n  </div>\n\n</div>\n\n\n<!-- <div *ngIf=\"show_detail; else follow_block\"> -->\n    <div>\n<a class=\"btn color-1 size-2 hover-1\" (click) = singleuser(userinfo,userkey[ind]) >View</a>\n</div>\n<!-- <ng-template #follow_block>\n    <div *ngIf=\"users_follow[userkey[ind]]; else followonly\">\n        <a class=\"btn2 btn color-1 size-2 hover-1\" (click)=\"followers_insertion_deletion(userkey[ind])\">{{  users_follow[userkey[ind]] ? 'Followed':'Follow' }}</a>\n    </div>\n    <ng-template #followonly>\n        <a class=\"btn color-1 size-2 hover-1\" (click)=\"followers_insertion_deletion(userkey[ind])\">{{  users_follow[userkey[ind]] ? 'Followed':'Follow' }}</a>\n    </ng-template>\n</ng-template> -->\n\n</div>\n</div>\n<div *ngIf=\"!showSpinner\" class=\"text-center loadmore-holder\" style=\"font-size:20px\">\n        <button class=\"btn btn-next load-more load-more-btn\" infiniteScroll\n                [infiniteScrollDistance]=\"2\"\n                [infiniteScrollThrottle]=\"1000\"\n                (click)=\"onScroll()\">\n          <i style=\"margin-right: 0px !important;\" class=\"fa fa-plus\"></i>\n        </button><br>\n        SHOW MORE\n      </div>\n      <div *ngIf=\"!finished\">\n      <!-- Loading more movies... -->\n      </div>\n      <div *ngIf=\"finished\">\n      <!-- End of database... That's all folks! -->\n      </div>\n</div>\n</div>\n\n<div class=\"col-md-2 col-md-pull-10 left-feild\">\n\n<div class=\"be-vidget\">\n    <app-sidebar *ngIf=\"showSpinner == false\"></app-sidebar>\n</div>\n</div>\n\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__toast_notification_service__ = __webpack_require__("../../../../../src/app/toast-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var UsersComponent = (function () {
    // items: FirebaseListObservable<Item[]>;
    function UsersComponent(db, _nav, _ps, afAuth, toast) {
        var _this = this;
        this.db = db;
        this._nav = _nav;
        this._ps = _ps;
        this.afAuth = afAuth;
        this.toast = toast;
        this.usermodel = [];
        this.userproduct = [];
        this.userkey = [];
        this.userinfo = [];
        //Pagination portion
        this.movies = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.users = new __WEBPACK_IMPORTED_MODULE_7_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.batch = 20; // size of each query
        this.lastKey = ''; // key to offset next query from
        this.finished = false; // boolean when end of database is reached
        this.check = 0;
        this.currentuser = {};
        this.showSpinner = true;
        this.show_detail = true;
        this.follow_button = true;
        this.total_users = 0;
        this.follow_var = "follow";
        this.users_follow = {};
        this.check_follow_followed = 0;
        this.show_detail = true;
        console.log("User Component Constructor");
        ///Checking if there is user logged in or not
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentuser = res.uid;
                localStorage.setItem("currentuser", res.uid);
                _this.check_follow_followed = 1;
                _this.show_detail = false;
            }
            else {
                _this.show_detail = true;
            }
            _this.subscribe_constr_check = true;
        });
        //this.check = 0
        this.db.list('/users', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (localStorage.getItem("currentuser") != snapshot.key)
                    _this.userkey.push(snapshot.key);
            });
        });
        //if(this.subscribe_constr_check == true)
        // localStorage.getItem("user") = localStorage.getItem("currentuser")
        this.follow_followed();
    }
    //Method for making 2d and 3d dictionary
    UsersComponent.prototype.assign = function (obj, keyPath, value) {
        var lastKeyIndex = keyPath.length - 1;
        for (var i = 0; i < lastKeyIndex; ++i) {
            var key = keyPath[i];
            if (!(key in obj))
                obj[key] = {};
            obj = obj[key];
        }
        obj[keyPath[lastKeyIndex]] = value;
    };
    //this.assign(this.product_path, [this.product_path_array_counter,snapshot.key,obj,state],[prodkey]);
    UsersComponent.prototype.singleuser = function (user, id) {
        this.userinfo = user;
        localStorage.setItem("userinfo", JSON.stringify(id));
        var url = 'user/' + id + '/' + user.name;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
        //console.log("user",this.userinfo);
    };
    UsersComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        //this.defaults = this.loadDefaults()
        this.getUsers();
    };
    UsersComponent.prototype.ngAfterViewInit = function () {
        // this.defaults = this.loadDefaults()
    };
    UsersComponent.prototype.followers_insertion_deletion = function (key) {
        console.log(this.users_follow[key]);
        var followersCount_check = 0;
        var followers_count = 0;
        var followingsCount_check_loginuser = 0;
        var followings_count_loginuser = 0;
        var innercheck_followers = 0;
        var innercheck_followings = 0;
        if (this.users_follow[key]) {
            var check = 0;
            for (var i = 0; i < this.userkey.length; i++) {
                if (this.userkey[i] == key) {
                    check = 1;
                }
            }
            if (check == 1) {
                this.users_follow[key] = false;
                var val = 0;
                //// Deleting the node from Firebase /////
                //For onClick user
                var obj = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + key + '/followers/' + localStorage.getItem("user"));
                obj.remove().then(function (ref) {
                    console.log(ref);
                    // data has been deleted locally and in the database
                }, function (error) {
                    console.log("Error:", error);
                });
                //For Loggedin user
                var obj = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + localStorage.getItem("user") + '/followings/' + key);
                obj.remove().then(function (ref) {
                    console.log(ref);
                    // data has been deleted locally and in the database
                }, function (error) {
                    console.log("Error:", error);
                });
                //Removing the followersnotifications node
                var obj = __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + key + '/followersnotifications/' + localStorage.getItem("user"));
                obj.remove().then(function (ref) {
                    console.log(ref);
                    // data has been deleted locally and in the database
                }, function (error) {
                    console.log("Error:", error);
                });
                ///Onclick user followersCount updation
                ///Getting FollowersCount value
                this.db.list('/users/' + key, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.key == 'followersCount') {
                            followers_count = parseInt(snapshot.val()) - 1;
                            followersCount_check = 1;
                        }
                    });
                }, function (error) {
                    // this.is_as_error=true;
                    console.log(error);
                });
                ///End Onclick user followersCount updation
                ///Logged in user followingsCount updation
                ///Getting FollowingsCount value for the logged in user
                this.db.list('/users/' + localStorage.getItem("user"), { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.key == 'followingsCount') {
                            followings_count_loginuser = parseInt(snapshot.val()) - 1;
                            followingsCount_check_loginuser = 1;
                            //console.log("Followers_count: ",this.followers_count)
                        }
                    });
                }, function (error) {
                    // this.is_as_error=true;
                    console.log(error);
                });
                ///End Logged in user followingsCount updation
            } //End if(check == 1)
            else {
                return 1;
            }
        }
        else {
            var check = 0;
            for (var i = 0; i < this.userkey.length; i++) {
                if (this.userkey[i] == key) {
                    check = 1;
                }
            }
            if (check == 1) {
                this.users_follow[key] = true;
                /// Inserting data in followers node like '12345':1
                var dummy_value = "1";
                var updates = {};
                updates['/users/' + key + '/followers/' + localStorage.getItem("user")] = dummy_value;
                updates['/users/' + localStorage.getItem("user") + '/followings/' + key] = dummy_value;
                __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref().update(updates);
                ///Onclick user followersCount updation
                ///Getting FollowersCount value for the click
                this.db.list('/users/' + key, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.key == 'followersCount') {
                            followers_count = parseInt(snapshot.val()) + 1;
                            followersCount_check = 1;
                            //console.log("Followers_count: ",this.followers_count)
                        }
                    });
                }, function (error) {
                    // this.is_as_error=true;
                    console.log(error);
                });
                if (followersCount_check == 0) {
                    var val = 1;
                    __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + key).update({ followersCount: val }).catch(function (error) { return console.log("Error", error); });
                    innercheck_followers = 1;
                    console.log("Followers check 0");
                }
                ///End Onclick user followersCount updation
                ///Logged in user followingsCount updation
                ///Getting FollowingsCount value for the logged in user
                this.db.list('/users/' + localStorage.getItem("user"), { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        if (snapshot.key == 'followingsCount') {
                            followings_count_loginuser = parseInt(snapshot.val()) + 1;
                            followingsCount_check_loginuser = 1;
                            //console.log("Followers_count: ",this.followers_count)
                        }
                    });
                }, function (error) {
                    // this.is_as_error=true;
                    console.log(error);
                });
                if (followingsCount_check_loginuser == 0) {
                    var val = 1;
                    __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + localStorage.getItem("user")).update({ followingsCount: val }).catch(function (error) { return console.log("Error", error); });
                    innercheck_followings = 1;
                }
                ///End Logged in user followingsCount updation
                ///Notification for Clicked user's
                this.toast.sendNotification(localStorage.getItem("currentusername"), key);
            } //End if(check == 1)
            else {
                return 1;
            }
        }
        if (followersCount_check == 1 && innercheck_followers == 0) {
            __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + key).update({ followersCount: followers_count }).catch(function (error) { return console.log("Error", error); });
            console.log("Followers check 1");
        }
        if (followingsCount_check_loginuser == 1 && innercheck_followings == 0) {
            __WEBPACK_IMPORTED_MODULE_6_firebase_app__["database"]().ref('/users/' + localStorage.getItem("user")).update({ followingsCount: followings_count_loginuser }).catch(function (error) { return console.log("Error", error); });
        }
    };
    UsersComponent.prototype.follow_followed = function () {
        var _this = this;
        this.db.list('/users', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                if (localStorage.getItem("currentuser") != snapshot.key) {
                    var followingsCount_attr = 0;
                    for (var obj in snapshot.val()) {
                        if (obj == 'followersCount') {
                            followingsCount_attr = 1;
                            //Check followingsCount value
                            if ((parseInt(snapshot.val()[obj]) > 0)) {
                                var check = 0;
                                //Check if currentuser is in the user followings list
                                for (var state in snapshot.val()['followers']) {
                                    if (localStorage.getItem("currentuser") == state) {
                                        console.log(_this.currentuser);
                                        check = 1;
                                        _this.users_follow[snapshot.key] = true;
                                        //this.assign(this.users_follow,[snapshot.key,this.follow_var],true);
                                        //console.log("sssssssssssssssssssssssssssssssssss",state)
                                    }
                                }
                                if (check == 0) {
                                    _this.users_follow[snapshot.key] = false;
                                    //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
                                }
                            } //else if there is 0 followingsCount value
                            else {
                                _this.users_follow[snapshot.key] = false;
                                //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
                            }
                        }
                    }
                    if (followingsCount_attr == 0) {
                        _this.users_follow[snapshot.key] = false;
                        //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
                    }
                    //console.log(this.users_follow[snapshot.key]['follow'])
                }
            });
            _this.subscribe_follow_check = true;
        }, function (error) {
            // this.is_as_error=true;
            console.log(error);
        });
    };
    ///Pagintaion Part
    UsersComponent.prototype.onScroll = function () {
        //console.log('scrolled!!')
        if (this.check == 0)
            this.getUsers();
    };
    UsersComponent.prototype.getUsers = function (key) {
        var _this = this;
        if (this.finished)
            return;
        this._ps
            .getUsers(this.batch + 1, this.lastKey)
            .do(function (users) {
            var check = 0;
            var j = 0;
            users.forEach(function (snapshot) {
                if ((localStorage.getItem("currentuser") == snapshot.uid) && _this.check_follow_followed == 1) {
                    //console.log("Insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
                    users.splice(j, 1);
                    check = 1;
                }
                //console.log("J value: ",j)
                j++;
            });
            if (_this.lastKey != __WEBPACK_IMPORTED_MODULE_4_lodash__["last"](users)['$key']) {
                /// set the lastKey in preparation for next query
                _this.lastKey = __WEBPACK_IMPORTED_MODULE_4_lodash__["last"](users)['$key'];
                //console.log(this.lastKey)
                var newUsers = void 0;
                if (check == 1)
                    newUsers = __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](users, 0, _this.batch - 1);
                else
                    newUsers = __WEBPACK_IMPORTED_MODULE_4_lodash__["slice"](users, 0, _this.batch);
                /// Get current movies in BehaviorSubject
                var currentUsers = _this.users.getValue();
                /// If data is identical, stop making queries
                if (_this.lastKey == __WEBPACK_IMPORTED_MODULE_4_lodash__["last"](newUsers)['$key']) {
                    _this.finished = true;
                    _this.check = 1;
                }
                /// Concatenate new movies to current movies
                _this.users.next(__WEBPACK_IMPORTED_MODULE_4_lodash__["concat"](currentUsers, newUsers));
                console.log("this.users: ", _this.users);
            }
        })
            .take(1)
            .subscribe(function () { return _this.showSpinner = false; });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_10__categories_categories_component__["a" /* CategoriesComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11__toast_notification_service__["a" /* ToastNotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__toast_notification_service__["a" /* ToastNotificationService */]) === "function" && _e || Object])
], UsersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_routing__ = __webpack_require__("../../../../../src/app/users/users.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_2__users_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_5__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__users_component__["a" /* UsersComponent */],
        ],
        providers: []
    })
], UsersModule);

//# sourceMappingURL=users.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__users_component__["a" /* UsersComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=users.routing.js.map

/***/ })

});
//# sourceMappingURL=users.module.chunk.js.map