import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router, RouterModule } from '@angular/router';
import {Http ,Headers , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable,NgZone} from '@angular/core';
// import { AuthHttp, AuthConfig , JwtHelper } from 'angular2-jwt';
// import {AlertService} from './_services/index';
import 'rxjs/add/operator/map';
import {HttpService} from './services/http-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ProductService {
 
  products: FirebaseListObservable<any[]>;
  path = ''
  name = ''
  image = ''
  userid = ''

constructor(private _http2:HttpService,private db: AngularFireDatabase) {}

 

setName(name){
  this.name = name;
  }
  setImage(image){
  this.image = image;
  }
  setUserid(userid){
  this.userid = userid;
  }
  
  getName(){
  return this.name;
  }
  getImage(){
  return this.image;
  }
  getUserid(){
  return this.userid;
  }
  
   getProducts(){
     
    return this.products = this.db.list('/products',{ preserveSnapshot: true});
    
}
 getAccessory(){
    return this.products = this.db.list('/products/Accessories',{ preserveSnapshot: true});
  

}
location(address)


        {
             return this._http2.get("https://maps.googleapis.com/maps/api/geocode/json?address="+address).map((response:Response) => response.json()); 

         }
locationShare(lat,lng){
  return this._http2.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key=AIzaSyBvtXUC9gCiJTPRwX-tCHsOgTiLo2H8P6Q").map((response:Response) => response.json());
}         

         getMovies(batch, lastKey?,path?) {
// alert(lastKey)
          let query =  {
                  orderByChild: "chargeTime",
                  limitToLast: batch,
                }
          if(path == undefined)
            console.log("Undefiendddddddddddddddd")
          else
            this.path=path
          //this.setCateogry();
          //this.path = '/movies'+'/'+this.cat +'/Nested'
          //this.path = '/'+'/'+this.cat +'/Nested'
          //this.path = '/movies' 
          if (lastKey) query['startAt'] = lastKey
          //console.log("DBBBBBBBBBBBBBBBBBBBBBBBBBB LLLLLLLLLLLLLLlllllllliist")
          //console.log(this.db.list(this.path,{query}))
          return this.db.list(this.path, {
            query
          })
        }

        getUsers(batch, lastKey?) {
          let query =  {
                  orderByKey: true,
                  limitToFirst: batch,
                }
          if (lastKey) query['startAt'] = lastKey
          return this.db.list('/users', {
            query
          })
        }

         
  }
    

