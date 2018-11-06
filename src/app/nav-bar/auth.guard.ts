import { Injectable } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {isNullOrUndefined} from 'util';
import {AngularFireAuth} from 'angularfire2/auth';
import swal from 'sweetalert2';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private afAuth: AngularFireAuth) { }
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.afAuth.authState.map(auth => {
          if (isNullOrUndefined(auth)) {
            this.router.navigate(['/login']);
            swal("Please Login First", "", "warning")
    
            return false;
    
          } else {
            return true;
          }
        });
      }
    }