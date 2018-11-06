import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import { SimpleGlobal } from 'ng2-simple-global';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, NgForm } from "@angular/forms";
import { Http, Headers, Response } from '@angular/http';
import { ProfileService } from "./profile.service";
import swal from 'sweetalert2';
import 'firebase/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
declare const $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileid = {}
  prof_dict: any = [];
  userproduct: any = [];
  sellproduct: any = [];
  sellingkey: any = [];
  prodinfo: any = [];
  boughtkey: any = [];
  boughtproduct: any = [];
  boughtinfo: any = [];
  buyingkey: any = [];
  buyingproduct: any = [];
  buyinginfo: any = [];
  watchingkey: any = [];
  watchingproduct: any = [];
  watchinginfo: any = [];
  followerinfo: any = [];
  followeruser: any = [];
  followinginfo: any = [];
  followinguser: any = [];
  user: Observable<any>
  currentuser = {};
  name = {};
  email;
  photoUrl;
  emailVerified;
  uid;

  sellauction: any = [];
  sellcat: any = [];
  sellstate: any = [];
  boughtauction: any = [];
  boughtcat: any = [];
  boughtstate: any = [];
  buyingauction: any = [];
  buyingcat: any = [];
  buyingstate: any = [];
  watchingauction: any = [];
  watchingcat: any = [];
  watchingstate: any = [];
  isChecked;
  model = {};
  location_Data = { "city": "", "state": "" };
  upload_url = { "image": "" };
  buying_status;
  selling_status;
  config = {};
  constructor(private _serv: ProfileService, private _http: Http, private sg: SimpleGlobal, private afAuth: AngularFireAuth, private db: AngularFireDatabase, private _nav: Router) {
    this.user = this.afAuth.authState
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentuser = res.uid;
        // console.log('user is logged in',res.uid);
      } else {
        // console.log('user not logged in');
      }
    });

    this.profileid = JSON.parse(localStorage.getItem("profileid"));
    // console.log("get id", this.profileid);
    ///////////////////////user profile/////////////////////////////
    // this.db.list('/users/'+this.profileid,{ preserveSnapshot: true})
    this.db.list('/users/' + this.profileid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.prof_dict[snapshot.key] = snapshot.val();
        });
        this.config = this.prof_dict.configs
        console.log("profile",this.config);



      })
    /////////////////////////end////////////////////////////

    ///////////////////////// user profile products////////
    ///////////////////////user selling product/////////////////////

    // this.db.list('/users/'+this.prof_dict+'/products/selling',{ preserveSnapshot: true})
    this.db.list('/users/' + this.profileid + '/products/selling', { preserveSnapshot: true })

      .subscribe(snapshots => {
        this.sellcat=[];
        this.sellauction = [];
        this.sellstate =[];
        this.sellingkey = [];
        this.userproduct =[];
        snapshots.forEach(snapshot => {
          this.sellcat.push(snapshot.val()['category'])
          this.sellauction.push(snapshot.val()['auctionType'])
          this.sellstate.push(snapshot.val()['state']);
          this.sellingkey.push(snapshot.key);
          this.userproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);

        });
        console.log("cat", this.sellcat, "auction", this.sellauction, "state", this.sellstate)
        for (let i = 0; i < this.userproduct.length; i++) {
          let pinfo = {};

          this.db.list('/products/' + this.userproduct[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                pinfo[snapshot.key] = snapshot.val();



              });



            })
          console.log("pp", pinfo);

          this.prodinfo.push(pinfo);
        }
        // console.log("selling",this.prodinfo);
      })
    /////////////////////////////end///////////////////////////////////////////////

    /////////////////////////////////////Bought/////////////////////////////////////
    this.db.list('/users/' + this.profileid + '/products/bought', { preserveSnapshot: true })

      .subscribe(snapshots => {
        this.boughtcat = [];
        this.boughtauction = [];
        this.boughtstate = [];
        this.boughtkey = [];
        this.boughtproduct =[];
        snapshots.forEach(snapshot => {
          this.boughtcat.push(snapshot.val()['category'])
          this.boughtauction.push(snapshot.val()['auctionType'])
          this.boughtstate.push(snapshot.val()['state']);
          this.boughtkey.push(snapshot.key);
          this.boughtproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);

        });
        for (let i = 0; i < this.boughtproduct.length; i++) {
          let binfo = {};

          this.db.list('/products/' + this.boughtproduct[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                binfo[snapshot.key] = snapshot.val();




              });



            })
          this.boughtinfo.push(binfo);
        }
        // console.log("bought",this.boughtinfo);
      })

    ////////////////////////////end///////////////////////

    /////////////////////////////Buying///////////////////
    this.db.list('/users/' + this.profileid + '/products/buying', { preserveSnapshot: true })

      .subscribe(snapshots => {
        this.buyingcat =[];
        this.buyingauction=[];
        this.buyingstate = [];
        this.buyingkey = [];
        this.buyingproduct = [];
        snapshots.forEach(snapshot => {
          this.buyingcat.push(snapshot.val()['category'])
          this.buyingauction.push(snapshot.val()['auctionType'])
          this.buyingstate.push(snapshot.val()['state']);
          this.buyingkey.push(snapshot.key);
          this.buyingproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auctionType'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);

        });
        for (let i = 0; i < this.buyingproduct.length; i++) {
          let byinfo = {};

          this.db.list('/products/' + this.buyingproduct[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                byinfo[snapshot.key] = snapshot.val();




              });



            })
          this.buyinginfo.push(byinfo);
        }
        // console.log("buying",this.buyinginfo);
      })
    ////////////////////////////end//////////////////////

    ///////////////////////////watching//////////////////////
    this.db.list('/users/' + this.profileid + '/products/watching', { preserveSnapshot: true })

      .subscribe(snapshots => {
        this.watchingcat =[];
        this.watchingauction =[];
        this.watchingstate = [];
        this.watchingkey =[];
        this.watchingproduct =[];
        snapshots.forEach(snapshot => {
          this.watchingcat.push(snapshot.val()['category'])
          this.watchingauction.push(snapshot.val()['auction'])
          this.watchingstate.push(snapshot.val()['state']);
          this.watchingkey.push(snapshot.key);
          this.watchingproduct.push(snapshot.val()['category'] + '/' + snapshot.val()['auction'] + '/' + snapshot.val()['state'] + '/' + snapshot.key);

        });
        for (let i = 0; i < this.watchingproduct.length; i++) {
          let wtinfo = {};

          this.db.list('/products/' + this.watchingproduct[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                wtinfo[snapshot.key] = snapshot.val();




              });



            })
          this.watchinginfo.push(wtinfo);
        }
        // console.log("watching",this.watchinginfo);
      })
    //////////////////////////end///////////////////////////

    //////////////////////////////////////followers///////////////

    this.db.list('/users/' + this.profileid + '/followers', { preserveSnapshot: true })

      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.followeruser = [];

        if(snapshot.val() == 1){
          this.followerinfo.push(snapshot.key);
        }
        });
        console.log("ff",this.followerinfo);
        for (let i = 0; i < this.followerinfo.length; i++) {
          let flinfo = {};

          this.db.list('/users/' + this.followerinfo[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                flinfo[snapshot.key] = snapshot.val();

              });



            })
          this.followeruser.push(flinfo);
        }
        // console.log("followers",this.followeruser);
      })

    //////////////////////////////////////end////////////////////

    ///////////////////////////////////following//////////////////
    this.db.list('/users/' + this.profileid + '/followings', { preserveSnapshot: true })

      .subscribe(snapshots => {
        this.followinginfo =[];
        snapshots.forEach(snapshot => {
        if(snapshot.val() == 1){

          this.followinginfo.push(snapshot.key);
        }
        });
        // console.log("ff",this.followerinfo);
        for (let i = 0; i < this.followinginfo.length; i++) {
          let fginfo = {};

          this.db.list('/users/' + this.followinginfo[i], { preserveSnapshot: true })
            .subscribe(snapshots => {
              snapshots.forEach(snapshot => {


                fginfo[snapshot.key] = snapshot.val();




              });



            })
          this.followinguser.push(fginfo);
        }
        console.log("following", this.followinguser);
      })

    //////////////////////////////////end////////////////////////

  }

  checkValue(event: any) {
    console.log(event);
  }
  singleproduct(title, cat, auction, state, pid, uid) {
    console.log( cat, auction, state, pid, uid)
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
  singleuser(user, id) {
    localStorage.setItem("userinfo", JSON.stringify(id));
    let url = 'user/' + id + '/' + user.name;

    url = url.replace(/&/g, 'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);
    //  console.log("user",this.userinfo);

  }


  ngOnInit() {

    window.scrollTo(0, 0);
  }
  private basePath: string = '/uploads';
  changeBuyingStatus(event) {
    console.log(event.target.checked);
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let buying_update = {}
        if (event.target.checked == true) {
          buying_update = { buyingActivities: "on" }
        }
        if (event.target.checked == false) {
          buying_update = { buyingActivities: "off" }

        }

        let user_config = '/users/'+res.uid+'/configs';
        this.db.object(user_config).update(buying_update)
      }
    })
  }
  changeSellingStatus(event) {
    console.log(event.target.checked);
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        let selling_update = {}
        if (event.target.checked == true) {
          selling_update = { sellingActivities: "on" }
        }
        if (event.target.checked == false) {
          selling_update = { sellingActivities: "off" }

        }

        let user_config = '/users/'+res.uid +'/configs';
        this.db.object(user_config).update(selling_update)
      }
    })
  }
  // changePhoto() {
  //   swal({
  //     title: 'Select Photo',
  //     input: 'file',
  //     showCancelButton: true,
  //     confirmButtonText: 'Submit',
  //     showLoaderOnConfirm: true,
  //
  //   }).then((file) => {
  //     if (file) {
  //       console.log(file, file.name)
  //       let storageRef = firebase.storage().ref();
  //       let uploadTask = storageRef.child(`/uploads/${file.name}`).put(file);
  //       uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //         (snapshot) => {
  //           // upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
  //           console.log("url", uploadTask.snapshot.downloadURL);
  //
  //         },
  //
  //         (error) => {
  //           // upload failed
  //           console.log(error)
  //         },
  //         () => {
  //
  //           this.profileImg(uploadTask.snapshot.downloadURL)
  //         })
  //
  //
  //     }
  //   });
  //
  //
  // }
  profileImg(url) {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.db.object('users/' + res.uid).update({
          'image': url
        }).then((success) => {
          swal(
            'Edit Profile',
            'Profile image updated successfully.',
            'success'
          )
        })
      }
    })

  }
  zipcodeCheck(zip) {
    console.log(zip);
    this._serv.zipcode(zip).subscribe(
      data => {
        this.location_Data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  onSubmit(f: NgForm) {
    if (f.valid == true) {
      console.log(f.value)
      this._serv.zipcode(f.value.zipCode).subscribe(
        data => {
          this.location_Data = data;
          console.log(data);
          this.afAuth.authState.subscribe(res => {
            if (res && res.uid) {
              this.db.object('users/' + res.uid).update({
                'name': f.value.name,
                'zipCode': f.value.zipCode,
                'city': this.location_Data.city,
                'state': this.location_Data.state
              }).then((success) => {
                swal(
                  'Edit Profile',
                  'Profile updated successfully.',
                  'success'
                )
                this.model['name'] = null;
                this.model['zipCode'] = null;
                $('#editDetail').css('display', 'none');
                $('.modal-backdrop.in').css('opacity', 0);
                $('.modal-backdrop.in').css('display', 'none');
                $('body').removeClass('modal-open');
                $('body').css('padding-right', 17);
              })
            }
          })
        },
        error => {
          console.log(error);
        });
    }
  }

  zipcode(zip) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.get('https://apis.rfpgurus.com/zipcode/' + zip + '/',
      { headers: headers }).map((response: Response) => response.json());

  }
}
