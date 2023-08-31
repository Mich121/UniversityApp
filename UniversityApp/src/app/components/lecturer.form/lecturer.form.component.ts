import { Component } from '@angular/core';
import { ILecturerBase, ILecturer } from 'src/app/lecturer';
import { LecturerService } from '../lecturers.table/lecturer.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.form.component.html',
  styleUrls: ['./lecturer.form.component.css']
})

export class LecturerFormComponent {
  constructor(public service:LecturerService, public builder:FormBuilder){}

  lecturerForm = this.builder.group({
    name: this.service.editedLecturer?.name,
    surname: this.service.editedLecturer?.surname
  });

onCreateLecturer() {
    let newLecturer:ILecturerBase = {
      name: this.lecturerForm.get('name')?.value!,
      surname: this.lecturerForm.get('surname')?.value!
    }

    this.service.createLecturer(newLecturer).subscribe(()=>{
      this.service.editedLecturer = undefined;
      this.service.getLecturers().subscribe(()=>{
        window.location.reload();
      });
    })
}

onUpdateLecturer() {
    let newLecturer:ILecturer = {
      id: this.service.editedLecturer?.id!,
      name: this.lecturerForm.get('name')?.value!,
      surname: this.lecturerForm.get('surname')?.value!
    }
    
    this.service.updateLecturer(newLecturer).subscribe(()=>{
      this.service.editedLecturer = undefined
      this.service.getLecturers().subscribe(()=>{
        window.location.reload();
      });
    })
}

onCancelOperation() {
  this.service.editedLecturer = undefined
}

onSubmit() {
    if (this.service.editOrCreate == true) {
      this.onCreateLecturer()
    }
    else {
      this.onUpdateLecturer()
    }
}
}