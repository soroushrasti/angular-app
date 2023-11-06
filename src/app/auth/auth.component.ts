import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthRes, AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    constructor(private authService: AuthService, private router: Router) {
    }
    isLoginMode= true;
    isLoading=false;
    error: string=null;
    opObs: Observable<AuthRes>

    switchAuthMethod(){
        this.isLoginMode=!this.isLoginMode;
    }

    onSubmitForm(authForm: NgForm) {
        this.isLoading=true;
        let email: string=authForm.value.email;
        let password: string=authForm.value.password;
        if (!this.isLoginMode){
            this.opObs= this.authService.singUp(email, password)
        }
        else {
            this.opObs= this.authService.login(email, password)
        }
        this.opObs.subscribe(
            data=>{
                this.isLoading=false;
                this.router.navigate(['/recipes'])
            },
            errorMessage=> {
                this.isLoading=false;
                this.error=errorMessage;
            }
        )
        authForm.reset();
    }
}