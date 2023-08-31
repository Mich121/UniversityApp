import { Component } from '@angular/core';
import { IDepartmentBase, IDepartment } from 'src/app/department';
import { DepartmentService } from '../departments.table/department.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-department',
  templateUrl: './department.form.component.html',
  styleUrls: ['./department.form.component.css']
})

export class DepartmentFormComponent {
  constructor(public service:DepartmentService, public builder:FormBuilder){}

  departmentForm = this.builder.group({
    name: this.service.editedDepartment?.name
  });

onCreateDepartment() {
    let newDepartment:IDepartmentBase = {
      name: this.departmentForm.get('name')?.value!
    }

    this.service.createDepartment(newDepartment).subscribe(()=>{
      this.service.editedDepartment = undefined;
      this.service.getDepartments().subscribe(()=>{
        window.location.reload();
      });
    })
}

onUpdateDepartment() {
    let newDepartment:IDepartment = {
      id: this.service.editedDepartment?.id!,
      name: this.departmentForm.get('name')?.value!
    }
    
    this.service.updateDepartment(newDepartment).subscribe(()=>{
      this.service.editedDepartment = undefined
      this.service.getDepartments().subscribe(()=>{
        window.location.reload();
      });
    })
}

onCancelOperation() {
  this.service.editedDepartment = undefined
}

onSubmit() {
    if (this.service.editOrCreate == true) {
      this.onCreateDepartment()
    }
    else {
      this.onUpdateDepartment()
    }
}
}