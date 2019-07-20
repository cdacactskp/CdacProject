export class Customer
{
    custId:Number;
    FName:string;
    LName:string;
    ContactNo:Number;
    Address:string;
    Status:string;
    Email:string;
    
    constructor( id:Number,FName:string,  LName:string, ContactNo:Number, Address:string, Status:string, Email:string )
    {
        this.custId=id;
        this.FName=FName;
        this.LName=LName;
        this.ContactNo=ContactNo;
        this.Address=Address;
        this.Status=Status;
        this.Email=Email;
    }
}