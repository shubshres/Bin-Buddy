import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad() {
    const isAuthenticated = !!(+localStorage.getItem('authenticated'));

    if (isAuthenticated) {
      return true; 
    }
    else {
      this.router.navigateByUrl('/resident/login'); 
      return false; 
    }
  }
}
