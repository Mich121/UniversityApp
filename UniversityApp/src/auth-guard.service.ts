import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardService {

    canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }
}