import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './components/students.table/student.service';
import { StudentFormComponent } from './components/student.form/student.form.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsTableComponent } from './components/students.table/students.table.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { TabMenuModule } from 'primeng/tabmenu';
import {InputTextModule} from 'primeng/inputtext';
import { DepartmentFormComponent } from './components/department.form/department.form.component';
import { DepartmentsTableComponent } from './components/departments.table/departments.table.component';
import { DepartmentService } from './components/departments.table/department.service';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LecturerFormComponent } from './components/lecturer.form/lecturer.form.component';
import { LecturersTableComponent } from './components/lecturers.table/lecturers.table.component';
import { LecturerService } from './components/lecturers.table/lecturer.service';
import { FileUploadModule } from 'primeng/fileupload';
import { HomeComponent } from './components/home/home.component';
import { RegistrationService } from './components/registration/registration.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { CheckboxModule } from 'primeng/checkbox';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { AuthGuardService } from 'src/auth-guard.service';
import { UserService } from './components/user/user.service';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    StudentsTableComponent,
    DepartmentFormComponent,
    DepartmentsTableComponent,
    LecturerFormComponent,
    LecturersTableComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    TabMenuModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    FileUploadModule,
    CheckboxModule,
  ],
  exports: [],
  providers: [StudentService, DepartmentService, LecturerService, RegistrationService, LoginService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
