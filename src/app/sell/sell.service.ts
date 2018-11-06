import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http ,Headers , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NgForm } from "@angular/forms";
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Menu } from './menu';
import 'firebase/storage'
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';
import swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';

@Injectable()
export class SellService {
    currentUser;
    counter = 0 ;
    cat;
    state;
    currentTime;
    type;
    product_price;
    token;
constructor( private _nav:Router,public authService: AuthService,private afAuth: AngularFireAuth,private db: AngularFireDatabase,private _http1: Http ) {
   localStorage.getItem('JwtToken');
  //  this.token = this.authService.gettestToken();
   console.log(this.authService.gettestToken())
  this.afAuth.authState.subscribe(res => {
    if (res && res.uid) {
      this.currentUser = res.uid
      this.token =  res.refreshToken;
      
    }
  })
}


zipcode(zip) {
    
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http1.get('https://apis.rfpgurus.com/zipcode/'+zip+'/',
        {headers: headers}).map((response: Response) => response.json());
    
    }

    private basePath:string = '/uploads';
    uploads: FirebaseListObservable<Menu[]>;
    
    
    
    
    pushUpload(upload: Menu,obj,imglength) {
      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) =>  {
          // upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
          console.log("url",uploadTask.snapshot.downloadURL);
        },
        (error) => {
          // upload failed
          console.log(error)
        },
        () => {
          // upload success
          this.currentTime = firebase.database.ServerValue.TIMESTAMP;
          if(obj.category){            
          this.cat = obj.category;
          }
          if(obj.jobcat){
            this.cat = obj.jobcat
          }
          if(obj.jobtype){
          this.type = obj.jobtype
          }           
          if(obj.buy){
            this.type = obj.buy            
          }
          if(obj.reserve && obj.revercePrice){
            this.type = obj.reserve            
          }
          else if(obj.reserve  && !obj.revercePrice){
            this.type =  "non-reserve"
          }
          
          this.state = obj.state;
          if(obj.offer == true){
          upload.acceptOffers="yes"
          }
          if(obj.offer == false){
            upload.acceptOffers="no"
          }
          if(obj.list == true){
            upload.endTime= -1 ;
            }
          if(obj.listingTime){
              upload.endTime = new Date().getTime()+parseInt(obj.listingTime,10) ;
            }
          if(obj.listingReverse){
              upload.endTime = new Date().getTime()+parseInt(obj.listingReverse,10) ;
            }  
          if(obj.revercePrice){    
              upload.rPrice = obj.revercePrice.toString()
            }
          if(obj.rsPrice){
              upload.startPrice = obj.rsPrice.toString();
              this.product_price = obj.rsPrice
              
            }
          if(obj.quantity){            
              upload.quantity= obj.quantity.toString();
              }
          if(obj.price){
                upload.startPrice = obj.price.toString();            
              }
           //////////////////////////job////////////////////////////////////////
           if(obj.employment){
            upload.employmentType = obj.employment.toString()
           }
           if(obj.jobcategory){
               upload.jobCategory  =obj.jobcategory.toString()
           }
           if(obj.payperiod){
              upload.payPeriod = obj.payperiod.toString()
           }
           if(obj.salary){
             upload.startPrice = obj.salary.toString()
           }
           if(obj.toughness){
             upload.condition = obj.toughness.toString()
           }
           if(obj.jobdescription){
             upload.description = obj.jobdescription.toString()
           }
           if(obj.jobtitle){
             upload.title = obj.jobtitle.toString()
           }
           if(obj.joboffer == true){
              upload.acceptOffers = "yes"
           }
           if(obj.joboffer == false){
            upload.acceptOffers = "no"
         }
         if(obj.medical == true){
          upload.benefits = "Medical"
        }
         if(obj.pto == true){
           upload.benefits += ",PTO"
         }
         if(obj.k == true){
          upload.benefits += ",401(k)"
        }
        if(obj.joblisting){
              upload.endTime = new Date().getTime()+parseInt(obj.joblisting,10)
        }
         if(obj.jobindefinite == true){
           upload.endTime == -1
         }
         if(obj.company_name){
           upload.companyName = obj.company_name.toString()
         }
         if(obj.company_description){
           upload.companyDescription = obj.company_description.toString()
         }
           /////////////////////////end////////////////////////////////////////
          upload.city=obj.city.toString();
          if(obj.codition){            
          upload.condition=obj.condition.toString();
          }
          if(obj.description){            
          upload.description=obj.description.toString();
          }
          upload.image0 = uploadTask.snapshot.downloadURL.toString();
          upload.imagesCount = imglength.toString();
          upload.state = obj.state.toString(); 
          upload.latitude = obj.lat.toString();
          upload.longitude = obj.lng.toString();
          if(obj.title){            
          upload.title = obj.title.toString();
          }
          upload.token = this.token          
          upload.startTime = new Date().getTime();
          upload.chargeTime = new Date().getTime();          
          upload.uid = this.currentUser;
          // upload.token =  this.token;
          this.saveFileData(upload)
          // this.saveitem(dealitem)
          //dajngo file url
         
          //end
          
        }
      );
    }
   
    // Writes the file details to the realtime db

    private saveFileData(upload: Menu) {
      console.log("proudct upload",upload)
     let key =  this.db.list('products/'+this.cat+'/'+this.type+'/'+this.state).push(upload).key;    
     console.log("key................",key);  
     if(key && (this.type == 'reserve' || this.type == 'non-reserve' )) {
      this.db.object('products/'+this.cat+'/'+this.type+'/'+this.state+'/'+key+'/bids').set({
        maxBid : "0",
        startPrice : this.product_price.toString()
      })
     }  
     if(key){
      this.db.object('users/'+this.currentUser+'/products/selling/'+key).set({
        auctionType : this.type,
        category : this.cat,
        state : this.state

      })
      if(key){
      swal(
        'Congrats.',
        'Your item has been listed successfully on Sell4Bids.\n Good luck.',
        'success'
      ) 
    }
      let url = '/';
      this._nav.navigate([url]);
     }
      
    }

    
}