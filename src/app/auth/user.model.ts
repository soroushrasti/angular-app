import {_throw} from "rxjs-compat/observable/throw";


export class User {
    constructor(public email: string, public id: string, private _token: string, private _expirationDate: Date) {
    }

    get token(){
        if (!this._expirationDate|| this._expirationDate< new Date())
            return null;
        return this._token
    }
}