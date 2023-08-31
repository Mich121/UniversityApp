import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { IRegistration } from 'src/app/registration';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  user: IRegistration | undefined;

  ngOnInit(): void {}

  constructor(public userServise : UserService) {}

  onGetUser() {
    this.userServise.getUser().subscribe((catchedUser)=>{
      console.log(Object(catchedUser))
    })
}

}