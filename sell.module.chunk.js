webpackJsonp(["sell.module"],{

/***/ "../../../../../src/app/sell/job.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Job; });
var Job = (function () {
    function Job() {
        this.createdAt = new Date();
    }
    return Job;
}());

//# sourceMappingURL=job.js.map

/***/ }),

/***/ "../../../../../src/app/sell/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var Menu = (function () {
    function Menu() {
        this.createdAt = new Date();
    }
    return Menu;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/sell/sell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sell/sell.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Haeder-->\n<!--end-->\n<div *ngIf=\"showSpinner\" class=\"app-preloader\" >\n    <app-loading-spinner ></app-loading-spinner>\n</div>\n<div id=\"content-block\" style=\"text-align:center;margin-top:40px; margin-bottom:0px;\">\n    <div class=\"top-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-10 col-md-8 col-lg-12 form-box\">\n            <div class=\"jumbotron\">\n              <form role=\"form\" (ngSubmit)=\"onSubmit(sell)\" #sell=\"ngForm\"  class=\"f1\" id=\"sell-form\">\n                <h2 style=\"font-weight:bold\">Describe Your Item</h2>\n                <div class=\"f1-steps\">\n                  <div class=\"f1-progress\">\n                    <div class=\"f1-progress-line\" data-now-value=\"12.66\" data-number-of-steps=\"4\" style=\"width: 12.66%;\"></div>\n                  </div>\n                  <div class=\"f1-step active\">\n                    <div class=\"f1-step-icon\">1</div>\n                    <p>Photo</p>\n                  </div>\n                  <div class=\"f1-step\">\n                    <div class=\"f1-step-icon\">2</div>\n                    <p>Details</p>\n                  </div>\n                  <div class=\"f1-step\">\n                    <div class=\"f1-step-icon\">3</div>\n                    <p>Price</p>\n                  </div>\n                  <div class=\"f1-step\">\n                    <div class=\"f1-step-icon\">4</div>\n                    <p>Finish</p>\n                  </div>\n                </div>\n                <fieldset>\n                  <br />\n                  <div *ngIf=\"showHide\">                    \n                  <div class=\"form-group \">\n                    <div id=\"upload-file-container\">\n                      <label style=\"font-size: 22px;\">Add Images <img  accept=\".jpg, .jpeg, .png\" alt=\"Add Image\" class=\"camera-img\" src=\"../../assets/img/addimage_512.png\">\n                        \n                      <!-- <input type=\"file\" #fileImportInput  id=\"txtFileUpload\"  name=\"fileImportInput[]\" name=\"image\" (change)=\"detectFiles($event);selectFile($event)\" class=\"f1-first-name form-control\" multiple=\"multiple\" /> -->\n                      <input type=\"file\" #fileImportInput  id=\"txtFileUpload\"  name=\"fileImportInput[]\" name=\"image\" (change)=\"detectFiles($event)\" class=\"f1-first-name form-control\" multiple />\n                      \n                      \n                      </label>\n                    </div>\n                  </div>\n                  <div id=\"selectedFiles\" style=\"line-height:0px\"></div>\n                  <div class=\"clearfix\"></div>\n                  <div _ngcontent-c7=\"\">\n                  <!-- <label _ngcontent-c7=\"\" class=\"upload-image left add-img\">\n                      Add Images\n                      <input _ngcontent-c7=\"\" accept=\".jpg, .jpeg, .png\" class=\"file\" data-preview-file-type=\"text\" id=\"file1\" multiple=\"\" name=\"file\" ng-files=\"getTheFiles($files)\" type=\"file\">\n                      <img _ngcontent-c7=\"\" accept=\".jpg, .jpeg, .png\" alt=\"Add Image\" class=\"camera-img\" src=\"../../assets/img/addimage_512.png\">\n                      \n                    </label> -->\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"title\" class=\"label-sell\">Title</label>\n\n                    <input type=\"text\" [(ngModel)]=\"model.title\" #title=\"ngModel\"  name=\"title\" placeholder=\"What are you selling?\" class=\"f1-last-name form-control\" id=\"title\" #title1 required >\n                    <span class=\"help-block\"  *ngIf=\"title.touched && title.errors\">\n                      <span style=\"color: red\" *ngIf=\"title.errors.required\">*Title is required</span>\n\n                    </span>\n                  </div>\n                  </div>\n                  <div *ngIf=\"!showHide\">\n                    <div class=\"form-group\">\n                      <br>\n                      <label for=\"job-title\" class=\"label-sell\">Job Title</label>\n                      <input type=\"text\"  [(ngModel)]=\"model.jobtitle\" #jobtitle =\"ngModel\" name=\"jobtitle\" placeholder=\"Title of Job\" class=\"f1-last-name form-control\" id=\"job-title\" required>\n                      <span class=\"help-block\"  *ngIf=\"jobtitle.touched && jobtitle.errors\">\n                        <span style=\"color: red\" *ngIf=\"jobtitle.errors.required\">*Job Title is required</span>\n                      </span>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"employment\" class=\"label-sell\">Employment Type</label>\n                      <br>\n                      <select  [(ngModel)]=\"model.employment\" #employment =\"ngModel\" name=\"employment\" class=\"f1-last-name form-control\" id=\"employment\" required>\n                        <option disabled >Select Employment Type</option>\n                        <option value=\"contractHire\">Contract Hire</option>\n                        <option value=\"employeeChoice\">Employee's Choice</option>\n                        <option value=\"fullTime\">Full-Time</option>\n                        <option value=\"internship\">Internship</option>\n                        <option value=\"temporary\">Temporary</option>\n                      </select>\n                      <span class=\"help-block\"  *ngIf=\"employment.touched && employment.errors\">\n                        <span style=\"color: red\" *ngIf=\"employment.errors.required\">*Employment is required</span>\n                      </span>\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"label-sell\">Benefits</label>\n                      <br>\n                      <label class=\"label-check\">\n                        <input type=\"checkbox\"  [(ngModel)]=\"model.medical\" #medical =\"ngModel\" class=\"option-input checkbox\" value=\"medical\" name=\"medical\" > Medical</label>\n                      <label class=\"label-check\"><input type=\"checkbox\"  [(ngModel)]=\"model.pto\" #pto =\"ngModel\" class=\"option-input checkbox\" value=\"pto\" name=\"pto\" > PTO</label>\n                      <label class=\"label-check\"><input type=\"checkbox\"  [(ngModel)]=\"model.k\" #k =\"ngModel\" class=\"option-input check2box\" value=\"401(k)\" name=\"k\" > 401(k)</label>\n                    </div>\n                  </div>\n                  <br />\n                  <div class=\"form-group trigger\">\n                  <label class=\"switch label-sell\">\n                    <input type=\"checkbox\" (change)=\"changeShowStatus()\">\n                    <span class=\"slider round\"></span>\n                  </label>Listing a Job?\n                  </div>\n                  <div class=\"f1-buttons\">\n                  <button type=\"button\" class=\"btn btn-next\" style=\"font-weight: bold;\n                  font-size: 22px;\" (click)=\"nextStep1();\">Next</button>\n                  </div>\n                </fieldset>\n                <fieldset>\n                  <br />\n                  <div *ngIf=\"showProCat\">\n                    <div class=\"form-group\">\n                      <label for=\"category\" class=\"label-sell\">Category</label>\n                      <br>\n                      <select [(ngModel)]=\"model.category\" #category=\"ngModel\" name=\"category\" class=\"f1-last-name form-control\" id=\"category\">\n                        <option disabled>-----Select Category-----</option>\n                        <option *ngFor=\"let category of cat\"><span *ngIf=\"category != Jobs || category != undefined\">{{category}}</span> </option>\n\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"description\" class=\"label-sell\">Description</label>\n                      <textarea [(ngModel)]=\"model.description\" #description=\"ngModel\" name=\"description\" class=\"f1-last-name form-control\" id=\"description\" placeholder=\"Detail Description of your Item\" cols=\"30\" rows=\"10\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"label-sell\">Condition\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"other\" name=\"condition\" />\n                        Other (See Description)\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"forParts\" name=\"condition\" />\n                        For Parts\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"used\" name=\"condition\" />\n                        Used\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"reconditioned\" name=\"condition\" />\n                        Reconditioned\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"openBox\" name=\"condition\" />\n                        Open Box / Like New\n                      </label>\n                      <br>\n                      <label>\n                        <input  [(ngModel)]=\"model.condition\" #condition=\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"new\" name=\"condition\" />\n                        New\n                      </label>\n                    </div>\n\n                  </div>\n                  <div *ngIf=\"showJobCat\">\n                    <div class=\"form-group\">\n                      <label for=\"job-category\" class=\"label-sell\">Category</label>\n                      <br>\n                      <select  [(ngModel)]=\"model.jobcategory\" #jobcategory =\"ngModel\" name=\"jobcategory\" class=\"f1-last-name form-control\" id=\"jobcategory\">\n                        <option disabled>Select Job Category</option>\n                        <option >Accounting and Finance</option>\n                        <option >Admin</option>\n                        <option >Automotive</option>\n                        <option >Business</option>\n                        <option >Construction</option>\n                        <option >Creative</option>\n                        <option >Customer Services</option>\n                        <option >Education</option>\n                        <option >Engineering</option>\n                        <option >Food and Restaurants</option>\n                        <option >Healthcare</option>\n                        <option >Hotel and Hospitality</option>\n                        <option >Human Resources</option>\n                        <option >Labor</option>\n                        <option >Manufacturing</option>\n                        <option >Marketing</option>\n                        <option >Personal Care</option>\n                        <option >Real Estate</option>\n                        <option >Retail and Wholesale</option>\n                        <option >Sales</option>\n                        <option >Salon, Spa and Fitness</option>\n                        <option >Security</option>\n                        <option >Skilled Trade and Craft</option>\n                        <option >Technical Support</option>\n                        <option >TV, Film and Video</option>\n                        <option >Web and Info Design</option>\n                        <option >Writing and Editing</option>\n                        <option >Maintenance and Installation</option>\n                        <option >Office</option>\n                        <option >Other</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"job-description\" class=\"label-sell\">Description</label>\n                      <br>\n                      <textarea  [(ngModel)]=\"model.jobdescription\" #jobdescription =\"ngModel\" name=\"jobdescription\" class=\"f1-last-name form-control\" id=\"job-description\" placeholder=\"Detail Description of Job\" cols=\"30\" rows=\"10\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"label-sell\">Toughness\n                      </label>\n                      <br>\n                      <label>\n                        <input  [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"other\" name=\"toughness\" />\n                        Other (See Description)\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"easy\" name=\"toughness\" />\n                        Easy\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"average\" name=\"toughness\" />\n                        Average\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"aboveAverage\" name=\"toughness\" />\n                        Above Average\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"high\" name=\"toughness\" />\n                        High\n                      </label>\n                      <br>\n                      <label>\n                        <input [(ngModel)]=\"model.toughness\" #toughness =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"extreme\" name=\"toughness\" />\n                        Extreme\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"f1-buttons\">\n                    <button type=\"button\" class=\"btn btn-previous\">Previous</button>\n                    <button type=\"button\" class=\"btn btn-next\" (click)=\"nextStep2();\">Next</button>\n                  </div>\n                </fieldset>\n                <fieldset>\n                  <br>\n                  <div *ngIf=\"showProPrice\">\n                    <div class=\"col-sm-8 col-md-8 col-lg-12\">\n                      <div class=\"form-group\">\n                        <button type=\"button\"  [ngStyle]=\"{'background-color':showBuynow ? '#bd081c' : '#bbb' }\" class=\"btn btn-lg btn-primary btn-huge\" (click)=\"buynow();\">Buy Now</button>\n                        <button type=\"button\"  [ngStyle]=\"{'background-color':!showBuynow ? '#bd081c' : '#bbb' }\" class=\"btn btn-lg btn-primary btn-huge\" (click)=\"buynow();\">Auction</button>\n                      </div>\n                    </div>\n                    <br />\n                    <div *ngIf=\"showBuynow\">\n                        <input [(ngModel)]=\"model.buy\" #buy=\"ngModel\" name=\"buy\"  value=\"buy-it-now\" id=\"buy\" style=\"display:none\" >\n                        <div class=\"form-group\">\n                        <br>\n                        <label for=\"price\" class=\"label-sell\">Price</label>\n                        <div class='field'><div style=\"position:relative\"><div style=\"position:absolute; left:2px; top:3px\">$</div></div>\n                        <input type=\"number\" [(ngModel)]=\"model.price\" #price=\"ngModel\" name=\"price\" class=\"f1-last-name form-control\" id=\"price\">\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"quantity\" class=\"label-sell\">Quantity in Stock</label>\n                        <input type=\"number\" [(ngModel)]=\"model.quantity\" #quantity=\"ngModel\" name=\"quantity\" placeholder=\"Quantity\" class=\"f1-last-name form-control\" id=\"quantity\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label>\n                          <input [(ngModel)]=\"model.list\" #list=\"ngModel\" name=\"list\" value=\"-1\" type=\"checkbox\" class=\"option-input checkbox\" (click)=\"hideList();\" />\n                          List Indefinitely\n                        </label>\n                      </div>\n                      <div *ngIf=\"!hideShowList\">\n                        <div class=\"form-group\">\n                          <label for=\"listing\" class=\"label-sell\">Listing Duration </label>\n                          <select [(ngModel)]=\"model.listingTime\" #listingTime=\"ngModel\" name=\"listingTime\" class=\"f1-last-name form-control\" id=\"listingTime\">\n                            <option value=\"259200000\">3 Days</option>\n                            <option value=\"432000000\">5 Days</option>\n                            <option value=\"604800000\" >7 Days</option>\n                            <option value=\"1296000000\">15 Days</option>\n                            <option value=\"1814400000\">21 Days</option>\n                            <option value=\"2592000000\">30 Days</option>\n                          </select>\n                        </div>\n                        <br />\n                      </div>\n                      <div class=\"form-group\">\n                        <label>\n                          <input [(ngModel)]=\"model.offer\" #offer=\"ngModel\" name=\"offer\" type=\"checkbox\" class=\"option-input checkbox\" />\n                          Accept Offers\n                        </label>\n                      </div>\n                    </div>\n                    <div *ngIf=\"!showBuynow\">\n                        <div class=\"form-group\">\n                          <br>\n                          <input [(ngModel)]=\"model.reserve\" #reverse=\"ngModel\" name=\"reserve\"  value=\"reserve\" id=\"reserve\" style=\"display:none\" >\n                          <label for=\"start-price\" class=\"label-sell\">Starting Price</label>\n                          <input type=\"number\" [(ngModel)]=\"model.rsPrice\" #rsPrice=\"ngModel\" name=\"rsPrice\"  placeholder=\"$\" value=\"$\"class=\"f1-last-name form-control\" id=\"rsPrice\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>\n                            <input type=\"checkbox\" class=\"option-input checkbox\" (click)=\"reversePrice();\" />\n                            Add Reserve Price\n                          </label>\n                        </div>\n                      <div *ngIf=\"!addReverse\">\n                        <div class=\"form-group\">\n                          <label for=\"reverce-price\" class=\"label-sell\">Add Reserve Price</label>\n                          <div class='field'><div style=\"position:relative\"><div style=\"position:absolute; left:2px; top:3px\">$</div></div>                          \n                          <input type=\"number\" [(ngModel)]=\"model.reversePrice\" #reversePrice=\"ngModel\" name=\"revercePrice\"  class=\"f1-last-name form-control\" id=\"revercePrice\">\n                          </div>\n                        </div>\n                      </div>\n                      <br>\n                        <div class=\"form-group\">\n                          <label for=\"listing-reverse\" class=\"label-sell\">Listing Duration</label>\n                          <br>\n                          <select  [(ngModel)]=\"model.listingReverse\" #listingReverse=\"ngModel\"  name=\"listingReverse\" class=\"f1-password form-control\" id=\"listingReverse\">\n                            <option value=\"259200000\">3 Days</option>\n                            <option value=\"432000000\">5 Days</option>\n                            <option value=\"604800000\" >7 Days</option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div *ngIf=\"showJobPrice\">\n                      <div class=\"form-group\">\n                        <br>\n                        <input [(ngModel)]=\"model.jobcat\" #jobcat=\"ngModel\" name=\"jobcat\"  value=\"jobs\" id=\"jobcat\" style=\"display:none\" >\n                        <input [(ngModel)]=\"model.jobtype\" #jobtype=\"ngModel\" name=\"jobtype\"  value=\"buy-it-now\" id=\"jobtype\" style=\"display:none\" >\n\n                        <label for=\"salary\" class=\"label-sell\">Salary</label>\n                        <div class='field'><div style=\"position:relative\"><div style=\"position:absolute; left:2px; top:3px\">$</div></div>                        \n                        <input type=\"number\" [(ngModel)]=\"model.salary\" #salary =\"ngModel\" name=\"salary\" class=\"f1-last-name form-control\" id=\"salary\">\n                       </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"pay-period\" class=\"label-sell\">Pay Period</label>\n                        <br>\n                        <select [(ngModel)]=\"model.payperiod\" #payperiod =\"ngModel\" name=\"payperiod\" class=\"f1-last-name form-control\" id=\"payperiod\">\n                          <option value=\"daily\">Daily</option>\n                          <option value=\"biweekly\">Biweekly</option>\n                          <option value=\"weekly\">Weekly</option>\n                          <option selected value=\"monthly\">Monthly</option>\n                          <option value=\"project\">Project Based</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label>\n                          <input [(ngModel)]=\"model.jobindefinite\" #jobindefinite =\"ngModel\" name=\"jobindefinite\" type=\"checkbox\" class=\"option-input checkbox\" (click)=\"hideList();\"/>\n                          List Indefinitely\n                        </label>\n                      </div>\n                      <div *ngIf=\"!hideShowList\">\n                        <div class=\"form-group\">\n                          <label for=\"job-listing\" class=\"label-sell\">Listing Duration</label>\n                          <br>\n                          <select [(ngModel)]=\"model.joblisting\" #joblisting =\"ngModel\" name=\"joblisting\" class=\"f1-last-name form-control\" id=\"job-listing\">\n                            <option value=\"259200000\">3 Days</option>\n                            <option value=\"432000000\">5 Days</option>\n                            <option selected value=\"604800000\" >7 Days</option>\n                            <option value=\"1296000000\">15 Days</option>\n                            <option value=\"1814400000\">21 Days</option>\n                            <option value=\"2592000000\">30 Days</option>\n                          </select>\n                        </div>\n                        <br />\n                      </div>\n                      <div class=\"form-group\">\n                        <label>\n                          <input [(ngModel)]=\"model.joboffer\" #joboffer =\"ngModel\" name=\"joboffer\" type=\"checkbox\" class=\"option-input checkbox\" />\n                          Accept Offers\n                        </label>\n                      </div>\n                    </div>\n                  <br />\n                  <div class=\"f1-buttons\">\n                    <button type=\"button\" class=\"btn btn-previous\">Previous</button>\n                    <button type=\"button\" class=\"btn btn-next\" (click) = nextStep3(); >Next</button>\n                  </div>\n                </fieldset>\n                <fieldset>\n                  <br />\n                <div *ngIf = \"showProComplete\">\n                   <!-- <label class=\"label-sell\">Share On\n                    </label>\n                    <br />\n                    <div class=\"form-group\">\n                      <label>\n                        <input type=\"checkbox\" class=\"option-input checkbox\" />\n                        Facebook\n                      </label>\n                    </div> -->\n                    <div class=\"form-group\">\n                      <label for=\"city\" class=\"label-sell\">Zip Code</label>\n                      <input type=\"text\"  (ngModelChange)=\"zipcodeCheck(zipcode1.value)\" [(ngModel)]=\"location_Data.zip_code\"\n                      #zipcode1 name=\"zipcode\" min=\"1\" max=\"5\"   placeholder=\"Enter zip/postal code\" class=\"f1-last-name form-control\" id=\"location\">\n                    </div>\n                    <input type=\"text\"\n                    name=\"lat\"   [(ngModel)]=\"location_Data.lat\"\n                    value=\"{{location_Data.lat}}\" id=\"lat\" hidden>\n                    <input type=\"text\"\n                    name=\"lng\"   [(ngModel)]=\"location_Data.lng\"\n                    value=\"{{location_Data.lng}}\" id=\"lng\" hidden>\n                    <div class=\"form-group\">\n                      <label for=\"location\" class=\"label-sell\">City</label>\n                      <input type=\"text\"\n                      name=\"city\"   [(ngModel)]=\"location_Data.city\"\n                      value=\"{{location_Data.city}}\" class=\"f1-last-name form-control\" id=\"city\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"location\" class=\"label-sell\">State</label>\n                      <input type=\"text\"   name=\"state\" [(ngModel)]=\"location_Data.state\"\n                      value=\"{{location_Data.state}}\" class=\"f1-last-name form-control\" id=\"state\">\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label>\n                        <input type=\"checkbox\" class=\"option-input checkbox\" />\n                        Locate Me\n                      </label>\n                    </div> -->\n                  </div>\n                  <div *ngIf=\"showJobComplete\">\n                    <div class=\"form-group\">\n                      <br>\n                      <label for=\"company-info\" class=\"label-sell\">Company Information</label>\n                      <input  type=\"text\" [(ngModel)]=\"model.companyname\" #company_name =\"ngModel\" name=\"company_name\" placeholder=\"Name of Company\" class=\"f1-last-name form-control\" id=\"company-info\">\n                      <br>\n                      <textarea [(ngModel)]=\"model.company_description\" #company_description =\"ngModel\" name=\"company_description\" class=\"f1-password form-control\" id=\"company_description\" placeholder=\"Detail of Company\" cols=\"30\" rows=\"10\"></textarea>\n                    </div>\n                    <!-- <label class=\"label-sell\">Share On\n                    </label>\n                    <br />\n                    <div class=\"form-group\">\n                      <label>\n                        <input type=\"checkbox\" class=\"option-input checkbox\" />\n                        Facebook\n                      </label>\n                    </div> -->\n                    <div class=\"form-group\">\n                      <label for=\"city\" class=\"label-sell\">Zip Code</label>\n                      <input type=\"text\"  (keyup)=\"zipcodeCheck(zipcode1.value)\"  [(ngModel)]=\"location_Data.zip_code\"\n                      #zipcode1 name=\"zipcode\"  placeholder=\"Enter zip/postal code\" class=\"f1-last-name form-control\" id=\"location\">\n                    </div>\n                      <input type=\"text\"\n                      name=\"lat\"   [(ngModel)]=\"location_Data.lat\"\n                      value=\"{{location_Data.lat}}\" id=\"lat\" hidden>\n                      <input type=\"text\"\n                      name=\"lng\"   [(ngModel)]=\"location_Data.lng\"\n                      value=\"{{location_Data.lng}}\" id=\"lng\" hidden>\n                      <div class=\"form-group\">\n                        <label for=\"location\" class=\"label-sell\">City</label>\n                        <input type=\"text\"\n                        name=\"city\"   [(ngModel)]=\"location_Data.city\"\n                        value=\"{{location_Data.city}}\" class=\"f1-last-name form-control\" id=\"city\">\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"location\" class=\"label-sell\">State</label>\n                        <input type=\"text\"   name=\"usstate\" #usstate=\"ngModel\" [(ngModel)]=\"location_Data.state\"\n                        value=\"{{location_Data.state}}\" class=\"f1-last-name form-control\" id=\"usstate\">\n                      </div>\n                    <!-- <div class=\"form-group\">\n                      <label>\n                        <input type=\"checkbox\" class=\"option-input checkbox\" />\n                        Locate Me\n                      </label>\n                    </div> -->\n                  </div>\n                  <div style=\"margin-top:10px\" class=\"f1-buttons\">\n                    <button type=\"button\" class=\"btn btn-previous\">Previous</button>\n                    <button type=\"submit\" class=\"btn btn-submit\">Submit</button>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--footer-->\n  <!--end-->\n"

/***/ }),

/***/ "../../../../../src/app/sell/sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_service__ = __webpack_require__("../../../../../src/app/sell/sell.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu__ = __webpack_require__("../../../../../src/app/sell/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job__ = __webpack_require__("../../../../../src/app/sell/job.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SellComponent = (function () {
    function SellComponent(_nav, authService, afAuth, _serv, db) {
        var _this = this;
        this._nav = _nav;
        this.authService = authService;
        this.afAuth = afAuth;
        this._serv = _serv;
        this.db = db;
        this.showProCat = true;
        this.showJobCat = false;
        this.showProPrice = true;
        this.showJobPrice = false;
        this.showProComplete = true;
        this.showJobComplete = false;
        this.cat = [];
        this.model = {};
        this.location_Data = { "zip_code": "", "lat": "", "lng": "", "city": "", "state": "" };
        this.upfile = {};
        this.step1 = false;
        //////////PRoduct////////////
        this.post = new __WEBPACK_IMPORTED_MODULE_3__menu__["a" /* Menu */]();
        this.counter = 0;
        this.imgarr = [];
        this.showSpinne = false;
        this.upload = new __WEBPACK_IMPORTED_MODULE_4__job__["a" /* Job */]();
        localStorage.getItem('JwtToken');
        //  this.token = this.authService.gettestToken();
        console.log(this.authService.gettestToken());
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                _this.token = res.refreshToken;
            }
        });
        this.showHide = true;
        this.showBuynow = true;
        this.hideShowList = false;
        this.addReverse = true;
        this.btnChecked = false;
        this.itemsSubscription = this.db.list('/categories/', { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.cat.push(snapshot.key);
            });
            _this.itemsSubscription.unsubscribe();
        });
    }
    SellComponent.prototype.changeShowStatus = function () {
        console.log("junaid");
        console.log("product", this.showProCat, "job", this.showJobCat);
        this.showHide = !this.showHide;
        if (this.showProCat === true && this.showJobCat === false) {
            this.showJobCat = true;
            this.showProCat = false;
            // alert("junaid1");
        }
        else if (this.showProCat === false && this.showJobCat === true) {
            this.showJobCat = false;
            this.showProCat = true;
        }
        if (this.showProPrice === true && this.showJobPrice === false) {
            this.showJobPrice = true;
            this.showProPrice = false;
        }
        else if (this.showProPrice === false && this.showJobPrice === true) {
            this.showJobPrice = false;
            this.showProPrice = true;
        }
        if (this.showProComplete === true && this.showJobComplete === false) {
            this.showJobComplete = true;
            this.showProComplete = false;
        }
        else if (this.showProComplete === false && this.showJobComplete === true) {
            this.showJobComplete = false;
            this.showProComplete = true;
        }
    };
    SellComponent.prototype.nextStep1 = function () {
        this.step1 = true;
        //alert(this.showJobCat);
        //alert(this.showProCat);
        // this.showProCat = true;
        // this.showJobCat = true;
    };
    SellComponent.prototype.nextStep2 = function () {
        //alert(this.showJobPrice);
        //alert(this.showProPrice);
    };
    SellComponent.prototype.nextStep3 = function () {
        //alert(this.showJobComplete);
        //alert(this.showProComplete);
    };
    SellComponent.prototype.buynow = function () {
        this.showBuynow = !this.showBuynow;
    };
    SellComponent.prototype.hideList = function () {
        this.hideShowList = !this.hideShowList;
    };
    SellComponent.prototype.reversePrice = function () {
        this.addReverse = !this.addReverse;
    };
    SellComponent.prototype.checkedBtn = function () {
        this.btnChecked = !this.btnChecked;
    };
    SellComponent.prototype.zipcodeCheck = function (zip) {
        var _this = this;
        console.log(zip);
        this._serv.zipcode(zip).subscribe(function (data) {
            _this.location_Data = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SellComponent.prototype.onSubmit = function (obj) {
        if (obj.value.offer == true) {
            obj.value.offer == 'yes';
        }
        else {
            obj.value.offer == 'no';
        }
        console.log(obj.value.offer, "junaid", obj.value);
        this.uploadSingle(obj.value);
    };
    SellComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                _this.token = res.refreshToken;
                console.log("token", _this.token);
            }
        });
        console.log("Token", localStorage.getItem('JwtToken'));
        this.loadScript('assets/script/scripts.js');
        this.loadScript('assets/script/file-view.js');
        this.model.buy = 'buy-it-now';
        this.model.jobtype = 'buy-it-now';
        this.model.jobcat = 'Jobs';
        this.model.reserve = 'reserve';
    };
    SellComponent.prototype.loadScript = function (url) {
        console.log('preparing to load...');
        var node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    };
    // selectFile(event) {
    //   const file = event.target.files.item(0)
    //   if (file.type.match('image.*')) {
    //     this.selectedFiles = event.target.files;
    //   } else {
    //     alert('invalid format!');
    //   }
    // }
    SellComponent.prototype.detectFiles = function (event) {
        this.selectedFiles = event.target.files;
        console.log(this.selectedFiles);
    };
    SellComponent.prototype.uploadSingle = function (obj) {
        var _this = this;
        this.showSpinne == true;
        if (obj.jobcat == "Jobs") {
            this.jobimg = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/appImages%2Fjob%2Fjobs_new_1200.png?alt=media&token=4cec5834-2f6a-4416-a653-47117ad90301";
            console.log(this.jobimg, obj, 1);
            this.jobupload(obj);
            // this._serv.jobupload(obj,1)
        }
        else {
            var progress_1;
            var arr = [];
            console.log("DATA", this.currentUpload, obj);
            // let file = this.selectedFiles.item(0)
            // this.currentUpload = new Menu(file);
            // this._serv.pushUpload(this.currentUpload,obj)
            var files_1 = this.selectedFiles;
            console.log("length", files_1);
            var filesIndex = __WEBPACK_IMPORTED_MODULE_5_lodash__["range"](files_1.length);
            __WEBPACK_IMPORTED_MODULE_5_lodash__["each"](filesIndex, function (idx) {
                //   this.currentUpload = new Menu(files[idx]);
                //   console.log(this.currentUpload)
                //   this._serv.pushUpload(this.currentUpload,obj,files.length)
                // })
                var storageRef = __WEBPACK_IMPORTED_MODULE_10_firebase__["storage"]().ref();
                var uploadTask = storageRef.child("/uploads/" + files_1[idx].name).put(files_1[idx]);
                uploadTask.on(__WEBPACK_IMPORTED_MODULE_10_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
                    progress_1 = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
                    console.log(progress_1, "url", uploadTask.snapshot.downloadURL);
                }, function (error) {
                    // upload failed
                    console.log(error);
                }, function () {
                    _this.imgarr.push(uploadTask.snapshot.downloadURL);
                    console.log("array", _this.imgarr);
                    if (files_1.length == _this.imgarr.length) {
                        _this.uploadPost(_this.imgarr, obj);
                    }
                });
            });
        }
        //   this.upfile = this.selectedFiles
        //     console.log(this.upfile)
        //     this._serv.pushUpload(this.upfile,obj)
    };
    SellComponent.prototype.uploadPost = function (imgPath, obj) {
        this.currentTime = __WEBPACK_IMPORTED_MODULE_10_firebase__["database"].ServerValue.TIMESTAMP;
        if (obj.category) {
            this.catpath = obj.category;
        }
        if (obj.buy) {
            this.type = obj.buy;
        }
        if (obj.reserve && obj.revercePrice) {
            this.type = obj.reserve;
        }
        else if (obj.reserve && !obj.revercePrice) {
            this.type = "non-reserve";
        }
        this.state = obj.state;
        if (obj.offer == true) {
            this.post.acceptOffers = "yes";
        }
        if (obj.offer == false) {
            this.post.acceptOffers = "no";
        }
        if (obj.list == true) {
            this.post.endTime = -1;
        }
        if (obj.listingTime) {
            this.post.endTime = new Date().getTime() + parseInt(obj.listingTime, 10);
        }
        if (obj.listingReverse) {
            this.post.endTime = new Date().getTime() + parseInt(obj.listingReverse, 10);
        }
        if (obj.revercePrice) {
            this.post.rPrice = obj.revercePrice.toString();
        }
        if (obj.rsPrice) {
            this.post.startPrice = obj.rsPrice.toString();
            this.product_price = obj.rsPrice;
        }
        if (obj.quantity) {
            this.post.quantity = obj.quantity.toString();
        }
        if (obj.price) {
            this.post.startPrice = obj.price.toString();
        }
        this.post.city = obj.city.toString();
        if (obj.condition) {
            this.post.condition = obj.condition.toString();
        }
        if (obj.description) {
            this.post.description = obj.description.toString();
        }
        if (imgPath[0] != undefined) {
            this.post.image0 = imgPath[0];
        }
        if (imgPath[1] != undefined) {
            this.post.image1 = imgPath[1];
        }
        if (imgPath[2] != undefined) {
            this.post.image2 = imgPath[2];
        }
        if (imgPath[3] != undefined) {
            this.post.image3 = imgPath[3];
        }
        if (imgPath[4] != undefined) {
            this.post.image4 = imgPath[4];
        }
        // this.post.image0 = uploadTask.snapshot.downloadURL.toString();
        this.post.imagesCount = imgPath.length.toString();
        this.post.state = obj.state.toString();
        if (obj.lat) {
            this.post.latitude = obj.lat.toString();
        }
        if (obj.zipcode) {
            this.post.zipcode = obj.zipcode.toString();
        }
        if (obj.lng) {
            this.post.longitude = obj.lng.toString();
        }
        if (obj.title) {
            this.post.title = obj.title.toString();
        }
        this.post.token = this.token;
        this.post.startTime = new Date().getTime();
        this.post.chargeTime = new Date().getTime();
        this.post.uid = this.currentUser;
        this.saveFileData(this.post);
    };
    SellComponent.prototype.saveFileData = function (upload) {
        var _this = this;
        console.log("proudct upload", upload);
        var key = this.db.list('products/' + this.catpath + '/' + this.type + '/' + this.state).push(upload).key;
        console.log("key................", key);
        if (key && (this.type == 'reserve' || this.type == 'non-reserve')) {
            this.db.object('products/' + this.catpath + '/' + this.type + '/' + this.state + '/' + key + '/bids').set({
                maxBid: "0",
                startPrice: this.product_price.toString()
            });
        }
        if (key) {
            this.db.object('users/' + this.currentUser + '/products/selling/' + key).set({
                auctionType: this.type,
                category: this.catpath,
                state: this.state
            }).then(function (sucess) {
                _this.showSpinne == false;
                __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()('Congrats.', 'Your item has been listed successfully on Sell4Bids.\n Good luck.', 'success');
            }).catch(function (error) {
                _this.showSpinne == false;
                __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()('Oops...', 'Failed to Upload Data. Inccorrect Information!', 'error');
            });
            var url = '/';
            this._nav.navigate([url]);
        }
    };
    SellComponent.prototype.jobupload = function (obj) {
        console.log(obj);
        // this.currentTime = firebase.database.ServerValue.TIMESTAMP;
        if (obj.usstate) {
            this.jobstate = obj.usstate.toString();
        }
        if (obj.jobcat) {
            this.jobcat = obj.jobcat.toString();
        }
        if (obj.jobtype) {
            this.jobtype = obj.jobtype.toString();
        }
        if (obj.employment) {
            this.upload.employmentType = obj.employment.toString();
        }
        if (obj.jobcategory) {
            this.upload.jobCategory = obj.jobcategory.toString();
        }
        if (obj.payperiod) {
            this.upload.payPeriod = obj.payperiod.toString();
        }
        if (obj.salary) {
            this.upload.startPrice = obj.salary.toString();
        }
        if (obj.toughness) {
            this.upload.condition = obj.toughness.toString();
        }
        if (obj.jobdescription) {
            this.upload.description = obj.jobdescription.toString();
        }
        if (obj.jobtitle) {
            this.upload.title = obj.jobtitle.toString();
        }
        if (obj.joboffer == true) {
            this.upload.acceptOffers = "yes";
        }
        if (obj.joboffer == false) {
            this.upload.acceptOffers = "no";
        }
        if (obj.medical == true) {
            this.upload.benefits = "Medical";
        }
        if (obj.pto == true) {
            this.upload.benefits += ",PTO";
        }
        if (obj.k == true) {
            this.upload.benefits += ",401(k)";
        }
        if (obj.joblisting) {
            this.upload.endTime = new Date().getTime() + parseInt(obj.joblisting, 10);
        }
        if (obj.jobindefinite == true) {
            this.upload.endTime == -1;
        }
        if (obj.company_name) {
            this.upload.companyName = obj.company_name;
        }
        if (obj.company_description) {
            this.upload.companyDescription = obj.company_description;
        }
        this.upload.image0 = "https://firebasestorage.googleapis.com/v0/b/sell4bids-4affe.appspot.com/o/job_imagewhite_background%2FJob-Image.png?alt=media&token=e7526576-c398-4f53-95e6-db8174054be2";
        this.upload.imagesCount = "1";
        this.upload.state = obj.usstate.toString();
        if (obj.lat) {
            this.upload.latitude = obj.lat.toString();
        }
        if (obj.zipcode) {
            this.post.zipcode = obj.zipcode.toString();
        }
        if (obj.lng) {
            this.upload.longitude = obj.lng.toString();
        }
        if (obj.title) {
            this.upload.title = obj.title;
        }
        this.upload.token = this.token.toString();
        this.upload.startTime = new Date().getTime();
        this.upload.chargeTime = new Date().getTime();
        this.upload.uid = this.currentUser.toString();
        this.jobData(this.upload);
    };
    SellComponent.prototype.jobData = function (upload) {
        var _this = this;
        console.log("proudct upload", upload);
        var key = this.db.list('products/' + this.jobcat + '/' + this.jobtype + '/' + this.jobstate).push(upload).key;
        console.log("key................", key);
        if (key) {
            this.db.object('users/' + this.currentUser + '/products/selling/' + key).set({
                auctionType: this.jobtype,
                category: this.jobcat,
                state: this.jobstate
            }).then(function (success) {
                _this.showSpinne == false;
                __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()('Congrats.', 'Your item has been listed successfully on Sell4Bids.\n Good luck.', 'success');
            }).catch(function (error) {
                _this.showSpinne == false;
                __WEBPACK_IMPORTED_MODULE_11_sweetalert2___default()('Oops...', 'Failed to Upload Data. Inccorrect Information!', 'error');
            });
            var url = '/';
            this._nav.navigate([url]);
        }
    };
    return SellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileImportInput'),
    __metadata("design:type", Object)
], SellComponent.prototype, "fileImportInput", void 0);
SellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sell',
        template: __webpack_require__("../../../../../src/app/sell/sell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sell/sell.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__sell_service__["a" /* SellService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sell_service__["a" /* SellService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], SellComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sell.component.js.map

/***/ }),

/***/ "../../../../../src/app/sell/sell.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellModule", function() { return SellModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sell_component__ = __webpack_require__("../../../../../src/app/sell/sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sell_routing__ = __webpack_require__("../../../../../src/app/sell/sell.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sell_service__ = __webpack_require__("../../../../../src/app/sell/sell.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SellModule = (function () {
    function SellModule() {
    }
    return SellModule;
}());
SellModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_4__sell_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__sell_component__["a" /* SellComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__sell_service__["a" /* SellService */]
        ]
    })
], SellModule);

//# sourceMappingURL=sell.module.js.map

/***/ }),

/***/ "../../../../../src/app/sell/sell.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sell_component__ = __webpack_require__("../../../../../src/app/sell/sell.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__sell_component__["a" /* SellComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=sell.routing.js.map

/***/ }),

/***/ "../../../../../src/app/sell/sell.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SellService = (function () {
    function SellService(_nav, authService, afAuth, db, _http1) {
        var _this = this;
        this._nav = _nav;
        this.authService = authService;
        this.afAuth = afAuth;
        this.db = db;
        this._http1 = _http1;
        this.counter = 0;
        this.basePath = '/uploads';
        localStorage.getItem('JwtToken');
        //  this.token = this.authService.gettestToken();
        console.log(this.authService.gettestToken());
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                _this.token = res.refreshToken;
            }
        });
    }
    SellService.prototype.zipcode = function (zip) {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http1.get('https://apis.rfpgurus.com/zipcode/' + zip + '/', { headers: headers }).map(function (response) { return response.json(); });
    };
    SellService.prototype.pushUpload = function (upload, obj, imglength) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_7_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(__WEBPACK_IMPORTED_MODULE_7_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
            console.log("url", uploadTask.snapshot.downloadURL);
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            _this.currentTime = __WEBPACK_IMPORTED_MODULE_7_firebase__["database"].ServerValue.TIMESTAMP;
            if (obj.category) {
                _this.cat = obj.category;
            }
            if (obj.jobcat) {
                _this.cat = obj.jobcat;
            }
            if (obj.jobtype) {
                _this.type = obj.jobtype;
            }
            if (obj.buy) {
                _this.type = obj.buy;
            }
            if (obj.reserve && obj.revercePrice) {
                _this.type = obj.reserve;
            }
            else if (obj.reserve && !obj.revercePrice) {
                _this.type = "non-reserve";
            }
            _this.state = obj.state;
            if (obj.offer == true) {
                upload.acceptOffers = "yes";
            }
            if (obj.offer == false) {
                upload.acceptOffers = "no";
            }
            if (obj.list == true) {
                upload.endTime = -1;
            }
            if (obj.listingTime) {
                upload.endTime = new Date().getTime() + parseInt(obj.listingTime, 10);
            }
            if (obj.listingReverse) {
                upload.endTime = new Date().getTime() + parseInt(obj.listingReverse, 10);
            }
            if (obj.revercePrice) {
                upload.rPrice = obj.revercePrice.toString();
            }
            if (obj.rsPrice) {
                upload.startPrice = obj.rsPrice.toString();
                _this.product_price = obj.rsPrice;
            }
            if (obj.quantity) {
                upload.quantity = obj.quantity.toString();
            }
            if (obj.price) {
                upload.startPrice = obj.price.toString();
            }
            //////////////////////////job////////////////////////////////////////
            if (obj.employment) {
                upload.employmentType = obj.employment.toString();
            }
            if (obj.jobcategory) {
                upload.jobCategory = obj.jobcategory.toString();
            }
            if (obj.payperiod) {
                upload.payPeriod = obj.payperiod.toString();
            }
            if (obj.salary) {
                upload.startPrice = obj.salary.toString();
            }
            if (obj.toughness) {
                upload.condition = obj.toughness.toString();
            }
            if (obj.jobdescription) {
                upload.description = obj.jobdescription.toString();
            }
            if (obj.jobtitle) {
                upload.title = obj.jobtitle.toString();
            }
            if (obj.joboffer == true) {
                upload.acceptOffers = "yes";
            }
            if (obj.joboffer == false) {
                upload.acceptOffers = "no";
            }
            if (obj.medical == true) {
                upload.benefits = "Medical";
            }
            if (obj.pto == true) {
                upload.benefits += ",PTO";
            }
            if (obj.k == true) {
                upload.benefits += ",401(k)";
            }
            if (obj.joblisting) {
                upload.endTime = new Date().getTime() + parseInt(obj.joblisting, 10);
            }
            if (obj.jobindefinite == true) {
                upload.endTime == -1;
            }
            if (obj.company_name) {
                upload.companyName = obj.company_name.toString();
            }
            if (obj.company_description) {
                upload.companyDescription = obj.company_description.toString();
            }
            /////////////////////////end////////////////////////////////////////
            upload.city = obj.city.toString();
            if (obj.codition) {
                upload.condition = obj.condition.toString();
            }
            if (obj.description) {
                upload.description = obj.description.toString();
            }
            upload.image0 = uploadTask.snapshot.downloadURL.toString();
            upload.imagesCount = imglength.toString();
            upload.state = obj.state.toString();
            upload.latitude = obj.lat.toString();
            upload.longitude = obj.lng.toString();
            if (obj.title) {
                upload.title = obj.title.toString();
            }
            upload.token = _this.token;
            upload.startTime = new Date().getTime();
            upload.chargeTime = new Date().getTime();
            upload.uid = _this.currentUser;
            // upload.token =  this.token;
            _this.saveFileData(upload);
            // this.saveitem(dealitem)
            //dajngo file url
            //end
        });
    };
    // Writes the file details to the realtime db
    SellService.prototype.saveFileData = function (upload) {
        console.log("proudct upload", upload);
        var key = this.db.list('products/' + this.cat + '/' + this.type + '/' + this.state).push(upload).key;
        console.log("key................", key);
        if (key && (this.type == 'reserve' || this.type == 'non-reserve')) {
            this.db.object('products/' + this.cat + '/' + this.type + '/' + this.state + '/' + key + '/bids').set({
                maxBid: "0",
                startPrice: this.product_price.toString()
            });
        }
        if (key) {
            this.db.object('users/' + this.currentUser + '/products/selling/' + key).set({
                auctionType: this.type,
                category: this.cat,
                state: this.state
            });
            if (key) {
                __WEBPACK_IMPORTED_MODULE_9_sweetalert2___default()('Congrats.', 'Your item has been listed successfully on Sell4Bids.\n Good luck.', 'success');
            }
            var url = '/';
            this._nav.navigate([url]);
        }
    };
    return SellService;
}());
SellService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === "function" && _e || Object])
], SellService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sell.service.js.map

/***/ })

});
//# sourceMappingURL=sell.module.chunk.js.map