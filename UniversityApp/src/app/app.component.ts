import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'UniversityApp';
  menuItems : MenuItem[]

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
      },
      {
        label: 'Student',
      },
      {
        label: 'Department',
      },
      {
        label: 'Lecturer',
      }]
  }

  goTo(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
  onLogout() {
    localStorage.clear()
  }

  isLogged() {
    return localStorage.getItem('token')
  }

  test() {}
}
