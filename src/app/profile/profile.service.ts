import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Injectable} from '@angular/core';
import {Http ,Headers , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

    constructor(private _http: Http){}
    
    zipcode(zip) {
        
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            return this._http.get('https://apis.rfpgurus.com/zipcode/'+zip+'/',
            {headers: headers}).map((response: Response) => response.json());
        
        }

}