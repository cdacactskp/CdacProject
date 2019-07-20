import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'app/models/employee';
import { Customer } from 'app/models/customer';
import { Car } from 'app/models/car';


@Injectable({
providedIn: 'root'
})
export class ConnectService {
constructor(private _http: HttpClient) { }
uri = 'http://localhost:3000';

Getlogin(x:String,y:String)
{

let urilink="/login";
return this._http.post<Employee>(this.uri+urilink,{"userId":x,"password":y});
}

Getemployee()
{
let urilink="/employee";
return this._http.get<Employee[]>(this.uri+urilink);
}

Getcust() {
let urilink="/customer";
return this._http.get<Customer[]>(this.uri+urilink);
}
Getcar()
{
let urilink="/car";
return this._http.get<Car[]>(this.uri+urilink);
}
Gettrans() {
let urilink="/transact";
return this._http.get(this.uri+urilink);
}

}
