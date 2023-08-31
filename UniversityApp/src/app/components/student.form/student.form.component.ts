import { Component, OnInit } from '@angular/core';
import { IStudentBase, IStudent } from 'src/app/student';
import { StudentService } from 'src/app/components/students.table/student.service';
import { DepartmentService } from '../departments.table/department.service';
import { FormBuilder } from '@angular/forms';
import { IDepartment } from 'src/app/department';

@Component({
  selector: 'app-student',
  templateUrl: './student.form.component.html',
  styleUrls: ['./student.form.component.css'],
})

export class StudentFormComponent implements OnInit {
  departments: IDepartment[]
  name: string|undefined;
  surname: string|undefined;
  department: IDepartment|undefined;

  constructor(public studentService:StudentService, public departmentService:DepartmentService, public builder:FormBuilder){}
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((x:IDepartment[])=>{
      this.departments = x;
    })
    this.name=this.studentService.editedStudent?.name!
    this.surname=this.studentService.editedStudent?.surname??""!
  }


  onCreateStudent() {
      let newStudent:IStudentBase = {
        name: this.name!,
        surname: this.surname!,
        departmentId: this.department?.id!
      }
      this.studentService.createStudent(newStudent).subscribe(()=>{
        this.studentService.editedStudent = undefined
        this.studentService.getStudents().subscribe(()=>{
          window.location.reload();
        });
      })
  }

  onUpdateStudent() {
      let newStudent:IStudent = {
        id: this.studentService.editedStudent?.id!,
        name: this.name!,
        surname: this.surname!,
        departmentId: this.department?.id!
      }
      this.studentService.updateStudent(newStudent).subscribe(()=>{
        this.studentService.editedStudent = undefined
        this.studentService.getStudents().subscribe(()=>{
          window.location.reload();
        });
      })
  }

  onCancelOperation() {
    this.studentService.editedStudent = undefined
  }

  onSubmit() {
      if (this.studentService.editOrCreate == true) {
        this.onCreateStudent()
      }
      else {
        this.onUpdateStudent()
      }
  }
}
