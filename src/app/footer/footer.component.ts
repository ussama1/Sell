import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule , NgForm  } from "@angular/forms";
import swal from 'sweetalert2';
import {SharedData} from './../services/shared-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 
  cat: any=[];
  product;
  model= {};
  email;
 constructor(public _shareData: SharedData,private _nav:Router,private db: AngularFireDatabase) {
    // this.cat = this.front.category 
    
           
         

  }
  mainFunction(){
    this.db.list('/categories',{ preserveSnapshot: true}).subscribe(snapshots => {
      snapshots.forEach(snapshot => {

       this.cat.push(snapshot.key)                  
     
      })
    })
  }
  subscriber(){
    console.log(this.model['email']);
    this.db.list('subscribed_users').push({
      email : this.model['email']
    })
    swal({
      type: 'success',
      html: 'Thanks for signing up to receive the latest News and Deals from Sell4Bids.'
    })
    this.model['email'] = undefined;
  }
  loadprodut(item)
  {
    localStorage.setItem("item1",item)    
    this.product = item;
    this._shareData.vendorInfo(item);        
    let sth = 'products/category/'+item;
    sth=sth.replace(/&/g,'and').replace(/\s+/g, '-').toLowerCase();
    // this.cat_comp.constructor_two();
    console.log("sth: ",sth);
    this._nav.navigate([sth]);
  }

  ngOnInit() {
    this.mainFunction();
  }

}
