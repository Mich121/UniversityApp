export interface ILoginBase
{
    email : string,
    password : string
}

export interface ILogin extends ILoginBase
{
    id : number
}