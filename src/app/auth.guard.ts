import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenInterceptorService } from './shared/token/token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: TokenInterceptorService, private router: Router) {}
  
  canActivate():boolean{
    if (this.authService.interceptor()) {
      return true;
    } else {
      this.router.navigate(['/menu']);
      return false;
    }
    /*route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;*/
  }
  
}
