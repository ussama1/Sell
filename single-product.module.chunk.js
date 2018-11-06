webpackJsonp(["single-product.module"],{

/***/ "../../../../../src/app/single-product/single-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#clockdiv,\r\nh1 {\r\n    font-weight: 100\r\n}\r\n\r\n#clockdiv,\r\nsection#history table th {\r\n    font-size: 30px;\r\n    text-align: center;\r\n    color: #fff\r\n}\r\n\r\n#clockdiv div>span {\r\n    background: #0a0a0a\r\n}\r\n\r\n#clockdiv div>span,\r\nh3:after,\r\nh3:before {\r\n    background-color: #ddd;\r\n    display: inline-block;\r\n    position: relative\r\n}\r\n\r\nh1 {\r\n    color: #396\r\n}\r\n\r\n#clockdiv {\r\n    background-image: -webkit-linear-gradient(top, #222, #333, #333, #222);\r\n    font-family: sans-serif;\r\n    display: inline-block;\r\n    width: auto;\r\n    border-radius: 10px\r\n}\r\n.sh-bg-bid{\r\n  padding: 0;\r\n}\r\nsection#history .sh-bg-bid h2{\r\n    background: #da1b22;\r\n    color: #fff;\r\n    font-size: 26px;\r\n    font-weight:700;\r\n    text-align: left;\r\n    padding: 0 20px;\r\n}\r\n.sh-pd-0{\r\n  padding: 0;\r\n}\r\n#clockdiv>div {\r\n    padding: 10px 0;\r\n    border-radius: 3px;\r\n    display: inline-block\r\n}\r\n\r\n#history h2,\r\n#viewoffer h2 {\r\n    font-weight: 700;\r\n    padding: 0 0 10px;\r\n    text-align: center\r\n}\r\n\r\nsection#history,\r\nsection#viewoffer {\r\n    border: 1px solid #dcdcdc;\r\n    padding: 10px\r\n}\r\n\r\n/* section#history {\r\n    margin-bottom: 33px\r\n} */\r\n\r\nsection#viewoffer table th {\r\n    background: #c00;\r\n    color: #fff;\r\n    font-size: 30px;\r\n    text-align: center\r\n}\r\n\r\n.offers-custom-dialog {\r\n    width: 50%;\r\n    margin: 7% auto\r\n}\r\n\r\nsection#viewoffer table td {\r\n    font-size: 26px;\r\n    font-weight: 700;\r\n    text-align: center\r\n}\r\n\r\nsection#viewoffer {\r\n    margin-bottom: 33px;\r\n    box-shadow: 0 0 10px #ccc\r\n}\r\n\r\n#clockdiv div>span {\r\n    width: 60px;\r\n    max-width: 60px;\r\n    font: 700 48px 'Droid Sans', Arial, sans-serif;\r\n    text-align: center;\r\n    color: #111;\r\n    background-image: -o-linear-gradient(top, #bbb, #eee);\r\n    border-top: 1px solid #fff;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 12px rgba(0, 0, 0, .7);\r\n    margin: 0 7px;\r\n    padding: 0\r\n}\r\n\r\n.smalltext {\r\n    padding-top: 10px;\r\n    font-weight: 700;\r\n    font-size: 16px\r\n}\r\n\r\n#container {\r\n    width: 100%;\r\n    margin: 5em auto;\r\n    padding: 0;\r\n    background: #fff\r\n}\r\n\r\n#left,\r\n#right {\r\n    margin: 10px\r\n}\r\n\r\nbody {\r\n    background: #ECECEC\r\n}\r\n\r\n.star-rating {\r\n    line-height: 32px;\r\n    font-size: 1.25em\r\n}\r\n\r\n.star-rating .fa-star {\r\n    color: #e74c3c\r\n}\r\n\r\n.apps {\r\n    margin-bottom: 0\r\n}\r\n\r\n\r\n@media screen and (max-width:991px) {\r\n    .apps,\r\n    .apps2 {\r\n      width: 50%;\r\n      float: left;\r\n      text-align: center;\r\n    }\r\n    .apps2 {\r\n        margin-bottom: 10px!important\r\n    }\r\n}\r\n\r\nh3 {\r\n    overflow: hidden;\r\n    text-align: center\r\n}\r\n\r\nh3:after,\r\nh3:before {\r\n    content: \"\";\r\n    height: 1px;\r\n    vertical-align: middle;\r\n    width: 50%\r\n}\r\n\r\nh3:before {\r\n    right: .5em;\r\n    margin-left: -50%\r\n}\r\n\r\nh3:after {\r\n    left: .5em;\r\n    margin-right: -50%\r\n}\r\n\r\nagm-map {\r\n    height: 200px\r\n}\r\n\r\n.col-item {\r\n    border: 1px solid #E1E1E1;\r\n    border-radius: 5px;\r\n    background: #FFF\r\n}\r\n\r\n.col-item .photo img {\r\n    margin: 0 auto;\r\n    width: 100%\r\n}\r\n\r\n.col-item .info {\r\n    padding: 10px;\r\n    border-radius: 0 0 5px 5px;\r\n    margin-top: 1px\r\n}\r\n\r\n.col-item:hover .info {\r\n    background-color: beige\r\n}\r\n\r\n.col-item .price {\r\n    margin-top: 5px\r\n}\r\n\r\n.col-item .price h5 {\r\n    line-height: 20px;\r\n    margin: 0\r\n}\r\n\r\n.price-text-color {\r\n    color: #219FD1\r\n}\r\n\r\n.col-item .info .rating {\r\n    color: #777\r\n}\r\n\r\n.col-item .rating {\r\n    float: left;\r\n    font-size: 17px;\r\n    text-align: right;\r\n    line-height: 52px;\r\n    margin-bottom: 10px;\r\n    height: 52px\r\n}\r\n\r\n.col-item .separator {\r\n    border-top: 1px solid #E1E1E1\r\n}\r\n\r\n.clear-left {\r\n    clear: left\r\n}\r\n\r\n.col-item .separator p {\r\n    line-height: 20px;\r\n    margin-bottom: 0;\r\n    margin-top: 10px;\r\n    text-align: center\r\n}\r\n\r\n.col-item .separator p i {\r\n    margin-right: 5px\r\n}\r\n\r\n.col-item .btn-add {\r\n    width: 50%;\r\n    float: left;\r\n    border-right: 1px solid #E1E1E1\r\n}\r\n\r\n.col-item .btn-details {\r\n    width: 50%;\r\n    float: left;\r\n    padding-left: 10px\r\n}\r\n\r\n.controls {\r\n    margin-top: 20px\r\n}\r\n\r\n[data-slide=prev] {\r\n    margin-right: 10px\r\n}\r\n\r\n@media (max-width:767px) {\r\n    .col-sm-3 {\r\n        width: 50%!important;\r\n        padding: 0 15px;\r\n        float: left\r\n    }\r\n}\r\n\r\n@media (max-width:360px) {\r\n    .col-sm-3 {\r\n        width: 100%!important;\r\n        padding: 0 15px;\r\n        float: left\r\n    }\r\n}\r\n\r\nfieldset,\r\nlabel {\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\nbody {\r\n    margin: 20px\r\n}\r\n\r\nh1 {\r\n    font-size: 1.5em;\r\n    margin: 10px\r\n}\r\n\r\n.rating {\r\n    border: none;\r\n    float: left\r\n}\r\n\r\n.rating>input {\r\n    display: none\r\n}\r\n\r\n.rating>label:before {\r\n    margin: 5px;\r\n    font-size: 1.25em;\r\n    font-family: FontAwesome;\r\n    display: inline-block;\r\n    content: \"\\F005\"\r\n}\r\n\r\n.rating>.half:before {\r\n    content: \"\\F089\";\r\n    position: absolute\r\n}\r\n\r\n.rating>label {\r\n    color: #ddd;\r\n    float: right\r\n}\r\n\r\n.rating:not(:checked)>label:hover,\r\n.rating:not(:checked)>label:hover~label,\r\n.rating>input:checked~label {\r\n    color: gold\r\n}\r\n\r\n.rating>input:checked+label:hover,\r\n.rating>input:checked~label:hover,\r\n.rating>label:hover~input:checked~label,\r\nselection .rating>input:checked~label:hover~label {\r\n    color: #FFED85\r\n}\r\n\r\n.main-section {\r\n    width: 300px;\r\n    position: fixed;\r\n    right: 50px;\r\n    z-index: 9999;\r\n    bottom: -350px\r\n}\r\n\r\n.first-section:hover {\r\n    cursor: pointer\r\n}\r\n\r\n.open-more {\r\n    bottom: 0;\r\n    transition: 2s\r\n}\r\n\r\n.left-chat:before,\r\n.right-chat:before {\r\n    content: \" \";\r\n    top: 0;\r\n    bottom: 150px\r\n}\r\n\r\n.border-chat {\r\n    border: 1px solid #FD8468;\r\n    margin: 0\r\n}\r\n\r\n.first-section {\r\n    background-color: #c00\r\n}\r\n\r\n.first-section p {\r\n    color: #fff;\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    margin: 0;\r\n    padding: 10px 0\r\n}\r\n\r\n.first-section p:hover {\r\n    color: #fff;\r\n    cursor: pointer\r\n}\r\n\r\n.right-first-section {\r\n    text-align: right\r\n}\r\n\r\n.right-first-section i {\r\n    color: #fff;\r\n    font-size: 15px;\r\n    padding: 12px 3px\r\n}\r\n\r\n.right-first-section i:hover {\r\n    color: #fff\r\n}\r\n\r\n.chat-section ul li {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n    position: relative\r\n}\r\n\r\n.chat-section {\r\n    overflow-y: scroll;\r\n    height: 300px;\r\n    background: #e0e0de\r\n}\r\n\r\n.chat-section ul {\r\n    padding: 0\r\n}\r\n\r\n.left-chat img,\r\n.right-chat img {\r\n    width: 50px;\r\n    height: 50px;\r\n    float: left;\r\n    margin: 0 10px\r\n}\r\n\r\n.right-chat img {\r\n    float: right\r\n}\r\n\r\n.second-section {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: #F3F3F3;\r\n    height: 300px\r\n}\r\n\r\n.left-chat,\r\n.right-chat {\r\n    overflow: hidden\r\n}\r\n\r\n.left-chat p,\r\n.right-chat p {\r\n    background-color: #f5f5f5;\r\n    padding: 10px;\r\n    color: #000;\r\n    border-radius: 5px;\r\n    float: left;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    line-height: 19px;\r\n    width: 60%;\r\n    margin-bottom: 20px\r\n}\r\n\r\n.left-chat span,\r\n.right-chat span {\r\n    float: right;\r\n    color: #B7BCC5\r\n}\r\n\r\n.right-chat span {\r\n    left: 45px\r\n}\r\n\r\n.right-chat p {\r\n    float: right;\r\n    background-color: #FFF;\r\n    color: #000\r\n}\r\n\r\n.third-section {\r\n    border-top: 1px solid #EEE\r\n}\r\n\r\n.text-bar input {\r\n    width: 90%;\r\n    margin-left: -15px;\r\n    padding: 10px;\r\n    border: 1px solid #fff\r\n}\r\n\r\n.text-bar a i {\r\n    background-color: #c00;\r\n    color: #fff;\r\n    width: 30px;\r\n    height: 30px;\r\n    padding: 7px 0;\r\n    border-radius: 50%;\r\n    text-align: center\r\n}\r\n\r\n.left-chat:before {\r\n    position: absolute;\r\n    left: 55px;\r\n    border: 15px solid transparent;\r\n    border-top-color: #f5f5f5\r\n}\r\n\r\n.right-chat:before {\r\n    position: absolute;\r\n    right: 55px;\r\n    border: 15px solid transparent;\r\n    border-top-color: #fff\r\n}\r\n\r\n#clockdiv:after,\r\n#clockdiv:before {\r\n    content: \"\";\r\n    width: 12px;\r\n    height: 65px;\r\n    background: #444;\r\n    top: 41px\r\n}\r\n\r\n#clockdiv div>span:after,\r\n#clockdiv div>span:before {\r\n    content: \"\";\r\n    width: 100%;\r\n    display: block;\r\n    position: absolute\r\n}\r\n\r\n#clockdiv div>span:before {\r\n    height: 13px;\r\n    background: #111;\r\n    padding: 0 3px;\r\n    top: 41%;\r\n    left: -3px;\r\n    z-index: -1\r\n}\r\n\r\n#clockdiv div>span:after {\r\n    height: 1px;\r\n    background: #eee;\r\n    border-top: 1px solid #333;\r\n    top: 48%;\r\n    left: 0\r\n}\r\n\r\nngx-gallery {\r\n    width: 100%!important\r\n}\r\n\r\n@media screen and (max-width:425px) {\r\n    #clockdiv {\r\n        width: auto\r\n    }\r\n    #clockdiv>div {\r\n        padding: 10px 2px\r\n    }\r\n    #clockdiv>div>span {\r\n        width: 30px;\r\n        font: 20px 'Droid Sans', Arial, sans-serif;\r\n        padding: 5px 2px\r\n    }\r\n    #clockdiv:after,\r\n    #clockdiv:before {\r\n        display: none\r\n    }\r\n}\r\n\r\n.ngx-gallery-icon .ngx-gallery-icon-content {\r\n    display: block;\r\n    z-index: 1;\r\n}\r\n\r\n.sh-bid-img {\r\n    width: 30px !important;\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/single-product/single-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content-block\" style=\"margin-top:50px; margin-bottom:0px;\">\n  <div class=\"container-fluid be-detail-container sh-mg-top-90\">\n\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-12 \">\n        <div class=\"be-large-post\" style=\"padding-bottom: 15px;\">\n          <div class=\"blog-content   be-large-post-align\" style=\"margin-bottom: 0px;\">\n            <div class=\"clear\"></div>\n            <div class=\"post-text\">\n              <div class=\"col-md-12\">\n                <!-- <div ng2-carouselamos class=\"slides-wrapper\" [items]=\"product_arr\" [width]=\"1000\" [$item]=\"item\">\n                </div> -->\n                <div class=\"sh-sold-tag\" *ngIf=\"product.quantity == 0\">\n                  <img src=\"../../assets/img/soldout.png\" alt=\"Sold out\">\n                </div>\n                <div class=\"sh-price-tag\">\n                  <p>{{product.startPrice}}</p>\n                </div>\n                <!-- <div class=\"sh-views-tag\">\n                  <p>10\n                    <i class=\"far fa-eye\"></i>\n                  </p>\n                </div> -->\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" class=\"col-md-12\"></ngx-gallery>\n\n              </div>\n              <div class=\"col-md-12\">\n\n                <div class=\"info-block \">\n                  <h5 class=\"be-post-title \">{{product.title}}</h5>\n                  <p>\n                    <i class=\"fas fa-tags\"></i> {{catname}}</p>\n                  <p>\n                    <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Posted {{ product.startTime | timeAgo}}</p>\n                </div>\n                <div *ngIf=\"days == 0 && hours == 0 && minutes == 0 && seconds == 0\" class=\"h1 sh-listing-end \">\n                  <div *ngIf=\"catname == 'Jobs'\">\n                    Listing Ended\n                  </div>\n                  <div *ngIf=\"catname != 'Jobs'\">\n                    Auction Ended\n                  </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" style=\"text-align: center; padding: 0px;\" *ngIf=\"product.quantity != 0\">\n                  <div id=\"clockdiv\" *ngIf=\"days != 0 || hours != 0 || minutes != 0 || seconds != 0 \">\n                    <div>\n                      <span class=\"days hr-line\">\n                        {{days}}\n                      </span>\n                      <div class=\"smalltext\">Day</div>\n                    </div>\n                    <div>\n                      <span class=\"hours hr-line\">{{hours}}\n                      </span>\n                      <div class=\"smalltext\">Hr</div>\n                    </div>\n                    <div>\n                      <span class=\"minutes hr-line\">{{minutes}}\n                      </span>\n                      <div class=\"smalltext\">Min</div>\n                    </div>\n                    <div>\n                      <span class=\"seconds hr-line\">{{seconds}}\n                      </span>\n                      <div class=\"smalltext\">Sec</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-12\">\n                <p *ngIf=\"product.description\" class=\"sh-item-dt-description\">\n                  <span style=\"color:#000;    font-weight: bolder;font-size: 18px;\">Description :</span>\n                  <br>{{product.description}}</p>\n              </div>\n\n              <div class=\"col-lg-5 col-md-6 col-sm-12 col-xs-12\">\n                <h5 *ngIf=\"product.condition && !product.companyName\" class=\"be-post-title to sh-item-detail\">Condition :\n                  <span style=\"color:#e74c3c\">{{product.condition}}</span>\n                </h5>\n                <h5 *ngIf=\"product.quantity && product.quantity == 0 && !product.companyName \" class=\"be-post-title to sh-item-detail\">\n                  <span style=\"color:#e74c3c\">Item out of Stock</span>\n                </h5>\n                <h5 *ngIf=\"product.quantity && product.quantity != 0 && !product.companyName \" class=\"be-post-title to sh-item-detail\">Quantity in stock :\n                  <span style=\"color:#e74c3c\">{{product.quantity}} item(s)</span>\n                </h5>\n                <h5 *ngIf=\"product.quantity && product.companyName\" class=\"be-post-title to sh-item-detail\">Total Positions:\n                  <span style=\"color:#e74c3c\">{{product.quantity}}</span>\n                </h5>\n                <h5 *ngIf=\"product.city\" class=\"be-post-title to sh-item-detail\">Location :\n                  <span style=\"color:#e74c3c\">{{product.city}}</span>\n                </h5>\n                <!--JOb -->\n                <h5 *ngIf=\"product.companyName\" class=\"be-post-title to sh-item-detail\">Company :\n                  <span style=\"color:#e74c3c\">{{product.companyName}}</span>\n                </h5>\n                <h5 *ngIf=\"product.companyDescription\" class=\"be-post-title to sh-item-detail\">Company Description :\n                  <span style=\"color:#e74c3c\">{{product.companyDescription}}</span>\n                </h5>\n                <h5 *ngIf=\"product.benefits\" class=\"be-post-title to sh-item-detail\">Benefits :\n                  <span style=\"color:#e74c3c\">{{product.benefits}}</span>\n                </h5>\n                <h5 *ngIf=\"product.employmentType\" class=\"be-post-title to sh-item-detail\">Employment Type :\n                  <span style=\"color:#e74c3c\">{{product.employmentType}}</span>\n                </h5>\n                <h5 *ngIf=\"product.payPeriod\" class=\"be-post-title to sh-item-detail\">Pay Period :\n                  <span style=\"color:#e74c3c\">{{product.payPeriod}}</span>\n                </h5>\n                <h5 *ngIf=\"product.companyName && product.condition\" class=\"be-post-title to sh-item-detail\">Job Toughness :\n                  <span style=\"color:#e74c3c\">{{product.condition}}</span>\n                </h5>\n\n                <!--end-->\n\n              </div>\n\n\n              <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 map-padding\">\n                <iframe width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=5050%20Quorum%20Drive%20Suite%20700%20Dallas%2C%20TX%2075254&key=AIzaSyBcVkwSRC2BW9c3FsFmhM61fM1c3goI9_4\"\n                        allowfullscreen></iframe>\n                <p class=\"text-info text-center\">Location is approximate in order to protect Seller Privacy</p>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"clearfix\"></div>\n          <div class=\"be-large-post-align\">\n\n            <div class=\"tags_block clearfix\">\n              <div style=\"width: 100%; \">\n                <h4 *ngIf=\"seller_latitude && seller_longitude\" style=\"text-align:center;margin:5px 0px; color:#000;\">{{local_str}}</h4>\n\n                <agm-map *ngIf=\"seller_latitude && seller_longitude\" [zoom]='19' [latitude]=\"seller_latitude\" [longitude]=\"seller_longitude\">\n                  <agm-marker [latitude]=\"seller_latitude\" [longitude]=\"seller_longitude\"> </agm-marker>\n                </agm-map>\n                <h4 *ngIf=\"seller_latitude && seller_longitude\" style=\"text-align:center;margin:5px 0px; color:#ccc;\">Seller shared location to meet.</h4>\n\n                <agm-map *ngIf=\"latitude && longitude\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n                  <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"> </agm-marker>\n                </agm-map>\n                <h4></h4>\n                <h4 *ngIf=\"latitude && longitude\" style=\"text-align:center;margin:5px 0px; color:#ccc;\">Location is approximate in order to protect seller privacy.</h4>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h3 style=\"margin:0px 20px 20px 20px;\"><span style=\"font-weight:bolder;\">Seller's other items</span></h3>\n          </div>\n\n        </div> -->\n\n\n\n        <!-- <div class=\"row\">\n          <ng-container  *ngFor=\"let sel of prodinfo ;let ind=index\">\n            <div *ngIf=\"sel.image0 && sellingkey[ind] != pid \" (click) = mainFunction(catRecord[ind],auctionRecord[ind],stateRecord[ind],sellingkey[ind]) class=\"col-md-4\" style=\"margin-bottom:20px\" >\n             <div  class=\"be-post col-item\">\n                    <div class=\"photo be-post\" style=\"margin-bottom:0px !important;\">\n                      <a style=\"cursor:pointer\" class=\"be-img-block\">\n                      <img src=\"{{sel.image0}}\" alt=\"...\" class=\"img-responsive\" style=\"height:200px;\" alt=\"a\" />\n                      </a>\n                    </div>\n                    <div class=\"info\">\n                      <div class=\"row\">\n                        <div class=\"price\">\n\n                            <a class=\"be-post-title\" style=\"font-weight:bold; white-space: nowrap;overflow: hidden;text-overflow: ellipsis; text-align: center\">\n                          {{sel.title}}\n                          </a>\n                         <div class=\"col-md-12\">\n                          <div class=\"item-btn\">\n                            <div style=\"text-align: center\">\n                              <span style=\"color:#e74c3c; font-size: 20px; font-weight:bold;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;\">${{sel.startPrice}}</span>\n                            </div>\n                            <div style=\"text-align: center\">\n                              <button *ngIf=\"auctionRecord[ind]=='buy-it-now'  && catRecord[ind] =='Jobs'\" class=\"btn btn-next\" >Apply Now</button>\n                              <button *ngIf=\"auctionRecord[ind]=='buy-it-now'  && catRecord[ind] !='Jobs'\" class=\"btn btn-next\" >Buy Now</button>\n                            <button *ngIf=\"auctionRecord[ind]=='reserve' || auctionRecord[ind]=='non-reserve'\" class=\"btn btn-alert\" >Bid Now</button>\n                            </div>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                        </div>\n                        </div>\n\n                      </div>\n\n\n\n                </div>\n              </div>\n              <div class=\"clearfix\" *ngIf=\"(ind + 1) % 2 == 0\"></div>\n\n            </div>\n            </ng-container>\n        </div> -->\n\n        <!-- View Offer Section-->\n        <!-- Modal -->\n        <div id=\"myModal2\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog offers-custom-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n\n              <section *ngIf=\"currentUser == product.uid \" id=\"viewoffer\">\n                <h2>Offers</h2>\n                <div class=\"row\">\n\n                  <div class=\"col-md-12\">\n                    <table class=\"table table-responsive table-striped table-hover\">\n                      <thead>\n                      <tr>\n                        <th>Name</th>\n                        <th>Price</th>\n                        <th>Rating / Actions</th>\n                      </tr>\n                      </thead>\n                      <tbody>\n\n                      <ng-container *ngFor=\"let offer of viewoffer ; let ind = index\">\n\n                        <tr>\n                          <td>\n                            {{offer.name}}\n                            <!-- <br>\n<button  class=\"btn btn-next btn-lg\" >Accept</button> -->\n\n                          </td>\n                          <td>\n                            {{offer.boughtPrice}} x {{offer.boughtQuantity}}\n                            <!-- <br>\n<button  class=\"btn btn-next btn-lg\" >Reject</button> -->\n\n                          </td>\n                          <td>\n\n                            <!-- <rating *ngIf=\"offer.rating && offer.rating == 0\" [(ngModel)]=\"starsCount\" [id]=\"[offer.uid]\"\n             [titles]=\"['one', 'two', 'three', 'four', 'five']\">\n           </rating> -->\n                            <!-- <rating *ngIf=\"offer.rating && offer.rating > 0\"  [(ngModel)]=\"starsCount\"  [value]=\"3\"\n\n           [disabled]=\"true\">\n           </rating> -->\n                            <star-rating-comp *ngIf=\"offer.rating && offer.rating > 0\" [starType]=\"'icon'\" [disabled]=\"true\" [rating]=\"offer.rating\"></star-rating-comp>\n                            <star-rating-comp *ngIf=\"offer.rating && offer.rating == 0\" [starType]=\"'icon'\" [id]=\"[offer.uid]\" (onRatingChange)=\"onRatingChange($event,offer.uid)\"></star-rating-comp>\n                            <h4 *ngIf=\"offer.rating && !offer.address\">Location not shared yet.</h4>\n                            <button (click)=\"shareLocation(offer.uid)\" *ngIf=\"offer.rating && !offer.address \" data-toggle=\"modal\" data-target=\"#location\"\n                                    class=\"btn btn-next btn-lg\">Share Location</button>\n                            <button (click)=\"accept(offer.uid,offer.boughtQuantity,offer.boughtPrice)\" *ngIf=\"!offer.rating\" class=\"btn btn-next btn-lg\">Accept</button>\n                            <button (click)=\"reject(offer.uid)\" *ngIf=\"!offer.rating\" class=\"btn btn-next btn-lg\">Reject</button>\n                            <button (click)=\" sellcountid(offer.uid)\" *ngIf=\"!offer.rating\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#counteroffer\">Send Counter Offer</button>\n                            <h4 *ngIf=\"offer.address\">{{offer.address}}</h4>\n                            <button (click)=\"updateLocation(offer.uid,offer.latitude,offer.longitude)\" *ngIf=\"offer.rating && offer.address \" data-toggle=\"modal\"\n                                    data-target=\"#location\" class=\"btn btn-next btn-lg\">Update Location</button>\n                            <button *ngIf=\"offer.seller_marked_paid == 'no' \" (click)=\"markPaid(offer.uid)\" class=\"btn btn-next btn-lg\">Mark Paid</button>\n                            <!-- <button *ngIf=\"offer.seller_marked_paid == 'yes' \" class=\"btn btn-next btn-lg\">Un-Mark Paid</button> -->\n\n                            <p class=\"u-marked\" *ngIf=\"offer.seller_marked_paid == 'yes' \" (click)=\"unmarkPaid(offer.uid)\">\n                              <i class=\"fa fa-check-circle-o\"></i>You marked this as paid.</p>\n                            <!-- <button  (click) =\"rating(offer.uid)\"*ngIf =\"offer.rating == 0\" class=\"btn btn-next btn-lg\" >Rate</button> -->\n                            <!-- Modal -->\n\n                          </td>\n\n                        </tr>\n                      </ng-container>\n\n\n                      </tbody>\n                    </table>\n                    <div *ngIf=\"viewoffer.length == 0\" class=\"col-md-12 no-product-found\">\n                      <div>\n                        <img src=\"../../assets/img/no_bids.png\" alt=\"no product\">\n                      </div>\n                      <h2>No orders received.</h2>\n\n                    </div>\n                  </div>\n                </div>\n              </section>\n              <br />\n\n            </div>\n\n          </div>\n        </div>\n        <div id=\"location\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog offers-custom-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <agm-map style=\"height:500px\" [zoom]='19' [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"placeMarker($event)\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n              <div class=\"modal-footer\">\n                <button (click)=\"sellerLocation()\" class=\"btn btn-next btn-lg\">Share Location</button>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <!-- End -->\n\n        <!-- Modal -->\n        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\n          <div class=\"modal-dialog offers-custom-dialog\">\n\n            <!-- Modal content-->\n            <div class=\"modal-content\">\n              <section *ngIf=\"bid\" id=\"history\">\n                <h2>Bid History</h2>\n                <div class=\"row\">\n                  <div class=\"col-md-12 bid-history-details\">\n                    <div class=\"col-md-6 sh-bg-bid\">\n                      <h2>Name</h2>\n                    </div>\n                    <div class=\"col-md-6 sh-bg-bid\">\n                      <h2>Bid</h2>\n                    </div>\n\n                    <ng-container *ngFor=\"let userbid of prod_bid ; let ind = index\">\n\n                      <div *ngIf=\" userbid.uid == bid_user.winner  \" class=\"col-md-12 high-bid\" style=\"background:#ffecf0\">\n                        <h4 *ngIf=\"finaltime > 0\">Highest Bidder</h4>\n                        <h4 *ngIf=\"finaltime < 0\">Winner</h4>\n\n                        <hr style=\"border:1px solid #c7c7c7\">\n\n                        <div class=\"col-md-6 sh-pd-0\">\n                          <p *ngIf=\"currentUser == userbid.uid \" class=\"bid-name\" style=\"color:#da1b22\">\n                            <b>You</b>\n                          </p>\n                          <p *ngIf=\"currentUser == product.uid \" class=\"bid-name \">\n                            <b> {{userbid.name}}</b>\n                          </p>\n                          <p *ngIf=\"currentUser != userbid.uid && currentUser != product.uid \" class=\"bid-name \">\n                            <b> {{ (userbid.name.length>2)? (userbid.name | slice:0:2)+'****':(userbid.name) }}</b>\n                          </p>\n\n                          <P *ngIf=\"currentUser == userbid.uid && userbid.uid == bid_user.winner \">Ceiling amount</P>\n                          <button *ngIf=\"currentUser == product.uid && finaltime < 0 && !userbid.address\" (click)=\"shareLocation(userbid.uid)\" data-toggle=\"modal\"\n                                  data-target=\"#bidSellerlocation\" class=\"btn btn-next btn-lg\">Share Location</button>\n                          <p *ngIf=\"currentUser == product.uid && finaltime < 0 && userbid.address \">{{userbid.address}}</p>\n                          <button *ngIf=\"currentUser == product.uid && finaltime < 0 && userbid.address\" (click)=\"updateLocation(userbid.uid,userbid.latitude,userbid.longitude)\"\n                                  data-toggle=\"modal\" data-target=\"#bidSellerlocation\" class=\"btn btn-next btn-lg\">Update Location</button>\n\n                        </div>\n\n                        <div class=\"col-md-6 sh-pd-0\">\n                          <p *ngIf=\"currentUser != product.uid && userbid.bid > bid_user.startPrice \" class=\"bid-name\">\n                            <b>${{bid_user.startPrice}}</b>\n                          </p>\n                          <p *ngIf=\"currentUser == product.uid  && userbid.bid > bid_user.startPrice \" class=\"bid-name\">\n                            <b>${{bid_user.startPrice}}</b>\n                          </p>\n                          <p *ngIf=\"currentUser == userbid.uid  && userbid.uid == bid_user.winner \">${{userbid.bid}}</p>\n                        </div>\n\n                      </div>\n\n\n                      <div *ngIf=\" userbid.uid != bid_user.winner  \" class=\"col-md-12 low-bid\">\n                        <p *ngIf=\"currentUser != userbid.uid && currentUser != product.uid \" class=\"pull-left bid-name \">\n                          <b> {{ (userbid.name.length>2)? (userbid.name | slice:0:2)+'****':(userbid.name) }}</b>\n                        </p>\n                        <p *ngIf=\"currentUser == userbid.uid \" class=\"pull-left bid-name \" style=\"color:#da1b22\">\n                          <b> You</b>\n                        </p>\n                        <p *ngIf=\"currentUser == product.uid \" class=\"pull-left bid-name \">\n                          <b> {{userbid.name}}</b>\n                        </p>\n\n                        <p *ngIf=\"userbid.bid < bid_user.startPrice \" class=\"pull-right bid-name\">\n                          <b>${{userbid.bid}}</b>\n                        </p>\n\n                      </div>\n                    </ng-container>\n                    <div *ngIf=\"prod_bid.length == 0\" class=\"col-md-12 no-product-found\">\n                      <div>\n                        <img src=\"../../assets/img/no_bids.png\" alt=\"no product\">\n                      </div>\n                      <h2>No bids received.</h2>\n\n                    </div>\n\n                  </div>\n\n\n                </div>\n              </section>\n              <br />\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5 col-sm-12 left-feild\">\n        <div class=\"be-user-block\">\n          <div class=\"be-user-detail\">\n            <a class=\"be-ava-user\" (click)=singleperson(prof_dict,userkey)>\n              <img style=\"border-radius: 100%;cursor:pointer;\" src=\"{{prof_dict.image}}\" alt onError=\"this.src='assets/img/Blank-Photo.jpg';\"\n                alt=\"...\">\n            </a>\n            <div class=\"display-inline-b\" *ngIf=\"prof_dict.name==null\">\n              <span class=\"be-use-name\" style=\"margin-bottom: 0px;\">Seller Not Available</span>\n            </div>\n            <div class=\"display-inline-b\" *ngIf=\"prof_dict.name!=null\">\n              <span class=\"be-use-name\" style=\"margin-bottom: 0px;\">{{prof_dict.name}}</span>\n            </div>\n\n\n            <div class=\"be-text-tags\">\n              <div class=\"star-rating\">\n                <span *ngIf=\"prof_dict.averagerating >= 1; else template1\" class=\"fa fa-star\" data-rating=\"1\"></span>\n                <ng-template #template1>\n                  <span class=\"far fa-star\" data-rating=\"1\"></span>\n                </ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 2; else template2\" class=\"fa fa-star\" data-rating=\"2\"></span>\n                <ng-template #template2>\n                  <span class=\"far fa-star\" data-rating=\"2\"></span>\n                </ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 3; else template3\" class=\"fa fa-star\" data-rating=\"3\"></span>\n                <ng-template #template3>\n                  <span class=\"far fa-star\" data-rating=\"3\"></span>\n                </ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 4; else template4\" class=\"fa fa-star\" data-rating=\"4\"></span>\n                <ng-template #template4>\n                  <span class=\"far fa-star\" data-rating=\"4\"></span>\n                </ng-template>\n                <span *ngIf=\"prof_dict.averagerating >= 5; else template5\" class=\"fa fa-star\" data-rating=\"5\"></span>\n                <ng-template #template5>\n                  <span class=\"far fa-star\" data-rating=\"5\"></span>\n                </ng-template>\n                <div *ngIf=\"prof_dict.averagerating == null\">\n                  <b>(Not rated yet)</b>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"currentUser != product.uid \" class=\"product-btns\">\n              <button *ngIf=\"currentUser && (catname != 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <i class=\"fas fa-comments\"></i>Chat With Seller</button>\n              <button *ngIf=\"currentUser && (catname == 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <i class=\"fas fa-comments\"></i>Chat With Employer</button>\n              <button *ngIf=\"!currentUser && (catname != 'Jobs')\" data-toggle=\"modal\" data-target=\"#SweetModal\" class=\"btn btn-next btn-lg\">\n                <i class=\"fas fa-comments\"></i> Chat With Seller</button>\n              <button *ngIf=\"!currentUser && (catname == 'Jobs')\" data-toggle=\"modal\" data-target=\"#SweetModal\" class=\"btn btn-next btn-lg\">\n                <i class=\"fas fa-comments\"></i> Chat With Employer</button>\n\n\n\n              <button *ngIf=\"currentUser && (bid && catname != 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <img class=\"sh-bid-img\" src=\"../../assets/img/Sell4Bids-Logo.png\"> Bid </button>\n              <button *ngIf=\"!currentUser && (bid && catname != 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <img class=\"sh-bid-img\" src=\"../../assets/img/Sell4Bids-Logo.png\"> Bid</button>\n\n              <button *ngIf=\"currentUser && (offer && catname != 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\"\n                [disabled]=\"seller_location.uid == currentUser\" [ngStyle]=\"{'background-color':seller_location.uid == currentUser ? '#bbb' : '#c00' }\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <i class=\"fas fa-shopping-basket\"></i>Buy Now</button>\n              <button *ngIf=\"currentUser && (offerbid && catname != 'Jobs')\" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\"\n                [disabled]=\"seller_location.uid == currentUser\" [ngStyle]=\"{'background-color':seller_location.uid == currentUser ? '#bbb' : '#c00' }\" data-toggle=\"modal\" data-target=\"#SweetModal\">Offer Now</button>\n              <button *ngIf=\"!currentUser && (offer && catname != 'Jobs')\" class=\"btn btn-previous btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">\n                <i class=\"fas fa-shopping-basket\"></i>Buy Now</button>\n              <button *ngIf=\"!currentUser && (offerbid && catname != 'Jobs')\" class=\"btn btn-previous btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">Offer Now</button>\n              <button *ngIf=\"currentUser && watch\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">Add to My Watch List</button>\n              <button style=\"font-size: 13px;\" *ngIf=\"currentUser && !watch\" class=\"btn btn-next btn-lg\" (click)=\"removeWatchlist()\">Remove from My Watch List</button>\n\n              <button *ngIf=\"currentUser && (catname == 'Jobs' && bootmodel)\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#SweetModal\">Apply Now</button>\n              <button *ngIf=\"currentUser && (catname == 'Jobs')\" data-toggle=\"modal\" data-target=\"#SweetModal\" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\">Job Now</button>\n              <button *ngIf=\"!currentUser && (catname == 'Jobs' && bootmodel)\"data-toggle=\"modal\" data-target=\"#SweetModal\" class=\"btn btn-next btn-lg\">Apply Now</button>\n              <button *ngIf=\"!currentUser && (catname == 'Jobs')\" data-toggle=\"modal\" data-target=\"#SweetModal\" class=\"btn btn-next btn-lg\">Job Now</button>\n\n              <button *ngIf=\"currentUser && bid\" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\">Bid History</button>\n              <!-- <button *ngIf=\"bid\" class=\"btn btn-next btn-lg\" onclick=\"smoothScroll(document.getElementById('history'))\">Bid History</button>               -->\n              <button *ngIf=\"currentUser && currentUser == counterofferkey.b_id \" class=\"btn btn-next btn-lg\" data-toggle=\"\" data-target=\"\"\n                      data-toggle=\"modal\" data-target=\"#SweetModal\">View Current Offer</button>\n\n\n              <div class=\"profile-ratting own-profile\">\n\n                <div *ngIf=\"seller_location.rating\" class=\"star-rating\">\n                  <h2 *ngIf=\"markrating.rating && markrating.rating == 0\">Rate your experience </h2>\n                  <h2 *ngIf=\"markrating.rating && markrating.rating > 0\">You Rated This</h2>\n                  <star-rating-comp *ngIf=\"markrating.rating && markrating.rating > 0\" [starType]=\"'icon'\" [disabled]=\"true\" [rating]=\"markrating.rating\"></star-rating-comp>\n                  <star-rating-comp *ngIf=\"markrating.rating && markrating.rating == 0\" [starType]=\"'icon'\" (onRatingChange)=\"buyerStar($event)\"></star-rating-comp>\n                  <button *ngIf=\"markrating.rating && markrating.rating == 0\" class=\"btn btn-next btn-lg\" (click)=\"buyerRating(currentUser,prof_dict.uid)\">Rate</button>\n\n                </div>\n                <button *ngIf=\"markrating.rating && seller_location.rating && (!seller_location.buyer_marked_paid || seller_location.buyer_marked_paid == 'no' ) \"\n                  (click)=\"buyerPaid(currentUser)\" class=\"btn btn-next btn-lg\">Mark Paid</button>\n                <p *ngIf=\"markrating.rating && seller_location.rating && seller_location.buyer_marked_paid == 'yes'\" class=\"u-marked\" (click)=\"buyerUnPaid(currentUser)\">\n                  <i class=\"fa fa-check-circle-o\"></i>You marked this as paid.</p>\n              </div>\n\n\n            </div>\n\n            <div *ngIf=\"currentUser == product.uid \" class=\"product-btns\">\n              <button *ngIf=\"offer && currentUser && relistTime && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#endlisting\">End Listing </button>\n              <button *ngIf=\"offer && currentUser \" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#myModal2\">View Offer</button>\n              <!-- <button class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#myModal2\" onclick=\"smoothScroll(document.getElementById('viewoffer'))\">View Offer</button> -->\n              <button *ngIf=\"!stop && offerbid && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"sellerAcceptoffers()\">Accept Offers </button>\n              <button *ngIf=\"currentUser && stop && offerbid && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"stopoffers()\">Stop Accepting Offers </button>\n              <button *ngIf=\"offer && currentUser &&!stop_orders  && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"stoporders()\">Stop New Orders </button>\n              <button *ngIf=\"offer && currentUser && stop_orders  && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"getorders()\">Get New Orders </button>\n              <button *ngIf=\"offer && currentUser\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#stockQuantity\">Set Stock Quantity</button>\n              <button *ngIf=\"offer &&currentUser && !Hideitem  && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"hideitem()\">Hide Item </button>\n              <button *ngIf=\"offer && currentUser && Hideitem  && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" (click)=\"showitem()\">Show Item </button>\n              <button *ngIf=\"offer && currentUser && !relistTime && catname != 'Jobs'\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\"\n                data-target=\"#relist\">Re-list Item</button>\n              <button *ngIf=\"currentUser && bid\" class=\"btn btn-next btn-lg\" data-toggle=\"modal\" data-target=\"#myModal3\">Bid History</button>\n\n\n            </div>\n\n            <div class=\"product-btns sh-product-btns \">\n\n              <button class=\"btn btn-black btn-lg\" data-toggle=\"modal\" data-target=\"\">\n                <i class=\"fa fa-flag\" aria-hidden=\"true\"></i>\n                Report </button>\n              <button class=\"btn btn-success btn-lg\" data-toggle=\"modal\" data-target=\"\">\n                <i class=\"fa fa-share-alt\" aria-hidden=\"true\"></i>\n                Share </button>\n            </div>\n\n          </div>\n        </div>\n        <!--Chat box Start-->\n        <!-- <ng-container >\n        <div class=\"main-section\">\n          <div class=\"row border-chat\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 first-section\">\n              <div class=\"row\">\n                <div class=\"col-md-8 col-sm-6 col-xs-6 left-first-section\">\n                  <p>{{prof_dict.name}}</p>\n                </div>\n                <div class=\"col-md-4 col-sm-6 col-xs-6 right-first-section\">\n                  <a ><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-clone\" aria-hidden=\"true\"></i></a>\n                  <a href=\"#\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row border-chat\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 second-section\">\n              <div class=\"chat-section\">\n                <ul *ngFor=\"let item of chat_list\">\n                  <li *ngIf=\"item.receiverUid\">\n                    <div *ngIf=\"currentUser == item.receiverUid\" class=\"left-chat\">\n                      <img src=\"../../assets/img/Blank-Photo.jpg\">\n                      <p>{{item.message}}</p>\n                      <span>{{item.receiver}} {{item.timestamp | date}}</span>\n                    </div>\n                  </li>\n                  <li>\n                    <div *ngIf=\"currentUser == item.senderUid\" class=\"right-chat\">\n                      <img src=\"../../assets/img/Blank-Photo.jpg\">\n                      <p>{{item.message}}</p>\n                      <span>{{item.sender}} hvbb {{item.timestamp | date}}</span>\n                    </div>\n                  </li>\n\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"row border-chat\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12 third-section\">\n              <div class=\"text-bar\">\n                <input type=\"text\" placeholder=\"Write messege\"><a href=\"#\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>   -->\n        <!--Chat Box End-->\n        <div class=\"apps\">\n          <a class=\"display-inline-b\" href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\">\n            <img src=\"assets/img/googleplayx233.png\">\n          </a>\n        </div>\n        <div class=\"apps\">\n          <a class=\"display-inline-b\" href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\">\n            <img src=\"assets/img/appstorex233.png\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n<!-- Buy Model-->\n<!--<div class=\"modal fade\" id=\"buynow\" role=\"dialog\">-->\n  <!--<div class=\"modal-dialog\">-->\n\n    <!--&lt;!&ndash; Modal content&ndash;&gt;-->\n    <!--<div class=\"modal-content\">-->\n      <!--<div class=\"modal-header\">-->\n        <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>-->\n        <!--<h4 class=\"modal-title\">Buy Now</h4>-->\n      <!--</div>-->\n      <!--<div class=\"modal-body text-center\">-->\n        <!--<div *ngIf=\"!bootmodel\" class=\"alert alert-info\">-->\n          <!--<h2>-->\n            <!--<b>Please login first</b>-->\n          <!--</h2>-->\n        <!--</div>-->\n        <!--<form *ngIf=\"bootmodel\" class=\"form\" #f=\"ngForm\" (ngSubmit)=\"buynow(f)\" novalidate>-->\n          <!--<div style=\"margin-bottom:20px;\" class=\"form-group\">-->\n            <!--<label style=\"float:left\" for=\"Price\">Quantity to buy</label>-->\n            <!--<input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.quantity\" id=\"quantity\" placeholder=\"Quantity\" name=\"quantity\"-->\n              <!--required>-->\n          <!--</div>-->\n          <!--<div class=\"form-group\">-->\n            <!--<button type=\"submit\" class=\"btn btn-next pull-left\">Send Offer</button>-->\n          <!--</div>-->\n          <!--<div class=\"clearfix\"></div>-->\n\n        <!--</form>-->\n\n      <!--</div>-->\n\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"bidding\" role=\"dialog\">\n  <div class=\"modal-dialog sh-modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Biding</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n          <h2>\n            <b>Please login first</b>\n          </h2>\n        </div>\n        <form *ngIf=\"bootmodel\" class=\"form\" #b=\"ngForm\" (ngSubmit)=\"bidding(b)\" novalidate>\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Bids amount must be greater than $ {{product.startPrice}}</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.price\" name=\"price\" id=\"price\" placeholder=\"Bid amount\" required>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-next pull-left\">Place bid</button>\n          </div>\n          <div class=\"clearfix\"></div>\n\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<!-- Offer Bid Model -->\n<div class=\"modal fade\" id=\"offerbid\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Send Offer</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n          <h2>\n            <b>Please login first</b>\n          </h2>\n        </div>\n        <form *ngIf=\"bootmodel\" class=\"form\" #sf=\"ngForm\" (ngSubmit)=\"offersbid(sf)\" novalidate>\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Offer amount per item</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.price\" name=\"price\" id=\"price\" placeholder=\"$\" required>\n          </div>\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Quantity to buy</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.quantity\" name=\"quantity\" id=\"quantity\" placeholder=\"Quantity\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-next pull-left\">Send Offer</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Bid seller location -->\n<div id=\"bidSellerlocation\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog offers-custom-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <agm-map style=\"height:500px\" [zoom]='19' [latitude]=\"lat\" [longitude]=\"lng\" (mapClick)=\"placeMarker($event)\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n      <div class=\"modal-footer\">\n        <button (click)=\"bidSellerLocation()\" class=\"btn btn-next btn-lg\">Share Location</button>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- End -->\n\n<!-- Job Offer Model-->\n<div class=\"modal fade\" id=\"joboffer\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Expected Salary</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n          <h2>\n            <b>Please login first</b>\n          </h2>\n        </div>\n        <form *ngIf=\"bootmodel\" class=\"form\">\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Expected Weekly salary</label>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"model.salary\" #salary=ngModel id=\"salary\" placeholder=\"$\" name=\"salary\">\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" (click)=\"joboffer()\" class=\"btn btn-next pull-left\">Send Offer</button>\n          </div>\n          <div class=\"clearfix\"></div>\n\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Counter  offer Modal -->\n<div class=\"modal fade\" id=\"counteroffer\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Counter Offer Send</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <!-- <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n        <h2><b>Please login first</b></h2>\n      </div> -->\n        <form *ngIf=\"bootmodel\" class=\"form\">\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Offer amount per item</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.price\" #price=ngModel id=\"price\" placeholder=\"$\" name=\"price\">\n          </div>\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Quantity to buy</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.quantity\" #quantity=ngModel id=\"quantity\" placeholder=\"Quantity\"\n              name=\"quantity\">\n          </div>\n          <div class=\"form-group\">\n            <button (click)=\"sellerCounteroffer()\" type=\"submit\" class=\"btn btn-next pull-left\">Send Offer</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n\n<!-- Counter  offer Modal -->\n<div class=\"modal fade\" id=\"buyerCounter\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Counter Offer </h4>\n      </div>\n      <div class=\"modal-body \">\n        <h4>\n          You recieved counter offer for {{product.title}}. Seller is ready to sell {{counteroffer.quantity}} item(s) at ${{counteroffer.pricePerItem}}\n          per item.\n        </h4>\n        <button class=\"btn btn-next btn-lg\" (click)=\"buyerAccept(currentUser,counteroffer.quantity,counteroffer.pricePerItem)\">Accept</button>\n        <button class=\"btn btn-next btn-lg\" (click)=\"buyerReject(currentUser)\">Reject</button>\n        <button class=\"btn btn-next btn-lg\" (click)=\"buyercountid(currentUser)\" data-toggle=\"modal\" data-target=\"#buyerCounteroffer\"\n          data-dismiss=\"modal\">Send Counter Offer</button>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Counter  offer Modal -->\n<div class=\"modal fade\" id=\"buyerCounteroffer\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Counter Offer Send</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <!-- <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n        <h2><b>Please login first</b></h2>\n      </div> -->\n        <form *ngIf=\"bootmodel\" class=\"form\">\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Offer amount per item</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.price\" #price=ngModel id=\"price\" placeholder=\"$\" name=\"price\">\n          </div>\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Quantity to buy</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.quantity\" #quantity=ngModel id=\"quantity\" placeholder=\"Quantity\"\n              name=\"quantity\">\n          </div>\n          <div class=\"form-group\">\n            <button (click)=\"buyerCounteroffer()\" type=\"submit\" class=\"btn btn-next pull-left\">Send Offer</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Stock Quantity Modal -->\n<div class=\"modal fade\" id=\"stockQuantity\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Stock Quantity</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <!-- <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n        <h2><b>Please login first</b></h2>\n      </div> -->\n        <form *ngIf=\"bootmodel\" class=\"form\">\n\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Quantity in stock</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.quantity\" #quantity=ngModel id=\"quantity\" placeholder=\"Quantity\"\n              name=\"quantity\">\n          </div>\n          <div class=\"form-group\">\n            <button (click)=\"stockQuantity()\" type=\"submit\" class=\"btn btn-next pull-left\">Set Quantity</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<!-- Stock Quantity Modal -->\n<div class=\"modal fade\" id=\"endlisting\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Why you want to end item listing?</h4>\n      </div>\n      <div class=\"modal-body\">\n        <!-- <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n        <h2><b>Please login first</b></h2>\n      </div> -->\n        <form *ngIf=\"bootmodel\" class=\"form\">\n          <div class=\"form-group\">\n            <!-- <label class=\"label-sell\">\n        </label> -->\n            <!-- <br> -->\n            <ng-container *ngFor=\"let list of list_item; let i= index;\">\n              <label>\n                <!-- <input  [(ngModel)]=\"model.item\" #item =\"ngModel\" type=\"radio\" class=\"option-input radio\" value=\"list.value\" name=\"{{i}}\" /> -->\n                <input type=\"radio\" name=\"radiogroup\" [checked]=\"i === 0\" [value]=\"list.value\" class=\"option-input radio\" (change)=\"listItemChange(list.value , i )\"\n                /> {{list.viewValue}}\n\n              </label>\n              <br>\n            </ng-container>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" (click)=\"endlisting()\" class=\"btn btn-next pull-left\">End Listing</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n\n<!-- Counter  offer Modal -->\n<div class=\"modal fade\" id=\"relist\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Re-list Item</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <!-- <div *ngIf=\"!bootmodel\" class=\"alert alert-info\">\n        <h2><b>Please login first</b></h2>\n      </div> -->\n        <form *ngIf=\"bootmodel\" class=\"form\">\n          <div style=\"margin-bottom:20px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Price</label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.price\" #price=ngModel id=\"price\" placeholder=\"$\" name=\"price\">\n          </div>\n          <div style=\"margin:20px 0px;\" class=\"form-group\">\n            <label style=\"float:left\" for=\"Price\">Duration</label>\n            <select [(ngModel)]=\"model.listingTime\" #listingTime=\"ngModel\" name=\"listingTime\" class=\"f1-last-name form-control\" id=\"listingTime\">\n              <option value=\"259200000\">3 Days</option>\n              <option value=\"432000000\">5 Days</option>\n              <option value=\"604800000\">7 Days</option>\n              <option value=\"1296000000\">15 Days</option>\n              <option value=\"1814400000\">21 Days</option>\n              <option value=\"2592000000\">30 Days</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <button (click)=\"reListItem()\" type=\"submit\" class=\"btn btn-next pull-left\">Re-List Item</button>\n          </div>\n          <div class=\"clearfix\"></div>\n        </form>\n        <!--<div class=\"modal-footer\">-->\n        <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n        <!--</div>-->\n      </div>\n\n    </div>\n  </div>\n\n</div>\n<div class=\"modal fade\" id=\"SweetModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"margin-top: 120px;\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header sweet-modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body sweet-modal-body text-center modal-height\">\n        <div class=\"for-text\">\n          <h2 class=\"modal-title\">Download The Free Sell4Bids App</h2>\n          <p>Fast, Easy, Cool. Sell4Bids brings the Online Auction Experience to you like NEVER BEFORE!</p>\n          <a class=\"display-inline-b play-store-responsive\" href=\"https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en\" target=\"_blank\" >\n            <img src=\"../../assets/img/google-play.png\">\n          </a>\n          <a class=\"display-inline-b play-store-responsive\" href=\"https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8\" target=\"_blank\" >\n            <img src=\"../../assets/img/apple-store.png\">\n          </a>\n        </div>\n        <div class=\"image-sec\">\n          <img src=\"../../assets/img/modal-image.png\">\n        </div>\n\n      </div>\n      <!--<div class=\"modal-footer\">-->\n      <!--<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>-->\n      <!--</div>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/single-product/single-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__ = __webpack_require__("../../../../ng2-simple-global/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_shared_service__ = __webpack_require__("../../../../../src/app/services/shared-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__timer__ = __webpack_require__("../../../../../src/app/single-product/timer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import swal from 'sweetalert2';




var SingleProductComponent = (function () {
    function SingleProductComponent(deviceService, _shareData, route, authService, afAuth, sg, _ps, db, _nav
        // private timePipe : TimePipe
    ) {
        //////////////////////////////////////////////// Current user id/////////////////////////////////
        var _this = this;
        this.deviceService = deviceService;
        this._shareData = _shareData;
        this.route = route;
        this.authService = authService;
        this.afAuth = afAuth;
        this.sg = sg;
        this._ps = _ps;
        this.db = db;
        this._nav = _nav;
        // lat: number = 51.678418;
        // lng: number = 7.809007;
        this.product = {};
        this.sellingkey = [];
        this.profile = [];
        this.userproduct = [];
        this.sellproduct12 = [];
        this.userinfo = [];
        this.prodinfo = [];
        this.loading = [];
        this.location = [];
        this.showSpinner = true;
        this.prof_dict = [];
        // static index;
        this.items = [];
        this.product_arr = [];
        this.bid = false;
        this.offer = false;
        this.offerbid = false;
        this.stop_orders = false;
        this.model = {};
        this.Timeclose = false;
        this.bootmodel = false;
        this.catRecord = [];
        this.auctionRecord = [];
        this.stateRecord = [];
        this.json_img = {
            small: '',
            medium: '',
            big: ''
        };
        this.sliderimages = [];
        //////////////////bid module//////////
        this.bid_user = {};
        this.prod_bid = [];
        ///////////////end///////////////////
        ////////////// View Offer///////////
        this.viewoffer = [];
        this.counteroffer = [];
        this.counterofferkey = [];
        this.stop = true;
        this.Hideitem = false;
        this.relistTime = true;
        ///////////// End /////////////////
        this.list_item = [
            { value: 'Item is out of stock', viewValue: 'Item is out of stock' },
            { value: 'I will re-list later', viewValue: 'I will re-list later' },
            { value: 'I am not interested to sell', viewValue: 'I am not interested to sell' },
            { value: 'Item is no longer available', viewValue: 'Item is no longer available' },
            { value: 'Not recieving desired bids/offers', viewValue: 'Not recieving desired bids/offers' },
            { value: 'Others', viewValue: 'Others' }
        ];
        this.watch = true;
        this.seller_location = {};
        /////////// end///////////////
        ///////////////////chat/////////////
        this.chat_list = [];
        this.markrating = {};
        this.deviceInfo = null;
        //////////////////////////////////////////////View Offer//////////////////////////////
        this.onRatingChange = function ($event, oid) {
            _this.onRatingChangeResult = $event;
            // console.log('onRatingUpdated $event: ', this.onRatingChangeResult.rating, oid);
            _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid + '/orders/' + oid).update({
                rating: _this.onRatingChangeResult.rating.toString()
            }).then(function (success) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("Rating", "Thanks for sharing your valuable experience with us.", "success");
                var user_refer = _this.db.object('users/' + oid);
                user_refer.$ref.transaction(function (user) {
                    if (user != null) {
                        var averageRating = user["averagerating"];
                        var totalRating = user["totalratings"];
                        // console.log("transaction", user, averageRating, totalRating)
                        var newAvgrate = ((Number(averageRating) * Number(totalRating)) + (Number(_this.onRatingChangeResult.rating))) / (Number(totalRating) + 1);
                        var newTotrate = Number(totalRating) + 1;
                        user["averagerating"] = newAvgrate.toString();
                        user["totalratings"] = newTotrate.toString();
                        // console.log("trnew rating", newAvgrate, newTotrate)
                    }
                    return user ? user : 1;
                });
            });
        };
    }
    SingleProductComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        // console.log(this.deviceInfo);
    };
    SingleProductComponent.prototype.initilize = function () {
        this.seller_location = {};
        this.sell_location_short_name = '';
        this.sell_location_full_name = '';
        this.buyer_location_id = '';
        this.watch = true;
        this.relistTime = true;
        this.listget = '';
        this.listindex = '';
        this.stop = true;
        this.stop_orders = false;
        this.Hideitem = false;
        this.offer = false;
        this.bid = false;
        this.offerbid = false;
        this.prod_bid = [];
        this.bid_user = {};
        this.prodinfo = [];
        this.catRecord = [];
        this.auctionRecord = [];
        this.stateRecord = [];
        this.sellingkey = [];
        this.userproduct = [];
        this.json_img = {
            small: '',
            medium: '',
            big: ''
        };
        this.sliderimages = [];
        this.product_price = '';
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.product_price = '';
        this.quantity = '';
        this.endTime = 0;
        this.currentTime = 0;
        this.finaltime = 0;
        this.Timeclose = false;
        this.pid = '';
        this.counteroffer = [];
        this.counterofferkey = [];
    };
    SingleProductComponent.prototype.timerFunction = function (endTime) {
        this.finaltime = Number(endTime) - new Date().getTime();
        var time = new __WEBPACK_IMPORTED_MODULE_12__timer__["a" /* TimePipe */]().transform(this.finaltime / 1000);
        var i = 0;
        var arr = time.split('/');
        while (i < arr.length) {
            if (arr[i].includes('D')) {
                this.days = (arr[i].split(':'))[1];
            }
            else if (arr[i].includes('H')) {
                this.hours = (arr[i].split(':'))[1];
            }
            else if (arr[i].includes('M')) {
                this.minutes = (arr[i].split(':'))[1];
            }
            else if (arr[i].includes('S')) {
                this.seconds = (arr[i].split(':'))[1];
            }
            i += 1;
        }
    };
    SingleProductComponent.prototype.mainFunction = function (catname, auction, state, pid, uid) {
        var _this = this;
        if (this.deviceInfo.device.toLowerCase() == "iphone" || this.deviceInfo.device.toLowerCase() == "ipad") {
            // alert('shopnroar://shopnroar.com/login?name='+id+'&id='+token)
            window.location.href = 'sell4bids://itemDetails?cat=' + catname + '&auction=' + auction + '&state=' + state + '&pid=' + pid + '&uid=' + uid;
        }
        window.scrollTo(0, 0);
        this.initilize();
        this.pid = pid;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                var login_data_1 = {};
                _this.db.object('/users/' + res.uid, { preserveSnapshot: true }).subscribe(function (snapshot) {
                    login_data_1 = snapshot.val();
                    _this.currentname = login_data_1['name'];
                    // alert(this.currentname)
                });
                _this.bootmodel = true;
            }
        });
        var user = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"]().currentUser;
        // let sellproductpush = {};
        this.subscription = this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true }).subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.product[snapshot.key] = snapshot.val();
                // console.log("Product: " + snapshot.val());
            });
            ///////////////////// user profile data //////////////////////////
            _this.userProfile(_this.product['uid']);
            _this.productEndtime = _this.product['endTime'];
            _this.timerFunction(_this.product['endTime']);
            // this.productTimer(this.product['endTime'])
        });
        ////////////////////////// Counter offer /////////////////////////////
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/counterOffers/' + res.uid, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        _this.counterofferkey[snapshot.key] = snapshot.val();
                        // console.log("counter offer", this.counterofferkey);
                    });
                });
            }
        });
        //////////////////////////// End //////////////////////////////////
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.db.list('/users/' + res.uid + '/products/watching/' + pid, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        // console.log("watch items", snapshot.key);
                        _this.watch = false;
                    });
                });
            }
        });
        //////////////////////////////////BID MODULE////////////////////////////////////////////////////////
        //  this.bidHistory();
        ////////////////////////////////END//////////////////////////////////////////////////////////
        /////////////////////////////////////////////////Chat/////////////////////////////////////////
        this.chat();
        //////////////////////////////////////////////// END ///////////////////////////////////////////
        // this.product = (JSON.parse(localStorage.getItem("singleproduct")));
        // this.sliderimages.push(this.json_img);
        /////////////////////////calling slider////////////////////
        this.galleryslider();
        //////////////////////////////End///////////////////////
        this.product_price = this.product['startPrice'];
        this.quantity = this.product['quantity'];
        this.endTime = this.product['endTime'];
        this.currentTime = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.finaltime = parseInt(this.endTime, 10) - new Date().getTime();
        // console.log("gg", this.product);
        // console.log("bid",bid)
        // console.log("time", this.maintime)
        // console.log("child auction   ", this.sg['category'],this.sg['AuctionType'],this.sg['state'],this.sg['uid'])
        if (auction == "buy-it-now") {
            this.offer = true;
        }
        if (auction == "reserve" || auction == "non-reserve") {
            this.bid = true;
        }
        if (auction == "buy-it-now" && this.product['acceptOffers'] == 'yes') {
            this.offerbid = true;
        }
        if (auction == "buy-it-now" && this.product['ordering'] == 'stopped') {
            this.stop_orders = true;
        }
        if (auction == "buy-it-now" && this.product['visibility'] == 'hidden') {
            this.Hideitem = true;
        }
        ///////////// seller location to buyer ///////////////////
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var location_path = void 0;
                if (res && res.uid && auction == "buy-it-now") {
                    location_path = '/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/orders/' + res.uid;
                }
                if (res && res.uid && (auction == "reserve" || auction == "non-reserve")) {
                    location_path = '/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/bids/' + res.uid;
                }
                _this.db.list(location_path, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        _this.seller_location[snapshot.key] = snapshot.val();
                        // console.log("seller", this.seller_location)
                    });
                    if (_this.seller_location['latitude'] && _this.seller_location['longitude']) {
                        _this.seller_latitude = _this.seller_location['latitude'];
                        _this.seller_longitude = _this.seller_location['longitude'];
                        _this.local_str = _this.seller_location['address'];
                        // console.log(this.local_str)
                    }
                    else {
                        _this._ps.location(_this.product['city']).subscribe(function (Response) {
                            _this.location = Response;
                            _this.latitude = _this.location.results[0].geometry.location.lat;
                            _this.latitude = _this.location.results[0].geometry.location.lat;
                            _this.longitude = _this.location.results[0].geometry.location.lng;
                        });
                    }
                });
            }
            else {
                _this._ps.location(_this.product['city']).subscribe(function (Response) {
                    _this.location = Response;
                    _this.latitude = _this.location.results[0].geometry.location.lat;
                    _this.latitude = _this.location.results[0].geometry.location.lat;
                    _this.longitude = _this.location.results[0].geometry.location.lng;
                });
            }
        });
        ///////////////// end /////////////////////////////
        this.boughtprice = this.product['startPrice'];
        // console.log("product",this.product);
        this.userkey = this.product['uid'];
        ////////////////////////END/////////////////////////////////////////
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                // this.currentname = res.displayName
                // console.log(this.currentUser, this.currentname)
            }
        });
    };
    SingleProductComponent.prototype.sweet = function () {
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
    SingleProductComponent.prototype.buyerPaid = function (oid) {
        var mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid);
        mark.$ref.update({
            buyer_marked_paid: "yes",
        });
    };
    SingleProductComponent.prototype.buyerUnPaid = function (oid) {
        var mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid);
        mark.$ref.update({
            buyer_marked_paid: "no",
        });
    };
    SingleProductComponent.prototype.markRating = function (catname, auction, state, pid) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/ratings/' + res.uid, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        _this.markrating[snapshot.key] = snapshot.val();
                    });
                    // console.log("rating", this.markrating)
                });
            }
        });
    };
    SingleProductComponent.prototype.productSlider = function (catname, auction, state, pid) {
        var _this = this;
        var slider = {};
        this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.galleryImages = [];
            snapshots.forEach(function (snapshot) {
                slider[snapshot.key] = snapshot.val();
            });
            for (var i = 0; i < slider['imagesCount']; i++) {
                var val = void 0;
                if (i == 0) {
                    // console.log('imagee', i, slider['image0'])
                    if (slider['image0'] != undefined && slider['image1'] != undefined) {
                        _this.galleryImages.push({
                            small: slider['image0'],
                            medium: slider['image0'],
                            big: slider['image0']
                        });
                    }
                    else if (slider['image0'] == undefined && slider['image1'] == undefined || slider['image0'] == null && slider['image1'] == null) {
                        _this.galleryImages.push({
                            small: '../../assets/img/Placeholder/Placeholder-Small(Transparent).png',
                            medium: '../../assets/img/Placeholder/Placeholder(Transparent).png',
                            big: '../../assets/img/Placeholder/Placeholder512.png'
                        });
                    }
                    else {
                        $('ngx-gallery-image').css('height', '100%');
                        _this.galleryImages.push({
                            small: '',
                            medium: slider['image0'],
                            big: slider['image0']
                        });
                    }
                    // console.log("json1", this.json_img)
                }
                else if (i == 1) {
                    if (slider['image1'] != undefined) {
                        _this.galleryImages.push({
                            small: slider['image1'],
                            medium: slider['image1'],
                            big: slider['image1']
                        });
                    }
                    // console.log("json2", this.json_img)
                }
                else if (i == 2) {
                    if (slider['image2'] != undefined) {
                        _this.galleryImages.push({
                            small: slider['image2'],
                            medium: slider['image2'],
                            big: slider['image2']
                        });
                    }
                }
                else if (i == 3) {
                    if (slider['image3'] != undefined) {
                        _this.galleryImages.push({
                            small: slider['image3'],
                            medium: slider['image3'],
                            big: slider['image3']
                        });
                    }
                }
                else if (i == 4) {
                    if (slider['image4'] != undefined) {
                        _this.galleryImages.push({
                            small: slider['image4'],
                            medium: slider['image4'],
                            big: slider['image4']
                        });
                    }
                }
            }
            // console.log("sliddddddddddddddddddddddddddddddddd", this.galleryImages)
        });
    };
    SingleProductComponent.prototype.productTimer = function (endTime) {
        var _this = this;
        // console.log("endtime", endTime)
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.days = 0;
        this.currentTime = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP;
        this.finaltime = parseInt(endTime, 10) - new Date().getTime();
        var x = this.finaltime / 1000;
        this.seconds = Math.floor(x % 60);
        x /= 60;
        this.minutes = Math.floor(x % 60);
        x /= 60;
        this.hours = Math.floor(x % 24);
        x /= 24;
        this.days = Math.floor(x);
        // console.log("final", this.finaltime);
        setInterval(function () {
            _this.timer(_this.element);
        }, 1000);
        // console.log("secondssssssssssssss", this.seconds)
    };
    SingleProductComponent.prototype.userProfile = function (uid) {
        var _this = this;
        // alert(uid)
        this.db.list('/users/' + uid, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.prof_dict[snapshot.key] = snapshot.val();
            });
            // this.currentname = this.prof_dict['name']
            // console.log("jony",this.prof_dict);
        });
        //////////////////////////////END////////////////////////////////
        ///////////////////////user selling product/////////////////////
        this.db.list('/users/' + uid + '/products/selling', { preserveSnapshot: true })
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
            // console.log("selling key", this.sellingkey);
            for (var i = 0; i < _this.userproduct.length; i++) {
                _loop_1(i);
            }
        });
    };
    SingleProductComponent.prototype.bidHistory = function (catname, auction, state, pid) {
        var _this = this;
        this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/' + 'bids', { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            _this.prod_bid = [];
            snapshots.forEach(function (snapshot) {
                // console.log("snap", snapshot.val());
                if (snapshot.key == "maxBid" || snapshot.key == "startPrice" || snapshot.key == "winner") {
                    _this.bid_user[snapshot.key] = snapshot.val();
                }
                if (snapshot.val()['name'] != undefined && snapshot.val()['bid'] != undefined && snapshot.key != "maxBid" && snapshot.key != "winner") {
                    _this.prod_bid.push({
                        uid: snapshot.key,
                        name: snapshot.val()['name'],
                        address: snapshot.val()['address'],
                        latitude: snapshot.val()['latitude'],
                        longitude: snapshot.val()['longitude'],
                        bid: Number(snapshot.val()['bid'])
                    });
                }
                // console.log("bids user", this.bid_user);
                // console.log("bidssssssssss", this.prod_bid);
            });
        });
    };
    SingleProductComponent.prototype.singleperson = function (info, id) {
        // console.log("userinfo", info, id)
        this.userinfo = info;
        localStorage.setItem("userinfo", JSON.stringify(this.userkey));
        var url = 'user/' + id + '/' + info.name;
        url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
        this._nav.navigate([url]);
        // console.log("userkey", this.userkey);
    };
    SingleProductComponent.prototype.singleproduct = function (sell, cat, auction, state, pid) {
        //      this.initilize()
        //    console.log("click function");
        //    console.log("sell ",sell,cat,auction,state,pid);
        //    this.catname = cat;
        //    this.auction = auction;
        //    this.state = state;
        //    this.pid = pid;
        //    if(this.auction == "buy-it-now"){
        //     this.offer = true;
        //  }
        //  if(this.auction == "reserve" || this.auction == "non-reserve"){
        //    this.bid = true;
        //  }
        //  if(this.auction == "buy-it-now" && this.product.acceptOffers == 'yes'){
        //   this.offerbid = true;
        //  }   localStorage.setItem("singleproduct",JSON.stringify(sell));
        //    let url = 'item/'+pid+'/'+sell.title;
        //    url=url.replace(/&/g,'and').replace(/\s+/g, '-').toLowerCase();
        //    this._nav.navigate([url]);
        //    console.log("set",sell);
        //    this.product = sell;
        //    ////////////////////////////////////////////////// BID HISTORY //////////////////////////////////////////////////
        //    for(let bidname in this.product.bids){
        //     this.bid_user.push(bidname)
        //    if(this.product.bids[bidname]['bid'] != undefined && this.product.bids[bidname]['name'] != undefined){
        //     this.prod_bid.push({
        //       bid:Number(this.product.bids[bidname]['bid']),
        //       name:this.product.bids[bidname]['name'],
        //     });
        //    }
        //   }
        // //////////////////////////////////////////////////////END ///////////////////////////////////////////////////////////////
        //    //this.product = (JSON.parse(localStorage.getItem("singleproduct")));
        //    this._ps.location(this.product.city).subscribe(Response => { this.location = Response;    this.latitude=this.location.results[0].geometry.location.lat;
        //       this.latitude=this.location.results[0].geometry.location.lat;
        //       this.longitude=this.location.results[0].geometry.location.lng;
        //    });
        //    this.boughtprice = this.product.startPrice
        //    /////////////////////////calling slider////////////////////
        //    this.galleryslider();
        //    //////////////////////////////End///////////////////////
        //    this.product_arr = []
        //    for(let i = 0; i<this.product.imagesCount;i++){
        //     let val;
        //     if(i == 0){
        //       console.log('imagee',i, this.product.image0)
        //       this.galleryImages.push({
        //         small: this.product.image0,
        //         medium: this.product.image0,
        //         big: this.product.image0
        //       })
        //       console.log("json1",this.json_img)
        //      }
        //     else if(i == 1){
        //       this.galleryImages.push({
        //         small: this.product.image1,
        //         medium: this.product.image1,
        //         big: this.product.image1
        //       })
        //       console.log("json2",this.json_img)
        //    }
        //    else if(i == 2){
        //     this.galleryImages.push({
        //       small: this.product.image2,
        //       medium: this.product.image2,
        //       big: this.product.image2
        //     })
        //     }
        //    else if(i == 3){
        //     this.galleryImages.push({
        //       small: this.product.image3,
        //       medium: this.product.image3,
        //       big: this.product.image3
        //     })
        //    }
        //    else if(i == 4){
        //     this.galleryImages.push({
        //       small: this.product.image4,
        //       medium: this.product.image4,
        //       big: this.product.image4
        //     })
        //    }
        //    }
        //    //console.log(this.product_arr)
        //    window.scrollTo(0,0);
    };
    SingleProductComponent.prototype.bidding = function (b) {
        var _this = this;
        if (b.valid == true) {
            // console.log(Number(this.model.price));
            if (this.endTime - new Date().getTime() > 0 || this.endTime == -1) {
                if (Number(this.model.price) > this.product_price) {
                    this.reference = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids/' + this.currentUser);
                    var bidrefer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids');
                    var product_refer_1 = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid);
                    bidrefer.$ref.transaction(function (bid) {
                        // console.log("transaction", bid)
                        var maxBid = bid['maxBid'];
                        var startPrice = bid['startPrice'];
                        var winner = bid['winner'];
                        // console.log("price", Number(this.model.price), "maxBid", maxBid, "startPrice", startPrice, "winner", winner);
                        if (Number(_this.model.price) < startPrice) {
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid again.', 'Bid amountmust be greater than $' + startPrice, 'success');
                        }
                        else {
                            ///first case///
                            bid[_this.currentUser] = { bid: Number(_this.model.price).toString(), name: _this.currentname };
                            if (maxBid == 0) {
                                // bid.set({
                                // maxBid : maxBid
                                // })
                                bid["maxBid"] = Number(_this.model.price).toString();
                                bid["winner"] = _this.currentUser;
                                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Your bid amount is placed successfully', 'Currently you are highest bidder', 'success');
                                return bid ? bid : 1;
                            }
                            else if (Number(_this.model.price) > maxBid) {
                                if (winner == _this.currentUser) {
                                    bid["maxBid"] = Number(_this.model.price).toString();
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid Increased', 'Your bid amount is increased successfully. ', 'success');
                                }
                                else {
                                    bid["maxBid"] = Number(_this.model.price).toString();
                                    /////////2nd highest +1 rule///////////
                                    // console.log("2nd", parseInt(maxBid) + 1);
                                    var rule = parseInt(maxBid) + 1;
                                    bid["startPrice"] = rule.toString();
                                    // product_refer["startPrice"] = rule.toString()
                                    product_refer_1.update({
                                        startPrice: rule.toString(),
                                    });
                                    bid["winner"] = _this.currentUser;
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Your bid is placed successfully.', 'Currently you are highest bidder. ', 'success');
                                }
                                return bid ? bid : 1;
                            }
                            else if (Number(_this.model.price) < maxBid) {
                                if (winner == _this.currentUser) {
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('All user can\'t decreased their bid.', 'You are currently highest bidder, we will buy this item for you at least possible price (only $1 more than second highest bid). ', 'success');
                                }
                                else {
                                    var rule = parseInt(_this.model.price) + 1;
                                    bid["startPrice"] = rule.toString();
                                    // product_refer["startPrice"] = Number(Number(this.model.price)) + 1
                                    product_refer_1.update({
                                        startPrice: rule.toString(),
                                    });
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid placed. ', 'Your bid was placed but you are down bid. Please increase your bid by bidding again. ', 'warning');
                                }
                                return bid ? bid : 1;
                            }
                            else if (Number(_this.model.price) == maxBid) {
                                if (winner == _this.currentUser) {
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid placed.', 'Your bid amount is equal to your previous value. you can increase your bid by entering larger value', 'warning');
                                }
                                else {
                                    bid["startPrice"] = maxBid.toString();
                                    // product_refer["startPrice"].set(maxBid);
                                    product_refer_1.update({
                                        startPrice: maxBid.toString(),
                                    });
                                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid placed.', 'Your bid amount is equal to winner Sell4Bids follow first-come first-serve in cases like this. Please increase your bid by bidding again. ', 'warning');
                                }
                                return bid ? bid : 1;
                            }
                        }
                    });
                    this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
                        auctionType: this.auction,
                        category: this.catname,
                        state: this.state
                    });
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bid Again', 'Bid amount must be greater than $' + this.product_price, 'warning');
                }
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Bidding is already stopped', '', 'warning');
            }
        }
    };
    SingleProductComponent.prototype.placeOrder = function (userQuantity, userPrice) {
        // console.log(firebase.database.ServerValue.TIMESTAMP);
        if ((this.endTime - new Date().getTime() > 0 || this.endTime == -1) && this.product['ordering'] != 'stopped') {
            // console.log("junaid1");
            if (Number(this.quantity) == 0) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'This item is currently out of stock. You can add it to watch-list, we will let you know when it\'s available in stock.', 'warning');
            }
            else if (Number(userQuantity) <= 0) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'Please enter a valid quantity.', 'warning');
            }
            else if (Number(userQuantity) > Number(this.quantity)) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'Not enough stock available', 'warning');
            }
            else if (Number(userQuantity) <= Number(this.quantity)) {
                // console.log("junaid2");
                this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.currentUser).update({
                    boughtPrice: userPrice.toString(),
                    boughtQuantity: userQuantity.toString(),
                    name: this.currentname,
                    uid: this.currentUser
                });
                this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
                    boughtPrice: userPrice.toString(),
                    boughtQuantity: userQuantity.toString(),
                    auctionType: this.auction,
                    category: this.catname,
                    state: this.state
                });
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'Your Buy Now order has been placed. Please wait for the seller to respond. You can also send him a personal message for more details about pickup/delivery.', 'success');
            }
        }
        else {
            // console.log("junaid4");
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Ordering is already stopped', '', 'warning');
        }
    };
    SingleProductComponent.prototype.buynow = function (f) {
        // console.log("form value", this.model.quantity);
        // console.log("product value", this.quantity);
        if (f.valid == true) {
            this.placeOrder(Number(this.model.quantity), Number(this.boughtprice));
        }
    };
    //////////////////////// Offer Bid/////////////////////////////
    SingleProductComponent.prototype.offersbid = function (sf) {
        if (sf.valid == true) {
            // console.log(this.model.quantity, Number(this.model.price))
            this.placeOrder(Number(this.model.quantity), Number(this.model.price));
        }
    };
    SingleProductComponent.prototype.galleryslider = function () {
        this.galleryOptions = [
            {
                width: '845px',
                // height: '600px',
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_10_ngx_gallery__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
        this.galleryImages = [];
    };
    SingleProductComponent.prototype.onLocation = function (event) {
        // console.log(event)
    };
    SingleProductComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(1000).takeWhile(function () { return true; }).subscribe(function () { return _this.timerFunction(_this.productEndtime); });
    };
    SingleProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.epicFunction();
        this._shareData.returnNoti().subscribe(function (data) {
            // this.catname = data.cat;
            _this.auction = data.auction;
            _this.state = data.state;
            _this.pid = data.pid;
            _this.uid = data.uid;
            // console.log("path", data, data.auction)
            // this.mainFunction(this.catname, this.auction, this.state, this.pid)
            // this.bidHistory(this.catname, this.auction, this.state, this.pid)
            // this.viewOffer(this.catname, this.auction, this.state, this.pid, this.uid)
            _this.route.queryParams
                .subscribe(function (params) {
                // console.log("query", params)
                _this.catname = params.cat;
                _this.auction = params.auction;
                _this.state = params.state;
                _this.pid = params.pid;
                _this.uid = params.uid;
            });
            _this.mainFunction(_this.catname, _this.auction, _this.state, _this.pid, _this.uid);
            _this.productSlider(_this.catname, _this.auction, _this.state, _this.pid);
            _this.bidHistory(_this.catname, _this.auction, _this.state, _this.pid);
            _this.viewOffer(_this.catname, _this.auction, _this.state, _this.pid);
            _this.markRating(_this.catname, _this.auction, _this.state, _this.pid);
        });
        window.scrollTo(0, 0);
        $(function () {
            $(".left-first-section").click(function () {
                $('.main-section').toggleClass("open-more");
            });
        });
        $(document).ready(function () {
            $(".fa-minus").click(function () {
                $('.main-section').toggleClass("open-more");
            });
        });
        $('.CategorySlider').fadeOut(0);
        setTimeout(function () {
            $('.CategorySlider').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 3,
                autoplay: false,
                prevArrow: '<button class="leftRsBanner">&lt;</button>',
                nextArrow: '<button class="rightRsBanner">&lt;</button>',
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 3,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 639,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }, 100);
        $('.CategorySlider').fadeIn(500).delay(200);
    };
    SingleProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SingleProductComponent.prototype.timer = function (element) {
        // console.log("element", HTMLElement)
        //   alert(this.Timeclose)
        this.seconds -= 1;
        if (this.seconds <= 0) {
            this.seconds = 59;
            this.minutes -= 1;
            if (this.minutes <= 0) {
                this.minutes = 59;
                this.hours -= 1;
                if (this.hours <= 0) {
                    this.hours = 23;
                    this.days -= 1;
                    if (this.days <= 0) {
                        this.Timeclose = true;
                        this.seconds = 0;
                        this.minutes = 0;
                        this.hours = 0;
                        this.days = 0;
                    }
                }
            }
        }
    };
    SingleProductComponent.prototype.viewOffer = function (catname, auction, state, pid) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            // if (res.uid == uid) {
            var prodUid;
            var productData = {};
            _this.db.object('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true })
                .subscribe(function (snapshot) {
                productData = snapshot.val();
                prodUid = productData['uid'];
                if (res.uid == prodUid) {
                    _this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/' + 'orders', {
                        query: {
                            orderByChild: 'boughtPrice'
                        }
                    }).subscribe(function (items) {
                        _this.viewoffer = items;
                        // console.info("viewoffer", this.viewoffer);
                    });
                }
            });
        });
    };
    SingleProductComponent.prototype.accept = function (oid, oQuantity, orderprice) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var product_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
                product_refer.$ref.transaction(function (product) {
                    var P_quantity = product["quantity"];
                    // console.log("transaction", product.orders[oid], oid, P_quantity, oQuantity)
                    if (Number(P_quantity) >= Number(oQuantity)) {
                        product["quantity"] = (Number(P_quantity) - Number(oQuantity)).toString();
                        var num = 0;
                        product.orders[oid]["rating"] = num.toString();
                        if (product.ratings == undefined) {
                            product["ratings"] = (_a = {}, _a[oid] = { rating: num.toString(), sellerid: res.uid }, _a);
                        }
                        else {
                            product.ratings[oid] = { rating: num.toString(), sellerid: res.uid };
                        }
                        // this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/'+oid).update({
                        //   rating: "0"
                        // })
                        return product ? product : 1;
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("Buy Now", "Error in accepting order,quantity in stock is less then quantity required in order. Please increase the stock quantity first", "warning");
                    }
                    var _a;
                }).then(function (success) {
                    var user_bought_refer = _this.db.object('users/' + oid + '/products/bought/' + _this.pid);
                    var user_buying_refer = _this.db.object('users/' + oid + '/products/buying/' + _this.pid);
                    var unmark = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid + '/orders/' + oid);
                    unmark.$ref.update({
                        seller_marked_paid: "no",
                    });
                    user_bought_refer.set({
                        boughtPrice: orderprice.toString(),
                        boughtQuantity: oQuantity.toString(),
                        auctionType: _this.auction.toString(),
                        category: _this.catname.toString(),
                        state: _this.state.toString()
                    });
                    ////////////////////////Product remove user buying node//////////
                    user_buying_refer.remove();
                    ///////////////////////////////////End//////////////////////////
                }).catch(function (error) {
                });
            }
        });
    };
    SingleProductComponent.prototype.reject = function (oid) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: "Are you sure that you want to reject this order?",
            text: "",
        })
            .then(function (willDelete) {
            if (willDelete) {
                _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid + '/orders/' + oid).remove();
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("Offer rejected", "", "success");
            }
        });
    };
    SingleProductComponent.prototype.rating = function (oid) {
        var _this = this;
        // console.log(this.starsCount);
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: "Are you sure that you want to rate this order?",
            text: "",
        })
            .then(function (willDelete) {
            if (willDelete) {
                _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid + '/orders/' + oid).update({
                    rating: _this.starsCount.toString(),
                });
            }
        });
    };
    //// seller offer///
    SingleProductComponent.prototype.sellcountid = function (oid) {
        this.countofferid = oid;
        // console.log(this.countofferid)
    };
    SingleProductComponent.prototype.sellerCounteroffer = function () {
        var _this = this;
        // console.log(Number(this.model.quantity), Number(this.model.price))
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                if (Number(_this.quantity) == 0) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'This item is currently out of stock.', 'warning');
                }
                else if (Number(_this.model.quantityy) <= 0) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'Please enter a valid quantity.', 'warning');
                }
                else if (Number(_this.model.quantity) > Number(_this.quantity)) {
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Buy Now', 'Not enough stock available', 'warning');
                }
                else if (Number(_this.model.quantity) <= Number(_this.quantity)) {
                    var counter_offer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
                    counter_offer.$ref.transaction(function (counter) {
                        if (counter.counterOffers == undefined) {
                            var num = 1;
                            counter["counterOffers"] = (_a = {}, _a[_this.countofferid] = { counterOfferCount: num.toString(), quantity: _this.model.quantity.toString(), pricePerItem: _this.model.price.toString(), b_id: [_this.countofferid].toString() }, _a);
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Counter offer (1/5) sent to buyer', 'success');
                        }
                        else if (counter.counterOffers[_this.countofferid] == undefined) {
                            var num = 1;
                            counter["counterOffers"][_this.countofferid] = { counterOfferCount: num.toString(), quantity: _this.model.quantity.toString(), pricePerItem: _this.model.price.toString(), b_id: [_this.countofferid].toString() };
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Counter offer (1/5) sent to buyer', 'success');
                        }
                        else if (Number(counter.counterOffers[_this.countofferid]["counterOfferCount"]) == 5) {
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Yuou have already sent 5 counter offers', 'info');
                        }
                        else if (Number(counter.counterOffers[_this.countofferid]["counterOfferCount"]) < 5) {
                            var current_counter = Number(counter.counterOffers[_this.countofferid]["counterOfferCount"]);
                            current_counter += 1;
                            counter.counterOffers[_this.countofferid] = { counterOfferCount: current_counter.toString(), quantity: _this.model.quantity.toString(), pricePerItem: _this.model.price.toString(), b_id: [_this.countofferid].toString() };
                            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Counter offer (' + current_counter + '/5) sent to buyer', 'success');
                        }
                        // console.log("counter", counter)
                        return counter ? counter : 1;
                        var _a;
                    });
                }
            }
        });
    };
    SingleProductComponent.prototype.buyerStar = function ($event) {
        this.onRatingChangeResult = $event;
    };
    SingleProductComponent.prototype.buyerRating = function (oid, sid) {
        var _this = this;
        // console.log(oid, sid, this.onRatingChangeResult.rating)
        this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/ratings/' + oid).update({
            rating: this.onRatingChangeResult.rating.toString()
        }).then(function (success) {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()("Rating", "Thanks for sharing your valuable experience with us.", "success");
            var user_refer = _this.db.object('users/' + sid);
            user_refer.$ref.transaction(function (user) {
                if (user != null) {
                    var averageRating = user["averagerating"];
                    var totalRating = user["totalratings"];
                    // console.log("transaction", user, averageRating, totalRating)
                    var newAvgrate = ((Number(averageRating) * Number(totalRating)) + (Number(_this.onRatingChangeResult.rating))) / (Number(totalRating) + 1);
                    var newTotrate = Number(totalRating) + 1;
                    user["averagerating"] = newAvgrate.toString();
                    user["totalratings"] = newTotrate.toString();
                    // console.log("trnew rating", newAvgrate, newTotrate)
                }
                return user ? user : 1;
            });
        });
    };
    SingleProductComponent.prototype.counterofferid = function (cid) {
        var _this = this;
        // console.log("cid", cid);
        this.db.list('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + cid, { preserveSnapshot: true })
            .subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.counteroffer[snapshot.key] = snapshot.val();
                // console.log("counter offer", this.counteroffer);
            });
        });
    };
    SingleProductComponent.prototype.buyerReject = function (bid) {
        var buyer_offer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + bid);
        buyer_offer.$ref.child('pricePerItem').remove();
        buyer_offer.$ref.child('quantity').remove();
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Counter offer rejected', 'success');
    };
    SingleProductComponent.prototype.buyerAccept = function (oid, oQuantity, orderprice) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var product_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
                product_refer.$ref.transaction(function (product) {
                    var P_quantity = product["quantity"];
                    // console.log("transaction", product.orders[oid], oid, P_quantity, oQuantity)
                    product["quantity"] = (Number(P_quantity) - Number(oQuantity)).toString();
                    var num = 0;
                    var str = "Counter offer accepted ";
                    product.orders[oid]["rating"] = num.toString();
                    product.orders[oid]["boughtPrice"] = orderprice.toString();
                    product.orders[oid]["boughtQuantity"] = oQuantity.toString();
                    product.orders[oid]["note"] = str.toString();
                    if (product.ratings == undefined) {
                        product["ratings"] = (_a = {}, _a[oid] = { rating: num.toString(), sellerid: res.uid }, _a);
                    }
                    else {
                        product.ratings[oid] = { rating: num.toString(), sellerid: res.uid };
                    }
                    return product ? product : 1;
                    var _a;
                }).then(function (success) {
                    _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid + '/counterOffers/' + oid).remove();
                    var user_bought_refer = _this.db.object('users/' + oid + '/products/bought/' + _this.pid);
                    var user_buying_refer = _this.db.object('users/' + oid + '/products/buying/' + _this.pid);
                    user_bought_refer.set({
                        boughtPrice: orderprice.toString(),
                        boughtQuantity: oQuantity.toString(),
                        auctionType: _this.auction.toString(),
                        category: _this.catname.toString(),
                        state: _this.state.toString()
                    });
                    ////////////////////////Product remove user buying node//////////
                    user_buying_refer.remove();
                    ///////////////////////////////////End//////////////////////////
                }).catch(function (error) {
                });
            }
        });
    };
    SingleProductComponent.prototype.buyercountid = function (oid) {
        this.buyercountofferid = oid;
        // console.log(this.buyercountofferid)
    };
    SingleProductComponent.prototype.buyerCounteroffer = function () {
        // console.log(Number(this.model.quantity), Number(this.model.price), this.buyercountofferid)
        var buyer_offer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + this.buyercountofferid);
        var buyer_order = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.buyercountofferid);
        buyer_order.update({
            boughtPrice: this.model.price.toString(),
            boughtQuantity: this.model.quantity.toString()
        });
        buyer_offer.$ref.child('pricePerItem').remove();
        buyer_offer.$ref.child('quantity').remove();
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Counter Offer', 'Buyer counter offer send', 'success');
    };
    SingleProductComponent.prototype.shareLocation = function (lid) {
        var _this = this;
        // console.log(lid)
        this.buyer_location_id = lid;
        // $('#location').css('display', 'block');
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                // console.log(pos);
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                _this._ps.locationShare(_this.lat, _this.lng).subscribe(function (data) {
                    _this.selllocation = data;
                    _this.sell_location_full_name = _this.selllocation.results[0].formatted_address;
                    _this.sell_location_short_name = _this.selllocation.results[0].address_components[1].short_name;
                    // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
                });
            });
        }
    };
    SingleProductComponent.prototype.updateLocation = function (lid, lat, long) {
        var _this = this;
        // console.log(lid, lat, long)
        this.buyer_location_id = lid;
        this.lng = long;
        this.lat = lat;
        this._ps.locationShare(this.lat, this.lng).subscribe(function (data) {
            _this.selllocation = data;
            _this.sell_location_full_name = _this.selllocation.results[0].formatted_address;
            _this.sell_location_short_name = _this.selllocation.results[0].address_components[1].short_name;
            // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
        });
    };
    SingleProductComponent.prototype.markPaid = function (oid) {
        // console.log(oid);
        var mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid);
        mark.$ref.update({
            seller_marked_paid: "yes",
        });
    };
    SingleProductComponent.prototype.unmarkPaid = function (oid) {
        // console.log(oid);
        var unmark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid);
        unmark.$ref.update({
            seller_marked_paid: "no",
        });
    };
    SingleProductComponent.prototype.placeMarker = function ($event) {
        var _this = this;
        // console.log($event, navigator)
        this.lng = $event.coords.lng;
        this.lat = $event.coords.lat;
        this._ps.locationShare(this.lat, this.lng).subscribe(function (data) {
            _this.selllocation = data;
            _this.sell_location_full_name = _this.selllocation.results[0].formatted_address;
            _this.sell_location_short_name = _this.selllocation.results[0].address_components[1].short_name;
            // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
        });
        // console.log($event.coords.lat);
        // console.log($event.coords.lng);
    };
    SingleProductComponent.prototype.sellerLocation = function () {
        var ary = {
            latitude: this.lat,
            longitude: this.lng
        };
        var location = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.buyer_location_id);
        location.$ref.update({
            address: this.sell_location_full_name,
            latitude: this.lat,
            longitude: this.lng,
        }).then(function (success) {
            $('#location').css('display', 'none');
            $('.modal-backdrop.in').css('opacity', 0);
            $('.modal-backdrop.in').css('display', 'none');
            $('body').removeClass('modal-open');
            $('body').css('padding-right', 17);
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Share Location', 'Location shared with buyer successfully.', 'success');
        });
    };
    SingleProductComponent.prototype.bidSellerLocation = function () {
        var location = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids/' + this.buyer_location_id);
        location.$ref.update({
            address: this.sell_location_full_name,
            latitude: this.lat,
            longitude: this.lng,
        }).then(function (success) {
            $('#bidSellerlocation').css('display', 'none');
            $('.modal-backdrop.in').css('opacity', 0);
            $('.modal-backdrop.in').css('display', 'none');
            $('body').removeClass('modal-open');
            $('body').css('padding-right', 17);
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Share Location', 'Location shared with buyer successfully.', 'success');
        });
    };
    ////////////////////////////////////////////////END//////////////////////////////////
    //////////////////// Stock Quantity & stop offer & stop orders & get orders & Hide item & Show item  & end list///////////////////////////
    SingleProductComponent.prototype.stockQuantity = function () {
        var stock_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid);
        stock_refer.update({
            quantity: this.model.quantity.toString()
        });
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Stock Quantity', 'Quantity in stock , set to ' + this.model.quantity + ' successfully', 'success');
    };
    SingleProductComponent.prototype.stopoffers = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Offers',
            text: "Buyers will not be able to send you offers on different amount per item",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            var stop_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            stop_refer.$ref.child('acceptOffers').remove().then(function (success) {
                _this.stop = false;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Offers', 'Buyers will view your item send offers on price per item set you during listing ($1).', 'success');
            });
        });
    };
    SingleProductComponent.prototype.sellerAcceptoffers = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Offers',
            text: "Buyers will not be able to send you offers on different amount per item",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            var accept_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            accept_refer.update({
                'acceptOffers': "yes"
            }).then(function (success) {
                _this.stop = true;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Offers', 'Buyers will view your item and send you offers on amount per item they willing to busy', 'success');
            });
        });
    };
    SingleProductComponent.prototype.stoporders = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Ordering',
            text: "Are you sure you want to stop receiving new orders from buyer on this item?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            var order_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            order_refer.update({
                'ordering': "stopped"
            }).then(function (success) {
                _this.stop_orders = true;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Ordering', 'Buyers will not be able to send offers to you. You can continue receiving new offers by clicking " Get New Orders " button, anytime. ', 'success');
            });
        });
    };
    SingleProductComponent.prototype.getorders = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Ordering',
            text: "Get new orders from buyer on this item?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            var order_refer = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            order_refer.$ref.child('ordering').remove().then(function (success) {
                _this.stop_orders = false;
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Ordering', 'Buyers will view your item and send you offers. ', 'success');
            });
        });
    };
    SingleProductComponent.prototype.hideitem = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Item visibility setting',
            text: "Hide : Item will be hidden from new viewers in search results but will appear to old viewers, like in Watch list",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Hide'
        }).then(function (result) {
            var hide_item = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            hide_item.update({
                'visibility': "hidden"
            }).then(function (success) {
                _this.Hideitem = true;
            });
        });
    };
    SingleProductComponent.prototype.showitem = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Item visibility setting',
            text: "Show : Item will be visible to new users.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Show'
        }).then(function (result) {
            var show_item = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            show_item.update({
                'visibility': "shown"
            }).then(function (success) {
                _this.Hideitem = false;
            });
        });
    };
    SingleProductComponent.prototype.listItemChange = function (item, index) {
        this.listget = item;
        this.listindex = index;
        // console.log(item, index)
    };
    SingleProductComponent.prototype.endlisting = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: 'Item Listing',
            text: "Are you sure you want to end item listing. You will no receive offer/order on product until you Re-List item",
            type: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            var listing = _this.db.list('endListing/' + _this.pid);
            listing.push({
                'reason': _this.listget.toString(),
                'value': _this.listindex.toString()
            });
            var y = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["database"].ServerValue.TIMESTAMP;
            var end_list = _this.db.object('products/' + _this.catname + '/' + _this.auction + '/' + _this.state + '/' + _this.pid);
            end_list.update({
                'endTime': y
            });
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Item Listing', 'Item listing is ended successfully. You can re-list item by clicking "Re-List Item" button below.', 'success');
            _this.relistTime = false;
        });
    };
    SingleProductComponent.prototype.reListItem = function () {
        // console.log(this.model.price, this.model.listingTime)
        // let  y = firebase.database.ServerValue.TIMESTAMP;
        var y = new Date().getTime() + parseInt(this.model.listingTime, 10);
        var re_list = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid);
        re_list.update({
            'endTime': y,
            'startPrice': this.model.price.toString()
        });
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Re-Listed', 'Listing time is increased successfully.', 'success');
        this.relistTime = true;
    };
    SingleProductComponent.prototype.watchlist = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var watch_list = _this.db.object('users/' + res.uid + '/products/watching/' + _this.pid);
                watch_list.set({
                    'auction': _this.auction.toString(),
                    'category': _this.catname.toString(),
                    'endTime': parseInt(_this.product['endTime'], 10),
                    'city': _this.product['city'].toString(),
                    'state': _this.state.toString(),
                    'key': _this.pid.toString()
                }).then(function (success) {
                    _this.watch = false;
                    __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('MySell4Bids Watch List', 'Item has been added to MySell4Bids Watch List', 'success');
                });
            }
        });
    };
    SingleProductComponent.prototype.removeWatchlist = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
                    title: 'MySell4Bids Watch List',
                    text: "Are you sure you want to unwatch this item?",
                    type: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'UN-WATCH'
                }).then(function (result) {
                    var unwatch_list = _this.db.object('users/' + res.uid + '/products/watching/' + _this.pid);
                    unwatch_list.remove();
                    _this.watch = true;
                });
            }
        });
    };
    ////////////////// end /////////////////////////////////
    ////////////////////////////////////////JOB OFFER////////////////////////////////////
    SingleProductComponent.prototype.applynow = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()({
            title: "Apply Now?",
            text: "Are you sure you want to apply at " + this.boughtprice + " dollars ?",
            type: "warning",
        })
            .then(function (willDelete) {
            _this.joboffer();
            // if (willDelete) {
            //   swal("Deleted!", "Your imaginary file has been deleted!", "success");
            // }
        });
    };
    SingleProductComponent.prototype.joboffer = function () {
        // console.log("form value", this.model.salary);
        if (this.model.salary) {
            this.boughtprice = this.model.salary;
        }
        // console.log(firebase.database.ServerValue.TIMESTAMP);
        if (this.endTime - new Date().getTime() > 0 || this.endTime == -1) {
            // console.log("junaid1");
            this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.currentUser).update({
                boughtPrice: this.boughtprice,
                boughtQuantity: "1",
                name: this.currentname,
                uid: this.currentUser
            });
            this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
                boughtPrice: this.boughtprice,
                boughtQuantity: "1",
                auctionType: this.auction,
                category: this.catname,
                state: this.state
            });
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Job Now', 'Your apply now offer send', 'success');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()('Ordering is already stopped', '', 'warning');
        }
    };
    ////////////////////////////////////////END/////////////////////////////////////////
    ////////////////////////////// Chat ////////////////////////////////////////////////
    SingleProductComponent.prototype.chatInitiate = function (name, img, token, uid) {
        var _this = this;
        // console.log(name, img, token, uid)
        if (img == undefined) {
            img = "";
        }
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var buyerinfo_1 = {};
                _this.db.list('/users/' + res.uid, { preserveSnapshot: true })
                    .subscribe(function (snapshots) {
                    snapshots.forEach(function (snapshot) {
                        buyerinfo_1[snapshot.key] = snapshot.val();
                    });
                    // console.log("buyer", buyerinfo, buyerinfo['name'], buyerinfo['image'], buyerinfo['token'], buyerinfo['uid'])
                    if (buyerinfo_1['image'] == undefined) {
                        buyerinfo_1['image'] = "";
                    }
                    var time = new Date().getTime();
                    var seller = {
                        name: name.toString(),
                        image: img.toString(),
                        token: token.toString(),
                        uid: uid.toString(),
                        unreadCount: "0",
                        lastMessageTime: time
                    };
                    var spath = _this.db.object('users/' + res.uid + '/chat/' + uid, { preserveSnapshot: true });
                    var bpath = _this.db.object('users/' + uid + '/chat/' + res.uid);
                    spath.subscribe(function (data) {
                        if (data.val() == null) {
                            spath.set(seller).then(function (success) {
                                var buyer = {
                                    name: buyerinfo_1['name'],
                                    image: buyerinfo_1['image'].toString(),
                                    token: buyerinfo_1['token'],
                                    uid: res.uid.toString(),
                                    unreadCount: "0",
                                    lastMessageTime: time
                                };
                                bpath.set(buyer);
                            });
                        }
                        else {
                            // console.log('data exists');
                        }
                    });
                });
            }
        });
        var url = 'chat';
        this._nav.navigate([url], { queryParams: { uid: uid } });
    };
    SingleProductComponent.prototype.chat = function () {
        // this.afAuth.authState.subscribe(res => {
        //   if (res && res.uid && (res.uid != this.product['uid'])) {
        //         // chat_path = '/chat_rooms/'+this.product['uid']+'_'+res.uid ;
        //         let chat_path = '/chat_rooms/'+res.uid+'_'+this.product['uid'] ;
        //     this.db.list(chat_path, {
        //       query: {
        //         orderByChild: 'timestamp'
        //       }
        //     }).subscribe(chat => {
        //    this.chat_list = chat
        //    console.log("chat",this.chat_list)
        //     })
        //   }
        // })
    };
    return SingleProductComponent;
}());
SingleProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-product',
        template: __webpack_require__("../../../../../src/app/single-product/single-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/single-product/single-product.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_13_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__services_shared_service__["a" /* SharedData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_shared_service__["a" /* SharedData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__["SimpleGlobal"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng2_simple_global__["SimpleGlobal"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _j || Object])
], SingleProductComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=single-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/single-product/single-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductModule", function() { return SingleProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/exported-components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__single_product_component__ = __webpack_require__("../../../../../src/app/single-product/single-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__single_product_routing__ = __webpack_require__("../../../../../src/app/single-product/single-product.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_service__ = __webpack_require__("../../../../../src/app/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__ = __webpack_require__("../../../../ng2-sweetalert2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_rating__ = __webpack_require__("../../../../ngx-rating/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ngx_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_star_rating__ = __webpack_require__("../../../../angular-star-rating/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_star_rating___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular_star_rating__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__timer__ = __webpack_require__("../../../../../src/app/single-product/timer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SingleProductModule = (function () {
    function SingleProductModule() {
    }
    return SingleProductModule;
}());
SingleProductModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_13_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_gallery__["NgxGalleryModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_5__single_product_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_rating__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_15_angular_star_rating__["StarRatingModule"],
            __WEBPACK_IMPORTED_MODULE_3__ui_loading_spinner_exported_components_module__["a" /* ExportedComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ng2_carouselamos__["a" /* Ng2CarouselamosModule */],
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
            })
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__single_product_component__["a" /* SingleProductComponent */],
            __WEBPACK_IMPORTED_MODULE_16__timer__["a" /* TimePipe */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_sweetalert2__["SweetAlertService"],
        ]
    })
], SingleProductModule);

//# sourceMappingURL=single-product.module.js.map

/***/ }),

/***/ "../../../../../src/app/single-product/single-product.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__single_product_component__ = __webpack_require__("../../../../../src/app/single-product/single-product.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__single_product_component__["a" /* SingleProductComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=single-product.routing.js.map

/***/ }),

/***/ "../../../../../src/app/single-product/timer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimePipe = (function () {
    function TimePipe() {
        this.times = {
            D: 86400,
            H: 3600,
            M: 60,
            S: 1
        };
    }
    TimePipe.prototype.transform = function (seconds) {
        var time_string = '';
        var plural = '';
        for (var key in this.times) {
            if (Math.floor(seconds / this.times[key]) > 0) {
                time_string += key.toString() + ':' + (Math.floor(seconds / this.times[key]).toString()) + '/';
                seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
            }
        }
        return time_string;
    };
    return TimePipe;
}());
TimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'secondsToTime'
    })
], TimePipe);

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ "../../../../lodash.isequal/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../node_modules/webpack/buildin/global.js"), __webpack_require__("../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../../../ng2-carouselamos/dist/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos__ = __webpack_require__("../../../../ng2-carouselamos/dist/components/ng2-carouselamos/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-carouselamos/dist/components/ng2-carouselamos/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos_component__ = __webpack_require__("../../../../ng2-carouselamos/dist/components/ng2-carouselamos/ng2-carouselamos.component.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-carouselamos/dist/components/ng2-carouselamos/ng2-carouselamos.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2Carouselamos; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var isEqual = __webpack_require__("../../../../lodash.isequal/index.js");
/*
  *
  * @param() items - List of items to belong in carousel
  * @param() width - Size of window(view) to show
  * @param() $prev - Template for previous button
  * @param() $next - Template for next button
  * @param() $item - Template for the item
*/
var Ng2Carouselamos = (function () {
    function Ng2Carouselamos() {
        this.items = [];
        this.width = 500;
        this.onSelectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.childIndex = 0;
        this.amount = 0;
        this.startPress = 0;
        this.lastX = 0;
    }
    Ng2Carouselamos.prototype.onMousedown = function (e) {
        if (e.which === 1) {
            this.startPress = e.clientX;
            this.lastX = this.amount;
        }
    };
    Ng2Carouselamos.prototype.onTouchdown = function (e) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        this.startPress = e.targetTouches[0].clientX;
        this.lastX = this.amount;
    };
    Ng2Carouselamos.prototype.onMousemove = function (e, maxWidth) {
        if (e.which === 1) {
            var amount = this.lastX - (this.startPress - e.clientX);
            if (amount > 0 || amount < -(maxWidth - this.width))
                return;
            this.amount = amount;
        }
    };
    Ng2Carouselamos.prototype.onTouchmove = function (e, maxWidth) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        var amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
        if (amount > 0 || amount < -(maxWidth - this.width))
            return;
        this.amount = amount;
    };
    Ng2Carouselamos.prototype.onMouseup = function (e, elem) {
        if (e.which === 1) {
            this.startPress = 0;
            this.snap(elem);
        }
    };
    Ng2Carouselamos.prototype.onTouchup = function (e, elem) {
        if (navigator.userAgent.indexOf('Android') >= 0)
            e.preventDefault();
        this.startPress = 0;
        this.snap(elem);
    };
    Ng2Carouselamos.prototype.snap = function (elem) {
        var counter = 0;
        var lastVal = 0;
        for (var i = 0; i < this.items.length; i++) {
            var el = elem.children[i];
            var style = el.currentStyle || window.getComputedStyle(el);
            counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
            if (this.amount <= lastVal && this.amount >= -counter) {
                this.amount = -lastVal;
                this.childIndex = i;
                this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: false });
                return;
            }
            lastVal = counter;
        }
        return counter;
    };
    Ng2Carouselamos.prototype.scroll = function (forward, elem) {
        this.childIndex += forward ? 1 : -1;
        this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: false });
        this.amount = -(this.calcScroll(elem));
    };
    Ng2Carouselamos.prototype.calcScroll = function (elem) {
        var counter = 0;
        for (var i = this.childIndex - 1; i >= 0; i--) {
            var el = elem.children[i];
            var style = el.currentStyle || window.getComputedStyle(el);
            counter += el.offsetWidth + (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return counter;
    };
    Ng2Carouselamos.prototype.ngOnChanges = function (changes) {
        if (changes.items && !isEqual(changes.items.previousValue, changes.items.currentValue)) {
            if (changes.items.firstChange) {
                this.onSelectedItem.emit({ item: this.items[this.childIndex], index: this.childIndex, first: true });
            }
            this.amount = 0;
        }
    };
    return Ng2Carouselamos;
}());

Ng2Carouselamos.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: '[ng2-carouselamos]',
                styles: ["\n    .ng2-carouselamos-container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ng2-carouselamos-wrapper{overflow:hidden}.ng2-carouselamos{display:-webkit-box;display:-ms-flexbox;display:flex;transition:transform 1s, -webkit-transform 1s}.controls{pointer-events:none;position:absolute;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.controls button{pointer-events:all;background:transparent;border:0}\n  "],
                template: "\n    <div class=\"ng2-carouselamos-container\">\n      <div\n        class=\"ng2-carouselamos-wrapper\"\n        [style.width]=\"width + 'px'\"\n        (mousedown)=\"onMousedown($event)\"\n        (touchstart)=\"onTouchdown($event)\"\n        (mousemove)=\"onMousemove($event, list.scrollWidth)\"\n        (touchmove)=\"onTouchmove($event, list.scrollWidth)\"\n        (mouseup)=\"onMouseup($event, list)\"\n        (mouseleave)=\"onMouseup($event, list)\"\n        (touchend)=\"onTouchup($event, list)\"\n      >\n        <div\n          class=\"ng2-carouselamos\"\n          [attr.startPress]=\"startPress\"\n          [style.transition]=\"startPress > 0 ? 'none' : '-webkit-transform 1s'\"\n          [style.webkitTransition]=\"startPress > 0 ? 'none' : '-webkit-transform 1s'\"\n          [style.transform]=\"'translateX('+amount+'px)'\"\n          [style.webkitTransform]=\"'translateX('+amount+'px)'\"\n          #list\n        >\n          <ng-template\n            *ngFor=\"let item of items; let i = index\"\n            [ngTemplateOutlet]=\"$item\"\n            [ngTemplateOutletContext]=\"{$implicit: item, index: i, selectedIndex: childIndex}\"\n          ></ng-template>\n        </div>\n      </div>\n      <div\n        class=\"controls\"\n        *ngIf=\"$prev || $next\"\n      >\n        <button\n          type=\"button\"\n          *ngIf=\"$prev\"\n          (click)=\"scroll(false, list)\"\n          [disabled]=\"amount >= 0\"\n        >\n          <ng-template\n            [ngTemplateOutlet]=\"$prev\"\n          ></ng-template>\n        </button>\n        <button\n          type=\"button\"\n          *ngIf=\"$next\"\n          (click)=\"scroll(true, list)\"\n          [disabled]=\"amount <= -(list.scrollWidth-width)\"\n        >\n            <ng-template\n              [ngTemplateOutlet]=\"$next\"\n            ></ng-template>\n        </button>\n      </div>\n    </div>\n  "
            },] },
];
/** @nocollapse */
Ng2Carouselamos.ctorParameters = function () { return []; };
Ng2Carouselamos.propDecorators = {
    'items': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'width': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    '$prev': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    '$next': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    '$item': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onSelectedItem': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=ng2-carouselamos.component.js.map

/***/ }),

/***/ "../../../../ng2-carouselamos/dist/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos_module__ = __webpack_require__("../../../../ng2-carouselamos/dist/ng2-carouselamos.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ng2_carouselamos_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-carouselamos/dist/ng2-carouselamos.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2CarouselamosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("../../../../ng2-carouselamos/dist/components/index.js");



var Ng2CarouselamosModule = (function () {
    function Ng2CarouselamosModule() {
    }
    return Ng2CarouselamosModule;
}());

Ng2CarouselamosModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                ],
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_2__components__["a" /* Ng2Carouselamos */],
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_2__components__["a" /* Ng2Carouselamos */],
                ]
            },] },
];
/** @nocollapse */
Ng2CarouselamosModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ng2-carouselamos.module.js.map

/***/ })

});
//# sourceMappingURL=single-product.module.chunk.js.map