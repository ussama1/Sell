import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';


import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  user: Observable<any>;
  private dbPath: string = '/products/Cars & Accessories/buy-it-now/NY';
  
  
  constructor(private db: AngularFireDatabase,private afAuth: AngularFireAuth,private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    
  }
 
  getMovies(): FirebaseListObservable<any> {
    
    
    return this.db.list('/products', {
      query: { 
        orderByKey: true,
        // orderByChild:'title',
        // limitToFirst: 5,
        // startAt: start,
        // endAt: end,
      }
      
    })
  }

  public gettestToken(){
    console.log(localStorage.getItem('JwtToken'));
  }

  signup(email: string, password: string) {
   return this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      



     
  }
  
  login(email: string, password: string) {
  
    return this.firebaseAuth.auth
      .signInWithEmailAndPassword(email, password);
  }
 
Googleservice() {  
  return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(value => {     

    this.afAuth.authState.subscribe(res => {    
           if (res && res.uid && firebase.auth.GoogleAuthProvider.PROVIDER_ID == 'google.com') {  
                     
                  // firebase.database().ref('/users/'+res.uid).update({email:res.email,name:res.displayName,uid:res.uid,image:res.photoURL})               
                } else {      
                        //console.log('user not logged in');   
                           } 
                               });   
                               })      
                .catch(function (error){     
                  
                    })
                    }



resetPassword(email: string) {
          var auth = firebase.auth();
          return auth.sendPasswordResetEmail(email);
}

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

  isAuthenticated() {
    var user = firebase.auth().currentUser;

    if (user) {
        return true;
    } else {
        return false;
    }
}

}