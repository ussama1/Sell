import { ConsoleLoggerStack } from './../../../angular-cli/packages/@ngtools/logger/src/console-logger-stack';
import { JsonObject } from './../../../angular-cli/packages/@ngtools/logger/src/logger';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';
import * as firebase from 'firebase/app';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ProductService } from './../product.service';
import { SimpleGlobal } from 'ng2-simple-global';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
// import swal from 'sweetalert2';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { OrderModule } from 'ngx-order-pipe';
import { RatingModule } from "ngx-rating";
import { StarRatingModule } from 'angular-star-rating';
import { IStarRatingOnClickEvent, IStarRatingOnRatingChangeEven } from "angular-star-rating/src/star-rating-struct";
import { SharedData } from './../services/shared-service';
import { TimePipe } from './timer';
import { Ng2DeviceService } from 'ng2-device-detector';

declare var $: any;

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers: [ProductService]
})
export class SingleProductComponent implements OnInit, OnDestroy, AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  // lat: number = 51.678418;
  // lng: number = 7.809007;
  product = {};
  sellingkey: any = [];
  profile: any = [];
  userproduct: any = [];
  sellproduct12: any = [];
  userinfo: any = [];
  prodinfo: any = [];
  loading: any = [];
  location: any = [];
  longitude;
  latitude;
  prof;
  showSpinner: boolean = true;

  prof_dict: any = [];
  userkey;
  item: FirebaseObjectObservable<any>;
  geolocationPosition;
  // static index;
  items: Array<any> = []
  index1;
  product_arr: Array<any> = [];
  images: any[];
  message: string;
  bid: boolean = false;
  offer: boolean = false;
  offerbid: boolean = false;
  stop_orders: boolean = false;
  price;
  model: any = {};
  currentUser: string;
  currentname;

  catname;
  auction;
  state;
  pid;
  uid;
  boughtprice;
  quantity;
  endTime;
  currentTime;
  maintime;

  seconds;
  minutes;
  hours;
  days;
  Timeclose = false;
  element: HTMLElement;
  finaltime;
  bootmodel: boolean = false;

  catRecord: any = [];
  auctionRecord: any = [];
  stateRecord: any = [];

  json_img = {
    small: '',
    medium: '',
    big: ''
  }
  sliderimages = [];

  //////////////////bid module//////////
  bid_user = {};
  prod_bid = [];
  product_price;
  reference;

  ///////////////end///////////////////
  ////////////// View Offer///////////
  viewoffer: any = [];
  starsCount: number;
  onRatingChangeResult: IStarRatingOnRatingChangeEven;
  countofferid;
  counteroffer = [];
  counterofferkey = [];
  buyercountofferid;
  stop: boolean = true;
  Hideitem: boolean = false;
  relistTime: boolean = true;

  ///////////// End /////////////////
  list_item = [
    { value: 'Item is out of stock', viewValue: 'Item is out of stock' },
    { value: 'I will re-list later', viewValue: 'I will re-list later' },
    { value: 'I am not interested to sell', viewValue: 'I am not interested to sell' },
    { value: 'Item is no longer available', viewValue: 'Item is no longer available' },
    { value: 'Not recieving desired bids/offers', viewValue: 'Not recieving desired bids/offers' },
    { value: 'Others', viewValue: 'Others' }
  ];
  listget;
  listindex;
  watch: boolean = true
  /////////// Share location////////
  lat: number;
  lng: number;
  buyer_location_id;
  selllocation;
  sell_location_full_name;
  sell_location_short_name;
  seller_location: any = {};
  local_str: string;
  seller_latitude: string;
  seller_longitude: string;
  /////////// end///////////////
  ///////////////////chat/////////////
  chat_list: any = [];
  subscription;
  markrating = {};
  /////////////////end////////////
  productEndtime;
  deviceInfo = null;

  constructor(
    private deviceService: Ng2DeviceService,
    public _shareData: SharedData,
    private route: ActivatedRoute,
    public authService: AuthService,
    private afAuth: AngularFireAuth,
    private sg: SimpleGlobal,
    private _ps: ProductService,
    private db: AngularFireDatabase,
    private _nav: Router
    // private timePipe : TimePipe
  ) {
    //////////////////////////////////////////////// Current user id/////////////////////////////////


  }
  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    // console.log(this.deviceInfo);
  }

  initilize() {
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
    }
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
  }

  timerFunction(endTime) {
    this.finaltime = Number(endTime) - new Date().getTime()
    let time = new TimePipe().transform(this.finaltime / 1000)

    let i = 0;
    const arr = time.split('/');

    while (i < arr.length) {
      if (arr[i].includes('D')) {
        this.days = (arr[i].split(':'))[1];
      } else if (arr[i].includes('H')) {
        this.hours = (arr[i].split(':'))[1];
      } else if (arr[i].includes('M')) {
        this.minutes = (arr[i].split(':'))[1];
      } else if (arr[i].includes('S')) {
        this.seconds = (arr[i].split(':'))[1];
      }
      i += 1;
    }
  }

  mainFunction(catname, auction, state, pid, uid) {
    if (this.deviceInfo.device.toLowerCase() == "iphone" || this.deviceInfo.device.toLowerCase() == "ipad") {
      // alert('shopnroar://shopnroar.com/login?name='+id+'&id='+token)
      window.location.href = 'sell4bids://itemDetails?cat=' + catname + '&auction=' + auction + '&state=' + state + '&pid=' + pid + '&uid=' + uid;
    }
    window.scrollTo(0, 0);
    this.initilize()
    this.pid = pid;
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid;
        let login_data = {};
        this.db.object('/users/' + res.uid, { preserveSnapshot: true }).subscribe(snapshot => {
          login_data = snapshot.val();
          this.currentname = login_data['name'];
          // alert(this.currentname)
        })
        this.bootmodel = true;
      }
    })
    var user = firebase.auth().currentUser;

    // let sellproductpush = {};
    this.subscription = this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.product[snapshot.key] = snapshot.val();
        // console.log("Product: " + snapshot.val());
      })

      ///////////////////// user profile data //////////////////////////
      this.userProfile(this.product['uid']);
      this.productEndtime = this.product['endTime'];
      this.timerFunction(this.product['endTime']);
      // this.productTimer(this.product['endTime'])
    })





    ////////////////////////// Counter offer /////////////////////////////
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {


        this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/counterOffers/' + res.uid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              this.counterofferkey[snapshot.key] = snapshot.val();

              // console.log("counter offer", this.counterofferkey);
            })
          })
      }
    })


    //////////////////////////// End //////////////////////////////////
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {


        this.db.list('/users/' + res.uid + '/products/watching/' + pid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              // console.log("watch items", snapshot.key);
              this.watch = false;
            })
          })
      }
    })
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
    this.currentTime = firebase.database.ServerValue.TIMESTAMP;
    this.finaltime = parseInt(this.endTime, 10) - new Date().getTime()
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
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let location_path: string;
        if (res && res.uid && auction == "buy-it-now") {
          location_path = '/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/orders/' + res.uid
        }
        if (res && res.uid && (auction == "reserve" || auction == "non-reserve")) {
          location_path = '/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/bids/' + res.uid

        }
        this.db.list(location_path, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              this.seller_location[snapshot.key] = snapshot.val();
              // console.log("seller", this.seller_location)

            })
            if (this.seller_location['latitude'] && this.seller_location['longitude']) {
              this.seller_latitude = this.seller_location['latitude'];
              this.seller_longitude = this.seller_location['longitude'];
              this.local_str = this.seller_location['address']
              // console.log(this.local_str)
            }
            else {
              this._ps.location(this.product['city']).subscribe(Response => {
                this.location = Response; this.latitude = this.location.results[0].geometry.location.lat;
                this.latitude = this.location.results[0].geometry.location.lat;
                this.longitude = this.location.results[0].geometry.location.lng;
              });
            }
          })
      }
      else {
        this._ps.location(this.product['city']).subscribe(Response => {
          this.location = Response; this.latitude = this.location.results[0].geometry.location.lat;
          this.latitude = this.location.results[0].geometry.location.lat;
          this.longitude = this.location.results[0].geometry.location.lng;
        });
      }
    })


    ///////////////// end /////////////////////////////

    this.boughtprice = this.product['startPrice'];
    // console.log("product",this.product);
    this.userkey = this.product['uid'];
    ////////////////////////END/////////////////////////////////////////

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentUser = res.uid;
        // this.currentname = res.displayName
        // console.log(this.currentUser, this.currentname)
      }
    })
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
  buyerPaid(oid) {
    let mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid)
    mark.$ref.update({
      buyer_marked_paid: "yes",
    })
  }
  buyerUnPaid(oid) {
    let mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid)
    mark.$ref.update({
      buyer_marked_paid: "no",
    })
  }
  private markRating(catname, auction, state, pid) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/ratings/' + res.uid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {
              this.markrating[snapshot.key] = snapshot.val();
            })
            // console.log("rating", this.markrating)
          })
      }
    })
  }
  public productSlider(catname, auction, state, pid) {
    let slider = {};
    this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        this.galleryImages = [];
        snapshots.forEach(snapshot => {
          slider[snapshot.key] = snapshot.val();
        })

        for (let i = 0; i < slider['imagesCount']; i++) {
          let val;
          if (i == 0) {
            // console.log('imagee', i, slider['image0'])
            if (slider['image0'] != undefined && slider['image1'] != undefined) {
              this.galleryImages.push({

                small: slider['image0'],
                medium: slider['image0'],
                big: slider['image0']

              })

            }
            else if (slider['image0'] == undefined && slider['image1'] == undefined || slider['image0'] == null && slider['image1'] == null) {
              this.galleryImages.push({
                small: '../../assets/img/Placeholder/Placeholder-Small(Transparent).png',
                medium: '../../assets/img/Placeholder/Placeholder(Transparent).png',
                big: '../../assets/img/Placeholder/Placeholder512.png'
              })

            }
            else {
              $('ngx-gallery-image').css('height', '100%');
              this.galleryImages.push({

                small: '',
                medium: slider['image0'],
                big: slider['image0']

              })

            }
            // console.log("json1", this.json_img)
          }
          else if (i == 1) {
            if (slider['image1'] != undefined) {
              this.galleryImages.push({
                small: slider['image1'],
                medium: slider['image1'],
                big: slider['image1']
              })
            }
            // console.log("json2", this.json_img)

          }
          else if (i == 2) {
            if (slider['image2'] != undefined) {
              this.galleryImages.push({
                small: slider['image2'],
                medium: slider['image2'],
                big: slider['image2']
              })
            }
          }
          else if (i == 3) {
            if (slider['image3'] != undefined) {
              this.galleryImages.push({
                small: slider['image3'],
                medium: slider['image3'],
                big: slider['image3']
              })
            }
          }
          else if (i == 4) {
            if (slider['image4'] != undefined) {
              this.galleryImages.push({
                small: slider['image4'],
                medium: slider['image4'],
                big: slider['image4']
              })
            }
          }
        }
        // console.log("sliddddddddddddddddddddddddddddddddd", this.galleryImages)




      })



  }
  public productTimer(endTime) {
    // console.log("endtime", endTime)
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.days = 0;
    this.currentTime = firebase.database.ServerValue.TIMESTAMP;
    this.finaltime = parseInt(endTime, 10) - new Date().getTime()
    let x = this.finaltime / 1000;
    this.seconds = Math.floor(x % 60);
    x /= 60;
    this.minutes = Math.floor(x % 60);
    x /= 60;
    this.hours = Math.floor(x % 24);
    x /= 24;
    this.days = Math.floor(x);
    // console.log("final", this.finaltime);
    setInterval(() => {
      this.timer(this.element);
    }, 1000);
    // console.log("secondssssssssssssss", this.seconds)

  }
  public userProfile(uid) {
    // alert(uid)
    this.db.list('/users/' + uid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.prof_dict[snapshot.key] = snapshot.val();
        });
        // this.currentname = this.prof_dict['name']

        // console.log("jony",this.prof_dict);
      })
    //////////////////////////////END////////////////////////////////

    ///////////////////////user selling product/////////////////////
    this.db.list('/users/' + uid + '/products/selling', { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.catRecord.push(snapshot.val()['category'])
          this.auctionRecord.push(snapshot.val()['auctionType'])
          this.stateRecord.push(snapshot.val()['state']);
          this.sellingkey.push(snapshot.key);
          this.userproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);
        });
        // console.log("selling key", this.sellingkey);
        for (let i = 0; i < this.userproduct.length; i++) {
          let pinfo = {};

          this.db.list('/products/' + this.userproduct[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {

                pinfo[snapshot.key] = snapshot.val();

              });



            })
          this.prodinfo.push(pinfo);
        }

      })
  }
  private bidHistory(catname, auction, state, pid) {

    this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/' + 'bids', { preserveSnapshot: true })
      .subscribe(snapshots => {
        this.prod_bid = [];
        snapshots.forEach(snapshot => {


          // console.log("snap", snapshot.val());
          if (snapshot.key == "maxBid" || snapshot.key == "startPrice" || snapshot.key == "winner") {
            this.bid_user[snapshot.key] = snapshot.val()
          }


          if (snapshot.val()['name'] != undefined && snapshot.val()['bid'] != undefined && snapshot.key != "maxBid" && snapshot.key != "winner") {
            this.prod_bid.push({
              uid: snapshot.key,
              name: snapshot.val()['name'],
              address: snapshot.val()['address'],
              latitude: snapshot.val()['latitude'],
              longitude: snapshot.val()['longitude'],
              bid: Number(snapshot.val()['bid'])
            })
          }
          // console.log("bids user", this.bid_user);
          // console.log("bidssssssssss", this.prod_bid);


        });
      })
  }


  singleperson(info, id) {
    // console.log("userinfo", info, id)
    this.userinfo = info;
    localStorage.setItem("userinfo", JSON.stringify(this.userkey));

    let url = 'user/' + id + '/' + info.name;

    url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);
    // console.log("userkey", this.userkey);

  }


  singleproduct(sell, cat, auction, state, pid) {
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
  }

  bidding(b: NgForm) {
    if (b.valid == true) {
      // console.log(Number(this.model.price));
      if (this.endTime - new Date().getTime() > 0 || this.endTime == -1) {
        if (Number(this.model.price) > this.product_price) {
          this.reference = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids/' + this.currentUser)
          let bidrefer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids')
          let product_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)

          bidrefer.$ref.transaction(bid => {
            // console.log("transaction", bid)
            let maxBid = bid['maxBid'];
            let startPrice = bid['startPrice'];
            let winner = bid['winner'];

            // console.log("price", Number(this.model.price), "maxBid", maxBid, "startPrice", startPrice, "winner", winner);


            if (Number(this.model.price) < startPrice) {
              swal(
                'Bid again.',
                'Bid amountmust be greater than $' + startPrice,
                'success'
              )
            }
            else {
              ///first case///
              bid[this.currentUser] = { bid: Number(this.model.price).toString(), name: this.currentname }


              if (maxBid == 0) {
                // bid.set({
                // maxBid : maxBid
                // })

                bid["maxBid"] = Number(this.model.price).toString();
                bid["winner"] = this.currentUser;

                swal(
                  'Your bid amount is placed successfully',
                  'Currently you are highest bidder',
                  'success'
                )
                return bid ? bid : 1;

              }
              //// 2nd case ///
              else if (Number(this.model.price) > maxBid) {

                if (winner == this.currentUser) {
                  bid["maxBid"] = Number(this.model.price).toString();
                  swal(
                    'Bid Increased',
                    'Your bid amount is increased successfully. ',
                    'success'
                  )
                }
                else {
                  bid["maxBid"] = Number(this.model.price).toString();
                  /////////2nd highest +1 rule///////////
                  // console.log("2nd", parseInt(maxBid) + 1);
                  let rule = parseInt(maxBid) + 1
                  bid["startPrice"] = rule.toString();

                  // product_refer["startPrice"] = rule.toString()
                  product_refer.update({
                    startPrice: rule.toString(),

                  })
                  bid["winner"] = this.currentUser;

                  swal(
                    'Your bid is placed successfully.',
                    'Currently you are highest bidder. ',
                    'success'
                  )
                }

                return bid ? bid : 1;
              }
              //// 3rd case ////
              else if (Number(this.model.price) < maxBid) {
                if (winner == this.currentUser) {

                  swal(
                    'All user can\'t decreased their bid.',
                    'You are currently highest bidder, we will buy this item for you at least possible price (only $1 more than second highest bid). ',
                    'success'
                  )
                }
                else {
                  let rule = parseInt(this.model.price) + 1
                  bid["startPrice"] = rule.toString();
                  // product_refer["startPrice"] = Number(Number(this.model.price)) + 1
                  product_refer.update({
                    startPrice: rule.toString(),

                  })
                  swal(
                    'Bid placed. ',
                    'Your bid was placed but you are down bid. Please increase your bid by bidding again. ',
                    'warning'
                  )
                }
                return bid ? bid : 1;
              }
              // ////4th case////
              else if (Number(this.model.price) == maxBid) {

                if (winner == this.currentUser) {
                  swal(
                    'Bid placed.',
                    'Your bid amount is equal to your previous value. you can increase your bid by entering larger value',
                    'warning'
                  )
                }
                else {
                  bid["startPrice"] = maxBid.toString();
                  // product_refer["startPrice"].set(maxBid);
                  product_refer.update({
                    startPrice: maxBid.toString(),

                  })
                  swal(
                    'Bid placed.',
                    'Your bid amount is equal to winner Sell4Bids follow first-come first-serve in cases like this. Please increase your bid by bidding again. ',
                    'warning'
                  )
                }
                return bid ? bid : 1
              }
            }





          });

          this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
            auctionType: this.auction,
            category: this.catname,
            state: this.state

          })

        }
        else {
          swal(
            'Bid Again',
            'Bid amount must be greater than $' + this.product_price,
            'warning'
          )
        }
      }
      else {
        swal(
          'Bidding is already stopped',
          '',
          'warning'
        )
      }
    }
  }

  placeOrder(userQuantity: number, userPrice: number) {


    // console.log(firebase.database.ServerValue.TIMESTAMP);
    if ((this.endTime - new Date().getTime() > 0 || this.endTime == -1) && this.product['ordering'] != 'stopped') {
      // console.log("junaid1");
      if (Number(this.quantity) == 0) {
        swal(
          'Buy Now',
          'This item is currently out of stock. You can add it to watch-list, we will let you know when it\'s available in stock.',
          'warning'
        )
      }
      else if (Number(userQuantity) <= 0) {
        swal(
          'Buy Now',
          'Please enter a valid quantity.',
          'warning'
        )
      }
      else if (Number(userQuantity) > Number(this.quantity)) {
        swal(
          'Buy Now',
          'Not enough stock available',
          'warning'
        )
      }

      else if (Number(userQuantity) <= Number(this.quantity)) {
        // console.log("junaid2");
        this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.currentUser).update({
          boughtPrice: userPrice.toString(),
          boughtQuantity: userQuantity.toString(),
          name: this.currentname,
          uid: this.currentUser

        })
        this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
          boughtPrice: userPrice.toString(),
          boughtQuantity: userQuantity.toString(),
          auctionType: this.auction,
          category: this.catname,
          state: this.state

        })
        swal(
          'Buy Now',
          'Your Buy Now order has been placed. Please wait for the seller to respond. You can also send him a personal message for more details about pickup/delivery.',
          'success'
        )
      }



    }
    else {
      // console.log("junaid4");
      swal(
        'Ordering is already stopped',
        '',
        'warning'
      )
    }

  }

  buynow(f: NgForm) {
    // console.log("form value", this.model.quantity);
    // console.log("product value", this.quantity);
    if (f.valid == true) {
      this.placeOrder(Number(this.model.quantity), Number(this.boughtprice));
    }
  }

  //////////////////////// Offer Bid/////////////////////////////

  offersbid(sf: NgForm) {
    if (sf.valid == true) {
      // console.log(this.model.quantity, Number(this.model.price))
      this.placeOrder(Number(this.model.quantity), Number(this.model.price));
    }
  }


  galleryslider() {
    this.galleryOptions = [

      {
        width: '845px',
        // height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
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

    this.galleryImages = [
    ];

  }

  onLocation(event) {
    // console.log(event)
  }

  ngAfterViewInit() {
    Observable.interval(1000).takeWhile(() => true).subscribe(() => this.timerFunction(this.productEndtime));
  }

  ngOnInit() {
    this.epicFunction();
    this._shareData.returnNoti().subscribe(
      data => {
        // this.catname = data.cat;
        this.auction = data.auction;
        this.state = data.state;
        this.pid = data.pid;
        this.uid = data.uid;

        // console.log("path", data, data.auction)
        // this.mainFunction(this.catname, this.auction, this.state, this.pid)
        // this.bidHistory(this.catname, this.auction, this.state, this.pid)
        // this.viewOffer(this.catname, this.auction, this.state, this.pid, this.uid)

        this.route.queryParams
          .subscribe(params => {
            // console.log("query", params)
            this.catname = params.cat;
            this.auction = params.auction;
            this.state = params.state;
            this.pid = params.pid;
            this.uid = params.uid;

          })

        this.mainFunction(this.catname, this.auction, this.state, this.pid, this.uid)
        this.productSlider(this.catname, this.auction, this.state, this.pid)
        this.bidHistory(this.catname, this.auction, this.state, this.pid)
        this.viewOffer(this.catname, this.auction, this.state, this.pid)
        this.markRating(this.catname, this.auction, this.state, this.pid)


      })

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

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  timer(element: HTMLElement) {

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
  }
  //////////////////////////////////////////////View Offer//////////////////////////////
  onRatingChange = ($event: IStarRatingOnRatingChangeEven, oid) => {
    this.onRatingChangeResult = $event;
    // console.log('onRatingUpdated $event: ', this.onRatingChangeResult.rating, oid);
    this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid).update({
      rating: this.onRatingChangeResult.rating.toString()
    }).then(success => {
      swal("Rating", "Thanks for sharing your valuable experience with us.", "success");

      let user_refer = this.db.object('users/' + oid)

      user_refer.$ref.transaction(user => {
        if (user != null) {
          let averageRating = user["averagerating"]
          let totalRating = user["totalratings"]
          // console.log("transaction", user, averageRating, totalRating)
          let newAvgrate = ((Number(averageRating) * Number(totalRating)) + (Number(this.onRatingChangeResult.rating))) / (Number(totalRating) + 1)
          let newTotrate = Number(totalRating) + 1
          user["averagerating"] = newAvgrate.toString();
          user["totalratings"] = newTotrate.toString();
          // console.log("trnew rating", newAvgrate, newTotrate)


        }

        return user ? user : 1


      })

    })

  };
  viewOffer(catname, auction, state, pid) {
    this.afAuth.authState.subscribe(res => {
      // if (res.uid == uid) {
      let prodUid
      let productData = {};
      this.db.object('/products/' + catname + '/' + auction + '/' + state + '/' + pid, { preserveSnapshot: true })
        .subscribe(snapshot => {
          productData = snapshot.val();
          prodUid = productData['uid'];
          if (res.uid == prodUid) {
            this.db.list('/products/' + catname + '/' + auction + '/' + state + '/' + pid + '/' + 'orders', {
              query: {
                orderByChild: 'boughtPrice'

              }
            }).subscribe(items => {

              this.viewoffer = items;
              // console.info("viewoffer", this.viewoffer);

            });

          }

        })

    })
  }

  accept(oid, oQuantity, orderprice) {

    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let product_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)

        product_refer.$ref.transaction(product => {
          let P_quantity = product["quantity"]
          // console.log("transaction", product.orders[oid], oid, P_quantity, oQuantity)

          if (Number(P_quantity) >= Number(oQuantity)) {

            product["quantity"] = (Number(P_quantity) - Number(oQuantity)).toString();
            let num = 0;
            product.orders[oid]["rating"] = num.toString();

            if (product.ratings == undefined) {
              product["ratings"] = { [oid]: { rating: num.toString(), sellerid: res.uid } };
            }
            else {
              product.ratings[oid] = { rating: num.toString(), sellerid: res.uid };
            }




            // this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/'+oid).update({
            //   rating: "0"
            // })
            return product ? product : 1
          }
          else {
            swal("Buy Now", "Error in accepting order,quantity in stock is less then quantity required in order. Please increase the stock quantity first", "warning");
          }


        }).then(success => {
          let user_bought_refer = this.db.object('users/' + oid + '/products/bought/' + this.pid)
          let user_buying_refer = this.db.object('users/' + oid + '/products/buying/' + this.pid)
          let unmark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid)
          unmark.$ref.update({
            seller_marked_paid: "no",

          })

          user_bought_refer.set({
            boughtPrice: orderprice.toString(),
            boughtQuantity: oQuantity.toString(),
            auctionType: this.auction.toString(),
            category: this.catname.toString(),
            state: this.state.toString()

          })

          ////////////////////////Product remove user buying node//////////
          user_buying_refer.remove()

          ///////////////////////////////////End//////////////////////////
        }).catch(error => {

        })

      }
    })


  }

  reject(oid) {
    swal({
      title: "Are you sure that you want to reject this order?",
      text: "",
      // icon: "warning",

    })
      .then(willDelete => {
        if (willDelete) {
          this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid).remove()
          swal("Offer rejected", "", "success");
        }
      });
  }
  rating(oid) {
    // console.log(this.starsCount);
    swal({
      title: "Are you sure that you want to rate this order?",
      text: "",

    })
      .then(willDelete => {
        if (willDelete) {
          this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid).update({
            rating: this.starsCount.toString(),
          })
        }
      });
  }
  //// seller offer///
  sellcountid(oid) {
    this.countofferid = oid;
    // console.log(this.countofferid)
  }
  sellerCounteroffer() {
    // console.log(Number(this.model.quantity), Number(this.model.price))
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        if (Number(this.quantity) == 0) {
          swal(
            'Buy Now',
            'This item is currently out of stock.',
            'warning'
          )
        }
        else if (Number(this.model.quantityy) <= 0) {
          swal(
            'Buy Now',
            'Please enter a valid quantity.',
            'warning'
          )
        }
        else if (Number(this.model.quantity) > Number(this.quantity)) {
          swal(
            'Buy Now',
            'Not enough stock available',
            'warning'
          )
        }
        else if (Number(this.model.quantity) <= Number(this.quantity)) {
          let counter_offer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
          counter_offer.$ref.transaction(counter => {
            if (counter.counterOffers == undefined) {
              let num = 1;
              counter["counterOffers"] = { [this.countofferid]: { counterOfferCount: num.toString(), quantity: this.model.quantity.toString(), pricePerItem: this.model.price.toString(), b_id: [this.countofferid].toString() } };
              swal(
                'Counter Offer',
                'Counter offer (1/5) sent to buyer',
                'success'
              )
            }
            else if (counter.counterOffers[this.countofferid] == undefined) {
              let num = 1;
              counter["counterOffers"][this.countofferid] = { counterOfferCount: num.toString(), quantity: this.model.quantity.toString(), pricePerItem: this.model.price.toString(), b_id: [this.countofferid].toString() };
              swal(
                'Counter Offer',
                'Counter offer (1/5) sent to buyer',
                'success'
              )
            }

            else if (Number(counter.counterOffers[this.countofferid]["counterOfferCount"]) == 5) {
              swal(
                'Counter Offer',
                'Yuou have already sent 5 counter offers',
                'info'
              )
            }
            else if (Number(counter.counterOffers[this.countofferid]["counterOfferCount"]) < 5) {
              let current_counter = Number(counter.counterOffers[this.countofferid]["counterOfferCount"])
              current_counter += 1;
              counter.counterOffers[this.countofferid] = { counterOfferCount: current_counter.toString(), quantity: this.model.quantity.toString(), pricePerItem: this.model.price.toString(), b_id: [this.countofferid].toString() };
              swal(
                'Counter Offer',
                'Counter offer (' + current_counter + '/5) sent to buyer',
                'success'
              )
            }
            // console.log("counter", counter)
            return counter ? counter : 1
          })

        }

      }
    })


  }
  buyerStar($event: IStarRatingOnRatingChangeEven, ) {
    this.onRatingChangeResult = $event;
  }
  buyerRating(oid, sid) {
    // console.log(oid, sid, this.onRatingChangeResult.rating)
    this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/ratings/' + oid).update({
      rating: this.onRatingChangeResult.rating.toString()
    }).then(success => {
      swal("Rating", "Thanks for sharing your valuable experience with us.", "success");

      let user_refer = this.db.object('users/' + sid)

      user_refer.$ref.transaction(user => {
        if (user != null) {
          let averageRating = user["averagerating"]
          let totalRating = user["totalratings"]
          // console.log("transaction", user, averageRating, totalRating)
          let newAvgrate = ((Number(averageRating) * Number(totalRating)) + (Number(this.onRatingChangeResult.rating))) / (Number(totalRating) + 1)
          let newTotrate = Number(totalRating) + 1
          user["averagerating"] = newAvgrate.toString();
          user["totalratings"] = newTotrate.toString();
          // console.log("trnew rating", newAvgrate, newTotrate)


        }

        return user ? user : 1


      })

    })
  }
  counterofferid(cid) {
    // console.log("cid", cid);
    this.db.list('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + cid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.counteroffer[snapshot.key] = snapshot.val();
          // console.log("counter offer", this.counteroffer);
        })
      })

  }
  buyerReject(bid) {
    let buyer_offer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + bid)
    buyer_offer.$ref.child('pricePerItem').remove();
    buyer_offer.$ref.child('quantity').remove();
    swal(
      'Counter Offer',
      'Counter offer rejected',
      'success'
    )
  }
  buyerAccept(oid, oQuantity, orderprice) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let product_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)

        product_refer.$ref.transaction(product => {
          let P_quantity = product["quantity"]
          // console.log("transaction", product.orders[oid], oid, P_quantity, oQuantity)


          product["quantity"] = (Number(P_quantity) - Number(oQuantity)).toString();
          let num = 0;
          let str = "Counter offer accepted "
          product.orders[oid]["rating"] = num.toString();
          product.orders[oid]["boughtPrice"] = orderprice.toString();
          product.orders[oid]["boughtQuantity"] = oQuantity.toString();
          product.orders[oid]["note"] = str.toString();

          if (product.ratings == undefined) {
            product["ratings"] = { [oid]: { rating: num.toString(), sellerid: res.uid } };
          }
          else {
            product.ratings[oid] = { rating: num.toString(), sellerid: res.uid };
          }


          return product ? product : 1



        }).then(success => {
          this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + oid).remove()

          let user_bought_refer = this.db.object('users/' + oid + '/products/bought/' + this.pid)
          let user_buying_refer = this.db.object('users/' + oid + '/products/buying/' + this.pid)

          user_bought_refer.set({
            boughtPrice: orderprice.toString(),
            boughtQuantity: oQuantity.toString(),
            auctionType: this.auction.toString(),
            category: this.catname.toString(),
            state: this.state.toString()

          })

          ////////////////////////Product remove user buying node//////////
          user_buying_refer.remove()

          ///////////////////////////////////End//////////////////////////
        }).catch(error => {

        })

      }
    })

  }
  buyercountid(oid) {
    this.buyercountofferid = oid;
    // console.log(this.buyercountofferid)
  }
  buyerCounteroffer() {
    // console.log(Number(this.model.quantity), Number(this.model.price), this.buyercountofferid)
    let buyer_offer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/counterOffers/' + this.buyercountofferid)
    let buyer_order = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.buyercountofferid)
    buyer_order.update({
      boughtPrice: this.model.price.toString(),
      boughtQuantity: this.model.quantity.toString()

    })
    buyer_offer.$ref.child('pricePerItem').remove();
    buyer_offer.$ref.child('quantity').remove();

    swal(
      'Counter Offer',
      'Buyer counter offer send',
      'success'
    )

  }
  shareLocation(lid) {
    // console.log(lid)
    this.buyer_location_id = lid
    // $('#location').css('display', 'block');
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        // console.log(pos);
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;

        this._ps.locationShare(this.lat, this.lng).subscribe(data => {
          this.selllocation = data;
          this.sell_location_full_name = this.selllocation.results[0].formatted_address;
          this.sell_location_short_name = this.selllocation.results[0].address_components[1].short_name
          // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
        })
      });

    }
  }
  updateLocation(lid, lat, long) {
    // console.log(lid, lat, long)
    this.buyer_location_id = lid
    this.lng = long;
    this.lat = lat;

    this._ps.locationShare(this.lat, this.lng).subscribe(data => {
      this.selllocation = data;
      this.sell_location_full_name = this.selllocation.results[0].formatted_address;
      this.sell_location_short_name = this.selllocation.results[0].address_components[1].short_name
      // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
    })
  }
  markPaid(oid) {
    // console.log(oid);
    let mark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid)
    mark.$ref.update({
      seller_marked_paid: "yes",

    })
  }
  unmarkPaid(oid) {
    // console.log(oid);
    let unmark = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + oid)
    unmark.$ref.update({
      seller_marked_paid: "no",

    })
  }

  placeMarker($event) {

    // console.log($event, navigator)
    this.lng = $event.coords.lng;
    this.lat = $event.coords.lat;
    this._ps.locationShare(this.lat, this.lng).subscribe(data => {
      this.selllocation = data;
      this.sell_location_full_name = this.selllocation.results[0].formatted_address;
      this.sell_location_short_name = this.selllocation.results[0].address_components[1].short_name
      // console.log("data", this.selllocation, this.sell_location_full_name, this.sell_location_short_name)
    })

    // console.log($event.coords.lat);
    // console.log($event.coords.lng);
  }

  sellerLocation() {
    let ary = {
      latitude: this.lat,
      longitude: this.lng
    }

    let location = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.buyer_location_id)
    location.$ref.update({
      address: this.sell_location_full_name,
      latitude: this.lat,
      longitude: this.lng,
    }).then(success => {
      $('#location').css('display', 'none');
      $('.modal-backdrop.in').css('opacity', 0);
      $('.modal-backdrop.in').css('display', 'none');
      $('body').removeClass('modal-open');
      $('body').css('padding-right', 17);

      swal(
        'Share Location',
        'Location shared with buyer successfully.',
        'success'
      )
    })
  }

  bidSellerLocation() {
    let location = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/bids/' + this.buyer_location_id)
    location.$ref.update({
      address: this.sell_location_full_name,
      latitude: this.lat,
      longitude: this.lng,
    }).then(success => {
      $('#bidSellerlocation').css('display', 'none');
      $('.modal-backdrop.in').css('opacity', 0);
      $('.modal-backdrop.in').css('display', 'none');
      $('body').removeClass('modal-open');
      $('body').css('padding-right', 17);

      swal(
        'Share Location',
        'Location shared with buyer successfully.',
        'success'
      )
    })

  }
  ////////////////////////////////////////////////END//////////////////////////////////


  //////////////////// Stock Quantity & stop offer & stop orders & get orders & Hide item & Show item  & end list///////////////////////////
  stockQuantity() {
    let stock_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
    stock_refer.update({
      quantity: this.model.quantity.toString()
    })
    swal(
      'Stock Quantity',
      'Quantity in stock , set to ' + this.model.quantity + ' successfully',
      'success'
    )
  }
  stopoffers() {
    swal({
      title: 'Offers',
      text: "Buyers will not be able to send you offers on different amount per item",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      let stop_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      stop_refer.$ref.child('acceptOffers').remove().then(success => {
        this.stop = false;

        swal(
          'Offers',
          'Buyers will view your item send offers on price per item set you during listing ($1).',
          'success'
        )
      });

    })

  }
  sellerAcceptoffers() {

    swal({
      title: 'Offers',
      text: "Buyers will not be able to send you offers on different amount per item",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      let accept_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      accept_refer.update({
        'acceptOffers': "yes"
      }).then(success => {
        this.stop = true;
        swal(
          'Offers',
          'Buyers will view your item and send you offers on amount per item they willing to busy',
          'success'
        )
      });

    })

  }
  stoporders() {
    swal({
      title: 'Ordering',
      text: "Are you sure you want to stop receiving new orders from buyer on this item?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      let order_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      order_refer.update({
        'ordering': "stopped"
      }).then(success => {
        this.stop_orders = true;
        swal(
          'Ordering',
          'Buyers will not be able to send offers to you. You can continue receiving new offers by clicking " Get New Orders " button, anytime. ',
          'success'
        )
      });

    })
  }
  getorders() {
    swal({
      title: 'Ordering',
      text: "Get new orders from buyer on this item?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      let order_refer = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      order_refer.$ref.child('ordering').remove().then(success => {
        this.stop_orders = false;
        swal(
          'Ordering',
          'Buyers will view your item and send you offers. ',
          'success'
        )
      });

    })
  }
  hideitem() {
    swal({
      title: 'Item visibility setting',
      text: "Hide : Item will be hidden from new viewers in search results but will appear to old viewers, like in Watch list",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hide'
    }).then((result) => {
      let hide_item = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      hide_item.update({
        'visibility': "hidden"
      }).then(success => {
        this.Hideitem = true;
      });

    })
  }

  showitem() {
    swal({
      title: 'Item visibility setting',
      text: "Show : Item will be visible to new users.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Show'
    }).then((result) => {
      let show_item = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      show_item.update({
        'visibility': "shown"
      }).then(success => {
        this.Hideitem = false;
      });

    })
  }
  listItemChange(item, index) {
    this.listget = item;
    this.listindex = index;
    // console.log(item, index)
  }
  endlisting() {
    swal({
      title: 'Item Listing',
      text: "Are you sure you want to end item listing. You will no receive offer/order on product until you Re-List item",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      let listing = this.db.list('endListing/' + this.pid)
      listing.push({
        'reason': this.listget.toString(),
        'value': this.listindex.toString()
      })
      var y = firebase.database.ServerValue.TIMESTAMP;
      let end_list = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
      end_list.update({
        'endTime': y
      })
      swal(
        'Item Listing',
        'Item listing is ended successfully. You can re-list item by clicking "Re-List Item" button below.',
        'success'
      )
      this.relistTime = false;
    })
  }

  reListItem() {
    // console.log(this.model.price, this.model.listingTime)
    // let  y = firebase.database.ServerValue.TIMESTAMP;
    let y = new Date().getTime() + parseInt(this.model.listingTime, 10)
    let re_list = this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid)
    re_list.update({
      'endTime': y,
      'startPrice': this.model.price.toString()
    })
    swal(
      'Re-Listed',
      'Listing time is increased successfully.',
      'success'
    )
    this.relistTime = true;

  }
  watchlist() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let watch_list = this.db.object('users/' + res.uid + '/products/watching/' + this.pid)
        watch_list.set({
          'auction': this.auction.toString(),
          'category': this.catname.toString(),
          'endTime': parseInt(this.product['endTime'], 10),
          'city': this.product['city'].toString(),
          'state': this.state.toString(),
          'key': this.pid.toString()

        }).then((success) => {
          this.watch = false;
          swal(
            'MySell4Bids Watch List',
            'Item has been added to MySell4Bids Watch List',
            'success'
          )
        })
      }
    })
  }
  removeWatchlist() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        swal({
          title: 'MySell4Bids Watch List',
          text: "Are you sure you want to unwatch this item?",
          type: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'UN-WATCH'
        }).then((result) => {
          let unwatch_list = this.db.object('users/' + res.uid + '/products/watching/' + this.pid)
          unwatch_list.remove()
          this.watch = true;

        })
      }
    })
  }
  ////////////////// end /////////////////////////////////
  ////////////////////////////////////////JOB OFFER////////////////////////////////////
  applynow() {
    swal({
      title: "Apply Now?",
      text: "Are you sure you want to apply at " + this.boughtprice + " dollars ?",
      type: "warning",

    })
      .then(willDelete => {
        this.joboffer();
        // if (willDelete) {
        //   swal("Deleted!", "Your imaginary file has been deleted!", "success");
        // }
      });

  }

  joboffer() {
    // console.log("form value", this.model.salary);
    if (this.model.salary) {
      this.boughtprice = this.model.salary
    }
    // console.log(firebase.database.ServerValue.TIMESTAMP);
    if (this.endTime - new Date().getTime() > 0 || this.endTime == -1) {
      // console.log("junaid1");

      this.db.object('products/' + this.catname + '/' + this.auction + '/' + this.state + '/' + this.pid + '/orders/' + this.currentUser).update({
        boughtPrice: this.boughtprice,
        boughtQuantity: "1",
        name: this.currentname,
        uid: this.currentUser

      })
      this.db.object('users/' + this.currentUser + '/products/buying/' + this.pid).set({
        boughtPrice: this.boughtprice,
        boughtQuantity: "1",
        auctionType: this.auction,
        category: this.catname,
        state: this.state

      })
      swal(
        'Job Now',
        'Your apply now offer send',
        'success'
      )


    }
    else {

      swal(
        'Ordering is already stopped',
        '',
        'warning'
      )
    }
  }


  ////////////////////////////////////////END/////////////////////////////////////////


  ////////////////////////////// Chat ////////////////////////////////////////////////
  chatInitiate(name, img, token, uid) {
    // console.log(name, img, token, uid)
    if (img == undefined) {
      img = "";
    }
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let buyerinfo = {}
        this.db.list('/users/' + res.uid, { preserveSnapshot: true })
          .subscribe(snapshots => {
            snapshots.forEach(snapshot => {

              buyerinfo[snapshot.key] = snapshot.val();

            })
            // console.log("buyer", buyerinfo, buyerinfo['name'], buyerinfo['image'], buyerinfo['token'], buyerinfo['uid'])
            if (buyerinfo['image'] == undefined) {
              buyerinfo['image'] = "";
            }
            let time = new Date().getTime();
            let seller = {
              name: name.toString(),
              image: img.toString(),
              token: token.toString(),
              uid: uid.toString(),
              unreadCount: "0",
              lastMessageTime: time

            }
            let spath = this.db.object('users/' + res.uid + '/chat/' + uid, { preserveSnapshot: true });
            let bpath = this.db.object('users/' + uid + '/chat/' + res.uid);
            spath.subscribe(data => {
              if (data.val() == null) {

                spath.set(seller).then((success) => {
                  let buyer = {
                    name: buyerinfo['name'],
                    image: buyerinfo['image'].toString(),
                    token: buyerinfo['token'],
                    uid: res.uid.toString(),
                    unreadCount: "0",
                    lastMessageTime: time
                  }

                  bpath.set(buyer)
                })

              }
              else {
                // console.log('data exists');
              }
            })
          })
      }
    })
    let url = 'chat';
    this._nav.navigate([url], { queryParams: { uid: uid } });
  }
  private chat() {
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
  }


  ////////////////////////////// End /////////////////////////////////////////////////
}
