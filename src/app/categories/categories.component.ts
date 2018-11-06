import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { SimpleGlobal } from 'ng2-simple-global';
import { SharedData } from './../services/shared-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { ProductService } from './../product.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cats;
  product: any = [];
  models: any = [];
  catidmodel: any = [];
  auction: any = [];
  catname: any = [];

  catid: any = [];
  sellproduct12: any = [];
  userid: any = [];
  userinfo: any = [];
  showSpinner: boolean = true;
  items: FirebaseListObservable<any[]>;
  itemsSubscription;


  //Pagination portion
  products_key: any = [];
  product_path_array_counter: number = 0;
  product_path_array: any = [];
  pagination_counter: number = 0;
  end_of_scroll: number = 0;
  lastkey_check: number = 0;
  loop_check_first_time: number = 0;
  loop_check_f: number = 0;
  loop_check_f_limit: number = 0
  control_code_run: number = 0
  movies = new BehaviorSubject([]);
  batch = 15;       // size of each query
  lastKey = ''      // key to offset next query from
  finished = false  // boolean when end of database is reached

  prod = [];
  category = [];
  path_first = '';
  check = 0;
  //path = '/products/Accessories/buy-it-now/DC'
  path = '';
  auction_type = [
    "buy-it-now", "reserve", "non-reserve"
  ];
  dict_state = [
    "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
    "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX",
    "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"
  ];
  //////////////////////// Pagination/////////////////////////
  endkeys: any = [];
  fetchingState;
  record: any = []
  constructor(private afAuth: AngularFireAuth, private _ps: ProductService, public _shareData: SharedData, private sg: SimpleGlobal, private _http1: ProductService, private db: AngularFireDatabase, private _nav: Router) {

  }

  initilize() {
    this.cats = '';
    this.product = [];
    this.models = [];
    this.catidmodel = [];
    this.auction = [];
    this.catid = [];
    this.sellproduct12 = [];
    this.userid = [];
    this.userinfo = [];
  }

  arrayInitialize() {
    this.record = [];
    this.endkeys[0] = 0;
    this.endkeys[1] = 0;
    this.endkeys[2] = 0;
    this.endkeys[3] = 0;
  }
  constructor_two() {

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
            this.arrayInitialize();
            this.getData();
          })
      }
      else {
        this.fetchingState = "NY"
        // this.fetchingState = this.userState
        this.arrayInitialize();
        this.getData();
      }
    })
  }

  getData() {
    let aucIndex = 0;
    for (let auction in this.auction_type) {
      let query = null;
      let qcount = 0;
      if (this.endkeys[aucIndex] == 0) {
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
          endAt: this.endkeys[aucIndex]
        }
      }

      let path = 'products/' + this.cats + '/' + this.auction_type[aucIndex] + '/' + this.fetchingState;
      let aucIndexTemp = aucIndex;

      this.db.list(path, { query }).subscribe(items => {
        // console.log("ahmad",qcount)
        this.showSpinner = false;
        let count = 0;
        items.reverse();
        items.forEach(item => {
          count++;
          if (qcount == 1 && count == items.length) {
          }
          else {
            item['category'] = this.cats;
            item['auctionType'] = this.auction_type[auction];
            item['state'] = this.fetchingState;

            //check if record already exist then replace on that index
            this.record.push(item);
          }
          if (item['chargeTime'] != undefined) {
            this.endkeys[aucIndexTemp] = item['chargeTime'];
          }
        })
      });
      aucIndex++;
    }
  }

  singleproduct(title, acess, catname, auction, state, pid, uid) {
    console.log(catname, auction, state, pid, uid);
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

  ngOnInit() {
    this._shareData.returnSubject().subscribe(data => {
      this.showSpinner = true;
      this.cats = data;
      if (localStorage.getItem("item1")) {
        this.cats = localStorage.getItem("item1");
      }
      window.scrollTo(0, 0);
      this.arrayInitialize();
      this.constructor_two();
    })
  }

  query: any = '';

  onScroll() {
    this.getData();
  }

  private getMovies(path) {

  }
}