import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule , NgForm  } from "@angular/forms";
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 32.9482448;
  lng = -96.82428649999997;
  captcha;  
  model={};
  constructor(private db: AngularFireDatabase) { }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
    this.captcha = captchaResponse;
}
  ngOnInit() {
    window.scrollTo(0,0);
    
  }
  
submit(){  
  console.log(this.model);
 
  
  let key = this.db.list('user_queries').push({
    email : this.model['email'],
    message : this.model['message'],
    mobile : this.model['telephone'],
    name : this.model['name'],
    submission : "web",
    time : new Date().getTime(),
  }).key
  if(key){
    this.db.object('user_queries/'+key).update({
      qid : key ,
    })
  swal({
    type: 'success',
    html: 'Your request is submitted successfully. Thanks for sharing your thoughts with us. Customer support person will contact you asap.'
  })
}
}
}
