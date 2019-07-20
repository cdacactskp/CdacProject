export class Car {
    carId:Number;
    Model:string;
    color:string;
    year:Number;
    rate:Number;
    Manufacturer:string;
    type:string;
    sale:string;
    custId:Number;
    

    constructor ( id:Number, mod:string,color:string, yr:Number, rte:Number, manfac: string, type:string, sale:string, cust:Number )
    {
        this.carId=id;
        this.Model=mod;
        this.color=color;
        this.year=yr;
        this.rate=rte;
        this.Manufacturer=manfac;
        this.type=type;
        this.sale=sale;
        this.custId=cust
    }
}