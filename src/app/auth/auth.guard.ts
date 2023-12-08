import {Injectable} from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlSegmentGroup,
    UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {map, take} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.user.pipe(take(1),map(user=>{
            return user? true: this.router.createUrlTree(['/auth'])
        }))
    }

}