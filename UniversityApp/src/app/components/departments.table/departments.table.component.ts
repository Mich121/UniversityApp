import { Component } from '@angular/core';
import { DepartmentService } from './department.service';
import { OnInit } from '@angular/core';
import { IDepartment } from 'src/app/department';

@Component({
  selector: 'app-departments.table',
  templateUrl: './departments.table.component.html',
  styleUrls: ['./departments.table.component.css']
})

export class DepartmentsTableComponent implements OnInit {
  title = 'UniversityApp';
  departments : IDepartment[] = [];

  constructor(public departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.onGetDepartment();
  }

  onGetDepartment() {
    this.departmentService.getDepartments().subscribe((data: any[]) => {
      this.departments = data;
    });
  }

  onDeleteDepartment(id : number) {
    this.departmentService.deleteDepartment(id).subscribe(()=>{
      this.onGetDepartment()
    });
  }

  onUpdateDepartment(dep : IDepartment) {
    this.departmentService.editOrCreate = false
    this.departmentService.editedDepartment=dep
  }

  onCreateDepartment() {
    this.departmentService.editOrCreate = true
    this.departmentService.editedDepartment={id: 0, name: ''}
  }

  test() {}
}
