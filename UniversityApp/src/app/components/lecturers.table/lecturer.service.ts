import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ILecturer, ILecturerBase } from "src/app/lecturer";

@Injectable()
export class LecturerService
{
    public editedLecturer:ILecturer|undefined
    public editOrCreate : boolean
    readonly rooutUrl = 'https://localhost:7194/api/Lecturer/'
    constructor(private http : HttpClient) {}
    
    getLecturers() : Observable<ILecturer[]> {
      return this.http.get<ILecturer[]>(this.rooutUrl)
    }

    getLecturer(id : number) : Observable<ILecturer> {
        return this.http.get<ILecturer>(this.rooutUrl + id)
    }

    deleteLecturer(id : number) {
        return this.http.delete(this.rooutUrl + id)
    }

    updateLecturer(Lecturer : ILecturer) {
        return this.http.put(this.rooutUrl, Lecturer)
    }

    createLecturer(Lecturer : ILecturerBase) {
        return this.http.post(this.rooutUrl, Lecturer)
    }
}