webpackJsonp(["signup.module"],{

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bid-history-details p,.bid-name,.form-outer h3,.form-outer header p,button{font-weight:700}.login-back{position:fixed;left:-12px;right:-12px;top:0;bottom:0;letter-spacing:-20px}.login-back:after{content:'';position:absolute;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,.6)}.login-back .img{display:inline-block;vertical-align:top;letter-spacing:0;text-align:center;padding:0 12px;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:moveY;animation-name:moveY}.login-back .img>img{width:100%}.login-back .img-1,.login-back .img-3{width:40%;-webkit-animation-duration:150s;animation-duration:150s}.login-back .img-2{width:20%;-webkit-animation-duration:150s;animation-duration:150s}@-webkit-keyframes moveY{0%,100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes moveY{0%,100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.form-holder{padding-bottom:70px;padding-top:106px;min-height:533px;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.form-outer{background-color:#fff;border-radius:8px;min-height:433px;padding-top:10px;width:400px;text-align:center}.form-outer header{margin:30px auto 0;position:relative;height:auto}.form-outer header span{width:130px;display:block;margin:0 auto 10px}.form-outer header p{margin:0 0 15px;line-height:25px}.form-outer header span>img{width:100%}.form-outer h3{margin:0 0 10px}.form-sample{position:static;height:100%;width:100%;padding:0 40px}.form-sample .ballon{bottom:70px;right:100%;position:absolute}.form-sample .ballon>div{position:relative;padding:120px 10px 10px;min-width:250px;min-height:250px;width:auto;height:auto;margin-right:25px;border-radius:50% 50% 10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:rgba(189,8,28,.9);text-align:right}.form-sample .ballon>div>p{font-weight:700;font-size:22px;line-height:27px;color:#fff;margin:0 0 10px}.form-sample .ballon>div>button{background:0 0;border:2px solid #ccc;width:150px;position:absolute;bottom:20px;right:10px}button.full{width:100%}.other-logins{padding:0 40px}.high-bid,.low-bid{padding:20px;box-shadow:0 0 10px #ccc;border-radius:10px}.other-logins button{margin:0 0 15px}button.fa{background:#3b5998}button.g{background:#d34836}.already-register-link{font-size:16px;color:#da1b22}bid-history-details{z-index:999999999}.high-bid{background-color:#f0014}.bid-name{font-size:18px;color:#000}.low-bid{margin:10px 0}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-back\">\n  <div class=\"img-1 img\">\n    <img src=\"../../assets/img/img-p-1.png\" alt=\"\" />\n  </div>\n  <div class=\"img-2 img\">\n    <img src=\"../../assets/img/img-p-2.png\" alt=\"\" />\n  </div>\n  <div class=\"img-3 img\">\n    <img src=\"../../assets/img/img-p-3.png\" alt=\"\" />\n  </div>\n</div>\n<div class=\"form-holder\">\n  <div class=\"form-outer\">\n    <header>\n      <span>\n        <img src=\"../../assets/img/sell4bids_logo.png\" alt=\"Sell 4 Bids\" />\n      </span>\n      <h3>Welcome to Sell4Bids</h3>\n      <!-- <p>Find new ideas to try!</p> -->\n    </header>\n    <form class=\"form-sample\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"name\"  [(ngModel)]=\"model.name\" #name=ngModel   placeholder=\"Enter Your User name*\" required />\n            <span class=\"pull-left help-block\" *ngIf=\"name.touched && name.errors\">\n              <span style=\"color: #bd081c\" *ngIf=\"name.errors.required\"> *Name is required</span>\n              </span>\n          </div>\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"email\"  [(ngModel)]=\"model.email\" #email=ngModel  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"Enter Your Email*\" required />\n        <span class=\"pull-left help-block\" *ngIf=\"email.touched && email.errors\">\n          <span style=\"color: #bd081c\" *ngIf=\"email.errors.required\"> *Email is required</span>\n          <span style=\"color: #bd081c\" *ngIf=\"email.errors.pattern\"> *Email is invalid</span>\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\"[(ngModel)]=\"model.password\"\n        #password=ngModel  placeholder=\"Enter Your Password*\" required />\n\n          <span class=\"pull-left help-block\" *ngIf=\"password.touched && password.errors\">\n            <span style=\"color: #bd081c\" *ngIf=\"password.errors.required\"> *Password is required</span>\n            </span>\n      </div>\n     \n      <!-- <div style=\"width:100%;\"  class=\"g-recaptcha\">\n        <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LfsRDIUAAAAACiv609X_7y1iwMmwE4tA-YqRZLg\n          \" style=\"transform:scale(0.77);-webkit-transform:scale(0.77);transform-origin:0 0;-webkit-transform-origin:0 0;\"></re-captcha>\n      </div> -->\n     \n      <div style=\"margin: 20px 0 10px 0px;\">\n        <button type=\"submit\" class=\"btn btn-primary full\" style=\"background:#bd081c\"  (click)=\"register()\" [disabled]=\" name.errors || email.errors || password.errors \">Submit</button>\n        <a routerLink='/login' class=\"already-register-link\" >Already Registered ? Login Here</a>\n        <!-- <button type=\"submit\" class=\"btn btn-primary full\" style=\"background:#bd081c\"  (click)=\"login()\" [disabled]=\"email.errors || password.errors \">Continue</button> -->\n\n      </div>\n      <div class=\"ballon\">\n        <div>\n          <p>Sell4Bids is the Auction Universe.</p>\n          <button class=\"btn\" routerLink='/how-it-works'>How it works</button>\n        </div>\n      </div>\n    </form>\n    \n  </div>\n</div>\n<!--<app-categories></app-categories>-->\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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









// import {RecaptchaComponent} from "../recaptcha/recaptcha.component";
// import {ViewChild} from "@angular/core";
var SignupComponent = (function () {
    // captcha;
    function SignupComponent(platformId, db, _nav, authService, toastr, firebaseAuth, vcr) {
        this.platformId = platformId;
        this.db = db;
        this._nav = _nav;
        this.authService = authService;
        this.toastr = toastr;
        this.firebaseAuth = firebaseAuth;
        // @ViewChild(RecaptchaComponent) captcha: RecaptchaComponent;
        this.model = {};
        this.animate = 'flyRight'; // you can override any options available
        this.newestOnTop = false;
        this.showCloseButton = true;
        this.cat = "main";
        this.isequal = false;
        this.logedin = 0;
        this.toastr.setRootViewContainerRef(vcr);
    }
    //    resolved(captchaResponse: string) {
    //     console.log(`Resolved captcha with response ${captchaResponse}:`);
    //     this.captcha = captchaResponse;
    // }
    SignupComponent.prototype.register = function () {
        var _this = this;
        console.log("junaid", this.model.name, this.model.email);
        // this.login_check = 1
        // if(this.captcha.getResponse()){
        // console.log("junaid2",this.captcha.getResponse())
        // this.login_check = 1
        this.isequal = true;
        this.authService.signup(this.model.email, this.model.password).then(function (success) {
            var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
            console.log("account activation", user);
            user.sendEmailVerification().then(function (success) {
                _this.db.object('users/' + user.uid).set({
                    name: _this.model.name,
                    email: _this.model.email,
                    token: user.refreshToken,
                    startTime: new Date().getTime(),
                    uid: user.uid
                });
                // this.toastr.info('', 'Please verify your email',{toastLife: 5000});      
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()({
                    type: 'success',
                    html: 'Please check your inbox for account activation instructions.'
                });
                console.log("please verify your email");
                _this._nav.navigate(['/login']);
            }).catch(function (err) {
                _this.toastr.error("" + err);
                // alert(err)
            });
            _this.logout();
        }).catch(function (err) {
            //  alert( err);
            _this.toastr.error(err + " ");
        });
        // }
        // else {
        //   this.captcha.reset();
        //   this.isequal=false;
        // }
    };
    SignupComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_8__angular_common__["isPlatformBrowser"])(this.platformId)) {
            this.logedin = localStorage.getItem('loged_in');
        }
        if (this.logedin == 1) {
            this._nav.navigate(['/']);
        }
        document.getElementById('footer').hidden = true;
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        document.getElementById('footer').hidden = false;
    };
    SignupComponent.prototype.logout = function () {
        localStorage.clear();
        this.firebaseAuth.auth.signOut();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object])
], SignupComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOptions", function() { return CustomOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_routing__ = __webpack_require__("../../../../../src/app/signup/signup.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
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









// import { FooterSimpleComponent } from './../footer-simple/footer-simple.component'
var CustomOptions = (function (_super) {
    __extends(CustomOptions, _super);
    function CustomOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight';
        _this.dismiss = 'auto';
        _this.showCloseButton = true;
        // newestOnTop = false;
        _this.positionClass = 'toast-bottom-right';
        _this.enableHTML = true;
        return _this;
        // messageClass = '';
        // titleClass = '';
    }
    return CustomOptions;
}(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastOptions"]));

var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__signup_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__["RecaptchaModule"].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup_component__["a" /* SignupComponent */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastOptions"], useClass: CustomOptions },
            __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */]
        ]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__signup_component__["a" /* SignupComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=signup.routing.js.map

/***/ })

});
//# sourceMappingURL=signup.module.chunk.js.map