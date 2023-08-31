import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IStudent, IStudentBase } from "../../student";
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class StudentService
{
    public editedStudent:IStudent|undefined
    public editOrCreate : boolean
    readonly rooutUrl = 'https://localhost:7194/api/Student/'

    readonly httpOptions : Object = {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        responseType: 'text'
    };
    
    constructor(private http : HttpClient) {}
    
    getStudents() : Observable<IStudent[]> {
        return this.http.get<IStudent[]>(this.rooutUrl)
    }

    getStudent(id : number) : Observable<IStudent> {
        return this.http.get<IStudent>(this.rooutUrl + id)
    }

    deleteStudent(id : number) {
        return this.http.delete(this.rooutUrl + id)
    }

    updateStudent(student : IStudent) {
        return this.http.put(this.rooutUrl, student)
    }

    createStudent(student : IStudentBase|any) {
        return this.http.post(this.rooutUrl, student)
    }

    selectStudent(student : IStudent) {
        return this.editedStudent={...student}
    }

    fakeStudent() {
        return this.http.get(this.rooutUrl + 'getFakePersonData', this.httpOptions)
    }
}