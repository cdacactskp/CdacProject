import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
   private isEmployeeLoggedIn;
   private username;
  constructor() { 
    this.isEmployeeLoggedIn=false;
  }
  setEmployeeLoggedIn(){
    this.isEmployeeLoggedIn=true;
  }
  getEmployeeloggedIn(){
    return this.isEmployeeLoggedIn;
  }
}
