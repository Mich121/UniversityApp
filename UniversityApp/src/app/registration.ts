export interface IRegistrationBase
{
    email : string,
    password : string,
    confirmPassword : string,
    roleId : number
}

export interface IRegistration extends IRegistrationBase
{
    id : number
}