export class Car {
    carId:Number;
    Model:string;
    color:string;
    Year:Number;
    Rate:Number;
    Manufacture:string;
    Type:string;
    Sale:string;
    

    constructor ( id:Number, mod:string,color:string, yr:Number, rte:Number, manfac: string, type:string, sale:string )
    {
        this.carId=id;
        this.Model=mod;
        this.color=color;
        this.Year=yr;
        this.Rate=rte;
        this.Manufacture=manfac;
        this.Type=type;
        this.Sale=sale;
    }
}