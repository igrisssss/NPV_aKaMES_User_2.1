export interface User{
    employeeID?:number;
    userName?:string;
    displayName?: string;
    status?: boolean;
    department?: string;
    jobTitle?: string;
    password?: string;
    email?: string;
    phoneNumber?: string;
    workingTime?: Date;
    userRole?: string;
}