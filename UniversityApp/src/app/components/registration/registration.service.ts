import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IRegistrationBase, IRegistration } from "src/app/registration";
import { Observable } from "rxjs";

@Injectable()
export class RegistrationService
{
    public registerAccount:IRegistration|undefined;
    public editOrCreate : boolean;
    readonly rooutUrl = "https://localhost:7194/api/account/register/"
    constructor(private http : HttpClient) {}

    createAccount(registration : IRegistrationBase|any) {
        return this.http.post(this.rooutUrl, registration)
    }

    updateAccount(registration : IRegistration) {
        return this.http.put(this.rooutUrl, registration)
    }

    getAccounts() : Observable<IRegistrationBase[]> {
        return this.http.get<IRegistration[]>(this.rooutUrl)
    }

    getAccount(email: any) : Observable<IRegistration> {
        return this.http.get<IRegistration>(this.rooutUrl + email)
    }

}