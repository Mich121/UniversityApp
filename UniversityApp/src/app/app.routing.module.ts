import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsTableComponent } from './components/students.table/students.table.component';
import { DepartmentsTableComponent } from './components/departments.table/departments.table.component';
import { LecturersTableComponent } from './components/lecturers.table/lecturers.table.component';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthGuardService } from 'src/auth-guard.service';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Student', component: StudentsTableComponent, canActivate: [AuthGuardService] },
  { path: 'Department', component: DepartmentsTableComponent, canActivate: [AuthGuardService] },
  { path: 'Lecturer', component: LecturersTableComponent, canActivate: [AuthGuardService] },
  { path: 'Register', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }