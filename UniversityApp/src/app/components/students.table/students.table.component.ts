import { Component } from '@angular/core';
import { IStudent, IStudentBase } from 'src/app/student';
import { StudentService } from 'src/app/components/students.table/student.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-students.table',
  templateUrl: './students.table.component.html',
  styleUrls: ['./students.table.component.css'],
})

export class StudentsTableComponent implements OnInit {
  title = 'UniversityApp';
  students : IStudent[];
  allStudents : IStudent[];
  uploadedFiles: any[] = [];
  fileBuffer: string | null
  fileLines:string[] = [];
  file: File;
  reader: FileReader;
  jsonData: any;
  searchedStudents: IStudent | undefined;

  constructor(public studentService: StudentService) {
    this.reader = new FileReader();
    this.reader.onload = () => {
      this.fileBuffer = <string>this.reader.result;
      this.onFileCreateStudents();
    };
  };

  ngOnInit(): void {
    this.onGetStudent();
    this.studentService.getStudents().subscribe((data: any[])=>{
      this.allStudents = data;
    })
  }

  onGetStudent() {
    this.studentService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }

  onDeleteStudent(id : number) {
    this.studentService.deleteStudent(id).subscribe(()=>{
      this.onGetStudent()
    });
  }

  onUpdateStudent(st : IStudent) {
    this.studentService.editOrCreate = false
    this.studentService.editedStudent=st
  }

  onCreateStudent() {
    this.studentService.editOrCreate = true
    this.studentService.editedStudent = {id:0, name:"", surname:"", departmentId:0}
  }

  onFakeCreateStudent() {
    this.studentService.fakeStudent().subscribe((student)=>{
      this.studentService.createStudent(student)
      window.location.reload();
    })
  }

  onFileCreateStudents() {
    if (this.fileBuffer != null) {
      this.jsonData = JSON.parse(this.fileBuffer);
      const students: IStudentBase[] = this.jsonData['people']
      const keys: string[] = Object.keys(students);
      keys.forEach(key => {
        let newStudent = students[key as keyof typeof students]
        this.studentService.createStudent(newStudent).subscribe(()=>{})
      });
      this.studentService.getStudents().subscribe(()=>{
        window.location.reload();
      });
    }
  }

  uploadFile(fileEvent: File[]) {
    for(let file of fileEvent) {
      this.uploadedFiles.push(file);
    }
    this.readFile(this.uploadedFiles[0]);
  }

  readFile(file: File) {
    this.reader.readAsText(file);
  }

  onSearchedStudents() {
    var inputValue = (<HTMLInputElement>document.getElementById("searchStudents")).value;
    var searched = this.students?.filter(student => 
      Object.keys(student).some(name => student.name != null && 
        student.name.toString().toLowerCase().includes(inputValue.toLowerCase())));

    if (inputValue != '') {
      this.students = searched
    }
    else {
      this.students = this.allStudents
    }
    this.studentService.getStudents()
  }

  test() {}
}