import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {ErrorHandler, Injectable} from "@angular/core";
import {catchError, tap, timeInterval} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "./user.model";
import {Router} from "@angular/router";

export interface  AuthRes {
    kind :string,
    displayName: string,
    idToken:	string,
    email:	string,
    refreshToken:	string	,
    expiresIn: string	,
    localId:	string
    registered?: boolean
}

@Injectable({providedIn:'root'})
export class AuthService{
    key='AIzaSyCV68Gl0q8ePmYRB4euwuB2Vj43rS1rPj8'
    user= new BehaviorSubject<User>(null);

    autoLogoutTimer: any;

    constructor(private httpClient: HttpClient, private router: Router) {
    }

    singUp(email: string, password: string){
        const singUpUrl='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ this.key
        return this.httpClient.post<AuthRes>(singUpUrl,
            {
                password: password,
                email: email,
                returnSecureToken: true
            }
            ).pipe(catchError(this.handleError), tap(res=> this.handleUser(res)))
    }

    logout(){
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.autoLogoutTimer){
            clearTimeout(this.autoLogoutTimer)
        }
        this.autoLogoutTimer=null;
    }

    login(email: string, password: string) {
        let singInUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ this.key
        return this.httpClient.post<AuthRes>(singInUrl,{email, password, returnSecureToken: true})
            .pipe(catchError(this.handleError), tap(res=> this.handleUser(res)))

    }
    private handleUser(res: AuthRes){
        const date= new Date(new Date().getTime()+ +res.expiresIn*1000)
        const user=  new User(res.email, res.localId, res.idToken, date)
        this.user.next(user);
        localStorage.setItem('userData',JSON.stringify(user));
        this.autoLogout(+res.expiresIn*1000)
    }

    autoLogin(){
      const  userData= JSON.parse(localStorage.getItem('userData'))
        if (!userData){
            return;
        }
        const loadedUser= new User(userData.email, userData.id, userData._token, new Date(userData._expirationDate))
        if (!loadedUser.token)
            return;
        this.user.next(loadedUser)
        const expirationTime= new Date(userData._expirationDate).getTime()- new Date().getTime();
        console.log(expirationTime)

        this.autoLogout(expirationTime);
    }

    autoLogout(expirationDuration: number) {
        this.autoLogoutTimer= setTimeout(() => {
            this.logout()
        }, expirationDuration)
    }


    private handleError(errorRes: HttpErrorResponse){
        console.log(errorRes)
        let errorMessage= 'an unknown error happens';
        if (!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage)
        }
        switch (errorRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage='This email already exists'
                break
            case 'EMAIL_NOT_FOUND':
                errorMessage='This email not found '
                break
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage='The password or email is invalid '
                break
        }
        return throwError(errorMessage);

    }
}
