import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PipeTransform, Injectable, Pipe } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { NgForm } from "@angular/forms";

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { ToastOptions } from 'ng2-toastr';
import { ProductService } from './../product.service'
import { Subject } from 'rxjs/Subject'
import { SimpleGlobal } from 'ng2-simple-global';
import swal from 'sweetalert2';
import { SharedData } from './../services/shared-service';
import { Input, Output, EventEmitter } from '@angular/core';
import { SpeechRecognitionService } from '../services/speechservice';
declare var $: any;

@Pipe({
  name: 'replace'
})
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  user: Observable<firebase.User>
  currentuser = {};
  model: any = {};
  email: string;
  password: string;
  captcha;
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  prof_dict = {}
  check_currentuser: any
  movies: any = [];
  startAt = new Subject()
  endAt = new Subject()
  catkey: any = [];
  lastKeypress: number = 0;
  login_check: any = 0
  curUserPosts;
  private productList = [];
  private productFilteredList = [];
  filterloaded: boolean = false;
  token;
  // private start$: Subject<string> = new Subject<string>();
  // private end$: Subject<string> = new Subject<string>();
  cat = [];
  auctionType = [];
  prodkey = [];
  prodmodel = [];
  uid = [];
  mainmodel: any = [];
  notification: any = []
  unread = 0;
  itemsSubscription;
  public search_text = '';
  public blink = false;
  @Output() spokenText = new EventEmitter<string>();
  @Output() error = new EventEmitter<string>();
  @Input() showInput = true;
  constructor(public _shareData: SharedData, private sg: SimpleGlobal, private _ps: ProductService, private db: AngularFireDatabase, public afa: AngularFireAuth, public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, public authService: AuthService, private afAuth: AngularFireAuth, private _nav: Router, private speech: SpeechRecognitionService) {



  }
  mainFunction() {

    ///////////////////// search code///////////////////////////////////
    // this.cat = this.front.category;
    // this.auctionType = this.front.auction;
    // this.prodkey = this.front.catidmodel;
    // this.prodmodel = this.front.models;
    // this.uid = this.front.userid;
    this._shareData.returnSubject().subscribe(
      data => {
        this.prodmodel = data
        // console.log("shared",data) ;
      })

    ///////////////////// End /////////////////////////////////////////

    // this.toastr.setRootViewContainerRef(vcr);
    this.itemsSubscription = this.db.list('/categories', { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.catkey.push(snapshot.key);

        });

        // console.log("cat key", this.catkey);

      })


    this.user = this.afAuth.authState
    this.check_currentuser = 0
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentuser = res.uid;
        this.itemsSubscription = this.db.list('/users/' + this.currentuser, { preserveSnapshot: true })
          .subscribe(snapshots => {
            this.prof_dict = {}
            snapshots.forEach(snapshot => {

              this.prof_dict[snapshot.key] = snapshot.val();
            });
          });


      } else {
        //console.log('user not logged in');
      }
    });
  }
  ////////////////////////////////////////////// Filter search/////////////////////////
  filter(element) {
    // console.log(element);
    if (element != "") {
      this.productFilteredList = [];
      this.prodmodel.filter((product: any) => {
        // console.log(product['title'])

        if (product['title']) {

          if (product['title'].toLowerCase().indexOf(element.toLowerCase()) > -1) {
            this.productFilteredList.push(product);
          }
        }
      });
      // this.productList = this.productFilteredList;
      // console.log(this.productFilteredList);
    }
    else {
      this.productFilteredList = [];
      //  console.log("yes");
    }
  }
  initialize() {
    this.notification = [];
    this.unread = 0;;
  }

  userNotify() {
    this.initialize();


    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {

        this.db.list('/users/' + res.uid + '/notifications/', {

          query: {
            limitToLast: 30,
            orderByChild: 'time',
          }

        }).subscribe(items => {
          // items.reverse();
          this.unread = 0;
          this.notification = [];
          items.forEach(s => {
            this.notification.push(s);
            if (s['read'] != 1) {
              this.unread++;
              // console.log("unread",this.unread)
            }
          })
          // console.info("notifications",items);

        });

      }

    })

  }

  singleNotification(catname, auction, state, pid, nid, nread, type, senderid) {
    // console.log(catname,auction,state,pid,nid,nread)
    this.sg['category'] = catname;
    this.sg['AuctionType'] = auction;
    this.sg['state'] = state;
    this.sg['pid'] = pid;
    this._shareData.notiInfo({ cat: catname, auction: auction, state: state, pid: pid });
    if (nread == 0) {
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {

          this.db.object('users/' + res.uid + '/notifications/' + nid).update({
            read: "1"
          });

        }
      })

    }
    if (type == "c") {
      let url = 'chat';
      this._nav.navigate([url], { queryParams: { uid: senderid } })
    }
    else {
      let url = 'item';
      url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
      this._nav.navigate([url], { queryParams: { cat: catname, auction: auction, state: state, pid: pid } });
    }
  }
  chatPage() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let num = 0;
        this.db.object('users/' + res.uid).update({
          unreadCount: num.toString()
        });
      }
    })
    let url = 'chat';
    this._nav.navigate([url])
  }

  singleproduct(acess, catname, auction, state, pid, uid) {
    // console.log(acess, catname, auction, state, pid);
    this.sg['category'] = catname;
    this.sg['AuctionType'] = auction;
    this.sg['state'] = state;
    this.sg['pid'] = pid;
    this.sg['uid'] = uid;
    // console.log("parent auction   ", this.sg['AuctionType'])
    //  localStorage.setItem("singleproduct",JSON.stringify(acess));
    let url = 'item/' + pid + '/' + acess.title;
    url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);

  }
  ///////////////////////////////////////////////End/////////////////////////////////////

  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = captchaResponse;
  }
  searchitem(item) {
    // console.log(item)
    this._shareData.searchInfo(item);
    $('#searchModal').css('display', 'none');
    $('.modal-backdrop.in').css('opacity', 0);
    $('.modal-backdrop.in').css('display', 'none');
    $('body').removeClass('modal-open');
    $('body').css('padding-right', 0);
    let url = 'search/' + item;
    // url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);
  }


  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem("currentuser");
    localStorage.removeItem("user");
    localStorage.removeItem("currentusername");
    localStorage.removeItem("image");
    localStorage.clear();
    this._nav.navigate(['/']);
    swal({
      type: 'success',
      html: 'You have been successfully signed out from Sell4Bids.'
    })
  }
  profile(currentuserid) {
    localStorage.setItem("profileid", JSON.stringify(currentuserid));
    let url = 'profile/' + currentuserid;

    url = url.replace(/&/g, 'and').replace(/\s+/g, '-');
    this._nav.navigate([url]);
    // console.log("login",currentuserid);

  }

  ngOnInit() {


    window.scrollTo(0, 0);
    this.mainFunction();
    this.userNotify();
  }


  triggerMike() {
    if (!('webkitSpeechRecognition' in window)) {
      console.log('please upgrade');
    } else {


      // url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
      this.search_text = '';
      this.blink = true;
      this.searching();
    }

  }

  searching(): void {
    this.speech.record().subscribe((text) => {
        this.search_text = text;
        this._shareData.searchInfo(this.search_text)
        let url = 'search/' + this.search_text;
        this._nav.navigate([url]);

        this.blink = false;
        this.spokenText.emit(this.search_text);
        this.speech.stop();
      },
      (err) => {
        this.error.emit('Failed in Fetching');
        if (err.error === 'no-speech') {
          this.searching();
        }
      }
    );
  }




  copyMessage(val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    swal({
      text: "Copy Link",
      title: "Sell4Bids",
      type: "success",
      showConfirmButton: true,
      confirmButtonColor: "#5cb85c", timer: 2000,
      confirmButtonText: "OK",
    })


  }
  openNav() {
    // document.getElementById("mySidenav").style.width = "270px";
    $(".sidenav").addClass("open");
    // document.body.style.backgroundColor = "rgba(0, 0, 0, 0.63)";
    $("body").addClass("background");
  }
  closeNav() {
    // document.getElementById("mySidenav").style.width = "0";
    // document.body.style.backgroundColor = "white";
    $(".sidenav").removeClass("open");
    $("body").removeClass("background");
  }





  // openNav() {
  //     $('.open-sidenav').on('click', function (e) {
  //       $("body").toggleClass("background");
  //       $('.sidenav').toggleClass('open');
  //
  //       e.stopPropagation();
  //       return false;
  //     });
  //
  //     $('*:not(.open-sidenav)').on('click', function () {
  //       $("body").removeClass("background");
  //       $('.sidenav').removeClass('open');
  //     });
  //
  //   }

  ngOnDestroy() {
    this.itemsSubscription.unsubscribe();
  }
  search($event) {
    if ($event.timeStamp - this.lastKeypress > 200) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q + "\uf8ff")
    }
    this.lastKeypress = $event.timeStamp
  }


  sweet(){
    swal({
      title: 'Download The Free Sell4Bids App',
      type: 'error',
      html:
      ' <a href="https://play.google.com/store/apps/details?id=com.usman.brainplow.sell4bids&hl=en" target="_blank">\n' +
      '            <img src="assets/img/Adroid-Badge.png" style="width: 150px">\n' +
      '          </a>'+
      '<a href="https://itunes.apple.com/us/app/sell4bids/id1304176306?mt=8" target="_blank">\n'+
      '<img src="assets/img/IOS-Badge.png" style="width: 150px;height:65px">\n'+
      '</a>',
      focusConfirm: false,
    })
    this.closeNav()
  }

  // signup() {
  // //  alert('nav');
  //   this.authService.signup(this.model.email, this.model.password);
  //   this.model.email = this.model.password = '';
  // }





  loadprodut(item) {
    localStorage.setItem("item1", item)
    this._shareData.vendorInfo(item);
    let sth = 'products/category/' + item;
    sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([sth]);
  }
  alljobs(item) {
    localStorage.setItem("item1", item)
    this._shareData.vendorInfo(item);
    let sth = 'products/category/' + item;
    sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    // this.cat_comp.constructor_two();
    // console.log("sth: ", sth);
    this._nav.navigate([sth]);
  }


}
