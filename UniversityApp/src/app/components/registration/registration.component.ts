import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { IRegistration, IRegistrationBase } from 'src/app/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  id: number|undefined
  confirmPassword: string|undefined;
  password: string|undefined;
  email: string|undefined;
  roleId: number|undefined;

  constructor(public registrationService:RegistrationService){}

  ngOnInit(): void {
    this.id=this.registrationService.registerAccount?.id!
    this.email=this.registrationService.registerAccount?.email??""!
    this.password=this.registrationService.registerAccount?.password??""!
    this.confirmPassword=this.registrationService.registerAccount?.confirmPassword??""!
    this.roleId=this.registrationService.registerAccount?.roleId!
  }

  onCreateAccount() {
      let newAccount:IRegistrationBase = {
        email: this.email!,
        password: this.password!,
        confirmPassword: this.confirmPassword!,
        roleId: 1
      }
      this.registrationService.createAccount(newAccount).subscribe(()=>{
        this.registrationService.registerAccount = undefined
        window.location.reload();
      })
  }

  onUpdateAccount() {
      let newAccount:IRegistration = {
        id: this.id!,
        email: this.email!,
        password: this.password!,
        confirmPassword: this.confirmPassword!,
        roleId: 1
      }
      this.registrationService.updateAccount(newAccount).subscribe(()=>{
        this.registrationService.registerAccount = undefined
      })
  }

  onCancelOperation() {
    this.registrationService.registerAccount = undefined
  }

  onSubmit() {
      if (this.registrationService.editOrCreate == true) {
        this.onCreateAccount()
      }
      else {
        this.onUpdateAccount()
      }
  }
}