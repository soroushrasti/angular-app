import {inject, Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {exhaustMap, take} from "rxjs/operators";
import {Recipe} from "../recepies/recipe.model";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: AuthService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return this.authService.user.pipe(take(1), exhaustMap(user=>{
            if (user?.token) {
                const modifiedReq = req.clone({
                    params: new HttpParams().set('auth', user.token)
                })
                return next.handle(modifiedReq)
            }
            else return next.handle(req)
            })

        )
    }


}