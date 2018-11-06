import { Component, OnInit, ViewContainerRef, Inject, PLATFORM_ID } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, NgForm } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import { Subject } from 'rxjs/Subject'
import { Router, RouterModule } from '@angular/router';
import { ProductService } from './../product.service';
import swal from 'sweetalert2';
import { FooterSimpleComponent } from './../footer-simple/footer-simple.component'
import { RecaptchaComponent } from "../recaptcha/recaptcha.component";
import { ViewChild } from "@angular/core";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sample-login',
  templateUrl: './sample-login.component.html',
  styleUrls: ['./sample-login.component.css']
})
export class SampleLoginComponent implements OnInit {
  @ViewChild(RecaptchaComponent) captcha: RecaptchaComponent;

  user: Observable<firebase.User>
  currentuser = {};
  model: any = {};
  email: string;
  password: string;
  isequal;

  // captcha;
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  token;
  login_check: any = 0
  check_currentuser: any
  public logedin: any = 0;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private _ps: ProductService, private db: AngularFireDatabase, public afa: AngularFireAuth, public toastr: ToastsManager, vcr: ViewContainerRef, private fb: FormBuilder, public authService: AuthService, private afAuth: AngularFireAuth, private _nav: Router) {
    this.toastr.setRootViewContainerRef(vcr);

  }
  //   resolved(captchaResponse: string) {
  //     console.log(`Resolved captcha with response ${captchaResponse}:`);
  //     this.captcha = captchaResponse;
  // }

  /////////////////////////////////////////////////////// Google login ////////////////////////////////////////////////

  loginGoogle() {
    //alert("google")
    this._ps.setImage('');
    this._ps.setName('');
    this._ps.setUserid('');

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(value => {
      this.toastr.success('Successfully!', 'Logged in', { toastLife: 5000 });
      this._nav.navigate(['/']);
      this.afAuth.auth.currentUser.getIdToken().then((token) => {
        this.token = this.authService.gettestToken();
        localStorage.setItem("JwtToken", this.token);
        // console.log(this.token)

        // MOVE FUNCTION HERE ******************
        this.authService.gettestToken(); // <--------
      })
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {
          //console.log('user is logged in',res.uid);
          // console.log("user photo: ",res.photoURL)
          // console.log("user name: ",res.displayName)
          // console.log("user id: ",res.uid)
          var user = firebase.auth().currentUser;
          // console.log("If")
          localStorage.setItem('loged_in', '1');
          this.db.object('/users/' + user.uid).update({ email: res.email, name: res.displayName, uid: res.uid, startTime: new Date().getTime(), token: res.refreshToken, image: res.photoURL })


        } else {
          //console.log('user not logged in');
        }
      });
    })
      .catch(function (error) {
        alert(`${error.message} Please try again`)
      })

  }


  //////////////////////////////////////////////////////// END ///////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////// Facebook login/////////////////////////////////////////

  loginFacebook() {
    //alert("facebook")
    this._ps.setImage('')
    this._ps.setName('')
    this._ps.setUserid('')

    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(value => {
      this.toastr.success('Successfully!', 'Logged in', { toastLife: 5000 });
      this._nav.navigate(['/']);
      this.afAuth.auth.currentUser.getIdToken().then((token) => {
        this.token = token;
        //console.log(token);
        localStorage.setItem("JwtToken", token);
        // MOVE FUNCTION HERE ******************
        this.authService.gettestToken(); //
      })
      this.afAuth.authState.subscribe(res => {
        if (res && res.uid) {

          var user = firebase.auth().currentUser;
          this.db.object('/users/' + user.uid).update({ email: res.email, name: res.displayName, uid: res.uid, startTime: new Date().getTime(), token: res.refreshToken, image: res.photoURL })
          localStorage.setItem('loged_in', '1');

        } else {
          //console.log('user not logged in');
        }
      });
    })
      .catch(function (error) {
        alert(`${error.message} Please try again`)
      })



  }


  ////////////////////////////////////////////////////////////// END /////////////////////////////////////////////////

  ///////////////////////////////////////////////////////// Email Password login/////////////////////////////////////
  login() {
    if (this.login_check == 0 && this.captcha.getResponse()) {
      this.isequal = true;
      this.authService.login(this.model.email, this.model.password)
        .then(
          (success) => {
            let user: any = firebase.auth().currentUser;
            if (user.emailVerified) {
              localStorage.setItem('loged_in', '1');
              swal({
                type: 'success',
                title: 'Welcome to Sell4Bids',
                text: 'You are logged in',
                showConfirmButton: false,
                timer: 3000
              })
              this._nav.navigate(['/']);
            }
            else {
              this.logout();
              swal({
                type: 'error',
                title: 'Sorry!',
                text: 'Please verify your email',
                showConfirmButton: false,
                timer: 5000
              })
            }
          }).catch(
            (err) => {
              swal({
                type: 'error',
                title: 'Sorry!',
                text: "The username or password is invalid.",
                showConfirmButton: false,
                timer: 5000
              })
            })
    }
    else {
      this.captcha.reset();
      this.isequal = false;
    }
  }
  ////////////////////////////////////////////////////////////End/////////////////////////////////////////////////




  logout() {
    this.afAuth.auth.signOut();
    localStorage.clear();
    // this._nav.navigate(['/']);
  }

  ///////////////////////////Forgot PAssowrd//////////////////////////////////////
  // foremail() {
  //   swal({
  //     title: 'Enter email address',
  //     input: 'email',
  //     inputPlaceholder: 'Enter your email address'
  //   }).then((email) => {
  //     this.authService.resetPassword(this.email).then(
  //       (success) => {
  //         swal({
  //           type: 'success',
  //           html: 'Password reset instructions have been sent to your email. '
  //         })
  //       }).catch(
  //         (err) => {
  //           //  alert( err);
  //           this.toastr.error(`${err} `)
  //         })
  //   })
  // }

  ///////////////////////////END//////////////////////////////////////////////


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.logedin = localStorage.getItem('loged_in');
    }
    if (this.logedin == 1) {

      this._nav.navigate(['/']);
    }

    document.getElementById('footer').hidden = true;
  }
  ngOnDestroy() {
    document.getElementById('footer').hidden = false;
  }

}
