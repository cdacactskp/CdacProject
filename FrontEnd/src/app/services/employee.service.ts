import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from 'app/models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private isEmployeeLoggedIn;
  private isAdminLoggedIn;
  public login = new BehaviorSubject(false);

  constructor(private _http: HttpClient) {
    this.isEmployeeLoggedIn = false;
    this.isAdminLoggedIn = false; 
  }
  
  uri = 'http://localhost:3000';

  Getlogin(x: String, y: String) {
    let urilink = "/login";
    return this._http.post<Employee>(this.uri + urilink, { "userId": x, "password": y });
  }
}
