import {NgModule} from "@angular/core";
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {RecipieService} from "./recepies/recipie.service";


@NgModule({
    providers:[ShoppingListService, RecipieService,
        {provide: HTTP_INTERCEPTORS,
            multi: true, useClass: AuthInterceptorService}]
})
export class CoreModule{}