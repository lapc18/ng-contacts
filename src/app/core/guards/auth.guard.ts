import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AppRoutes } from '../enums/app-routes.enum';
import { AppStateService } from '../services/app-state.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private state: AppStateService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.state.currentUser || !this.state.currentUser?.email) this.router.navigate([[AppRoutes.DEFAULT, AppRoutes.AUTH].join('/')])
    if(this.jwtHelper.isTokenExpired()) this.router.navigate([[AppRoutes.DEFAULT, AppRoutes.AUTH].join('/')])
    if(this.state.currentUser && this.state.currentUser?.email! &&  state.url.includes([AppRoutes.DEFAULT, AppRoutes.AUTH].join('/'))) this.router.navigate([[AppRoutes.DEFAULT, AppRoutes.CONTACTS_BOARD].join('/')])


    return true;
  }

}
