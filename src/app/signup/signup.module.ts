import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {SignupComponent} from "./signup.component";
import {routing} from "./signup.routing";
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder,  FormsModule, FormGroup, Validators, FormControl,ReactiveFormsModule , NgForm  } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {  ToastOptions } from 'ng2-toastr';
import { Subject } from 'rxjs/Subject'
import { Router, RouterModule } from '@angular/router';
import { ProductService } from './../product.service'
// import { FooterSimpleComponent } from './../footer-simple/footer-simple.component'

export class CustomOptions extends ToastOptions {
    animate = 'flyRight';
    dismiss = 'auto';
    showCloseButton = true;
    // newestOnTop = false;
    positionClass = 'toast-bottom-right';
    enableHTML = true;
    // messageClass = '';
    // titleClass = '';
  }
@NgModule({
    imports: [
      CommonModule,
      routing,
      FormsModule,
      ReactiveFormsModule,
      RecaptchaModule.forRoot(),
      
      
    ],
    declarations: [
     SignupComponent,
    //  FooterSimpleComponent
    ],
    providers: [
    { provide: ToastOptions, useClass: CustomOptions },
      AuthService,
      ProductService
    ]
  })
  export class SignupModule {
  
  }
  