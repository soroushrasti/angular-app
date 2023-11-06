import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {ErrorHandler, Injectable} from "@angular/core";
import {catchError, tap} from "rxjs/operators";
import {BehaviorSubject, throwError} from "rxjs";
import {User} from "./user.model";

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
    key=''
    user= new BehaviorSubject<User>(null);

    constructor(private httpClient: HttpClient) {
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

    login(email: string, password: string) {
        let singInUrl='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ this.key
        return this.httpClient.post<AuthRes>(singInUrl,{email, password, returnSecureToken: true})
            .pipe(catchError(this.handleError), tap(res=> this.handleUser(res)))

    }
    private handleUser(res: AuthRes){
        const date= new Date(new Date().getTime()+ +res.expiresIn*1000)
        const user=  new User(res.email, res.localId, res.idToken, date)
        this.user.next(user);
    }
    private handleError(errorRes: HttpErrorResponse){
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
            case 'INVALID_PASSWORD':
                errorMessage='The password is invalid '
                break
        }
        return throwError(errorMessage);

    }
}
