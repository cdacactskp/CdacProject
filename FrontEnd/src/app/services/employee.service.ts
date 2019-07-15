import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private isEmployeeLoggedIn;
  private isAdminLoggedIn;
  private username;

  constructor() {
    this.isEmployeeLoggedIn = false;
    this.isAdminLoggedIn = false;
  }

  public setEmployeeLoggedIn() {
    this.isEmployeeLoggedIn = true;
  }

  public getEmployeeloggedIn() {
    return this.isEmployeeLoggedIn;
  }

  public getAdminLoggedIn() {
    return this.isAdminLoggedIn;
  }

  public setAdminLoggedIn() {
    this.isAdminLoggedIn = true;
  }
}
