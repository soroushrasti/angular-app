import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth/auth.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared.module";


@NgModule({
    declarations:[AuthComponent],
    imports:[ReactiveFormsModule, FormsModule, CommonModule,
        SharedModule, RouterModule.forChild([{path:'', component: AuthComponent}])
        ]
})
export class AuthModule{

}