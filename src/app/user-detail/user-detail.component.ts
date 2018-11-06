import { Component, OnInit,OnDestroy  } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { ISubscription } from "rxjs/Subscription";
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,OnDestroy {
  private subscription: ISubscription;
  
  user: any = [];
  userkey = {};
  userproduct: any = [];
  sellproduct: any = [];
  prof_dict: any = [];
  prodinfo: any = [];
  product: any = [];
  sellingkey: any = [];


  catRecord: any = [];
  auctionRecord: any = [];
  stateRecord: any = [];
  currentUser: string;
  check_follow = [];
  followboolean: boolean = false;
  keys: any = [];
  followPerson;
  // customers: FirebaseListObservable<any[]>;
  
  constructor(public authService: AuthService, private afAuth: AngularFireAuth, private sg: SimpleGlobal, private db: AngularFireDatabase, private _nav: Router) {


  }

  loadFunction(userkey) {
    ///////////////////////////user get////////////////////////////

    this.subscription = this.db.list('/users/' +userkey, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.prof_dict[snapshot.key] = snapshot.val();

        });
        

      })

    ///////////////////////////end/////////////////////////////////


   

  }
  checkfollow(userkey){
  
   this.afAuth.authState.subscribe(res => {
    if (res && res.uid) {
      this.currentUser = res.uid;
      console.log("currentuser", this.currentUser)
      this.db.list('/users/' +userkey+'/followers', { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.check_follow[snapshot.key] = snapshot.val()
           this.followPerson  =   this.check_follow[res.uid]
       console.log("follow",this.check_follow[res.uid])
        });
        for (let key in this.check_follow) {
          if(this.check_follow[key] == 1){
            this.keys = { key: key, value: this.check_follow[key] };
          }
            console.log("check", this.keys)
         
        }

      })

    }
  })


}
followUnfollow(){
  if(this.keys.key == this.currentUser){
    return true;
  }else{
    return false;
  }
}
  initilize() {
    this.user = [];
    this.userkey = {};
    this.userproduct = [];
    this.sellproduct = [];

    this.prof_dict = [];
    this.prodinfo = [];
    this.product = [];
    this.sellingkey = [];
  }

  userSellingProduct(userkey){
    ///////////////////////user selling product/////////////////////

    this.db.list('/users/' + userkey + '/products/selling', { preserveSnapshot: true })
    .subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.catRecord.push(snapshot.val()['category'])
        this.auctionRecord.push(snapshot.val()['auctionType'])
        this.stateRecord.push(snapshot.val()['state']);
        this.sellingkey.push(snapshot.key);
        this.userproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);

      });
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

      console.log(this.prodinfo.length);


    })

  }

  singleproduct(title, cat, auction, state, pid, uid) {
    console.log( cat, auction, state, pid);
    this.sg['category'] = cat;
    this.sg['AuctionType'] = auction;
    this.sg['state'] = state;
    this.sg['pid'] = pid;
    this.sg['uid'] = uid;
    // localStorage.setItem("singleproduct",JSON.stringify(sell));
    let urlTitle;
    let mainTitle;
    urlTitle = title.replace(/[^A-Za-z ]/g, "");
    mainTitle = urlTitle.replace(/\s+/g, '-').toLowerCase();
    let url = 'item/'+mainTitle;
    this._nav.navigate([url], { queryParams: { cat: cat, auction: auction, state: state, pid: pid, uid: uid } });
    //  console.log("set",sell);
    //  this._nav.navigate([url],{ queryParams:{id: 'lklklk' } });

  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.user = JSON.parse(localStorage.getItem("userinfo"));
    this.userkey = this.user;
    this.loadFunction(this.userkey)
    this.checkfollow(this.userkey)
    this.userSellingProduct(this.userkey)
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  follow() {
      this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {


        let ukey = this.userkey
        let folowing_user = this.db.object('users/' + res.uid)
        folowing_user.$ref.transaction(folowing => {
          console.log("followingcount", folowing['followingsCount'])
          let dummy_value: any = "1"
          if (folowing.followings == undefined) {
            folowing["followings"] = { [`${ukey}`]: dummy_value }
          }
          else {
            folowing.followings[`${ukey}`] = dummy_value;

          }
          let num = 1
          if (folowing["followingsCount"] == undefined) {
            folowing["followingsCount"] = num.toString()
          }
          else {

            let count: number
            count = parseInt(folowing["followingsCount"]);
            count += 1;
            console.log("count", count)
            let countUpdate = {};
            folowing["followingsCount"] = count.toString()


          }

          return folowing ? folowing : 1
        }).then((success) => {
          swal(
            'Followings',
            'You have successfully added seller to your following list. We will notify you about seller each new listing.',
            'success'
          )
          let follower_user = this.db.object('users/' + ukey)
          follower_user.$ref.transaction(folower => {
            let value: any = "1"
            if (folower.followers == undefined) {
              folower["followers"] = { [`${res.uid}`]: value }
            }
            else {
              folower.followers[`${res.uid}`] = value;

            }
            let num = 1
            if (folower["followersCount"] == undefined) {
              folower["followersCount"] = num.toString()
            }
            else {

              let fcount: number
              fcount = parseInt(folower["followersCount"]);
              fcount += 1;
              console.log("fcount", fcount)
              folower["followersCount"] = fcount.toString()


            }

            return folower ? folower : 1
          })

        })
      }
    })
  }
  unfollow() {
    this.followboolean == true;                
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {


        let ukey = this.userkey
        let unfolowing_user = this.db.object('users/' + res.uid)
        // unfolowing_user.$ref.child('followings').child(`${ukey}`).remove().then((success) => {
          unfolowing_user.$ref.transaction(folowing => {
            let fol_zero = 0;
          folowing.followings[`${ukey}`] = "0" ;

            let count: number
            
            count = parseInt(folowing["followingsCount"]);
            count -= 1;
            console.log("count", count)
            folowing["followingsCount"] = count.toString()




            return folowing ? folowing : 1
          }).then((success) => {
            swal(
              'Followings',
              'You have un-followed the seller, you can follow again any time.',
              'success'
            )
            let unfollower_user = this.db.object('users/' + ukey)
            // unfollower_user.$ref.child('followers').child(`${res.uid}`).remove();
            let zero = 0 ;
            unfollower_user.$ref.transaction(folower => {
              folower.followers[`${res.uid}`] = "0";
              let fcount: number
              fcount = parseInt(folower["followersCount"]);
              fcount -= 1;
              folower["followersCount"] = fcount.toString();


              return folower ? folower : 1
            }).then((success) => {
              this.checkfollow(this.userkey)
            })

          // })

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
          // let unwatch_list = this.db.object('users/' +res.uid+ '/products/watching/'+this.pid)
          // unwatch_list.remove()
          // this.watch = true;

        })
      }
    })
  }
}
