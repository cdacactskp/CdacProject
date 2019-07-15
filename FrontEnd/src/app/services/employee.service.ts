import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  private isEmployeeLoggedIn;
  private isAdminLoggedIn;
  private username;
  public login = new BehaviorSubject(false);

  constructor() {
    this.isEmployeeLoggedIn = false;
    this.isAdminLoggedIn = false;
  }

  public setEmployeeLoggedIn() {
    this.isEmployeeLoggedIn = true;
    this.login.next(true);
    console.log("emp loged in");
  }

  public getEmployeeloggedIn() {
    return this.isEmployeeLoggedIn;
  }

  public getAdminLoggedIn() {
    return this.isAdminLoggedIn;
  }

  public setAdminLoggedIn() {
    console.log("admin logged in");
    this.isAdminLoggedIn = true;
    this.login.next(true);
  }
}
