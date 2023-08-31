export interface ILecturerBase
{
    name : string,
    surname : string
}

export interface ILecturer extends ILecturerBase
{
    id : number
}