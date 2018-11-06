import { Component, OnInit, ViewContainerRef ,Inject,PLATFORM_ID} from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule , NgForm  } from "@angular/forms";
import { AuthService } from '../auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {  ToastOptions } from 'ng2-toastr';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import swal from 'sweetalert2';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import {isPlatformBrowser} from '@angular/common';
// import {RecaptchaComponent} from "../recaptcha/recaptcha.component";
// import {ViewChild} from "@angular/core";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // @ViewChild(RecaptchaComponent) captcha: RecaptchaComponent;
  
  model:any={};
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
  user: Observable<any>;
  cat = "main";
  isequal:boolean = false;
  public logedin: any = 0;
  
  // captcha;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private db: AngularFireDatabase,private _nav:Router,public authService: AuthService,public toastr: ToastsManager,private firebaseAuth: AngularFireAuth, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   
   }
//    resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response ${captchaResponse}:`);
//     this.captcha = captchaResponse;
// }

  register() {
    console.log("junaid",this.model.name,this.model.email)
    
      // this.login_check = 1
      // if(this.captcha.getResponse()){
        // console.log("junaid2",this.captcha.getResponse())
      
          // this.login_check = 1
          this.isequal=true;
    this.authService.signup(this.model.email, this.model.password).then(
      (success) => {
         let user:any = firebase.auth().currentUser;
           console.log("account activation",user)
         user.sendEmailVerification().then(
           (success) => {
            this.db.object('users/'+user.uid).set({
              name : this.model.name,
              email : this.model.email,
              token : user.refreshToken,
              startTime : new Date().getTime(),
              uid : user.uid
      
            })
            // this.toastr.info('', 'Please verify your email',{toastLife: 5000});      
            swal({
              type: 'success',
              html: 'Please check your inbox for account activation instructions.'
            })      
             console.log("please verify your email")
            this._nav.navigate(['/login']);
    
            } 
         ).catch(
           (err) => {
            this.toastr.error(`${err}`)
            // alert(err)
           }
         )
        this.logout();
      }).catch(
        (err) => {
      //  alert( err);
       this.toastr.error(`${err} `)
        }) 

      // }
      // else {
      //   this.captcha.reset();
      //   this.isequal=false;
      // }

  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.logedin = localStorage.getItem('loged_in');
  }
  if (this.logedin == 1)
  {

      this._nav.navigate(['/']);
  }
    document.getElementById('footer').hidden = true;
  }
  ngOnDestroy(){
    document.getElementById('footer').hidden = false;
  }


  logout() {
    localStorage.clear();
    this.firebaseAuth.auth.signOut();
  }

}
