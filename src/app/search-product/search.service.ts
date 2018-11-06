import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import {Http ,Headers , Response} from '@angular/http';

@Injectable()
export class SearchService {

    constructor(private _http5: Http ) {
    }
    
   search_service(sid):  Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type','text/html');
    headers.append('Accept', 'text/html');
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Credentials', 'true');
        return this._http5.get('https://us-central1-sell4bids-4affe.cloudfunctions.net/searchResult?key=qwerty&queryString='+sid,
        {headers: headers}).map((response: Response) => {
            return response.json() || {};
          })
      .catch(this.handleError);
    
    }
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
      }

     
        
          
}