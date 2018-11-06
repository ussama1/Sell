import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, RouterModule } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import Swal, {default as swal} from 'sweetalert2';
// import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/take'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { MatAutocompleteModule } from '@angular/material';
import 'hammerjs';
import { MatInputModule } from '@angular/material';
import { AuthService } from '../auth.service';
import { SimpleGlobal } from 'ng2-simple-global';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';
import { ISubscription } from "rxjs/Subscription";
import { FormControl, NgForm, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { CookieServiceLocal } from './../services/cookie-service';
import { OrderModule } from 'ngx-order-pipe';
import { MessagingService } from "./../messaging.service";
import { SharedData } from './../services/shared-service';
import { Ng2DeviceService } from 'ng2-device-detector';
declare const $: any;
export class User {
  constructor(public name: any) { }
}
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})

export class FrontComponent implements OnInit {
  //////////////////////////////// Recent items//////////////////////////

  recentitems = [];
  cookieValue = [];

  ////////////////////////////////End//////////////////////////////////

  private subscription: ISubscription;


  order: string = 'chargeTime';
  product: any = [];
  catidmodel: any = [];
  catid: any = [];
  models: any = [];
  userid: any = [];
  userinfo: any = [];
  searchcat: any = [];

  // items: FirebaseListObservable<any>;

  //Pagination portion
  products_key: any = []
  product_path_array_counter: number = 0
  product_path_array: any = []
  pagination_counter: number = 0
  end_of_scroll: number = 0
  lastkey_check: number = 0
  loop_check_first_time: number = 0
  loop_check_f: number = 0
  loop_check_f_limit: number = 0
  control_code_run: number = 0
  movies = new BehaviorSubject([]);
  batch = 3         // size of each query
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of database is reached

  prod = []
  category = []
  path_first = ''
  check = 0
  //path = '/products/Accessories/buy-it-now/DC'
  path = ''
  showSpinner: boolean = true;
  ;
  auction: any = [];
  catname: any = [];
  myControl = new FormControl();
  upload = new Product();
  options = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];

  ascending = true;
  filteredOptions: Observable<User[]>;

  private productList = [];
  private productFilteredList = [];
  filterloaded: boolean = false;
  ///////////////Filter search///////////////
  categories: string;
  modal = {};


  /// unwrapped arrays from firebase
  animals: any;
  filteredAnimals: any;

  /// filter-able properties
  family: string;
  weight: number;
  filters = {}

  ////////////////////End////////////////////
  uploadArray = [];
  slideConfig;
  message;
  array_categories = [
    "Jobs","Accessories", "Antiques", "Art and Crafts", "Baby and Kids", "Bags",
    "Boats and Marines", "Books", "Business Equipment", "Campers and RVs", "Cars and Accessories",
    "CDs and DVDs", "Clothing", "Collectible Toys", "Computers and Accessories", "Costumes",
    "Coupons", "Electronics", "Exercise", "Fashion", "Food and Beverages", "Free and Donation",
    "Furniture", "Gadgets", "Games", "Halloween", "Hobbies",
    "Home Decor", "Home and Garden", "Household Appliances", "Jewelry",  "Kids Toys",
    "Makeup and Beauty", "Motorcycles and Accessories", "Musical Equipment", "Outdoor and Camping", "Pet Accessories",
    "Tickets", "Tools", "Phone and Tablets", "Shoes", "Sports Equipment",
    "Video Games", "Wallets", "Watches", "Wedding", "Others"];
  auction_type = [
    "buy-it-now", "reserve", "non-reserve"
  ];
  dict_state = [
    "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"
  ];
  deviceInfo = null;
  //////////////////////// Pagination/////////////////////////
  endkeys: any = [];
  fetchingState;
  userState;
  record: any = []
  constructor(private afAuth: AngularFireAuth, private deviceService: Ng2DeviceService, public _shareData: SharedData, private msgService: MessagingService, private cookieService: CookieServiceLocal, private sg: SimpleGlobal, public authService: AuthService, private _ps: ProductService, private db: AngularFireDatabase, private _nav: Router) {



    for (let i = 0; i <= 70; i++) {
      this.endkeys[i] = [];
      for (let j = 0; j < 3; j++) {
        this.endkeys[i][j] = 0

      }

    }
    this.slideConfig = {
      infinite: true,
        slidesToShow: 6,
      slidesToScroll: 3,
      autoplay: false,
      prevArrow: '',
      nextArrow: '',
      responsive: [
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]}
  }
  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    // console.log(this.deviceInfo);
  }

  mainFunction() {
    // if(this.deviceInfo.device.toLowerCase( )=="iphone" ||this.deviceInfo.device.toLowerCase( )=="ipad")
    // {
    //   window.location.href = 'sell4bids://';

    // }
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let profdict = {};
        let tempstate;
        this.db.list('/users/' + res.uid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              profdict[snapshot.key] = snapshot.val()
              tempstate = profdict['state']
              this.fetchingState = tempstate
            });

            // console.log("profile",this.fetchingState);
            // this.fetchingState = this.userState
            if (this.fetchingState == undefined) {
              this.fetchingState = "NY"
            }
            this.record = [];
            for (let i = 0; i <= 70; i++) {
              this.endkeys[i] = [];
              for (let j = 0; j < 3; j++) {
                this.endkeys[i][j] = 0
              }
            }
            this.getData()
          })
      }
      else {
        this.fetchingState = "NY"
        // this.fetchingState = this.userState
        this.record = [];
        for (let i = 0; i <= 70; i++) {
          this.endkeys[i] = [];
          for (let j = 0; j < 3; j++) {
            this.endkeys[i][j] = 0
          }
        }
        this.getData()
      }
    })
  }
  getState() {
    this.fetchingState = this.userState
    this.record = [];
    for (let i = 0; i <= 70; i++) {
      this.endkeys[i] = [];
      for (let j = 0; j < 3; j++) {
        this.endkeys[i][j] = 0
      }
    }
    this.getData();
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
  }
    getData() {

    let catIndex = 0
    for (let cat in this.array_categories) {
      let i = 0;
      let aucIndex = 0
      for (let auction in this.auction_type) {
        let query = null;
        let qcount = 0;
        if (this.endkeys[catIndex][aucIndex] == 0) {
          query = {
            orderByChild: "chargeTime",
            limitToLast: this.batch,
          }
          qcount = 0;
        }
        else {
          qcount = 1;
          query = {
            orderByChild: "chargeTime",
            limitToLast: this.batch,
            endAt: this.endkeys[catIndex][aucIndex]
          }
        }
        let path = 'products/' + this.array_categories[catIndex] + '/' + this.auction_type[aucIndex] + '/' + this.fetchingState
        let catIndexTemp = catIndex;
        let aucIndexTemp = aucIndex;
        this.db.list(path, {
          query
        }).subscribe(items => {
          let count = 0;
          items.reverse()
          items.forEach(item => {
            count++;
            if (qcount == 1 && count == items.length) {
            }
            else {
              item['category'] = this.array_categories[cat];
              item['auctionType'] = this.auction_type[auction];
              item['state'] = this.fetchingState;
              this.record.push(item)
              this.showSpinner = true
            }
            this.endkeys[catIndexTemp][aucIndexTemp] = item['chargeTime']
          })

        });
        aucIndex++;
      }
      catIndex++;
    }
  }
  onSubmit(obj: NgForm) {
    let searchUrl = 'filters';
    this._nav.navigate([searchUrl], { queryParams: { cat: obj.value['category'], state: obj.value['state'] } });
  }

  /// filter property by equality to rule

  singleproduct(title, acess, catname, auction, state, pid, uid) {
    // console.log(catname, auction, state, pid, uid);
    //  this.cookieService.set(acess)
    // this.cookieService.set( 'Test', JSON.stringify(acess)[ind] );
    // console.log(acess, catname, auction, state, pid);
    this.sg['category'] = catname;
    this.sg['AuctionType'] = auction;
    this.sg['state'] = state;
    this.sg['pid'] = pid;
    this.sg['uid'] = uid;
    // console.log("parent auction   ", this.sg['AuctionType'])
    //  localStorage.setItem("singleproduct",JSON.stringify(acess));
    let urlTitle;
    let mainTitle;
    urlTitle = title.replace(/[^A-Za-z ]/g, "");
    mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
    let url = 'item/' + mainTitle;

    this._nav.navigate([url], { queryParams: { cat: catname, auction: auction, state: state, pid: pid, uid: uid } });

  }
  singlesearch(acess) {

    localStorage.setItem("singleproduct", JSON.stringify(acess));
    let url = 'item/' + acess.title;
    url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);

  }



  // ngOnInit() {
  //   window.scrollTo(0,0);

  // }

  ///Pagination Part

  query: any = '';

  onScroll() {
    this.getData()
  }

  private getMovies(path) {

  }

  getcategory(item: string) {
    // console.log("category", item)
    localStorage.setItem("item1", item)
    this._shareData.vendorInfo(item);
    let sth = 'products/category/' + item;
    sth = sth.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    //this.cat_comp.empty_function()
    // console.log("sth: ", sth);
    this._nav.navigate([sth]);
  }

  ngOnInit() {

    window.scrollTo(0, 0);
    this.mainFunction();

    this.msgService.getPermission()
    this.msgService.receiveMessage()
    this.message = this.msgService.currentMessage
    // this.cookieValue.push(JSON.parse(this.cookieService.get('Test')));

    // this.cookieService.get()
    this.loadScript('assets/script/scripts.js');

    // $('.cat-slider-homepage').fadeOut(0);
    // setTimeout(function () {
    //   $('.cat-slider-homepage').slick({
    //     infinite: true,
    //     slidesToShow: 6,
    //     slidesToScroll: 3,
    //     autoplay: false,
    //     prevArrow: '',
    //     nextArrow: '',
    //     responsive: [
    //       {
    //         breakpoint: 651,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    //   });
    // }, 100);
    // $('.CategorySlider').fadeIn(500).delay(200);
  }
  // ngOnDestroy(){
  //   this.subscription.unsubscribe();

  // }

  public loadScript(url) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
}
