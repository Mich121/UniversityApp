import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ILoginBase, ILogin } from "src/app/login";

@Injectable()
export class LoginService
{
    public loginAccount:ILoginBase|undefined;
    readonly rooutUrl = "https://localhost:7194/api/account/login"

    constructor(private http : HttpClient) {}

    login(login : ILoginBase|any) {
        return this.http.post(this.rooutUrl, login, { responseType: 'text' })
    }
}