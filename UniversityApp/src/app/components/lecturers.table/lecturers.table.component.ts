import { Component } from '@angular/core';
import { LecturerService } from './lecturer.service';
import { OnInit } from '@angular/core';
import { ILecturer } from 'src/app/lecturer';

@Component({
  selector: 'app-lecturers.table',
  templateUrl: './lecturers.table.component.html',
  styleUrls: ['./lecturers.table.component.css']
})

export class LecturersTableComponent implements OnInit {
  title = 'UniversityApp';
  lecturers : ILecturer[] = [];

  constructor(public lecturerService: LecturerService) {}

  ngOnInit(): void {
    this.onGetLecturer();
  }

  onGetLecturer() {
    this.lecturerService.getLecturers().subscribe((data: any[]) => {
      this.lecturers = data;
    });
  }

  onDeleteLecturer(id : number) {
    this.lecturerService.deleteLecturer(id).subscribe(()=>{
      this.onGetLecturer()
    });
  }

  onUpdateLecturer(lec : ILecturer) {
    console.log("false")
    this.lecturerService.editOrCreate = false
    this.lecturerService.editedLecturer=lec
  }

  onCreateLecturer() {
    console.log("true")
    this.lecturerService.editOrCreate = true
    this.lecturerService.editedLecturer={id: 0, name: '', surname: ''}
  }

  test() {}
}
