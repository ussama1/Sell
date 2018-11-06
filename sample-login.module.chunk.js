webpackJsonp(["sample-login.module"],{

/***/ "../../../../../src/app/footer-simple/footer-simple.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".simple-footer{text-align:center}.simple-footer ul li{display:inline}.simple-footer ul li a{color:#fff;font-size:14px;padding:15px 10px}.wrapper-simple-footer{position:fixed;width:100%;bottom:0}.simple-footer ul li a:hover{background-color:#c00;border-radius:10px}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer-simple/footer-simple.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-simple-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"simple-footer\">\n          <ul>\n            <li><a  routerLink='/who-are-we'> Who are we</a></li>\n            <li><a  routerLink='/terms-and-conditions'>Terms of Service</a></li>\n            <li><a routerLink='/privacy-policy'>Privacy Policy</a></li>\n            <li><a href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\" >iPhone App</a></li>\n            <li><a  href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\">Android App</a></li>\n            <li><a routerLink='/members'>Members</a></li>\n            <li><a routerLink='/how-it-works'>How it works?</a></li>\n            <li><a routerLink='/trust-and-safety'>Trust & Safety</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer-simple/footer-simple.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSimpleComponent; });
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

var FooterSimpleComponent = (function () {
    function FooterSimpleComponent() {
    }
    FooterSimpleComponent.prototype.ngOnInit = function () {
    };
    return FooterSimpleComponent;
}());
FooterSimpleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer-simple',
        template: __webpack_require__("../../../../../src/app/footer-simple/footer-simple.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer-simple/footer-simple.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterSimpleComponent);

//# sourceMappingURL=footer-simple.component.js.map

/***/ }),

/***/ "../../../../../src/app/recaptcha/recaptcha.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Caveat+Brush);", ""]);

// module
exports.push([module.i, "/*@import url(\"https://fonts.googleapis.com/css?family=Shadows+Into+Light\");*/\n\n.recaptcha-outer-div {\n  height: 92px;\n  width: 240px;\n  background-color: #ebebec;\n  border-radius: 5px;\n  box-shadow: 2px 2px 5px #888;\n  display: table-cell;\n  padding: 5px;\n\n}\n\n.recaptcha-outer-div p {\n  /*font-family: 'Shadows Into Light', cursive;*/\n  width: 100%;\n  /*height: 56px;*/\n  font-family: 'Caveat Brush', cursive;\n  /*margin: 5px 0 0 5px;*/\n  background: white;\n  border-radius: 5px;\n  text-align: center;\n  padding: 26px 8px;\n  /*color: #616060;*/\n  color: #80807f;\n  font-size: 35px;\n  font-weight: 900;\n  display: inline-block;\n  letter-spacing: 2px;\n  cursor: not-allowed;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid lightgray;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.recaptcha-outer-div i:before {\n  content: '\\1F5D8';\n  border: 2px outset #5bc0de;\n  background-color: #5bc0de;\n  border-radius: 5px;\n  color: #ffffff;\n  font-size:36px;\n  font-weight: bold;\n  cursor: pointer;\n  font-style: normal;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-top: 5px;\n  padding:20px 10px;\n}\n\n.recaptcha-outer-div input[type='text'] {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 0px 33px 8px 10px;\n  padding: 5px 10px;\n  width: 190px;\n  font-size: 15px;\n  color: black;\n  text-align: center;\n  border-radius: 5px;\n}\n.pad-0{\n  padding: 0;\n}\n.marg-0{\n  margin: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recaptcha/recaptcha.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"recaptcha-outer-div\">\n  <div style=\"display: flex\" >\n    <div style=\"width: 70%;\">\n      <p id=\"text-wrapper\">{{recaptchaString}}</p>\n    </div>\n    <!--<i class=\"refresh-icon\" (click)=\"reset()\"></i>-->\n    <div style=\"width:29%;margin-left: 2px \">\n      <img  src=\"../../assets/img/Reload3.png\"  style=\"margin-top: 8px;width: 100%\" (click)=\"reset()\">\n    </div>\n  </div>\n  <div>\n    <input type=\"text\" [(ngModel)]=\"enterText\" placeholder=\"Enter Above Text\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/recaptcha/recaptcha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecaptchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("../../../../rxjs/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__);
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



var RecaptchaComponent = (function () {
    function RecaptchaComponent(platformId) {
        this.platformId = platformId;
        this.recaptchaString = '';
        this.enterText = '';
        this.imagesList = [
            'assets/images/1.png',
            'assets/images/2.png',
            'assets/images/3.png',
            'assets/images/4.png',
            'assets/images/5.png',
            'assets/images/6.png',
            'assets/images/7.png',
            'assets/images/8.png',
            'assets/images/9.png',
            'assets/images/10.png',
            'assets/images/11.png',
            'assets/images/12.png',
            'assets/images/13.png',
            'assets/images/14.png',
            'assets/images/15.png',
            'assets/images/16.png',
            'assets/images/17.png',
            'assets/images/18.png',
            'assets/images/19.png',
            'assets/images/20.png',
            'assets/images/21.png',
            'assets/images/22.png',
            'assets/images/23.png',
            'assets/images/24.png',
            'assets/images/25.png',
        ];
    }
    RecaptchaComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__angular_common__["isPlatformBrowser"])(this.platformId)) {
            this.reset();
            // Observable.interval(5000).subscribe(() => {
            //   this.reset();
            // });
        }
    };
    RecaptchaComponent.prototype.makeid = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    RecaptchaComponent.prototype.reset = function () {
        this.recaptchaString = this.makeid();
        this.enterText = '';
        var element = document.getElementById('text-wrapper');
        // let iterateList = [].slice.call(elementList);
        // for (let element of iterateList) {
        element.setAttribute("style", "background-image: url(" + this.imagesList[Math.floor(Math.random() * this.imagesList.length)] + ");");
        // element['style'].backgroundImage = this.imagesList[Math.floor(Math.random() * this.imagesList.length)];
        // }
        // console.log(element);
        return this.recaptchaString;
    };
    RecaptchaComponent.prototype.getResponse = function () {
        if (this.recaptchaString === this.enterText) {
            this.reset();
            return true;
        }
        else {
            this.reset();
            return false;
        }
    };
    return RecaptchaComponent;
}());
RecaptchaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blackgeeks-recaptcha',
        template: __webpack_require__("../../../../../src/app/recaptcha/recaptcha.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recaptcha/recaptcha.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object])
], RecaptchaComponent);

//# sourceMappingURL=recaptcha.component.js.map

/***/ }),

/***/ "../../../../../src/app/sample-login/sample-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-back{position:fixed;left:-12px;right:-12px;top:0;bottom:0;letter-spacing:-20px}.login-back:after{content:'';position:absolute;left:0;right:0;bottom:0;top:0;background:rgba(0,0,0,.6)}.login-back .img{display:inline-block;vertical-align:top;letter-spacing:0;text-align:center;padding:0 12px;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-name:moveY;animation-name:moveY}.login-back .img>img{width:100%}.login-back .img-1,.login-back .img-3{width:40%;-webkit-animation-duration:150s;animation-duration:150s}.login-back .img-2{width:20%;-webkit-animation-duration:150s;animation-duration:150s}@-webkit-keyframes moveY{0%,100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes moveY{0%,100%{-webkit-transform:translateY(0);transform:translateY(0)}50%{-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.form-holder{padding-bottom:70px;padding-top:6%;min-height:533px;left:50%;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.form-outer{background-color:#fff;border-radius:8px;min-height:433px;padding-top:10px;width:400px;z-index:9;text-align:center}.form-outer header{margin:0 auto 0;position:relative;height:auto}.form-outer header span{width:130px;display:block;margin:0 auto 10px}.form-outer header p{margin:0 0 15px;line-height:25px;font-weight:700}.form-outer header span>img{width:100%}.form-outer h3{font-weight:700;margin:0 0 10px}.form-sample{position:static;height:100%;width:100%;padding:0 40px}.form-sample .ballon{bottom:70px;right:100%;position:absolute}.form-sample .ballon>div{position:relative;padding:120px 10px 10px;min-width:250px;min-height:250px;width:auto;height:auto;margin-right:25px;border-radius:50% 50% 10%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:rgba(189,8,28,.9);text-align:right}.form-sample .ballon>div>p{font-weight:700;font-size:22px;line-height:27px;color:#fff;margin:0 0 10px}.form-sample .ballon>div>button{background:0 0;border:2px solid #ccc;width:150px;position:absolute;bottom:20px;right:10px}button.full{width:100%}button{font-weight:700}.other-logins{padding:10px 40px}.other-logins button{margin:0 0 5px}button.fa{background:#3b5998}button.g{background:#d34836}\r\n#content-block .input-col .form-group, .form-group {\r\n  margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample-login/sample-login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-back\">\n  <div class=\"img-1 img\">\n    <img src=\"../../assets/img/img-p-1.png\" alt=\"\" />\n  </div>\n  <div class=\"img-2 img\">\n    <img src=\"../../assets/img/img-p-2.png\" alt=\"\" />\n  </div>\n  <div class=\"img-3 img\">\n    <img src=\"../../assets/img/img-p-3.png\" alt=\"\" />\n  </div>\n</div>\n<div class=\"form-holder\">\n  <div class=\"form-outer\">\n    <header>\n      <span>\n        <img src=\"../../assets/img/sell4bids_logo.png\" alt=\"Sell 4 Bids\" />\n      </span>\n      <h3>Welcome to Sell4Bids</h3>\n      <!-- <p>Find new ideas to try!</p> -->\n    </header>\n    <form class=\"form-sample\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"email\"  [(ngModel)]=\"model.email\" #email=ngModel  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"Email Your Email*\" required />\n        <span class=\"pull-left help-block\" *ngIf=\"email.touched && email.errors\">\n          <span style=\"color: #bd081c\" *ngIf=\"email.errors.required\"> *Email is required</span>\n          <span style=\"color: #bd081c\" *ngIf=\"email.errors.pattern\"> *Email is invalid</span>\n          </span>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"password\" name=\"password\" class=\"form-control\"[(ngModel)]=\"model.password\"\n               #password=ngModel  placeholder=\"Enter Your Password*\" required />\n\n        <span class=\"pull-left help-block\" *ngIf=\"password.touched && password.errors\">\n            <span style=\"color: #bd081c\" *ngIf=\"password.errors.required\"> *Password is required</span>\n            </span>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\" form-group\">\n        <label class=\"pull-left\">\n          <input  type=\"checkbox\" value=\"remember-me\" checked> Stay Signed In\n        </label>\n      </div>\n      <div style=\"width:100%;margin-left: -15%\">\n        <blackgeeks-recaptcha></blackgeeks-recaptcha>\n        <div class=\"error-block\" *ngIf=\"isequal==false\" style=\"color: red;font-weight: 600;\">\n          <span>*Please Enter Valid Answer</span>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"form-group\" style=\"padding: 5px 0px;\">\n        <label class=\"pull-left\">\n          <a style=\"color:#555;cursor:pointer;text-decoration:underline\" (click) =\"foremail()\" >Forgot your password?</a>\n        </label>\n      </div>\n      <div style=\"margin: 20px 0 10px 0px;\">\n        <button type=\"submit\" class=\"btn btn-primary full\" style=\"background:#bd081c\"  (click)=\"login()\" [disabled]=\"email.errors || password.errors \">Sign in</button>\n        <!-- <button type=\"submit\" class=\"btn btn-primary full\" style=\"background:#bd081c\"  (click)=\"login()\" [disabled]=\"email.errors || password.errors \">Continue</button> -->\n\n      </div>\n      <div class=\"ballon\">\n        <div>\n          <p>Sell4Bids is the Auction Universe.</p>\n          <button class=\"btn\" routerLink='/how-it-works'>How it works</button>\n        </div>\n      </div>\n    </form>\n    <!--<p class=\"\" style=\"margin-bottom:3px;overflow:hidden;text-align:center;color:#555;font-weight:bold;\" data-reactid=\"40\">OR</p>-->\n    <div class=\"other-logins\">\n      <button (click)=\"loginFacebook()\" class=\"full btn btn-primary fa\">\n        <i class=\"fab fa-facebook-f\"></i>\n        <span>Sign in with Facebook</span>\n      </button>\n      <button  (click)=\"loginGoogle()\" class=\"full btn btn-primary g\">\n        <i class=\"fab fa-google-plus-g\"></i>\n        <span>Sign in with Google</span>\n      </button>\n    </div>\n    <div data-reactid=\"58\"><div style=\"border-bottom:#dedede 1px solid;margin:10px auto;width:110px;\" data-reactid=\"59\"></div><span style=\"display:inline-block;margin-right:4px;\" data-reactid=\"60\">Not on Sell4Bids yet? </span><button routerLink='/signup' class=\"FullPageSignup__signupToggle\" style=\"border:none;background-color:transparent;font-weight:bold;text-decoration:none;vertical-align:baseline;\" data-reactid=\"61\">Sign Up</button><div data-reactid=\"62\"></div></div>\n  </div>\n</div>\n<div class=\"clearfix\"></div>\n<!--<app-categories></app-categories>-->\n<app-footer-simple></app-footer-simple>\n"

/***/ }),

/***/ "../../../../../src/app/sample-login/sample-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__ = __webpack_require__("../../../../../src/app/recaptcha/recaptcha.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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













var SampleLoginComponent = (function () {
    function SampleLoginComponent(platformId, _ps, db, afa, toastr, vcr, fb, authService, afAuth, _nav) {
        this.platformId = platformId;
        this._ps = _ps;
        this.db = db;
        this.afa = afa;
        this.toastr = toastr;
        this.fb = fb;
        this.authService = authService;
        this.afAuth = afAuth;
        this._nav = _nav;
        this.currentuser = {};
        this.model = {};
        // captcha;
        this.animate = 'flyRight'; // you can override any options available
        this.newestOnTop = false;
        this.showCloseButton = true;
        this.login_check = 0;
        this.logedin = 0;
        this.toastr.setRootViewContainerRef(vcr);
    }
    //   resolved(captchaResponse: string) {
    //     console.log(`Resolved captcha with response ${captchaResponse}:`);
    //     this.captcha = captchaResponse;
    // }
    /////////////////////////////////////////////////////// Google login ////////////////////////////////////////////////
    SampleLoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        //alert("google")
        this._ps.setImage('');
        this._ps.setName('');
        this._ps.setUserid('');
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider()).then(function (value) {
            _this.toastr.success('Successfully!', 'Logged in', { toastLife: 5000 });
            _this._nav.navigate(['/']);
            _this.afAuth.auth.currentUser.getIdToken().then(function (token) {
                _this.token = _this.authService.gettestToken();
                localStorage.setItem("JwtToken", _this.token);
                // console.log(this.token)
                // MOVE FUNCTION HERE ******************
                _this.authService.gettestToken(); // <--------
            });
            _this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    //console.log('user is logged in',res.uid);
                    // console.log("user photo: ",res.photoURL)
                    // console.log("user name: ",res.displayName)
                    // console.log("user id: ",res.uid)
                    var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
                    // console.log("If")
                    localStorage.setItem('loged_in', '1');
                    _this.db.object('/users/' + user.uid).update({ email: res.email, name: res.displayName, uid: res.uid, startTime: new Date().getTime(), token: res.refreshToken, image: res.photoURL });
                }
                else {
                    //console.log('user not logged in');
                }
            });
        })
            .catch(function (error) {
            alert(error.message + " Please try again");
        });
    };
    //////////////////////////////////////////////////////// END ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////// Facebook login/////////////////////////////////////////
    SampleLoginComponent.prototype.loginFacebook = function () {
        var _this = this;
        //alert("facebook")
        this._ps.setImage('');
        this._ps.setName('');
        this._ps.setUserid('');
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider()).then(function (value) {
            _this.toastr.success('Successfully!', 'Logged in', { toastLife: 5000 });
            _this._nav.navigate(['/']);
            _this.afAuth.auth.currentUser.getIdToken().then(function (token) {
                _this.token = token;
                //console.log(token);
                localStorage.setItem("JwtToken", token);
                // MOVE FUNCTION HERE ******************
                _this.authService.gettestToken(); //
            });
            _this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
                    _this.db.object('/users/' + user.uid).update({ email: res.email, name: res.displayName, uid: res.uid, startTime: new Date().getTime(), token: res.refreshToken, image: res.photoURL });
                    localStorage.setItem('loged_in', '1');
                }
                else {
                    //console.log('user not logged in');
                }
            });
        })
            .catch(function (error) {
            alert(error.message + " Please try again");
        });
    };
    ////////////////////////////////////////////////////////////// END /////////////////////////////////////////////////
    ///////////////////////////////////////////////////////// Email Password login/////////////////////////////////////
    SampleLoginComponent.prototype.login = function () {
        var _this = this;
        if (this.login_check == 0 && this.captcha.getResponse()) {
            this.isequal = true;
            this.authService.login(this.model.email, this.model.password)
                .then(function (success) {
                var user = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().currentUser;
                if (user.emailVerified) {
                    localStorage.setItem('loged_in', '1');
                    __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                        type: 'success',
                        title: 'Welcome to Sell4Bids',
                        text: 'You are logged in',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    _this._nav.navigate(['/']);
                }
                else {
                    _this.logout();
                    __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                        type: 'error',
                        title: 'Sorry!',
                        text: 'Please verify your email',
                        showConfirmButton: false,
                        timer: 5000
                    });
                }
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()({
                    type: 'error',
                    title: 'Sorry!',
                    text: "The username or password is invalid.",
                    showConfirmButton: false,
                    timer: 5000
                });
            });
        }
        else {
            this.captcha.reset();
            this.isequal = false;
        }
    };
    ////////////////////////////////////////////////////////////End/////////////////////////////////////////////////
    SampleLoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.clear();
        // this._nav.navigate(['/']);
    };
    ///////////////////////////Forgot PAssowrd//////////////////////////////////////
    // foremail() {
    //   swal({
    //     title: 'Enter email address',
    //     input: 'email',
    //     inputPlaceholder: 'Enter your email address'
    //   }).then((email) => {
    //     this.authService.resetPassword(this.email).then(
    //       (success) => {
    //         swal({
    //           type: 'success',
    //           html: 'Password reset instructions have been sent to your email. '
    //         })
    //       }).catch(
    //         (err) => {
    //           //  alert( err);
    //           this.toastr.error(`${err} `)
    //         })
    //   })
    // }
    ///////////////////////////END//////////////////////////////////////////////
    SampleLoginComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_11__angular_common__["isPlatformBrowser"])(this.platformId)) {
            this.logedin = localStorage.getItem('loged_in');
        }
        if (this.logedin == 1) {
            this._nav.navigate(['/']);
        }
        document.getElementById('footer').hidden = true;
    };
    SampleLoginComponent.prototype.ngOnDestroy = function () {
        document.getElementById('footer').hidden = false;
    };
    return SampleLoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__["a" /* RecaptchaComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__["a" /* RecaptchaComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__["a" /* RecaptchaComponent */]) === "function" && _a || Object)
], SampleLoginComponent.prototype, "captcha", void 0);
SampleLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sample-login',
        template: __webpack_require__("../../../../../src/app/sample-login/sample-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sample-login/sample-login.component.css")]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"])),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _k || Object])
], SampleLoginComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=sample-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/sample-login/sample-login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOptions", function() { return CustomOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLoginModule", function() { return SampleLoginModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlackgeeksRecaptchaModule", function() { return BlackgeeksRecaptchaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_login_component__ = __webpack_require__("../../../../../src/app/sample-login/sample-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_login_routing__ = __webpack_require__("../../../../../src/app/sample-login/sample-login.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_simple_footer_simple_component__ = __webpack_require__("../../../../../src/app/footer-simple/footer-simple.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__ = __webpack_require__("../../../../../src/app/recaptcha/recaptcha.component.ts");
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

var SampleLoginModule = (function () {
    function SampleLoginModule() {
    }
    return SampleLoginModule;
}());
SampleLoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__sample_login_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng_recaptcha__["RecaptchaModule"].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sample_login_component__["a" /* SampleLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_simple_footer_simple_component__["a" /* FooterSimpleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__recaptcha_recaptcha_component__["a" /* RecaptchaComponent */]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastOptions"], useClass: CustomOptions },
            __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */]
        ]
    })
], SampleLoginModule);

var BlackgeeksRecaptchaModule = (function () {
    function BlackgeeksRecaptchaModule() {
    }
    return BlackgeeksRecaptchaModule;
}());

//# sourceMappingURL=sample-login.module.js.map

/***/ }),

/***/ "../../../../../src/app/sample-login/sample-login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_login_component__ = __webpack_require__("../../../../../src/app/sample-login/sample-login.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__sample_login_component__["a" /* SampleLoginComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=sample-login.routing.js.map

/***/ })

});
//# sourceMappingURL=sample-login.module.chunk.js.map