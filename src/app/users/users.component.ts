import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { Router, RouterModule } from '@angular/router';

import { ProductService } from './../product.service'
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/take'
import { CategoriesComponent } from './../categories/categories.component'

import{ ToastNotificationService } from '../toast-notification.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[CategoriesComponent]
})
export class UsersComponent implements OnInit, AfterViewInit {
usermodel:any =[] ;
userproduct:any =[] ;
userkey:any =[] ;
userinfo:any = [] ;

//Pagination portion
movies = new BehaviorSubject([]);
users = new BehaviorSubject([]);
batch = 20         // size of each query
lastKey = ''      // key to offset next query from
finished = false  // boolean when end of database is reached
check = 0
currentuser = {};
showSpinner: boolean = true;
show_detail:boolean = true
follow_button:boolean = true

total_users = 0

defaults:any
id:any
follow_var:any = "follow"
user_id:any
users_follow:any = {};
subscribe_follow_check:boolean
subscribe_constr_check:boolean

check_follow_followed:any = 0
// items: FirebaseListObservable<Item[]>;

  constructor(private db: AngularFireDatabase,private _nav:Router,private _ps: ProductService,private afAuth: AngularFireAuth,private toast:ToastNotificationService) {

    this.show_detail = true;
    console.log("User Component Constructor");

    ///Checking if there is user logged in or not
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.currentuser = res.uid
        localStorage.setItem("currentuser",res.uid)
        this.check_follow_followed = 1
        this.show_detail = false
      } else {
        this.show_detail = true
      }
      this.subscribe_constr_check = true;
    });

    //this.check = 0
    this.db.list('/users',{ preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          if(localStorage.getItem("currentuser") != snapshot.key)
            this.userkey.push(snapshot.key);
        });
    })

    //if(this.subscribe_constr_check == true)
    // localStorage.getItem("user") = localStorage.getItem("currentuser")

    this.follow_followed()

   }

   //Method for making 2d and 3d dictionary
  assign(obj, keyPath, value) {
    let lastKeyIndex = keyPath.length-1;
    for (var i = 0; i < lastKeyIndex; ++ i) {
      let key = keyPath[i];
      if (!(key in obj))
        obj[key] = {}
      obj = obj[key];
    }
    obj[keyPath[lastKeyIndex]] = value;
   }
   //this.assign(this.product_path, [this.product_path_array_counter,snapshot.key,obj,state],[prodkey]);



  singleuser(user,id){
    this.userinfo = user;
    localStorage.setItem("userinfo",JSON.stringify(id));
    let url = 'user/'+id+'/'+user.name;
    url=url.replace(/&/g,'and').replace(/\s+/g, '-').toLowerCase();
    this._nav.navigate([url]);
    //console.log("user",this.userinfo);
  }

  ngOnInit() {
    window.scrollTo(0,0);
    //this.defaults = this.loadDefaults()
    this.getUsers();
  }

  ngAfterViewInit () {
    // this.defaults = this.loadDefaults()
  }


  followers_insertion_deletion(key){
    console.log(this.users_follow[key])

    let followersCount_check = 0
    let followers_count = 0

    let followingsCount_check_loginuser = 0
    let followings_count_loginuser = 0

    let innercheck_followers = 0
    let innercheck_followings = 0

    if(this.users_follow[key]){

      let check = 0
      for(let i=0; i < this.userkey.length;i++){
        if(this.userkey[i] == key){
          check = 1;
        }
      }
      if(check == 1) {

        this.users_follow[key] = false
        let val: any = 0

        //// Deleting the node from Firebase /////

        //For onClick user
        var obj = firebase.database().ref('/users/' + key + '/followers/' + localStorage.getItem("user"));
        obj.remove().then(function (ref) {
          console.log(ref)
          // data has been deleted locally and in the database
        }, function (error) {
          console.log("Error:", error);
        });

        //For Loggedin user
        var obj = firebase.database().ref('/users/' + localStorage.getItem("user") + '/followings/' + key);
        obj.remove().then(function (ref) {
          console.log(ref)
          // data has been deleted locally and in the database
        }, function (error) {
          console.log("Error:", error);
        });

        //Removing the followersnotifications node
        var obj = firebase.database().ref('/users/' + key + '/followersnotifications/' + localStorage.getItem("user"));
        obj.remove().then(function (ref) {
          console.log(ref)
          // data has been deleted locally and in the database
        }, function (error) {
          console.log("Error:", error);
        });

        ///Onclick user followersCount updation

        ///Getting FollowersCount value
        this.db.list('/users/' + key, {preserveSnapshot: true})
          .subscribe(snapshots => {
              snapshots.forEach(snapshot => {
                if (snapshot.key == 'followersCount') {
                  followers_count = parseInt(snapshot.val()) - 1;
                  followersCount_check = 1
                }
              })
            },
            error => {
              // this.is_as_error=true;
              console.log(error);
            });
        ///End Onclick user followersCount updation


        ///Logged in user followingsCount updation

        ///Getting FollowingsCount value for the logged in user
        this.db.list('/users/' + localStorage.getItem("user"), {preserveSnapshot: true})
          .subscribe(snapshots => {
              snapshots.forEach(snapshot => {
                if (snapshot.key == 'followingsCount') {
                  followings_count_loginuser = parseInt(snapshot.val()) - 1;
                  followingsCount_check_loginuser = 1
                  //console.log("Followers_count: ",this.followers_count)
                }
              })
            },
            error => {
              // this.is_as_error=true;
              console.log(error);
            });
        ///End Logged in user followingsCount updation
      }//End if(check == 1)
      else{
        return 1;
      }

    }
    else{
      let check = 0
      for(let i=0; i < this.userkey.length;i++){
        if(this.userkey[i] == key){
          check = 1;
        }
      }
      if(check == 1) {

        this.users_follow[key] = true

        /// Inserting data in followers node like '12345':1
        let dummy_value: any = "1"
        var updates = {};
        updates['/users/' + key + '/followers/' + localStorage.getItem("user")] = dummy_value;
        updates['/users/' + localStorage.getItem("user") + '/followings/' + key] = dummy_value;
        firebase.database().ref().update(updates);

        ///Onclick user followersCount updation

        ///Getting FollowersCount value for the click
        this.db.list('/users/' + key, {preserveSnapshot: true})
          .subscribe(snapshots => {
              snapshots.forEach(snapshot => {
                if (snapshot.key == 'followersCount') {
                  followers_count = parseInt(snapshot.val()) + 1;
                  followersCount_check = 1
                  //console.log("Followers_count: ",this.followers_count)
                }
              })
            },
            error => {
              // this.is_as_error=true;
              console.log(error);
            });

        if (followersCount_check == 0) {
          let val: any = 1;
          firebase.database().ref('/users/' + key).update({followersCount: val}).catch(error => console.log("Error", error))
          innercheck_followers = 1
          console.log("Followers check 0")
        }
        ///End Onclick user followersCount updation


        ///Logged in user followingsCount updation

        ///Getting FollowingsCount value for the logged in user
        this.db.list('/users/' + localStorage.getItem("user"), {preserveSnapshot: true})
          .subscribe(snapshots => {
              snapshots.forEach(snapshot => {
                if (snapshot.key == 'followingsCount') {
                  followings_count_loginuser = parseInt(snapshot.val()) + 1;
                  followingsCount_check_loginuser = 1
                  //console.log("Followers_count: ",this.followers_count)
                }
              })
            },
            error => {
              // this.is_as_error=true;
              console.log(error);
            });

        if (followingsCount_check_loginuser == 0) {
          let val: any = 1;
          firebase.database().ref('/users/' + localStorage.getItem("user")).update({followingsCount: val}).catch(error => console.log("Error", error))
          innercheck_followings = 1
        }
        ///End Logged in user followingsCount updation

        ///Notification for Clicked user's
        this.toast.sendNotification(localStorage.getItem("currentusername"), key)
      }//End if(check == 1)
      else{
        return 1;
      }
    }

    if(followersCount_check == 1 && innercheck_followers == 0){
      firebase.database().ref('/users/'+key).update({followersCount:followers_count}).catch(error => console.log("Error",error))
      console.log("Followers check 1")
    }
    if(followingsCount_check_loginuser == 1 && innercheck_followings == 0){
      firebase.database().ref('/users/'+localStorage.getItem("user")).update({followingsCount:followings_count_loginuser}).catch(error => console.log("Error",error))
    }
  }



  follow_followed(){

    this.db.list('/users',{ preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          if(localStorage.getItem("currentuser") != snapshot.key){
            let followingsCount_attr = 0;
            for (let obj in snapshot.val()){
              if(obj == 'followersCount'){
                followingsCount_attr = 1;
                //Check followingsCount value
                if((parseInt(snapshot.val()[obj]) > 0)){
                  let check = 0
                  //Check if currentuser is in the user followings list
                  for (let state in snapshot.val()['followers']){
                    if(localStorage.getItem("currentuser") == state){
                      console.log(this.currentuser)
                      check = 1
                      this.users_follow[snapshot.key] = true;
                      //this.assign(this.users_follow,[snapshot.key,this.follow_var],true);
                      //console.log("sssssssssssssssssssssssssssssssssss",state)
                    }
                  }
                  if(check == 0){
                    this.users_follow[snapshot.key] = false;
                    //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
                  }

                } //else if there is 0 followingsCount value
                else{
                  this.users_follow[snapshot.key] = false;
                  //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
                }
              }
            }
            if(followingsCount_attr == 0){
              this.users_follow[snapshot.key] = false;
              //this.assign(this.users_follow,[snapshot.key,this.follow_var],false);
            }
            //console.log(this.users_follow[snapshot.key]['follow'])
          }
        })
      this.subscribe_follow_check = true;
    },
    error => {
      // this.is_as_error=true;
      console.log(error);
    });
  }


              ///Pagintaion Part

  onScroll(){
    //console.log('scrolled!!')
    if(this.check == 0)
      this.getUsers()
  }
    private getUsers(key?) {
    if (this.finished) return
    this._ps
        .getUsers(this.batch+1, this.lastKey)
        .do(users => {

          let check = 0;
          let j = 0;
          users.forEach(snapshot => {
            if((localStorage.getItem("currentuser") == snapshot.uid) && this.check_follow_followed == 1){
              //console.log("Insideeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
              users.splice(j,1);
              check = 1;
            }
            //console.log("J value: ",j)
            j++;
          });

          if(this.lastKey != _.last(users)['$key']){

          /// set the lastKey in preparation for next query
          this.lastKey = _.last(users)['$key']
          //console.log(this.lastKey)
          let newUsers;
          if(check == 1)
            newUsers = _.slice(users, 0, this.batch-1)
          else
            newUsers = _.slice(users, 0, this.batch)

          /// Get current movies in BehaviorSubject
          const currentUsers = this.users.getValue()
          /// If data is identical, stop making queries
          if (this.lastKey == _.last(newUsers)['$key']) {
            this.finished = true
            this.check = 1
          }
          /// Concatenate new movies to current movies
          this.users.next( _.concat(currentUsers, newUsers) )
          console.log("this.users: ",this.users)
          }
        })
        .take(1)
        .subscribe(() => this.showSpinner = false)
  }


}
