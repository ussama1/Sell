webpackJsonp(["chat.module"],{

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  min-height: 100vh;\r\n  font-family: \"proxima-nova\", \"Source Sans Pro\", sans-serif;\r\n  font-size: 1em;\r\n  background-color: #d2dcd6;\r\n  letter-spacing: 0.1px;\r\n  color: #32465a;\r\n  text-rendering: optimizeLegibility;\r\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\n#frame {\r\n  width: 95%;\r\n  min-width: 360px;\r\n  max-width: 1000px;\r\n  margin-top: 100px;\r\n  height: 92vh;\r\n  min-height: 300px;\r\n  max-height: 520px;\r\n  box-shadow: 0 0 10px #383838;\r\n  background: #E6EAEA;\r\n}\r\n@media screen and (max-width: 360px) {\r\n  #frame {\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n}\r\n#frame #sidepanel {\r\n  float: left;\r\n  min-width: 280px;\r\n  max-width: 340px;\r\n  width: 40%;\r\n  height: 100%;\r\n  background: #2c3e50;\r\n  color: #f5f5f5;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel {\r\n    width: 58px;\r\n    min-width: 58px;\r\n  }\r\n}\r\n#frame #sidepanel #profile {\r\n  width: 80%;\r\n  margin: 25px auto;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    padding: 5px 0 0 0;\r\n    background: #32465a;\r\n  }\r\n}\r\n#frame #sidepanel #profile.expanded .wrap {\r\n  height: 210px;\r\n  line-height: initial;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap p {\r\n  margin-top: 20px;\r\n}\r\n#frame #sidepanel #profile.expanded .wrap i.expand-button {\r\n  -webkit-transform: scaleY(-1);\r\n  transform: scaleY(-1);\r\n  -webkit-filter: FlipH;\r\n          filter: FlipH;\r\n  -ms-filter: \"FlipH\";\r\n}\r\n#frame #sidepanel #profile .wrap {\r\n  height: 60px;\r\n  line-height: 60px;\r\n  overflow: hidden;\r\n  transition: 0.3s height ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap {\r\n    height: 55px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap img {\r\n  width: 50px;\r\n  border-radius: 50%;\r\n  padding: 3px;\r\n  border: 2px solid #e74c3c;\r\n  height: auto;\r\n  float: left;\r\n  cursor: pointer;\r\n  transition: 0.3s border ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap img {\r\n    width: 40px;\r\n    margin-left: 4px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap img.online {\r\n  border: 2px solid #2ecc71;\r\n}\r\n#frame #sidepanel #profile .wrap img.away {\r\n  border: 2px solid #f1c40f;\r\n}\r\n#frame #sidepanel #profile .wrap img.busy {\r\n  border: 2px solid #e74c3c;\r\n}\r\n#frame #sidepanel #profile .wrap img.offline {\r\n  border: 2px solid #95a5a6;\r\n}\r\n#frame #sidepanel #profile .wrap p {\r\n  float: left;\r\n  margin-left: 15px;\r\n  font-size: 22px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap i.expand-button {\r\n  float: right;\r\n  margin-top: 23px;\r\n  font-size: 0.8em;\r\n  cursor: pointer;\r\n  color: #435f7a;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap i.expand-button {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options {\r\n  position: absolute;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  width: 150px;\r\n  margin: 70px 0 0 0;\r\n  border-radius: 6px;\r\n  z-index: 99;\r\n  line-height: initial;\r\n  background: #435f7a;\r\n  transition: 0.3s all ease;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options {\r\n    width: 58px;\r\n    margin-top: 57px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options.active {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  margin: 75px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options.active {\r\n    margin-top: 62px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 8px solid #435f7a;\r\n  margin: -8px 0 0 24px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options:before {\r\n    margin-left: 23px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul {\r\n  overflow: hidden;\r\n  border-radius: 6px;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li {\r\n  padding: 15px 0 30px 18px;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li {\r\n    padding: 15px 0 35px 22px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li:hover {\r\n  background: #496886;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n  position: absolute;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle {\r\n    width: 14px;\r\n    height: 14px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n  content: '';\r\n  position: absolute;\r\n  width: 14px;\r\n  height: 14px;\r\n  margin: -3px 0 0 -3px;\r\n  background: transparent;\r\n  border-radius: 50%;\r\n  z-index: 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li span.status-circle:before {\r\n    height: 18px;\r\n    width: 18px;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li p {\r\n  padding-left: 12px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #profile .wrap #status-options ul li p {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-online span.status-circle {\r\n  background: #2ecc71;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-online.active span.status-circle:before {\r\n  border: 1px solid #2ecc71;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-away span.status-circle {\r\n  background: #f1c40f;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-away.active span.status-circle:before {\r\n  border: 1px solid #f1c40f;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy span.status-circle {\r\n  background: #e74c3c;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-busy.active span.status-circle:before {\r\n  border: 1px solid #e74c3c;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline span.status-circle {\r\n  background: #95a5a6;\r\n}\r\n#frame #sidepanel #profile .wrap #status-options ul li#status-offline.active span.status-circle:before {\r\n  border: 1px solid #95a5a6;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded {\r\n  padding: 100px 0 0 0;\r\n  display: block;\r\n  line-height: initial !important;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded label {\r\n  float: left;\r\n  clear: both;\r\n  margin: 0 8px 5px 0;\r\n  padding: 5px 0;\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input {\r\n  border: none;\r\n  margin-bottom: 6px;\r\n  background: #32465a;\r\n  border-radius: 3px;\r\n  color: #f5f5f5;\r\n  padding: 7px;\r\n  width: calc(100% - 43px);\r\n}\r\n#frame #sidepanel #profile .wrap #expanded input:focus {\r\n  outline: none;\r\n  background: #435f7a;\r\n}\r\n#frame #sidepanel #search {\r\n  border-top: 1px solid #32465a;\r\n  border-bottom: 1px solid #32465a;\r\n  font-weight: 300;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #search {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #search label {\r\n  position: absolute;\r\n  margin: 7px 0 0 20px;\r\n}\r\n#frame #sidepanel #search input {\r\n  padding: 10px 0 10px 50px;\r\n  width: 100%;\r\n  border: none;\r\n  background: #32465a;\r\n  color: #f5f5f5;\r\n}\r\n#frame #sidepanel #search input:focus {\r\n  outline: none;\r\n  background: #435f7a;\r\n}\r\n#frame #sidepanel #search input::-webkit-input-placeholder {\r\n  color: #f5f5f5;\r\n}\r\n#frame #sidepanel #search input::-moz-placeholder {\r\n  color: #f5f5f5;\r\n}\r\n#frame #sidepanel #search input:-ms-input-placeholder {\r\n  color: #f5f5f5;\r\n}\r\n#frame #sidepanel #search input:-moz-placeholder {\r\n  color: #f5f5f5;\r\n}\r\n#frame #sidepanel #contacts {\r\n  height: calc(100% - 177px);\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts {\r\n    height: calc(100% - 149px);\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n  }\r\n  #frame #sidepanel #contacts::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts.expanded {\r\n  height: calc(100% - 334px);\r\n}\r\n#frame #sidepanel #contacts::-webkit-scrollbar {\r\n  width: 8px;\r\n  background: #2c3e50;\r\n}\r\n#frame #sidepanel #contacts::-webkit-scrollbar-thumb {\r\n  background-color: #243140;\r\n}\r\n#frame #sidepanel #contacts ul li.contact {\r\n  position: relative;\r\n  padding: 10px 0 15px 0;\r\n  font-size: 0.9em;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact {\r\n    padding: 6px 0 46px 8px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact:hover {\r\n  background: #32465a;\r\n}\r\n#frame #sidepanel #contacts ul li.contact.active {\r\n  background: #32465a;\r\n  border-right: 5px solid #435f7a;\r\n}\r\n#frame #sidepanel #contacts ul li.contact.active span.contact-status {\r\n  border: 2px solid #32465a !important;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap {\r\n  width: 88%;\r\n  margin: 0 auto;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap {\r\n    width: 100%;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span {\r\n  position: absolute;\r\n  left: 0;\r\n  margin: -2px 0 0 -2px;\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  border: 2px solid #2c3e50;\r\n  background: #95a5a6;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span.online {\r\n  background: #2ecc71;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span.away {\r\n  background: #f1c40f;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap span.busy {\r\n  background: #e74c3c;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap img {\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap img {\r\n    margin-right: 0px;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n  padding: 5px 0 0 0;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #contacts ul li.contact .wrap .meta {\r\n    display: none;\r\n  }\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .name {\r\n  font-size: 18px;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview {\r\n  margin: 5px 0 0 0;\r\n  padding: 0 0 1px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: 1s all ease;\r\n}\r\n#frame #sidepanel #contacts ul li.contact .wrap .meta .preview span {\r\n  position: initial;\r\n  border-radius: initial;\r\n  background: none;\r\n  border: none;\r\n  padding: 0 2px 0 0;\r\n  margin: 0 0 0 1px;\r\n  opacity: .5;\r\n}\r\n#frame #sidepanel #bottom-bar {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n#frame #sidepanel #bottom-bar button {\r\n  float: left;\r\n  border: none;\r\n  width: 50%;\r\n  padding: 10px 0;\r\n  background: #32465a;\r\n  color: #f5f5f5;\r\n  cursor: pointer;\r\n  font-size: 0.85em;\r\n  font-family: \"proxima-nova\",  \"Source Sans Pro\", sans-serif;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button {\r\n    float: none;\r\n    width: 100%;\r\n    padding: 15px 0;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:focus {\r\n  outline: none;\r\n}\r\n#frame #sidepanel #bottom-bar button:nth-child(1) {\r\n  border-right: 1px solid #2c3e50;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button:nth-child(1) {\r\n    border-right: none;\r\n    border-bottom: 1px solid #2c3e50;\r\n  }\r\n}\r\n#frame #sidepanel #bottom-bar button:hover {\r\n  background: #435f7a;\r\n}\r\n#frame #sidepanel #bottom-bar button i {\r\n  margin-right: 3px;\r\n  font-size: 1em;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button i {\r\n    font-size: 1.3em;\r\n  }\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame #sidepanel #bottom-bar button span {\r\n    display: none;\r\n  }\r\n}\r\n#frame .content {\r\n  float: right;\r\n  width: 60%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content {\r\n    width: calc(100% - 58px);\r\n    min-width: 300px !important;\r\n  }\r\n}\r\n@media screen and (min-width: 900px) {\r\n  #frame .content {\r\n    width: calc(100% - 340px);\r\n  }\r\n}\r\n#frame .content .contact-profile {\r\n  width: 100%;\r\n  height: 60px;\r\n  background: #dadada;\r\n}\r\n#frame .content .contact-profile img {\r\n  width: 40px;\r\n  height:40px;\r\n  border-radius: 50%;\r\n  float: left;\r\n  margin: 9px 12px 0 9px;\r\n}\r\n#frame .content .contact-profile p {\r\n  float: left;\r\n  line-height: 24px;\r\n  padding: 10px 0 0;\r\n  position: relative;\r\n  font-weight: 600;\r\n}\r\n#frame .content .contact-profile p i{\r\n  position: absolute;\r\n  left: -20px;\r\n  font-size: 16px;\r\n  color: #008000;\r\n}\r\n#frame .content .contact-profile p span{\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n}\r\n#frame .content .contact-profile .social-media {\r\n  float: right;\r\n}\r\n#frame .content .contact-profile .social-media i {\r\n  margin-left: 14px;\r\n  cursor: pointer;\r\n}\r\n#frame .content .contact-profile .social-media i:nth-last-child(1) {\r\n  margin-right: 20px;\r\n}\r\n#frame .content .contact-profile .social-media i:hover {\r\n  color: #435f7a;\r\n}\r\n#frame .content .messages {\r\n  height: auto;\r\n  min-height: 380px;\r\n  max-height: 380px;\r\n  overflow-y: scroll;\r\n  padding:20px 0;\r\n  overflow-x: hidden;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .messages {\r\n    max-height: calc(100% - 105px);\r\n  }\r\n}\r\n#frame .content .messages::-webkit-scrollbar {\r\n  width: 8px;\r\n  background: transparent;\r\n}\r\n#frame .content .messages::-webkit-scrollbar-thumb {\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n#frame .content .messages ul li {\r\n  display: inline-block;\r\n  clear: both;\r\n  float: left;\r\n  margin: 15px 15px 5px 15px;\r\n  width: calc(100% - 25px);\r\n  font-size: 0.9em;\r\n}\r\n#frame .content .messages ul li:nth-last-child(1) {\r\n  margin-bottom: 20px;\r\n}\r\n#frame .content .messages ul li.sent img {\r\n  margin: 6px 8px 0 0;\r\n}\r\n#frame .content .messages ul li.sent p {\r\n  background: #435f7a;\r\n  color: #f5f5f5;\r\n  font-size: 18px;\r\n  margin-left: 10px;\r\n  min-width: 150px;\r\n  position: relative;\r\n}\r\n#frame .content .messages ul li.replies img {\r\n  float: right;\r\n  margin: 6px 0 0 8px;\r\n}\r\n#frame .content .messages ul li.replies p {\r\n  background: #f5f5f5;\r\n  float: right;\r\n  font-size: 18px;\r\n  min-width: 150px;\r\n  position: relative;\r\n}\r\n.replies p span{\r\n  font-size: 14px;\r\n  color: #676767;\r\n  font-weight: 600;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  right: 10px;\r\n  padding-top: 10px;\r\n}\r\n.sent p span{\r\n  font-size: 14px;\r\n  color: #676767;\r\n  font-weight: 600;\r\n  position: absolute;\r\n  bottom: -20px;\r\n  left: 10px;\r\n  padding-top: 10px;\r\n}\r\n#frame .content .messages ul li img {\r\n  width: 42px;\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n#frame .content .messages ul li p {\r\n  display: inline-block;\r\n  padding: 10px 15px;\r\n  border-radius: 20px;\r\n  max-width: 205px;\r\n  line-height: 130%;\r\n}\r\n@media screen and (min-width: 735px) {\r\n  #frame .content .messages ul li p {\r\n    max-width: 300px;\r\n  }\r\n}\r\n#frame .content .message-input {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n}\r\n#frame .content .message-input .wrap {\r\n  position: relative;\r\n}\r\n.wrap h4{\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  padding: 10px 0;\r\n  color: #fff;\r\n  font-weight: 500;\r\n}\r\n#frame .content .message-input .wrap input {\r\n  font-size: 18px !important;\r\n  float: left;\r\n  border: none;\r\n  width: 92%;\r\n  height: 54px;\r\n  padding: 11px 32px 10px 8px;\r\n  font-size: 0.8em;\r\n  color: #32465a;\r\n}\r\n\r\n#search label i {\r\n  color: #fff;\r\n}\r\n.sent-name{\r\n  float: left;\r\n  background: #a2a2a2;\r\n  width: 40px;\r\n  padding: 4px 5px;\r\n  height: 40px;\r\n  border-radius: 50px;\r\n}\r\n.recv-name{\r\n  float: right;\r\n  background: #a2a2a2;\r\n  padding: 4px 5px;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-left: 10px;\r\n  border-radius: 50px;\r\n}\r\n.recv-name span, .sent span{\r\n  text-transform: uppercase;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: #000;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap input {\r\n    padding: 15px 32px 16px 8px;\r\n  }\r\n}\r\n#frame .content .message-input .wrap input:focus {\r\n  outline: none;\r\n}\r\n#frame .content .message-input .wrap .attachment {\r\n  position: absolute;\r\n  right: 60px;\r\n  z-index: 4;\r\n  margin-top: 10px;\r\n  font-size: 24px;\r\n  color: #000;\r\n  opacity: .5;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap .attachment {\r\n    margin-top: 17px;\r\n    right: 65px;\r\n  }\r\n}\r\n#frame .content .message-input .wrap .attachment:hover {\r\n  opacity: 1;\r\n}\r\n#frame .content .message-input .wrap button {\r\n  float: right;\r\n  border: none;\r\n  width: 8%;\r\n  padding: 12px 0;\r\n  cursor: pointer;\r\n  background: #32465a;\r\n  color: #f5f5f5;\r\n}\r\n@media screen and (max-width: 735px) {\r\n  #frame .content .message-input .wrap button {\r\n    padding: 16px 0;\r\n  }\r\n}\r\n#frame .content .message-input .wrap button:hover {\r\n  background: #435f7a;\r\n}\r\n#frame .content .message-input .wrap button:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/** {*/\r\n    /*padding: 0;*/\r\n    /*margin: 0*/\r\n/*}*/\r\n\r\n/*.chat-container {*/\r\n    /*margin: 0 auto;*/\r\n    /*padding: 100px 20px 30px;*/\r\n    /*background-color: #ccc*/\r\n/*}*/\r\n\r\n/*.sidebar-header {*/\r\n    /*border: 1px solid #ccc;*/\r\n    /*!* min-height: 77px; *!*/\r\n    /*background: #fff*/\r\n/*}*/\r\n\r\n/*.chat-sidebar {*/\r\n    /*padding: 0;*/\r\n    /*background: #fff*/\r\n/*}*/\r\n\r\n/*.chat-sidebar-body {*/\r\n    /*height: 644px;*/\r\n    /*overflow-y: scroll*/\r\n/*}*/\r\n\r\n/*.name-and-msg h5,*/\r\n/*.name-and-msg p {*/\r\n    /*white-space: nowrap;*/\r\n    /*overflow: hidden;*/\r\n    /*text-overflow: ellipsis*/\r\n/*}*/\r\n\r\n/*.chat-img {*/\r\n    /*width: 60px;*/\r\n    /*height: 60px;*/\r\n    /*padding-top: 5px*/\r\n/*}*/\r\n\r\n/*.all-conv.dropdown-menu a {*/\r\n    /*padding: 0 10px;*/\r\n    /*display: block;*/\r\n    /*color: #000*/\r\n/*}*/\r\n\r\n/*.chat-box-header h4,*/\r\n/*.chat-msg-img,*/\r\n/*.chat-person div,*/\r\n/*.dropdown {*/\r\n    /*display: inline-block*/\r\n/*}*/\r\n\r\n/*.all-conv.dropdown-menu a:hover {*/\r\n    /*background-color: #c00;*/\r\n    /*color: #fff*/\r\n/*}*/\r\n\r\n/*.dropdown>.btn-default {*/\r\n    /*color: #5a5a5a;*/\r\n    /*font-family: sans-serif;*/\r\n    /*font-size: 18px;*/\r\n    /*text-transform: capitalize*/\r\n/*}*/\r\n\r\n/*.dropdown>.btn-default:hover {*/\r\n    /*background: #c00;*/\r\n    /*color: #fff*/\r\n/*}*/\r\n\r\n/*.dropdown {*/\r\n    /*padding: 10px 2px*/\r\n/*}*/\r\n\r\n/*.sidebar-header .fa-search {*/\r\n    /*color: #000;*/\r\n    /*padding: 12px 3px*/\r\n/*}*/\r\n\r\n/*.dropdown-menu {*/\r\n    /*min-width: 212px*/\r\n/*}*/\r\n\r\n/*.sidebar-header .fa-search:hover {*/\r\n    /*color: #c00*/\r\n/*}*/\r\n\r\n/*.chat-box-body {*/\r\n    /*border: 1px solid #ccc;*/\r\n    /*padding: 20px 0;*/\r\n    /*background-color: #fff*/\r\n/*}*/\r\n\r\n/*.chat-box-header {*/\r\n    /*padding: 15px 15px 0;*/\r\n    /*border-bottom: 1px solid #ccc*/\r\n/*}*/\r\n\r\n/*.chat-box-header ul li {*/\r\n    /*list-style: none;*/\r\n    /*display: inline-block;*/\r\n    /*font-size: 13px*/\r\n/*}*/\r\n\r\n/*.chat-box-header ul li:first-child {*/\r\n    /*padding-right: 10px*/\r\n/*}*/\r\n\r\n/*.chat-box-header h4 {*/\r\n    /*color: #000*/\r\n/*}*/\r\n\r\n/*.chat-box-header .fa-circle {*/\r\n    /*font-size: 14px;*/\r\n    /*margin-right: 5px;*/\r\n    /*color: #1fbc0d*/\r\n/*}*/\r\n\r\n/*.chat-person {*/\r\n    /*padding: 16px;*/\r\n    /*cursor: pointer;*/\r\n    /*border-left: 1px solid #ccc;*/\r\n    /*border-bottom: 1px solid #ccc*/\r\n/*}*/\r\n\r\n/*.chat-person:hover {*/\r\n    /*background-color: #f0f4f8*/\r\n/*}*/\r\n\r\n/*.chat-person::selection {*/\r\n    /*background-color: #f0f4f8*/\r\n/*}*/\r\n\r\n/*.name-and-msg {*/\r\n    /*padding-left: 10px*/\r\n/*}*/\r\n\r\n/*.name-and-msg h5 {*/\r\n    /*color: #000;*/\r\n    /*font-weight: 700;*/\r\n    /*width: 150px*/\r\n/*}*/\r\n\r\n/*.name-and-msg p {*/\r\n    /*width: 140px;*/\r\n    /*font-size: 13px*/\r\n/*}*/\r\n\r\n/*.time-and-star {*/\r\n    /*padding: 7px 0;*/\r\n    /*font-size: 12px*/\r\n/*}*/\r\n\r\n/*.chat-msg-img {*/\r\n    /*width: 40px;*/\r\n    /*height: 40px*/\r\n/*}*/\r\n\r\n/*.chat-person-msg {*/\r\n    /*display: flex;*/\r\n    /*padding: 20px*/\r\n/*}*/\r\n\r\n/*.user-name-time {*/\r\n    /*padding-left: 10px;*/\r\n    /*line-height: 25px*/\r\n/*}*/\r\n\r\n/*.no-convo-select {*/\r\n    /*padding-top: 150px;*/\r\n    /*text-align: center*/\r\n/*}*/\r\n\r\n/*.chat-1 p,*/\r\n/*.chat-2 p,*/\r\n/*.user-name-time2 p {*/\r\n    /*line-height: 19px;*/\r\n    /*padding: 10px;*/\r\n    /*border-radius: 50px;*/\r\n    /*max-width: 500px*/\r\n/*}*/\r\n\r\n/*.no-convo-select .fa-comments {*/\r\n    /*font-size: 80px;*/\r\n    /*color: #3d76a8*/\r\n/*}*/\r\n\r\n/*.no-convo-select h2 {*/\r\n    /*font-weight: 700;*/\r\n    /*font-size: 34px*/\r\n/*}*/\r\n\r\n/*.chat-2 p {*/\r\n    /*color: #fff;*/\r\n    /*font-weight: 600;*/\r\n    /*font-size: 14px;*/\r\n    /*background: #0089f9*/\r\n/*}*/\r\n\r\n/*.user-name-time h5 {*/\r\n    /*display: inline-block;*/\r\n    /*font-size: 16px;*/\r\n    /*color: #000;*/\r\n    /*font-weight: 700*/\r\n/*}*/\r\n\r\n/*.user-name-time span {*/\r\n    /*font-size: 12px;*/\r\n    /*font-weight: 700;*/\r\n    /*padding-left: 10px*/\r\n/*}*/\r\n\r\n/*.chat-1 p,*/\r\n/*.user-name-time2 p {*/\r\n    /*color: #000;*/\r\n    /*font-weight: 600;*/\r\n    /*font-size: 14px*/\r\n/*}*/\r\n\r\n/*.chat-1 p {*/\r\n    /*background: #f0f4f8*/\r\n/*}*/\r\n\r\n/*.user-name-time2 p {*/\r\n    /*background: #d2d6ff*/\r\n/*}*/\r\n\r\n/*.user-msg {*/\r\n    /*display: block*/\r\n/*}*/\r\n\r\n/*.chat-body-msgs {*/\r\n    /*height: 424px;*/\r\n    /*overflow-y: scroll;*/\r\n    /*overflow-x: hidden*/\r\n/*}*/\r\n\r\n/*.chat-alphabet {*/\r\n    /*padding: 6px 11px;*/\r\n    /*font-size: 24px;*/\r\n    /*color: #606060;*/\r\n    /*border-radius: 50%;*/\r\n    /*background-color: #ccc;*/\r\n    /*font-weight: 700*/\r\n/*}*/\r\n\r\n/*.search-container input[type=text] {*/\r\n    /*font-size: 17px;*/\r\n    /*border: none;*/\r\n    /*background: #fafafa*/\r\n/*}*/\r\n\r\n/*.search-container button {*/\r\n    /*background: #fff;*/\r\n    /*font-size: 20px;*/\r\n    /*border: none;*/\r\n    /*cursor: pointer*/\r\n/*}*/\r\n\r\n/*.send-icons a>i {*/\r\n    /*font-size: 30px;*/\r\n    /*padding: 0 10px;*/\r\n    /*color: #686868*/\r\n/*}*/\r\n\r\n/*.send-icons button {*/\r\n    /*color: #2b8125;*/\r\n    /*background-color: #e3e3e3;*/\r\n    /*text-transform: capitalize;*/\r\n    /*font-weight: 600;*/\r\n    /*font-size: 20px*/\r\n/*}*/\r\n\r\n/*.send-icons {*/\r\n    /*padding: 10px 16px*/\r\n/*}*/\r\n\r\n/*.send-form-style {*/\r\n    /*padding: 10px;*/\r\n    /*width: 97%*/\r\n/*}*/\r\n\r\n/*.send-form-style input {*/\r\n    /*padding: 0 20px*/\r\n/*}*/\r\n\r\n/*.send-icons a:hover i {*/\r\n    /*color: #c00*/\r\n/*}*/\r\n\r\n/*.send-icons button:hover {*/\r\n    /*color: #c00;*/\r\n    /*opacity: 1*/\r\n/*}*/\r\n\r\n/*.messages ul {*/\r\n    /*list-style: none*/\r\n/*}*/\r\n\r\n/*.messages ul li {*/\r\n    /*display: inline-block;*/\r\n    /*clear: both;*/\r\n    /*float: left;*/\r\n    /*margin: 15px 15px 5px;*/\r\n    /*width: calc(100% - 25px);*/\r\n    /*font-size: .9em*/\r\n/*}*/\r\n\r\n/*.messages ul li.sent img {*/\r\n    /*margin: 6px 8px 0 0*/\r\n/*}*/\r\n\r\n/*.messages ul li img {*/\r\n    /*width: 22px;*/\r\n    /*border-radius: 50%;*/\r\n    /*float: left*/\r\n/*}*/\r\n\r\n/*.messages ul li.replies img,*/\r\n/*.messages ul li.sent span,*/\r\n/*.sent .chat-alphabet {*/\r\n    /*float: right*/\r\n/*}*/\r\n\r\n/*.messages ul li.sent p {*/\r\n    /*background: #f0f4f8;*/\r\n    /*color: #000;*/\r\n    /*font-weight: 600;*/\r\n    /*float: right;*/\r\n    /*margin-right: 10px;*/\r\n    /*min-width: 120px;*/\r\n    /*max-width:490px;*/\r\n  /*position: relative;*/\r\n/*}*/\r\n\r\n/*.messages .chat-alphabet {*/\r\n    /*padding: 5px 8px*/\r\n/*}*/\r\n\r\n/*.receiver {*/\r\n    /*color: #000;*/\r\n    /*font-size: 17px!important;*/\r\n    /*font-weight: 700;*/\r\n    /*padding: 0 10px*/\r\n/*}*/\r\n\r\n/*.messages ul li.replies p {*/\r\n    /*color: #fff;*/\r\n    /*font-weight: 600;*/\r\n    /*font-size: 14px;*/\r\n    /*padding: 10px;*/\r\n    /*background: #0089f9;*/\r\n    /*min-width: 120px;*/\r\n    /*max-width:490px;*/\r\n/*}*/\r\n\r\n/*.sent .chat-alphabet {*/\r\n    /*padding: 6px 11px;*/\r\n    /*font-size: 24px;*/\r\n    /*color: #606060;*/\r\n    /*border-radius: 50%;*/\r\n    /*background-color: #ccc;*/\r\n    /*font-weight: 700*/\r\n/*}*/\r\n\r\n/*.messages span {*/\r\n    /*font-size: 12px*/\r\n/*}*/\r\n\r\n/*.replies {*/\r\n    /*display: flex!important*/\r\n/*}*/\r\n/*!*update chat*!*/\r\n/*.messages ul li.sent p:before {*/\r\n  /*left: -30px;*/\r\n  /*border-right-color: #ebebeb;*/\r\n  /*border-right-width: 12px;*/\r\n/*}*/\r\n\r\n\r\n/*.messages ul li.sent p:before {*/\r\n  /*content: '';*/\r\n  /*display: block;*/\r\n  /*position: absolute;*/\r\n  /*bottom: 0;*/\r\n  /*border: 18px solid transparent;*/\r\n  /*border-bottom-width: 0;*/\r\n/*}*/\r\n\r\n\r\n\r\n\r\n/*@media screen and (min-width:735px) {*/\r\n    /*.messages ul li p {*/\r\n        /*display: inline-block;*/\r\n        /*padding: 10px 15px;*/\r\n        /*border-radius: 20px;*/\r\n        /*max-width: 205px;*/\r\n        /*line-height: 130%*/\r\n    /*}*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid chat-container\">\n  <div id=\"frame\">\n    <div id=\"sidepanel\">\n      <div id=\"profile\">\n        <div class=\"wrap\">\n          <img id=\"profile-img\" src=\"{{sender.image}}\" alt=\"\" onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"\" class=\"online\" alt=\"\" />\n          <p>{{sender.name}}</p>\n          <div id=\"status-options\">\n            <ul>\n              <li id=\"status-online\" class=\"active\"><span class=\"status-circle\"></span> <p>Online</p></li>\n              <li id=\"status-away\"><span class=\"status-circle\"></span> <p>Away</p></li>\n              <li id=\"status-busy\"><span class=\"status-circle\"></span> <p>Busy</p></li>\n              <li id=\"status-offline\"><span class=\"status-circle\"></span> <p>Offline</p></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div id=\"search\">\n        <label for=\"\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></label>\n        <input  type=\"text\" [(ngModel)]=\"term\"  placeholder=\"Search contacts...\" />\n      </div>\n      <div id=\"contacts\">\n        \n        <ul>\n\n          <ng-container *ngFor = \"let user of mainChat | filter:term \"  >\n          <li class=\"contact\" [ngClass]=\"{'active' : otherUser == user.uid}\"\n          (click)=\"singleUser(user.uid)\" >\n            <div class=\"wrap\">\n              <!-- <span class=\"contact-status online\"></span> -->\n              <!-- <img src=\"{{user.image}}\" alt=\"\" /> -->\n              <div class=\"sent-name\" style=\"font-size:22px\">{{user.name | slice:0:2 }}</div>              \n              <div class=\"meta\">\n                <p class=\"name\">{{user.name}}</p>\n                <p style=\"font-size: 12px\" class=\"presview name\">{{user.lastMessage}}</p>\n              </div>\n              <h4 *ngIf=\"user.unreadCount < 1\" style=\"font-size: 12px\">{{user.lastMessageTime | timeAgo}}</h4>              \n              <h4 *ngIf=\"user.unreadCount >= 1\" (click)=\"singleUser()\" >{{user.unreadCount}} <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></h4>\n            </div>\n          </li>\n          </ng-container>\n        </ul>\n      </div>\n    </div>\n    <div class=\"content\">\n      <div *ngIf=\"otherUser\" class=\"contact-profile\">\n\n        <img src=\"{{reciever.image}}\" alt=\"\" onError=\"this.src='assets/img/Blank-Photo.jpg';\" alt=\"\" />\n        <p> <i *ngIf=\"status == 'Online'\" class=\"fa fa-circle\"></i> {{reciever.name}} <br>\n          {{this.status }}\n        </p>\n\n      </div>\n      <div class=\"messages\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n        \n        <ul>\n          <ng-container  *ngFor=\"let item of oneChat\">\n          <li class=\"sent\" *ngIf=\"currentUser != item.senderUid\">\n            <!--<img src=\"http://emilcarlsson.se/assets/mikeross.png\" alt=\"\" />-->\n            <div>\n              <div class=\"sent-name\"><span>{{reciever.name | slice:0:2 }}</span></div>\n              <p>{{item.message}}\n                <span style=\"text-transform:lowercase;\">{{item.timestamp | timeAgo}}</span>\n              </p>\n\n            </div>\n\n          </li>\n          <li class=\"replies\" *ngIf=\"currentUser == item.senderUid && otherUser\">\n            <!--<img src=\"http://emilcarlsson.se/assets/harveyspecter.png\" alt=\"\" />-->\n            <div>\n              <div class=\"recv-name\">\n              <span>Me</span>\n              </div>\n              <p>{{item.message}}\n                <span>{{item.timestamp | timeAgo}}</span></p>\n\n            </div>\n\n          </li>\n        </ng-container>\n\n        </ul>\n        <div class=\"message-input\">\n          <form *ngIf=\"otherUser\" class=\"send-form-style\"  #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>\n            <div class=\"form-group wrap\">\n              <input type=\"text\" name=\"chat\" [(ngModel)] = \"chat\"  autocomplete=\"nope\" placeholder=\"Write your message...\" required />\n              <!--<i class=\"fa fa-paperclip attachment\" aria-hidden=\"true\"></i>-->\n              <div class=\"form-group\" style=\"display: inline\">\n                <button class=\"submit\" type=\"submit\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n<!--///////////////////////////////////////////// Old Code//////////////////////////////////////////////////////-->\n\n\n\n<!--<div class=\"container chat-container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-md-4 chat-sidebar\">-->\n        <!--<div class=\"sidebar-header\">-->\n  <!---->\n          <!--<div class=\"search-container\">-->\n             <!--<div style=\"position:relative\"><div style=\"position:absolute; left:2px; top:3px\">-->\n                <!--<i class=\"fa fa-search\"></i></div></div>-->\n              <!---->\n              <!--<input  class=\"form-control \" type=\"text\" [(ngModel)]=\"term\" >-->\n              <!--&lt;!&ndash; <button type=\"submit\"><i class=\"fa fa-search\"></i></button> &ndash;&gt;-->\n          <!--</div>-->\n  <!---->\n        <!--</div>-->\n        <!--<div class=\"chat-sidebar-body\">-->\n          <!--<ng-container *ngFor = \"let user of mainChat | filter:term | orderBy: order\"  >-->\n          <!--<div   *ngIf=\"user.name\" [ngStyle]=\"{'background-color':otherUser == user.uid ? '#ffecf0' : 'white' }\" (click)=\"singleUser(user.uid)\" class=\"chat-person\" class=\"chat-person\">-->\n            <!--&lt;!&ndash; <div class=\"chat-img\"><img src=\"../../assets/img/man01.png\" class=\" img-responsive img-circle\" alt=\"User\"> </div> &ndash;&gt;-->\n            <!--<div class=\"chat-msg-img chat-alphabet\">{{user.name | slice:0:1 | uppercase}}</div>-->\n  <!---->\n            <!--<div -->\n          <!---->\n             <!--class=\"name-and-msg\">-->\n              <!--<h5>{{user.name}}</h5>-->\n              <!--&lt;!&ndash; <p>Some Messege will  be here</p> &ndash;&gt;-->\n            <!--</div>-->\n            <!--<div *ngIf=\"user.unreadCount >= 1\" (click)=\"singleUser()\" class=\"time-and-star pull-right\">-->\n              <!--<p>-->\n  <!---->\n                <!--<i class=\"fa fa-envelope\"></i>-->\n                <!--({{user.unreadCount}})-->\n              <!--</p>-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</ng-container>-->\n  <!---->\n  <!---->\n        <!--</div>-->\n      <!--</div>-->\n      <!--<div class=\"col-md-8 chat-box-body\">-->\n       <!--<div *ngIf=\"otherUser\" class=\"chat-box-header\">-->\n         <!--<i *ngIf=\"status == 'Online' \"class=\"fa fa-circle\"></i>-->\n         <!--<h4>{{reciever.name}}</h4>-->\n         <!--<ul>-->\n           <!--<li>{{this.status }}</li>-->\n           <!--&lt;!&ndash; <li>Local time May 16, 7:10AM</li> &ndash;&gt;-->\n         <!--</ul>-->\n       <!--</div>-->\n  <!---->\n        <!--<div class=\"messages chat-body-msgs messagebox\"  #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">-->\n          <!--<div *ngIf=\"!otherUser\" class=\"no-convo-select\">-->\n            <!--<i class=\"fa fa-comments\"></i>-->\n            <!--<h2>No Conversations Selected</h2>-->\n            <!--<p>Try selecting  a conversation or searching<br> for somone specific</p>-->\n          <!--</div>-->\n          <!--<ng-container  *ngFor=\"let item of oneChat\"  >-->\n          <!--<ul>-->\n          <!--<ul>-->\n            <!--<li class=\"sent\" *ngIf=\"currentUser == item.senderUid && otherUser\">-->\n              <!--<div class=\"chat-msg-img chat-alphabet\" style=\"font-size: 15px;\">Me</div>-->\n              <!--<div style=\"float: right\">-->\n                <!--<p>{{item.message}}</p><br>-->\n              <!--&lt;!&ndash; <span>{{item.timestamp  | date:'yyyy-MM-dd HH:mm a' | timeAgo}}</span> &ndash;&gt;-->\n              <!--<span>{{item.timestamp   | timeAgo}}</span>-->\n              <!---->\n              <!--</div>-->\n            <!--</li>-->\n            <!--<li class=\"replies\"  *ngIf=\"currentUser != item.senderUid\">-->\n              <!--<div class=\"chat-msg-img chat-alphabet\" style=\"font-size: 15px;\">{{reciever.name | slice:0:2 }}</div>-->\n              <!--<div style=\"line-height: 22px\">-->\n              <!--<span class=\"receiver\">{{reciever.name}}</span><br>-->\n              <!--<p>{{item.message}}-->\n  <!---->\n              <!--</p><br>-->\n              <!--<span>{{item.timestamp | timeAgo}}</span>-->\n              <!--</div>-->\n            <!--</li>-->\n          <!--</ul>-->\n          <!--</ng-container>-->\n        <!--</div>-->\n  <!---->\n  <!---->\n      <!---->\n        <!--<form *ngIf=\"otherUser\" class=\"send-form-style\"  #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate>-->\n          <!--<div class=\"form-group\"> &lt;!&ndash; Email field !&ndash;&gt;-->\n          <!--<input type=\"text\"  class=\"form-control input-lg\"  name=\"chat\" [(ngModel)] = \"chat\"  autocomplete=\"nope\"          placeholder=\"Type your Messege\" required>-->\n          <!--</div>-->\n          <!--<div class=\"send-icons\">-->\n  <!---->\n          <!--<div class=\"form-group\" style=\"display: inline\"> &lt;!&ndash; Submit button !&ndash;&gt;-->\n          <!--<button type=\"submit\" class=\"btn pull-right\">Send-->\n          <!--<i class=\"fa fa-send\"></i>-->\n          <!--</button>-->\n          <!--</div>-->\n          <!--</div>-->\n  <!---->\n          <!--</form>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = (function () {
    function ChatComponent(_nav, authService, afAuth, route, db) {
        this._nav = _nav;
        this.authService = authService;
        this.afAuth = afAuth;
        this.route = route;
        this.db = db;
        this.chat_list = [];
        this.oneChat = [];
        this.reciever = {};
        this.sender = {};
        this.order = 'unreadCount';
        this.mainChat = [];
        this.prof_dict = {};
    }
    ChatComponent.prototype.searchitem = function (item) {
        var _this = this;
        console.log(item);
        this.chat_list
            .filter(function (chat) {
            // this.mainChat =[]
            if (chat['name'].toLowerCase().indexOf(item.toLowerCase()) > -1) {
                _this.mainChat.push(chat);
                console.log("main", _this.mainChat);
            }
        });
    };
    ChatComponent.prototype.allChats = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.currentUser = res.uid;
                var chat_user = '/users/' + res.uid + '/chat';
                _this.db.list(chat_user, {
                    query: {
                        orderByChild: 'lastMessageTime'
                    }
                }).subscribe(function (data) {
                    data.reverse();
                    _this.chat_list = data;
                    _this.mainChat = data;
                    console.log("chat", _this.mainChat);
                });
            }
        });
    };
    ChatComponent.prototype.getStatus = function (receiverTime) {
        // let serverTime = firebase.database.ServerValue.TIMESTAMP ;
        var timeDifference;
        timeDifference = new Date().getTime() - receiverTime;
        console.log("timedifference", timeDifference);
        if (timeDifference < (60 * 1000)) {
            this.status = "Online";
            console.log("online");
        }
        else {
            var diffSeconds = Number(timeDifference) / 1000 % 60;
            var diffMinutes = Number(timeDifference) / (60 * 1000) % 60;
            var diffHours = Number(timeDifference) / (60 * 60 * 1000);
            var diffInDays = Number(timeDifference) / (1000 * 60 * 60 * 24);
            console.log("seaconds", diffSeconds, "Minutes", diffMinutes, "Hours", diffHours, "DAys", diffInDays);
            if (diffInDays > 1) {
                this.status = "Last active " + parseInt(diffInDays + "") + " days ago.";
            }
            else if (diffInDays == 1) {
                this.status = "Last active " + parseInt(diffInDays + "") + " day ago.";
            }
            else if (diffHours < 24 && diffHours > 1) {
                this.status = "Last active " + parseInt(diffHours + "") + " hours ago.";
            }
            else if (diffHours == 1) {
                this.status = "Last active " + parseInt(diffHours + "") + " hour ago.";
            }
            else if (diffMinutes > 1) {
                this.status = "Last active " + parseInt(diffMinutes + "") + " minutes ago.";
            }
            else {
                this.status = "Last active " + parseInt(diffSeconds + "") + " seconds ago.";
            }
        }
    };
    ChatComponent.prototype.selectChat = function (rid) {
        var _this = this;
        this.chatRoom(rid);
        // $(".chat-body-msgs").scrollToBottom(0)
        var user_refer = this.db.object('/users/' + this.onlineUser + '/chat/' + rid).update({
            unreadCount: "0"
        });
        // user_refer.$ref.transaction(count => {
        //   console.log("unread",count)
        //   let num = 0;
        //  count['unreadCount'] = num.toString();
        //   return count ? count : 0              
        // })
        this.db.object('/users/' + rid, { preserveSnapshot: true })
            .subscribe(function (snapshot) {
            // snapshots.forEach(snapshot => {
            _this.reciever = snapshot.val();
            // })
            _this.recieverId = rid;
            _this.recieverName = _this.reciever['name'];
            console.log("reciever", _this.reciever);
            _this.getStatus(_this.reciever['startTime']);
        });
    };
    ChatComponent.prototype.chatRoom = function (rid) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var chat_path = void 0;
                var bpath = _this.db.object('/chat_rooms/' + rid + '_' + res.uid, { preserveSnapshot: true });
                bpath.subscribe(function (data) {
                    _this.oneChat = [];
                    if (data.val() == null) {
                        _this.mainPath = '/chat_rooms/' + res.uid + '_' + rid;
                    }
                    else {
                        _this.mainPath = '/chat_rooms/' + rid + '_' + res.uid;
                    }
                    console.log("path", _this.mainPath);
                    _this.getRecord(_this.mainPath);
                });
            }
        });
    };
    ChatComponent.prototype.getRecord = function (path) {
        var _this = this;
        this.db.list(path, {
            query: {
                limitToLast: 200,
                orderByChild: 'timestamp',
            }
        }).subscribe(function (chat) {
            _this.oneChat = chat;
            console.log("onechat", _this.oneChat, chat);
        });
    };
    ChatComponent.prototype.singleUser = function (uid) {
        var url = 'chat';
        this._nav.navigate([url], { queryParams: { uid: uid } });
        this.selectChat(uid);
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                _this.sender = {};
                _this.db.object('/users/' + res.uid, { preserveSnapshot: true })
                    .subscribe(function (snapshot) {
                    // snapshots.forEach(snapshot => {
                    console.log("snap", snapshot.val());
                    _this.sender = snapshot.val();
                    // })
                    _this.senderId = res.uid;
                    _this.senderName = _this.sender['name'];
                });
                _this.onlineUser = res.uid;
                var num = 0;
                _this.db.object('users/' + res.uid).update({
                    unreadCount: num.toString()
                });
            }
        });
        // document.getElementById('footer').scrollTop()
        // $(".chat-body-msgs").scrollToBottom($(".chat-body-msgs")[0].scrollHeight);
        this.route.queryParams
            .subscribe(function (params) {
            console.log("query", params);
            _this.otherUser = params.uid;
            _this.selectChat(params.uid);
        });
        this.allChats();
    };
    ChatComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid == true) {
            var chat_msg_1;
            chat_msg_1 = f.value.chat;
            this.chat = null;
            console.log(f.value.chat, this.recieverId, this.recieverName, this.senderId, this.senderName);
            var chat_path = void 0;
            // let bpath = this.db.object('chat_rooms/' + this.senderId + '_' + this.recieverId, { preserveSnapshot: true });
            // bpath.subscribe(data => {
            //   let objectSubscription
            //   if (data.val() == null) {
            //     chat_path = 'chat_rooms/' + this.recieverId + '_' + this.senderId;
            //   }
            //   else { 
            //     chat_path = 'chat_rooms/' + this.senderId + '_' +this.recieverId;
            //   }
            var time = new Date().getTime();
            this.db.object(this.mainPath + '/' + time).set({
                timestamp: time,
                message: chat_msg_1,
                receiverUid: this.recieverId,
                receiver: this.recieverName,
                senderUid: this.senderId,
                sender: this.senderName
            }).then(function (success) {
                var count_refer = _this.db.object('/users/' + _this.recieverId + '/chat/' + _this.senderId);
                count_refer.$ref.transaction(function (count) {
                    console.log("unread", count['unreadCount']);
                    var num = Number(count['unreadCount']) + 1;
                    var time = new Date().getTime();
                    count['unreadCount'] = num.toString();
                    if (count['lastMessageTime'] == undefined) {
                        count['lastMessageTime'] = time;
                    }
                    else {
                        count.lastMessageTime = time;
                    }
                    if (count['lastMessage'] == undefined) {
                        count['lastMessage'] = chat_msg_1.toString();
                    }
                    else {
                        count.lastMessage = chat_msg_1.toString();
                    }
                    return count ? count : 0;
                });
            });
            // objectSubscription.unsubscribe();
            // })
        }
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _e || Object])
], ChatComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_routing__ = __webpack_require__("../../../../../src/app/chat/chat.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("../../../../ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ChatModule = (function () {
    function ChatModule() {
    }
    return ChatModule;
}());
ChatModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["a" /* OrderModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_4__chat_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__chat_component__["a" /* ChatComponent */],
        ],
        providers: []
    })
], ChatModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__chat_component__["a" /* ChatComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=chat.routing.js.map

/***/ }),

/***/ "../../../../ng2-search-filter/ng2-search-filter.es5.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ng2SearchPipeModule; });
/* unused harmony export Ng2SearchPipe */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ })

});
//# sourceMappingURL=chat.module.chunk.js.map