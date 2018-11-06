import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import {isPlatformBrowser} from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieServiceLocal {
  recentitems: any = [];
  constructor(private cookieService: CookieService, @Inject(PLATFORM_ID) private platformId: Object) { // , private  cookieService: CookieService) {
  }
  set(obj) {
    console.log("set",obj);
      this.cookieService.set( 'Test', JSON.stringify(obj) );
  }
  get() {
     this.recentitems.push(JSON.parse(this.cookieService.get('Test')));
   console.log("get",this.recentitems)
  }
  // delete(key: string) {
  //       if (isPlatformBrowser(this.platformId)) {
  //         this.cookieService.delete(key);}
  // }
 
}
