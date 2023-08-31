import { Component } from '@angular/core';
import { ILoginBase } from 'src/app/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string|undefined;
  email: string|undefined;

  constructor(public loginService:LoginService){}

  ngOnInit(): void {
    this.email=this.loginService.loginAccount?.email??""!
    this.password=this.loginService.loginAccount?.password??""!
  }

  onLogin() {
      let login:ILoginBase = {
        email: this.email!,
        password: this.password!
      }
      this.loginService.login(login).subscribe((token)=>{
        this.loginService.loginAccount = undefined
        localStorage.setItem('token', token)
        localStorage.setItem('email', login.email)
      })
  }
  
  onCancelOperation() {
    this.loginService.loginAccount = undefined
  }

  onSubmit() {
    this.onLogin()
  }
}