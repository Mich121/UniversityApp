import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IDepartment, IDepartmentBase } from "src/app/department";


@Injectable()
export class DepartmentService
{
    public editedDepartment:IDepartment|undefined
    public editOrCreate : boolean
    readonly rooutUrl = 'https://localhost:7194/api/Department/'
    constructor(private http : HttpClient) {}
    
    getDepartments() : Observable<IDepartment[]> {
      return this.http.get<IDepartment[]>(this.rooutUrl)
    }

    getDepartment(id : number) : Observable<IDepartment> {
        return this.http.get<IDepartment>(this.rooutUrl + id)
    }

    deleteDepartment(id : number) {
        return this.http.delete(this.rooutUrl + id)
    }

    updateDepartment(department : IDepartment) {
        return this.http.put(this.rooutUrl, department)
    }

    createDepartment(department : IDepartmentBase) {
        return this.http.post(this.rooutUrl, department)
    }
}