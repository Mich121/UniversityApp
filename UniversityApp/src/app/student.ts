import { IDepartmentBase } from "./department"

export interface IStudentBase
{
    name : string,
    surname : string,
    departmentId : number
}

export interface IStudent extends IStudentBase
{
    id : number
}