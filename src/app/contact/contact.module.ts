import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import {ContactComponent} from "./contact.component";
import {routing} from "./contact.routing";
import {AgmCoreModule} from "@agm/core";
import swal from 'sweetalert2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder,  FormsModule, FormGroup, Validators, FormControl,ReactiveFormsModule , NgForm  } from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { Subject } from 'rxjs/Subject'
import { Router, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q'
    }),
  ],
  declarations: [
    ContactComponent,
   
    // NavBarComponent
  ],
  providers: [
  ]

})
export class ContactModule {

}
