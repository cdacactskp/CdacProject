    export class Employee
{
    empId:Number;
    Name:string;
    Designation:string;
    ContactNo:Number;
    Address:string;
    Email:string;
    Salary:Number;
    Age:Number;
    Qualification:String;

    constructor ( empId:Number, Name:string, Designation:string, ContactNo:Number, Address:string, Email:string, Salary:Number, Age:Number, qualification: string )
    {
        this.empId=empId;
        this.Name=Name;
        this.Designation=Designation;
        this.ContactNo=ContactNo;
        this.Address=Address;
        this.Salary=Salary;
        this.Email=Email;
        this.Age=Age;
        this.Qualification=qualification;
    }
    
}
