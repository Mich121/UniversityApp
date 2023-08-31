import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { LoginService } from '../login/login.service';
import { IRegistration } from 'src/app/registration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  account: MenuItem[];
  user: IRegistration | undefined;

  constructor(private router: Router, public registrationService: RegistrationService, public loginService: LoginService) {}

  goTo(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  onCreateAccount() {
    this.registrationService.registerAccount = {id:0, email:"", password:"", confirmPassword:"", roleId:0}
    this.registrationService.editOrCreate = true
  }

  onEditAccount() {
    this.registrationService.getAccount(localStorage.getItem('email')).subscribe((catchedUser)=>{
      this.user = catchedUser
    })
    this.registrationService.registerAccount = this.user
    this.registrationService.editOrCreate = false
  }

  onLoginAccount() {
    this.loginService.loginAccount = {email:"", password:""}
  }

  isLogged() {
    return localStorage.getItem('token')
  }
}
