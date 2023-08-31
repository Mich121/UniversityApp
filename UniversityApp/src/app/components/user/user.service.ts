import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { IRegistrationBase, IRegistration } from "src/app/registration";
import { Observable } from "rxjs";

@Injectable()
export class UserService
{
    readonly rooutUrl = "https://localhost:7194/api/user/getUser/"
    constructor(private http : HttpClient) {}

    getUser() {
        return this.http.get(this.rooutUrl)
    }
}