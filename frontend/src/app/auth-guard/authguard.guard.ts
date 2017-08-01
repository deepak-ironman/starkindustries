import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from 'app/auth-service/auth.service';
@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private _auth: AuthService,
              private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this._auth.isAuthenticated()) {
      console.log('AUTH GUARD PASSED');
      return true;
    } else {
      console.log('BLOCKED BY AUTH GUARD');
      return false;
    }
  }
}
